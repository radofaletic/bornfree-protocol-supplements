/**
 * @file The main BF Protocol app.
 * @copyright Rado Faletič 2022
 * @author Rado Faletič
 */

const maxStartDay = 10;
const fastingDays = 3;
let totalNumberOfDays = 90;
let supplementMasterList = { };

window.onload = () => {
	document.getElementById('nDaysDefault').textContent = totalNumberOfDays;
	if (localStorage.getItem('totalNumberOfDays')) {
		const newDays = parseInt(localStorage.getItem('totalNumberOfDays'));
		if (newDays >= 10) {
			totalNumberOfDays = newDays;
		}
	}
	document.getElementById('nDaysRequired').value = totalNumberOfDays;
	
	supplementMasterList = createSupplementMasterList(supplements);
	drawSupplementsIntro(['supplementsRequiredIntro', 'supplementsOptionalIntro'], supplementMasterList);
	drawShoppingList('shoppingList', supplementMasterList);
	drawScheduleHeader();
	drawSchedule('schedule', supplementMasterList);
	
	
	//const pre = document.getElementById('testJSON');
	//pre.innerText = JSON.stringify(supplementMasterList, null, '\t');
	//pre.innerText = JSON.stringify(localStorage, null, '\t');
};

/**
 * Simulates a mouse click on the element with the given hash.
 *
 * @param {string} hash Hash representing the element to click on.
 */
function clickOnHeading(hash) {
	const mouseClick = new MouseEvent('click', {
		view: window,
		bubbles: true,
		cancelable: true
	});
	const elementToClick = document.getElementById(hash.substring(1) + 'Button');
	elementToClick.dispatchEvent(mouseClick);
	return;
}

/**
 * Recalculates all quantities with a new given number of days.
 *
 * @param {number} newDays Number of new days.
 */
function recalculateDays(newDays) {
	if (10 <= newDays) {
		totalNumberOfDays = newDays;
		localStorage.setItem('totalNumberOfDays', totalNumberOfDays);
		drawShoppingList('shoppingList', supplementMasterList);
		drawSchedule('schedule', supplementMasterList);
	}
	return;
}

/**
 * Redraws the schedule on a new window ready for printing.
 *
 * @param {string} id The identifier of the element to be redrawn.
 */
function printSchedule(id) {
	const printPreview = window.open('about:blank', 'print_preview');
	const printDocument = printPreview.document;
	
	printPreview.document.open();
	printPreview.document.write('<!doctype html>' +
		'<html lang="en">' +
		'<head>' +
		'<meta charset="utf-8">' +
		'<meta name="viewport" content="width=device-width, initial-scale=1">' +
		'<title>BornFree Protocol</title>' +
		'<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">' +
		'<style>' +
		'@page { size: landscape; }' +
		'</style>' +
		'</head>' +
		'<body class="container-fluid">' +
		document.getElementById(id).innerHTML +
		'</body>' +
		'</html>');
	printPreview.document.close();
	printPreview.focus();
	printPreview.print();
	return;
}

/**
 * Creates a structured (object) list from a master array of supplements.
 *
 * @param {Array} inputItems The original unordered list of supplements.
 * @return {Object} The list of supplements as a structured and ordered list.
 */
