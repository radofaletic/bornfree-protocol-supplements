const supplements = [
	{
		"name": "Liposomal Riboflavin",
		"startDay": 1,
		"order": 1,
		"dosage": 100,
		"dosageUnits": "mg",
		"dosesPerDay": 4,
		"required": true,
		"timeOfDay": false,
		"notes": "Either 4× large scoops once per day, or 2× large scoops twice per day.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "Solace Nutrition",
				"url": "https://www.solacenutrition.com/product/cyto-b2/",
				"amountPerDose": 100,
				"numberOfDoses": 1000,
				"notes": "This is a unique product — <em>do not substitute</em>. The international shipping price is unusually high, however if you buy 2× a cheaper shipping option appears and the total order price doesn’t change."
			}
		]
	},
	{
		"name": "N-Acetyl L-Cysteine (NAC)",
		"startDay": 7,
		"order": 2,
		"dosage": 500,
		"dosageUnits": "mg",
		"dosesPerDay": 3,
		"required": true,
		"timeOfDay": false,
		"notes": "For the first three weeks take 1,000mg 3× per day, then reduce to 500mg 1× per day.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "Nootropics Depot",
				"url": "https://nootropicsdepot.com/n-acetyl-l-cysteine-500mg-capsules/",
				"amountPerDose": 500,
				"numberOfDoses": 180,
				"notes": "This product is offered in different quantities. You will need a total of 188× 500mg capsules for 83 days."
			}
		]
	},
	{
		"name": "PQQ + CoQ10",
		"startDay": 1,
		"order": 2,
		"dosage": 220,
		"dosageUnits": "mg",
		"dosesPerDay": 3,
		"required": true,
		"timeOfDay": false,
		"notes": "1–3 per day.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/natural-factors-pqq-10-pqq-20-mg-coq10-200-mg-60-softgels/105660",
				"amountPerDose": 220,
				"numberOfDoses": 60,
				"notes": "This product is offered in different quantities. You will need a total of 270× capsules for 90 days if taking 3× per day."
			},
			{
				"country": "DE",
				"countryOfOrigin": "DE",
				"supplier": "Sunday Natural",
				"url": "https://www.sunday.de/en/polyphenol-21-komplex.html",
				"amountPerDose": 80,
				"numberOfDoses": 120,
				"notes": ""
			}
		]
	},
	{
		"name": "Basic B Complex",
		"startDay": 4,
		"order": 2,
		"dosage": 410,
		"dosageUnits": "mg",
		"dosesPerDay": 3,
		"required": true,
		"timeOfDay": false,
		"notes": "Can expect to reduce dosage over time as key minerals are restored. Excess can cause peripheral neuropathy.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/thorne-research-basic-b-complex-60-capsules/18791",
				"amountPerDose": 410,
				"numberOfDoses": 60,
				"notes": "Do not substitute. This B complex product has been carefully selected to contain sufficient amounts of the required forms of each coenzyme, minus inappropriate amounts of pyridoxine, yet adequate P5P. You will need a total of 258× capsules for 86 days if taking 3× per day."
			}
		]
	},
	{
		"name": "Folinic Acid",
		"startDay": 4,
		"order": 2,
		"dosage": 800,
		"dosageUnits": "µg",
		"dosesPerDay": 1,
		"required": true,
		"timeOfDay": false,
		"notes": "Not <em>folic acid</em>.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/source-naturals-megafolinic-800-mcg-120-tablets/7735",
				"amountPerDose": 800,
				"numberOfDoses": 120,
				"notes": ""
			}
		]
	},
	{
		"name": "Vitamin D3",
		"startDay": 1,
		"order": 2,
		"dosage": 5000,
		"dosageUnits": "IU",
		"dosesPerDay": 1,
		"required": true,
		"timeOfDay": false,
		"notes": "5000–8000IU per day.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/now-foods-vitamin-d-3-125-mcg-5-000-iu-240-softgels/22335",
				"amountPerDose": 5000,
				"numberOfDoses": 240,
				"notes": ""
			}
		]
	},
	{
		"name": "Vitamin A",
		"startDay": 1,
		"order": 2,
		"dosage": 3,
		"dosageUnits": "mg",
		"dosesPerDay": 1,
		"required": true,
		"timeOfDay": false,
		"notes": "",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/21st-century-vitamin-a-3-000-mcg-10-000-iu-110-softgels/43717",
				"amountPerDose": 3,
				"numberOfDoses": 110,
				"notes": ""
			}
		]
	},
	{
		"name": "DHA",
		"startDay": 1,
		"order": 2,
		"dosage": 300,
		"dosageUnits": "mg",
		"dosesPerDay": 1,
		"required": true,
		"timeOfDay": false,
		"notes": "300–500 mg per day.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/source-naturals-vegan-omega-3s-non-fish-epa-dha-300-mg-60-vegan-softgels/46882",
				"amountPerDose": 300,
				"numberOfDoses": 60,
				"notes": "This product is offered in different quantities. You will need a total of 90× capsules for 90 days."
			}
		]
	},
	{
		"name": "Fulvic + Humic Acids",
		"startDay": 1,
		"order": 2,
		"dosage": 15,
		"dosageUnits": "ml",
		"dosesPerDay": 2,
		"required": true,
		"timeOfDay": false,
		"notes": "½ serving 2×, and increase as tolerated",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/morningstar-minerals-inner-vitality-fulvic-humic-minerals-32-oz-946-ml/61587",
				"amountPerDose": 15,
				"numberOfDoses": 64,
				"notes": ""
			},
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "Vitacost",
				"url": "https://www.vitacost.com/morningstar-minerals-inner-vitality-fulvic-humic-minerals-32-fl-oz",
				"amountPerDose": 15,
				"numberOfDoses": 64,
				"notes": ""
			}
		]
	},
	{
		"name": "Vitamin C",
		"startDay": 4,
		"order": 2,
		"dosage": 500,
		"dosageUnits": "mg",
		"dosesPerDay": 2,
		"required": true,
		"timeOfDay": false,
		"notes": "1–2 per day.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/california-gold-nutrition-gold-c-usp-grade-vitamin-c-500-mg-240-veggie-capsules/61866",
				"amountPerDose": 500,
				"numberOfDoses": 240,
				"notes": ""
			}
		]
	},
	{
		"name": "Epigallocatechin gallate (EGCG)",
		"startDay": 4,
		"order": 2,
		"dosage": 200,
		"dosageUnits": "mg",
		"dosesPerDay": 3,
		"required": true,
		"timeOfDay": false,
		"notes": "2–3 per day.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/now-foods-egcg-green-tea-extract-400-mg-180-veg-capsules/11598",
				"amountPerDose": 200,
				"numberOfDoses": 180,
				"notes": "This product is offered in different quantities. You will need a total of 258× capsules for 86 days."
			}
		]
	},
	{
		"name": "L-Alpha glycerylphosphorylcholine (A-GPC Choline)",
		"startDay": 4,
		"order": 2,
		"dosage": 250,
		"dosageUnits": "mg",
		"dosesPerDay": 2,
		"required": true,
		"timeOfDay": false,
		"notes": "",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/now-foods-alpha-gpc-300-mg-60-veg-capsules/12803",
				"amountPerDose": 300,
				"numberOfDoses": 60,
				"notes": ""
			}
		]
	},
	{
		"name": "Forskolin",
		"startDay": 7,
		"order": 2,
		"dosage": 10,
		"dosageUnits": "mg",
		"dosesPerDay": 2,
		"required": true,
		"timeOfDay": false,
		"notes": "",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/life-extension-forskolin-10-mg-60-vegetarian-capsules/49696",
				"amountPerDose": 10,
				"numberOfDoses": 60,
				"notes": ""
			}
		]
	},
	{
		"name": "Artichoke (Luteolin)",
		"startDay": 7,
		"order": 2,
		"dosage": 25,
		"dosageUnits": "mg",
		"dosesPerDay": 1,
		"required": true,
		"timeOfDay": false,
		"notes": "",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/jarrow-formulas-artichoke-180-veggie-caps/177",
				"amountPerDose": 25,
				"numberOfDoses": 180,
				"notes": ""
			}
		]
	},
	{
		"name": "R-lipoic acid (RLA)",
		"startDay": 7,
		"order": 2,
		"dosage": 200,
		"dosageUnits": "mg",
		"dosesPerDay": 3,
		"required": true,
		"timeOfDay": false,
		"notes": "150–200mg per dose.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/genceutic-naturals-r-lipoic-acid-300-mg-60-vegetarian-capsules/28415",
				"amountPerDose": 240,
				"numberOfDoses": 60,
				"notes": ""
			}
		]
	},
	{
		"name": "Thiamin tetrahydrofurfuryl disulfide (TTFD)",
		"startDay": 7,
		"order": 2,
		"dosage": 50,
		"dosageUnits": "mg",
		"dosesPerDay": 1,
		"required": true,
		"timeOfDay": false,
		"notes": "Increase dose from ⅒<sup>th</sup> capsule. Temporary neurological symptoms expected.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/ecological-formulas-allithiamine-vitamin-b1-50-mg-250-capsules/61109",
				"amountPerDose": 50,
				"numberOfDoses": 250,
				"notes": ""
			},
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "Amazon",
				"url": "https://www.amazon.com/dp/B001Y9WZ5O",
				"amountPerDose": 50,
				"numberOfDoses": 250,
				"notes": ""
			},
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "PureFormulas",
				"url": "https://www.pureformulas.com/allithiamine-fat-soluble-b1ttfd-50-mg-capsule-250-capsules-by-ecological-formulas.html",
				"amountPerDose": 50,
				"numberOfDoses": 250,
				"notes": ""
			}
		]
	},
	{
		"name": "Apple Cider Vinegar (ACV)",
		"startDay": 7,
		"order": 2,
		"dosage": 625,
		"dosageUnits": "mg",
		"dosesPerDay": 9,
		"required": true,
		"timeOfDay": false,
		"notes": "2–3 capsules 3× per day. May cause temporary gastrointestinal upset and histamine increase.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/swanson-apple-cider-vinegar-625-mg-180-capsules/109045",
				"amountPerDose": 625,
				"numberOfDoses": 180,
				"notes": ""
			},
			{
				"country": "AU",
				"countryOfOrigin": "AU",
				"supplier": "Swanson Australia",
				"url": "https://www.swansonaustralia.com/en/general-health/2141-swanson-ultra-high-potency-apple-cider-vinegar-626-mg-180-capsules.html",
				"amountPerDose": 626,
				"numberOfDoses": 180,
				"notes": ""
			}
		]
	},
	{
		"name": "Apigenin",
		"startDay": 10,
		"order": 3,
		"dosage": 50,
		"dosageUnits": "mg",
		"dosesPerDay": 1,
		"required": true,
		"timeOfDay": "AM",
		"notes": "This is a p38 MAPK inhibitor and NADase inhibitor. Start at ¼ dose and increase. Upper threshold for effective dose may be 400mg per day.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/codeage-liposomal-apigenin-non-gmo-vegan-90-capsules/114120",
				"amountPerDose": 50,
				"numberOfDoses": 90,
				"notes": ""
			}
		]
	},
	{
		"name": "Reishi",
		"startDay": 10,
		"order": 2,
		"dosage": 1130,
		"dosageUnits": "mg",
		"dosesPerDay": 2,
		"required": true,
		"timeOfDay": false,
		"notes": "A 1–3 day initial headache is possible when starting reishi.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/life-extension-reishi-extract-mushroom-complex-60-vegetarian-capsules/46279",
				"amountPerDose": 1130,
				"numberOfDoses": 60,
				"notes": "Do not substitute. A USP study found approximately 75% of reishi products are fake. This product passed our HPLC + LCMS mass spectrometer testing. Most did not. Further, different metabolites are extracted from different parts of the fungi, eg. fruiting body, spores and mycelium. Beta-glucans require hot water extracts, triterpenes require alcohol extracts. Note: this product does not ship to the EU — use an EU source."
			},
			{
				"country": "all",
				"countryOfOrigin": "EU",
				"supplier": "Life Extension Europe",
				"url": "https://www.lifeextensioneurope.com/reishi-extract-mushroom-complex",
				"amountPerDose": 1130,
				"numberOfDoses": 60,
				"notes": "Do not substitute. A USP study found approximately 75% of reishi products are fake. This product passed our HPLC + LCMS mass spectrometer testing. Most did not. Further, different metabolites are extracted from different parts of the fungi, eg. fruiting body, spores and mycelium. Beta-glucans require hot water extracts, triterpenes require alcohol extracts."
			}
		]
	},
	{
		"name": "Lion’s Mane",
		"startDay": 10,
		"order": 3,
		"dosage": 250,
		"dosageUnits": "mg",
		"dosesPerDay": 1,
		"required": true,
		"timeOfDay": "AM",
		"notes": "May increase histamine and insomnia, in which case lower the dose.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/swanson-full-spectrum-lion-s-mane-mushroom-500-mg-60-capsules/109018",
				"amountPerDose": 500,
				"numberOfDoses": 60,
				"notes": "Note: this product does not ship to Europe — use a European source."
			},
			{
				"country": "EU",
				"countryOfOrigin": "UK",
				"supplier": "Earth’s Nurture",
				"url": "https://www.earthsnurture.co.uk/products/lions-mane",
				"amountPerDose": 500,
				"numberOfDoses": 90,
				"notes": ""
			},
			{
				"country": "AU",
				"countryOfOrigin": "AU",
				"supplier": "Swanson Australia",
				"url": "https://www.swansonaustralia.com/en/general-health/95-swanson-premium-full-spectrum-lion-s-mane-mushroom-500mg-60-capsules-herbal-supplement.html",
				"amountPerDose": 500,
				"numberOfDoses": 60,
				"notes": ""
			}
		]
	},
	{
		"name": "Copper",
		"startDay": 1,
		"order": 13,
		"dosage": 10,
		"dosageUnits": "mg",
		"dosesPerDay": 1,
		"required": false,
		"timeOfDay": "AM",
		"notes": "Take 5–10mg. May cause temporary insomnia at first, in which case lithium may help.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/solgar-chelated-copper-100-tablets/41330",
				"amountPerDose": 2.5,
				"numberOfDoses": 100,
				"notes": ""
			},
			{
				"country": "EU",
				"countryOfOrigin": "DE",
				"supplier": "Sunday Natural",
				"url": "https://www.sunday.de/en/copper-complex-forte-3mg.html",
				"amountPerDose": 3,
				"numberOfDoses": 120,
				"notes": ""
			}
		]
	},
	{
		"name": "Manganese",
		"startDay": 1,
		"order": 13,
		"dosage": 20,
		"dosageUnits": "mg",
		"dosesPerDay": 1,
		"required": false,
		"timeOfDay": "AM",
		"notes": "Take 10–20mg. Very well-tolerated unless suffering from Lyme Disease.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/solgar-chelated-manganese-100-tablets/48554",
				"amountPerDose": 8,
				"numberOfDoses": 100,
				"notes": ""
			},
			{
				"country": "EU",
				"countryOfOrigin": "DE",
				"supplier": "Sunday Natural",
				"url": "https://www.sunday.de/en/manganese-gluconate-tablets-10mg.html",
				"amountPerDose": 10,
				"numberOfDoses": 240,
				"notes": ""
			},
			{
				"country": "AU",
				"countryOfOrigin": "AU",
				"supplier": "Return2Health",
				"url": "https://return2health.com.au/solgar-chelated-manganese",
				"amountPerDose": 8,
				"numberOfDoses": 100,
				"notes": ""
			}
		]
	},
	{
		"name": "Iron",
		"startDay": 10,
		"order": 10,
		"dosage": 25,
		"dosageUnits": "mg",
		"dosesPerDay": 4,
		"required": false,
		"timeOfDay": false,
		"notes": "Take 3–4× per day sublingual or liposomal dosing only. With “anaemia of inflammation”, iron absorption is blocked in the gastrointestinal tract. Sublingual or liposomal forms are needed. An IV iron infusion may be appropriate, where indicated by your healthcare professional. Any rapid ferritin increase can cause or accelerate hypophosphatemia. Care should be taken to consume optimal levels of phosphates, especially where already deficient. If an active bacterial infection is present, that should be resolved before starting iron supplementation.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/superior-source-just-women-iron-25-mg-90-microlingual-instant-dissolve-tablets/85919",
				"amountPerDose": 25,
				"numberOfDoses": 90,
				"notes": ""
			},
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "Orzax",
				"url": "https://orzax.com/products/liposomal-iron-vegetable-capsules",
				"amountPerDose": 25,
				"numberOfDoses": 90,
				"notes": ""
			},
			{
				"country": "EU",
				"countryOfOrigin": "UK",
				"supplier": "ActiNovo",
				"url": "https://www.actinovo.com/liposomal-iron-",
				"amountPerDose": 25,
				"numberOfDoses": 15,
				"notes": ""
			},
			{
				"country": "AU",
				"countryOfOrigin": "AU",
				"supplier": "Naturitas",
				"url": "https://www.naturitas.com.au/p/supplements/minerals-and-trace-elements/iron/liposomal-iron-60-ml-curesupport",
				"amountPerDose": 25,
				"numberOfDoses": 40,
				"notes": ""
			}
		]
	},
	{
		"name": "Calcium Phosphate",
		"startDay": 1,
		"order": 10,
		"dosage": 2,
		"dosageUnits": "g",
		"dosesPerDay": 1,
		"required": true,
		"timeOfDay": false,
		"notes": "Take 1.5–2g if you are deficient, and at least 750mg otherwise.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/veglife-red-marine-calcium-90-tablets/70153",
				"amountPerDose": 0.334,
				"numberOfDoses": 90,
				"notes": ""
			},
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "Amazon",
				"url": "https://www.amazon.com/Freeda-Kosher-Calcium-Phosphate-Powder/dp/B00GZRHVIQ",
				"amountPerDose": 2,
				"numberOfDoses": 50,
				"notes": ""
			},
			{
				"country": "EU",
				"countryOfOrigin": "DE",
				"supplier": "Sunday Natural",
				"url": "https://www.sunday.de/en/natural-calcium-400mg-high-dose-capsules-set.html",
				"amountPerDose": 0.4,
				"numberOfDoses": 120,
				"notes": ""
			},
			{
				"country": "AU",
				"countryOfOrigin": "AU",
				"supplier": "eBay",
				"url": "https://www.ebay.com.au/itm/163194754661",
				"quantity": 1,
				"notes": ""
			}
		]
	},
	{
		"name": "Magnesium",
		"startDay": 1,
		"order": 10,
		"dosage": 2,
		"dosageUnits": "g",
		"dosesPerDay": 1,
		"required": true,
		"timeOfDay": false,
		"notes": "Take 1.5–2g if you are deficient, and at least 750mg otherwise.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/nature-s-life-magnesium-malate-1-300-mg-250-tablets/105910",
				"amountPerDose": 0.2,
				"numberOfDoses": 250,
				"notes": ""
			},
			{
				"country": "all",
				"countryOfOrigin": "DE",
				"supplier": "Atmalife",
				"url": "https://atmalife.bio/produkt/magnesium-phosphate-for-leo/",
				"amountPerDose": 2,
				"numberOfDoses": 14,
				"notes": ""
			},
			{
				"country": "EU",
				"countryOfOrigin": "UK",
				"supplier": "ActiNovo",
				"url": "https://www.actinovo.com/liposomal-magnesium",
				"amountPerDose": 0.2,
				"numberOfDoses": 25,
				"notes": ""
			},
			{
				"country": "AU",
				"countryOfOrigin": "AU",
				"supplier": "Return2Health",
				"url": "https://return2health.com.au/seeking-health-magnesium-malate-powder-500-mg",
				"amountPerDose": 0.5,
				"numberOfDoses": 100,
				"notes": ""
			}
		]
	},
	{
		"name": "Lithium",
		"startDay": 1,
		"order": 13,
		"dosage": 2,
		"dosageUnits": "mg",
		"dosesPerDay": 1,
		"required": false,
		"timeOfDay": "AM",
		"notes": "Take with food.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/life-extension-lithium-1-000-mcg-100-vegetarian-capsules/100435",
				"amountPerDose": 1,
				"numberOfDoses": 100,
				"notes": ""
			}
		]
	},
	{
		"name": "Molybdenum",
		"startDay": 7,
		"order": 14,
		"dosage": 150,
		"dosageUnits": "µg",
		"dosesPerDay": 1,
		"required": false,
		"timeOfDay": "PM",
		"notes": "Take with food.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/solgar-chelated-molybdenum-100-tablets/14473",
				"amountPerDose": 150,
				"numberOfDoses": 100,
				"notes": ""
			},
			{
				"country": "DE",
				"countryOfOrigin": "DE",
				"supplier": "Sunday Natural",
				"url": "https://www.sunday.de/en/molybdenum-200-g-sodium-molybdate.html",
				"amountPerDose": 200,
				"numberOfDoses": 120,
				"notes": ""
			}
		]
	},
	{
		"name": "Selenium",
		"startDay": 1,
		"order": 13,
		"dosage": 800,
		"dosageUnits": "µg",
		"dosesPerDay": 1,
		"required": false,
		"timeOfDay": "AM",
		"notes": "Take 400–800µg with food.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/now-foods-selenium-100-mcg-250-tablets/813",
				"amountPerDose": 100,
				"numberOfDoses": 250,
				"notes": "This product is offered in different quantities. You will need a total of 720× 100µg capsules for 90 days."
			},
			{
				"country": "DE",
				"countryOfOrigin": "DE",
				"supplier": "Sunday Natural",
				"url": "https://www.sunday.de/en/sodium-selenite-100-g-capsules.html",
				"amountPerDose": 100,
				"numberOfDoses": 180,
				"notes": ""
			}
		]
	},
	{
		"name": "Vanadium",
		"startDay": 7,
		"order": 14,
		"dosage": 10,
		"dosageUnits": "mg",
		"dosesPerDay": 1,
		"required": false,
		"timeOfDay": "PM",
		"notes": "Take with food.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/source-naturals-vanadyl-sulfate-10-mg-100-tablets/1477",
				"amountPerDose": 10,
				"numberOfDoses": 100,
				"notes": ""
			}
		]
	},
	{
		"name": "Chromium",
		"startDay": 7,
		"order": 14,
		"dosage": 500,
		"dosageUnits": "µg",
		"dosesPerDay": 1,
		"required": false,
		"timeOfDay": "PM",
		"notes": "Take with food.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/solgar-chromium-picolinate-500-mcg-120-vegetable-capsules/8561",
				"amountPerDose": 500,
				"numberOfDoses": 120,
				"notes": ""
			},
			{
				"country": "DE",
				"countryOfOrigin": "DE",
				"supplier": "Sunday Natural",
				"url": "https://www.sunday.de/en/chromium-200-tablets-chromium-picolinate.html",
				"amountPerDose": 200,
				"numberOfDoses": 365,
				"notes": ""
			},
			{
				"country": "AU",
				"countryOfOrigin": "AU",
				"supplier": "Return2Health",
				"url": "https://return2health.com.au/clinicians-hi-dose-chromium-1000mcg",
				"amountPerDose": 1000,
				"numberOfDoses": 60,
				"notes": ""
			}
		]
	},
	{
		"name": "Zinc",
		"startDay": 7,
		"order": 14,
		"dosage": 50,
		"dosageUnits": "mg",
		"dosesPerDay": 1,
		"required": false,
		"timeOfDay": "PM",
		"notes": "Take with food.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/california-gold-nutrition-zinc-picolinate-50-mg-120-veggie-capsules/91976",
				"amountPerDose": 50,
				"numberOfDoses": 120,
				"notes": ""
			}
		]
	},
	{
		"name": "Iodine",
		"startDay": 1,
		"order": 13,
		"dosage": 300,
		"dosageUnits": "µg",
		"dosesPerDay": 1,
		"required": false,
		"timeOfDay": "AM",
		"notes": "Take with food.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/life-extension-sea-iodine-1-000-mcg-60-vegetarian-capsules/55644",
				"amountPerDose": 1000,
				"numberOfDoses": 60,
				"notes": ""
			},
			{
				"country": "DE",
				"countryOfOrigin": "DE",
				"supplier": "Sunday Natural",
				"url": "https://www.sunday.de/en/bio-iodine-capsules-250-g-high-dose-pregnancy-breastfeeding.html",
				"amountPerDose": 250,
				"numberOfDoses": 120,
				"notes": ""
			},
			{
				"country": "AU",
				"countryOfOrigin": "AU",
				"supplier": "Return2Health",
				"url": "https://return2health.com.au/solgar-kelp-iodine",
				"amountPerDose": 200,
				"numberOfDoses": 250,
				"notes": ""
			}
		]
	},
	{
		"name": "Strontium",
		"startDay": 1,
		"order": 13,
		"dosage": 500,
		"dosageUnits": "mg",
		"dosesPerDay": 1,
		"required": false,
		"timeOfDay": "AM",
		"notes": "Take with food.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/life-extension-strontium-caps-250-mg-90-vegetarian-capsules/29332",
				"amountPerDose": 250,
				"numberOfDoses": 90,
				"notes": ""
			}
		]
	},
	{
		"name": "Boron",
		"startDay": 7,
		"order": 14,
		"dosage": 3,
		"dosageUnits": "mg",
		"dosesPerDay": 1,
		"required": false,
		"timeOfDay": "PM",
		"notes": "Take with food.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/now-foods-boron-3-mg-250-veg-capsules/428",
				"amountPerDose": 3,
				"numberOfDoses": 250,
				"notes": ""
			},
			{
				"country": "DE",
				"countryOfOrigin": "DE",
				"supplier": "Sunday Natural",
				"url": "https://www.sunday.de/en/boron-tablets-3mg-sodium-borate.html",
				"amountPerDose": 3,
				"numberOfDoses": 365,
				"notes": ""
			}
		]
	},
	{
		"name": "Rubidium",
		"startDay": 1,
		"order": 13,
		"dosage": 100,
		"dosageUnits": "µg",
		"dosesPerDay": 1,
		"required": false,
		"timeOfDay": "AM",
		"notes": "Take with food.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "Amazon",
				"url": "https://www.amazon.com/Research-Rb-Zyme-Rubidium-Ultra-Trace-Glandular/dp/B07F3DBBBB",
				"amountPerDose": 100,
				"numberOfDoses": 100,
				"notes": ""
			}
		]
	},
	{
		"name": "Cobalt",
		"startDay": 7,
		"order": 14,
		"dosage": 2.5,
		"dosageUnits": "ml",
		"dosesPerDay": 1,
		"required": false,
		"timeOfDay": "PM",
		"notes": "Take with food. Introduce slowly if needed.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "CR Supplements",
				"url": "https://crsupplements.com/product/cobalt-dietary-supplement/",
				"amountPerDose": 5,
				"numberOfDoses": 96,
				"notes": "This product is offered in different quantities. International shipping is expensive."
			},
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "Amazon",
				"url": "https://www.amazon.com/dp/B0756YM6CF",
				"amountPerDose": 2.5,
				"numberOfDoses": 96,
				"notes": ""
			}
		]
	},
	{
		"name": "Germanium (Ge-132)",
		"startDay": 7,
		"order": 14,
		"dosage": 150,
		"dosageUnits": "mg",
		"dosesPerDay": 1,
		"required": false,
		"timeOfDay": "PM",
		"notes": "Take with food.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "NutriCology",
				"url": "https://www.nutricology.com/organo-germanium-50-vegetarian-capsules",
				"amountPerDose": 150,
				"numberOfDoses": 50,
				"notes": ""
			}
		]
	},
	{
		"name": "Liver",
		"startDay": 1,
		"order": 20,
		"dosage": 30,
		"dosageUnits": "gr",
		"dosesPerDay": 6,
		"required": false,
		"timeOfDay": false,
		"notes": "",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/universal-nutrition-classic-series-uni-liver-argentine-beef-liver-500-tablets/27279",
				"amountPerDose": 30,
				"numberOfDoses": 500,
				"notes": "This product is offered in different quantities. You will need at least 500× capsules for 90 days."
			}
		]
	},
	{
		"name": "Resveratrol",
		"startDay": 90,
		"order": 50,
		"dosage": 120,
		"dosageUnits": "mg",
		"dosesPerDay": 3,
		"required": false,
		"timeOfDay": false,
		"notes": "",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/swanson-resveratrol-100-mg-30-capsules/109050",
				"quantity": 1,
				"amountPerDose": 100,
				"numberOfDoses": 30,
				"notes": ""
			}
		]
	},
	{
		"name": "Hesperidin",
		"startDay": 90,
		"order": 50,
		"dosage": 500,
		"dosageUnits": "mg",
		"dosesPerDay": 2,
		"required": false,
		"timeOfDay": false,
		"notes": "",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "Nootropics Depot",
				"url": "https://nootropicsdepot.com/hesperidin-capsules/",
				"quantity": 1,
				"amountPerDose": 500,
				"numberOfDoses": 60,
				"notes": ""
			}
		]
	}
];