function createSupplementMasterList(inputItems) {
	let unsortedInputItems = { };
	inputItems.forEach(item => {
		const timeOfDay = (!item.timeOfDay ? 'AA' : item.timeOfDay);
		const key = String(item.startDay).padStart(2, '0') + '_' + timeOfDay + '_' + (item.required ? '0' : '1') + '_' + String(item.order).padStart(2, '0') + '_' + item.name.replace(/\W/g, '');
		item.key = key;
		unsortedInputItems[key] = item;
	});
	const sortedInputItems = Object.keys(unsortedInputItems).sort().reduce(
			(obj, key) => { 
				obj[key] = unsortedInputItems[key]; 
					return obj;
				}, 
			{}
		);
	let items = [];
	Object.keys(sortedInputItems).forEach(key => {
		items.push(sortedInputItems[key]);
	});
	delete sortedInputItems;
	delete unsortedInputItems;
	
	let startDays = [];
	items.forEach(item => {
		if (!startDays.includes(item.startDay)) {
			startDays.push(item.startDay);
		}
	});
	
	let supplementMasterList = { };
	startDays.forEach(startDay => {
		supplementMasterList[startDay] = { 'required': [], 'optional': [] };
		items.forEach(item => {
			if (item.startDay == startDay) {
				const requiredKey = item.required ? 'required' : 'optional';
				supplementMasterList[startDay][requiredKey].push(item);
			}
		});
	});
	delete items;
	
	return supplementMasterList;
}

/**
 * Draws tables of supplements at the beginning of the page.
 *
 * @param {Array} ids ids of the two table to draw required and optional supplements.
 * @param {Object} supplementMasterList The list of supplements as a structured and ordered list.
 */
function drawSupplementsIntro(ids, supplementMasterList) {
	Object.keys(supplementMasterList).forEach(startDay => {
		const supplementStartDayList = supplementMasterList[startDay];
		Object.keys(supplementStartDayList).forEach(required => {
			const supplements = supplementStartDayList[required];
			const id = (required == 'required') ? ids[0] : ids[1];
			supplements.forEach(supplement => {
				const id = (supplement.required) ? ids[0] : ids[1];
				const row = document.createElement('tr');
				
				const check = document.createElement('td');
				check.className = 'text-center align-middle';
				const checkBox = document.createElement('input');
				checkBox.className = 'form-check-input';
				checkBox.setAttribute('type', 'checkbox');
				checkBox.setAttribute('id', supplement.key);
				if (supplement.required) {
					checkBox.setAttribute('checked', '');
					checkBox.setAttribute('required', '');
					checkBox.setAttribute('disabled', '');
					localStorage.setItem(supplement.key, 'true');
				} else if (localStorage.getItem(supplement.key) == 'true') {
					checkBox.setAttribute('checked', '');
				}
				checkBox.onchange = function() {
					if (this.checked) {
						localStorage.setItem(supplement.key, 'true');
					} else {
						localStorage.setItem(supplement.key, 'false');
					}
					drawShoppingList('shoppingList', supplementMasterList);
					drawSchedule('schedule', supplementMasterList);
				};
				check.appendChild(checkBox);
				row.appendChild(check);
				
				const name = document.createElement('td');
				name.className = 'text-nowrap align-middle';
				name.textContent = supplement.name;
				row.appendChild(name);
				
				const amount = document.createElement('td');
				amount.className = 'text-nowrap align-middle';
				amount.innerHTML = supplement.dosage + supplement.dosageUnits + ' × ' + supplement.dosesPerDay + (!supplement.timeOfDay ? '' : ' (<span class="initialism">' + supplement.timeOfDay + '</span>)');
				row.appendChild(amount);
				
				const notes = document.createElement('td');
				notes.className = 'align-middle';
				notes.innerHTML = supplement.notes;
				row.appendChild(notes);
				
				const links = document.createElement('td');
				links.className = 'text-nowrap small align-middle';
				let first = true;
				supplement.purchaseOptions.forEach(option => {
					if (!first) {
						links.appendChild(document.createElement('br'));
					}
					const link = document.createElement('a');
					link.setAttribute('href', option.url);
					link.setAttribute('target', '_blank');
					link.setAttribute('rel', 'noopener noreferrer');
					link.textContent = option.supplier + (option.supplier != 'iHerb' ? ' (' + option.countryOfOrigin + ')' : '');
					links.appendChild(link);
					first = false;
				});
				row.appendChild(links);
				
				document.getElementById(id).appendChild(row);
			});
		})
	});
	return;
}

/**
 * Creates a structured (object) list from a master array of supplements.
 *
 * @param {string} id The original unordered list of supplements.
  * @param {Object} supplementMasterList The list of supplements as a structured and ordered list.
 */
function drawShoppingList(id, supplementMasterList) {
	const container = document.getElementById(id);
	container.innerHTML = '';
	Object.keys(supplementMasterList).forEach(startDay => {
		const supplementStartDayList = supplementMasterList[startDay];
		Object.keys(supplementStartDayList).forEach(required => {
			const supplements = supplementStartDayList[required];
			supplements.forEach(supplement => {
				if (localStorage.getItem(supplement.key) == 'true') {
					const row = document.createElement('tr');
					
					const name = document.createElement('td');
					name.className = 'text-nowrap align-middle';
					name.textContent = supplement.name;
					row.appendChild(name);
					
					const links = document.createElement('td');
					links.className = 'text-nowrap small align-middle';
					let n = 0;
					supplement.purchaseOptions.forEach(option => {
						if (n) {
							links.appendChild(document.createTextNode(' | '));
						}
						//links.appendChild(document.createTextNode(option.quantity + '× '));
						let quantity = 1;
						if (option.quantity) {
							quantity = option.quantity;
						} else {
							// first, how many doses do we need of this product do we need for one dose
							let doses = 1;
							if (supplement.dosage < option.amountPerDose) {
								doses = 1;
							} else {
								doses = Math.ceil(supplement.dosage / option.amountPerDose);
							}
							doses *= supplement.dosesPerDay;
							if (supplement.startDay == 90) {
								doses *= fastingDays;
							} else {
								doses *= totalNumberOfDays - supplement.startDay;
							}
							quantity = (doses <= option.numberOfDoses) ? 1 : Math.ceil(doses / option.numberOfDoses);
						}
						links.appendChild(document.createTextNode(quantity + '× '));
						const link = document.createElement('a');
						link.setAttribute('href', option.url);
						link.setAttribute('target', '_blank');
						link.setAttribute('rel', 'noopener noreferrer');
						link.textContent = option.supplier + (option.supplier != 'iHerb' ? ' (' + option.countryOfOrigin + ')' : '');
						links.appendChild(link);
						n++;
					});
					row.appendChild(links);
					
					container.appendChild(row);
				}
			});
		})
	});
	return;
}

/**
 * Draw the supplement schedule header.
 */
function drawScheduleHeader() {
	
	const scheduleHeader1 = document.getElementById('scheduleHeader1');
	const headerDayLabel = document.createElement('th');
	headerDayLabel.setAttribute('colspan', (3 * maxStartDay) + 1);
	headerDayLabel.className = ' align-middle text-center';
	headerDayLabel.style.borderLeftColor = 'black';
	headerDayLabel.style.borderRightColor = 'black';
	headerDayLabel.textContent = 'day';
	scheduleHeader1.appendChild(headerDayLabel);
	const headerFastingLabel = document.createElement('th');
	headerFastingLabel.setAttribute('colspan', 3 * fastingDays);
	headerFastingLabel.className = 'align-middle text-center';
	headerFastingLabel.style.borderLeftColor = 'black';
	headerFastingLabel.style.borderRightColor = 'black';
	headerFastingLabel.textContent = 'fasting';
	scheduleHeader1.appendChild(headerFastingLabel);
	
	const scheduleHeader2 = document.getElementById('scheduleHeader2');
	for (let i=1; i<=maxStartDay; i++) {
		const th = document.createElement('th');
		th.setAttribute('colspan', 3);
		th.className = 'align-middle text-center';
		th.style.borderLeftColor = 'black';
		th.style.borderRightColor = 'black';
		th.textContent = i + ((i == maxStartDay) ? '+' : '');
		scheduleHeader2.appendChild(th);
		const col = document.createElement('col');
		col.setAttribute('span', 3);
		document.getElementById('scheduleColumns').appendChild(col);
	}
	const thHellips = document.createElement('th');
	thHellips.className = 'align-middle text-center ps-3 pe-3';
	thHellips.setAttribute('rowspan', 3);
	thHellips.style.borderLeftColor = 'black';
	thHellips.style.borderRightColor = 'black';
	thHellips.textContent = ' … ';
	scheduleHeader2.appendChild(thHellips);
	const col = document.createElement('col');
	col.setAttribute('span', 1);
	document.getElementById('scheduleColumns').appendChild(col);
	for (let i=1; i<=fastingDays; i++) {
		const th = document.createElement('th');
		th.setAttribute('colspan', 3);
		th.className = 'align-middle text-center';
		th.style.borderLeftColor = 'black';
		th.style.borderRightColor = 'black';
		th.textContent = i;
		scheduleHeader2.appendChild(th);
		const col = document.createElement('col');
		col.setAttribute('span', 3);
		document.getElementById('scheduleColumns').appendChild(col);
	}
	const scheduleHeader3 = document.getElementById('scheduleHeader3');
	for (let i=0; i<3*maxStartDay; i++) {
		const th = document.createElement('th');
		th.className = 'align-middle text-center small initialism';
		switch (i%3) {
			case 0:
				th.style.borderLeftColor = 'black';
				th.textContent = 'AM';
				break;
			case 1:
				th.textContent = 'M';
				break;
			case 2:
				th.style.borderRightColor = 'black';
				th.textContent = 'PM';
				break;
		}
		scheduleHeader3.appendChild(th);
	}
	for (let i=0; i<3*fastingDays; i++) {
		const th = document.createElement('th');
		th.className = 'align-middle text-center small initialism';
		switch (i%3) {
			case 0:
				th.style.borderLeftColor = 'black';
				th.textContent = 'AM';
				break;
			case 1:
				th.textContent = 'M';
				break;
			case 2:
				th.style.borderRightColor = 'black';
				th.textContent = 'PM';
				break;
		}
		scheduleHeader3.appendChild(th);
	}
	return;
}

/**
 * Draw the supplement schedule based on the selections.
 *
 * @param {string} id The element where we wish to draw the rows.
 * @param {Object} supplementMasterList The list of supplements as a structured and ordered list.
 */
function drawSchedule(id, supplementMasterList) {
	const container = document.getElementById(id);
	container.innerHTML = '';
	Object.keys(supplementMasterList).forEach(startDay => {
		const supplementStartDayList = supplementMasterList[startDay];
		Object.keys(supplementStartDayList).forEach(required => {
			const supplements = supplementStartDayList[required];
			supplements.forEach(supplement => {
				if (localStorage.getItem(supplement.key) == 'true') {
					const row = document.createElement('tr');
					
					const name = document.createElement('td');
					name.style.borderRightColor = 'black';
					name.textContent = supplement.name;
					row.appendChild(name);
					if (supplement.startDay == 90) {
						const filler = document.createElement('td');
						filler.setAttribute('colspan', 3 * maxStartDay + 1);
						filler.style.borderLeftColor = 'black';
						filler.style.borderRightColor = 'black';
						row.appendChild(filler);
						for (let i=0; i<fastingDays; i++) {
							if (!(supplement.dosesPerDay%3)) {
								const am = document.createElement('td');
								am.className = 'align-middle text-center';
								am.style.borderLeftColor = 'black';
								am.textContent = (supplement.dosesPerDay / 3) + '×';
								row.appendChild(am);
								const m = document.createElement('td');
								m.className = 'align-middle text-center';
								m.textContent = (supplement.dosesPerDay / 3) + '×';
								row.appendChild(m);
								const pm = document.createElement('td');
								pm.className = 'align-middle text-center';
								pm.style.borderRightColor = 'black';
								pm.textContent = (supplement.dosesPerDay / 3) + '×';
								row.appendChild(pm);
							} else if (!(supplement.dosesPerDay%2)) {
								const am = document.createElement('td');
								am.className = 'align-middle text-center';
								am.style.borderLeftColor = 'black';
								am.textContent = (supplement.dosesPerDay / 2) + '×';
								row.appendChild(am);
								const m = document.createElement('td');
								row.appendChild(m);
								const pm = document.createElement('td');
								pm.className = 'align-middle text-center';
								pm.style.borderRightColor = 'black';
								pm.textContent = (supplement.dosesPerDay / 2) + '×';
								row.appendChild(pm);
							} else {
								const am = document.createElement('td');
								am.className = 'align-middle text-center';
								am.style.borderLeftColor = 'black';
								am.textContent = supplement.dosesPerDay + '×';
								row.appendChild(am);
								const m = document.createElement('td');
								m.setAttribute('colspan', 2);
								m.style.borderRightColor = 'black';
								row.appendChild(m);
							}
						}
					} else {
						if (supplement.startDay > 1) {
							const filler = document.createElement('td');
							filler.setAttribute('colspan', 3 * (supplement.startDay - 1));
							filler.style.borderLeftColor = 'black';
							filler.style.borderRightColor = 'black';
							row.appendChild(filler);
						}
						for (let i=0; i<(maxStartDay - supplement.startDay + 1); i++) {
							if (supplement.timeOfDay) {
								const am = document.createElement('td');
								am.className = 'align-middle text-center';
								am.style.borderLeftColor = 'black';
								if (supplement.timeOfDay == 'AM') {
									am.textContent = supplement.dosesPerDay + '×';
								}
								row.appendChild(am);
								const m = document.createElement('td');
								row.appendChild(m);
								const pm = document.createElement('td');
								pm.className = 'align-middle text-center';
								pm.style.borderRightColor = 'black';
								if (supplement.timeOfDay == 'PM') {
									pm.textContent = supplement.dosesPerDay + '×';
								}
								row.appendChild(pm);
							} else {
								if (!(supplement.dosesPerDay%3)) {
									const am = document.createElement('td');
									am.className = 'align-middle text-center';
									am.style.borderLeftColor = 'black';
									am.textContent = (supplement.dosesPerDay / 3) + '×';
									row.appendChild(am);
									const m = document.createElement('td');
									m.className = 'align-middle text-center';
									m.textContent = (supplement.dosesPerDay / 3) + '×';
									row.appendChild(m);
									const pm = document.createElement('td');
									pm.className = 'align-middle text-center';
									pm.style.borderRightColor = 'black';
									pm.textContent = (supplement.dosesPerDay / 3) + '×';
									row.appendChild(pm);
								} else if (!(supplement.dosesPerDay%2)) {
									const am = document.createElement('td');
									am.className = 'align-middle text-center';
									am.style.borderLeftColor = 'black';
									am.textContent = (supplement.dosesPerDay / 2) + '×';
									row.appendChild(am);
									const m = document.createElement('td');
									row.appendChild(m);
									const pm = document.createElement('td');
									pm.className = 'align-middle text-center';
									pm.style.borderRightColor = 'black';
									pm.textContent = (supplement.dosesPerDay / 2) + '×';
									row.appendChild(pm);
								} else {
									const am = document.createElement('td');
									am.className = 'align-middle text-center';
									am.style.borderLeftColor = 'black';
									am.textContent = supplement.dosesPerDay + '×';
									row.appendChild(am);
									const m = document.createElement('td');
									m.style.borderRightColor = 'black';
									m.setAttribute('colspan', 2);
									row.appendChild(m);
								}
							}
						}
						const thHellips = document.createElement('td');
						thHellips.className = 'align-middle text-center';
						thHellips.style.borderLeftColor = 'black';
						thHellips.style.borderRightColor = 'black';
						thHellips.textContent = ' … ';
						row.appendChild(thHellips);
						const filler = document.createElement('td');
						filler.setAttribute('colspan', 3 * fastingDays);
						filler.style.borderRightColor = 'black';
						row.appendChild(filler);
					}
					
					container.appendChild(row);
				}
			});
		})
	});
	
	return;
}
