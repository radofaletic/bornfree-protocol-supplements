/*
	The "order" property is defined as follows:
	 1 = taken before meal
	 2 = as part of a liquid/shake preparation
	 3 = taken with main meal
	 4 = taken after meal
	 5 = other
*/

const protocolVersion = "3.52U";
const protocolUrl = "https://bornfree.life/experimental-treatment-methodology/7/v3-52u-preview/42/";
const supplements = [
	{
		"name": "Magnesium (oral)",
		"startWeek": 1,
		"order": 3,
		"dosage": 0.4,
		"dosageUnits": "g",
		"dosesPerDay": 3,
		"required": true,
		"timeOfDay": false,
		"notes": "Take 1.5–2g if you are deficient, and at least 750mg otherwise.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/now-foods-magnesium-citrate-180-softgels/22552",
				"amountPerDose": 0.4,
				"numberOfDoses": 180,
				"notes": ""
			}
		]
	},
	{
		"name": "Magnesium (transdermal)",
		"startWeek": 1,
		"order": 5,
		"dosage": 1,
		"dosageUnits": "g",
		"dosesPerDay": 8,
		"required": true,
		"timeOfDay": false,
		"notes": "Transdermal absorption appears to be significantly more effective in people with SIBO (small intestinal bacterial overgrowth).",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/life-flo-magnesium-oil-sport-spray-8-fl-oz-237-ml/49247",
				"amountPerDose": 1,
				"numberOfDoses": 237,
				"notes": "This magnesium product has eucalyptus and menthol, providing additional benefits for energy metabolism and immune support."
			}
		]
	},
	{
		"name": "Calcium Phosphate",
		"startWeek": 1,
		"order": 3,
		"dosage": 0.333,
		"dosageUnits": "g",
		"dosesPerDay": 3,
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
				"country": "EU",
				"countryOfOrigin": "DE",
				"supplier": "Sunday Natural",
				"url": "https://www.sunday.de/en/natural-calcium-400mg-high-dose-capsules-set.html",
				"amountPerDose": 0.4,
				"numberOfDoses": 120,
				"notes": ""
			}
		]
	},
	{
		"name": "Liposomal Riboflavin",
		"startWeek": 1,
		"order": 3,
		"dosage": 100,
		"dosageUnits": "mg",
		"dosesPerDay": 2,
		"required": true,
		"timeOfDay": false,
		"notes": "1× large scoop twice per day.",
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
		"name": "Niacinamide (no-flush)",
		"startWeek": 1,
		"order": 3,
		"dosage": 500,
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
				"url": "https://iherb.com/pr/now-foods-niacinamide-500-mg-100-veg-capsules/704",
				"amountPerDose": 500,
				"numberOfDoses": 100,
				"notes": ""
			}
		]
	},
	{
		"name": "PQQ + CoQ10",
		"startWeek": 1,
		"order": 3,
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
		"name": "Acetyl-L-Carnitin",
		"startWeek": 1,
		"order": 3,
		"dosage": 500,
		"dosageUnits": "mg",
		"dosesPerDay": 4,
		"required": true,
		"timeOfDay": false,
		"notes": "",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/now-foods-acetyl-l-carnitine-500-mg-200-veg-capsules/15271",
				"amountPerDose": 500,
				"numberOfDoses": 200,
				"notes": ""
			}
		]
	},
	{
		"name": "Vitamin D3",
		"startWeek": 1,
		"order": 3,
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
		"name": "DHA",
		"startWeek": 1,
		"order": 3,
		"dosage": 300,
		"dosageUnits": "mg",
		"dosesPerDay": 1,
		"required": true,
		"timeOfDay": false,
		"notes": "Docosahexaenoic acid. 00–500 mg per day.",
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
		"name": "R-ALA",
		"startWeek": 1,
		"order": 3,
		"dosage": 100,
		"dosageUnits": "mg",
		"dosesPerDay": 1,
		"required": true,
		"timeOfDay": false,
		"notes": "R-Alpha Lipoic Acid is a AMPK promoter. 1× per day, but 3× per day during weeks 5–7.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/allmax-r-ala-60-capsules/67927",
				"amountPerDose": 150,
				"numberOfDoses": 60,
				"notes": ""
			}
		]
	},
	{
		"name": "Apigenin",
		"startWeek": 1,
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
		"name": "Vitamin B12 (sublingual)",
		"startWeek": 1,
		"order": 3,
		"dosage": 1,
		"dosageUnits": "ml",
		"dosesPerDay": 1,
		"required": true,
		"timeOfDay": false,
		"notes": "",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "Vimergy",
				"url": "https://vimergy.com/products/organic-b12",
				"amountPerDose": 1,
				"numberOfDoses": 115,
				"notes": "This product is offered in different quantities. You will need a total of 90ml for 90 days."
			},
			{
				"country": "all",
				"countryOfOrigin": "AU",
				"supplier": "Flower of Life",
				"url": "https://floweroflife.com.au/shop/vimergy-b12/",
				"amountPerDose": 1,
				"numberOfDoses": 115,
				"notes": "This product is offered in different quantities. You will need a total of 90ml for 90 days."
			}
		]
	},
	{
		"name": "Silica",
		"startWeek": 1,
		"order": 4,
		"dosage": 20,
		"dosageUnits": "mg",
		"dosesPerDay": 2,
		"required": true,
		"timeOfDay": false,
		"notes": "",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "Spain",
				"supplier": "Naturitas",
				"url": "https://www.naturitas.com/#/dffullscreen/query=FNature%20Organic%20Silica",
				"amountPerDose": 20,
				"numberOfDoses": 25,
				"notes": ""
			}
		]
	},
	{
		"name": "Candex",
		"startWeek": 1,
		"order": 3,
		"dosage": 320,
		"dosageUnits": "mg",
		"dosesPerDay": 4,
		"required": true,
		"timeOfDay": false,
		"notes": "Anti-fungal enzyme.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/pure-essence-candex-120-vegi-caps/3218",
				"amountPerDose": 320,
				"numberOfDoses": 120,
				"notes": "Read product label carefully to set expectations. This product is offered in different quantities. You will need a total of 360× for 90 days."
			}
		]
	},
	{
		"name": "Iodine",
		"startWeek": 1,
		"order": 4,
		"dosage": 50,
		"dosageUnits": "µg",
		"dosesPerDay": 10,
		"required": true,
		"timeOfDay": "AM",
		"notes": "Only take during weeks 1–4",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/life-flo-liquid-iodine-plus-with-potassium-iodide-iodine-unflavored-2-fl-oz-59-ml/22640",
				"amountPerDose": 50,
				"numberOfDoses": 1350,
				"notes": ""
			}
		]
	},
	{
		"name": "L-Serine",
		"startWeek": 1,
		"order": 3,
		"dosage": 500,
		"dosageUnits": "mg",
		"dosesPerDay": 4,
		"required": true,
		"timeOfDay": false,
		"notes": "",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "BulkSupplements.com",
				"url": "https://www.bulksupplements.com/products/l-serine?variant=42631799636162",
				"amountPerDose": 500,
				"numberOfDoses": 180,
				"notes": "This product is offered in different quantities and packagings. You will need a total of 180g or 360 capsules for 90 days."
			}
		]
	},
	{
		"name": "D-Ribose",
		"startWeek": 1,
		"order": 2,
		"dosage": 2,
		"dosageUnits": "g",
		"dosesPerDay": 1,
		"required": true,
		"timeOfDay": false,
		"notes": "",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/lake-avenue-nutrition-d-ribose-powder-unflavored-10-6-oz-300-g/97386",
				"amountPerDose": 5,
				"numberOfDoses": 60,
				"notes": ""
			}
		]
	},
	{
		"name": "Probiotic",
		"startWeek": 1,
		"order": 3,
		"dosage": 1000,
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
				"url": "https://iherb.com/pr/youtheory-spore-probiotic-6-billion-cfu-60-vegetarian-capsules/78522",
				"amountPerDose": 500,
				"numberOfDoses": 60,
				"notes": ""
			}
		]
	},
	{
		"name": "Psyllium Husk",
		"startWeek": 1,
		"order": 1,
		"dosage": 3.5,
		"dosageUnits": "g",
		"dosesPerDay": 1,
		"required": true,
		"timeOfDay": "AM",
		"notes": "A teaspoon of powder in a glass of water, before any food.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/frontier-co-op-organic-psyllium-husk-powder-16-oz-453-g/31080",
				"amountPerDose": 3.5,
				"numberOfDoses": 130,
				"notes": ""
			},
			{
				"country": "all",
				"countryOfOrigin": "AU",
				"supplier": "Woolworths",
				"url": "https://www.woolworths.com.au/shop/productdetails/479953/macro-organic-psyllium-husk",
				"amountPerDose": 3.5,
				"numberOfDoses": 70,
				"notes": ""
			}
		]
	},
	{
		"name": "Folinic Acid",
		"startWeek": 3,
		"order": 3,
		"dosage": 800,
		"dosageUnits": "µg",
		"dosesPerDay": 1,
		"required": true,
		"timeOfDay": false,
		"notes": "Not <em>folic acid</em>. 800-1200µg.",
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
		"name": "EGCG",
		"startWeek": 3,
		"order": 3,
		"dosage": 200,
		"dosageUnits": "mg",
		"dosesPerDay": 3,
		"required": true,
		"timeOfDay": false,
		"notes": "Epigallocatechin gallate. 2–3 per day.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/now-foods-egcg-green-tea-extract-400-mg-180-veg-capsules/11598",
				"amountPerDose": 200,
				"numberOfDoses": 180,
				"notes": "This product is offered in different quantities. You will need a total of 228× capsules for 76 days."
			}
		]
	},
	{
		"name": "Alpha GPC",
		"startWeek": 3,
		"order": 3,
		"dosage": 250,
		"dosageUnits": "mg",
		"dosesPerDay": 2,
		"required": true,
		"timeOfDay": false,
		"notes": "L-alpha-glycerylphosphorylcholine. If muscle stiffness or headache occurs, reduce or pause dosing.",
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
		"name": "Spirulina",
		"startWeek": 3,
		"order": 2,
		"dosage": 10,
		"dosageUnits": "g",
		"dosesPerDay": 1,
		"required": true,
		"timeOfDay": "AM",
		"notes": "Slowly add 1–10g (⅕–2 tsp) of spirulina to the morning psyllium husk shake. May initially cause nausea, headache, fatigue from fungal die-off symptoms, start low and slow.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://iherb.com/pr/kos-organic-spirulina-powder-13-5-oz-381-5-g/104647",
				"amountPerDose": 10,
				"numberOfDoses": 40,
				"notes": ""
			}
		]
	},
	{
		"name": "NAC",
		"startWeek": 5,
		"order": 3,
		"dosage": 500,
		"dosageUnits": "mg",
		"dosesPerDay": 1,
		"required": true,
		"timeOfDay": false,
		"notes": "N-Acetyl Cysteine. For the first three weeks take 1,000mg 3× per day, then reduce to 500mg 1× per day.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "Nootropics Depot",
				"url": "https://iherb.com/pr/now-foods-nac-600-mg-250-veg-capsules/694",
				"amountPerDose": 600,
				"numberOfDoses": 250,
				"notes": "This product is offered in different quantities. You will need a total of 230× capsules for 62 days."
			}
		]
	},
	{
		"name": "Forskolin",
		"startWeek": 5,
		"order": 2,
		"dosage": 10,
		"dosageUnits": "mg",
		"dosesPerDay": 2,
		"required": true,
		"timeOfDay": false,
		"notes": "1–2× per day. Temporary adrenergic increase.",
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
		"startWeek": 5,
		"order": 3,
		"dosage": 25,
		"dosageUnits": "mg",
		"dosesPerDay": 1,
		"required": true,
		"timeOfDay": false,
		"notes": "Temporary adrenergic increase.",
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
		"name": "Apple Cider Vinegar (ACV)",
		"startWeek": 5,
		"order": 3,
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
			}
		]
	},
	{
		"name": "Reishi",
		"startWeek": 5,
		"order": 3,
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
		"startWeek": 5,
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
				"url": "https://iherb.com/pr/real-mushrooms-ergo-l-ergothioneine-60-capsules/113975",
				"amountPerDose": 500,
				"numberOfDoses": 60,
				"notes": "Note: this product does not ship to Europe — use a European source."
			},
			{
				"country": "EU",
				"countryOfOrigin": "DE",
				"supplier": "Amazon",
				"url": "https://www.amazon.de/dp/B07W668CZF",
				"amountPerDose": 1000,
				"numberOfDoses": 90,
				"notes": ""
			}
		]
	},
	{
		"name": "Basic B Complex",
		"startWeek": 5,
		"order": 4,
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
				"url": "https://iherb.com/pr/thorne-basic-b-complex-60-capsules/18791",
				"amountPerDose": 410,
				"numberOfDoses": 60,
				"notes": "Do not substitute. This B complex product has been carefully selected to contain sufficient amounts of the required forms of each coenzyme, minus inappropriate amounts of pyridoxine, yet adequate P5P. You will need a total of 258× capsules for 86 days if taking 3× per day."
			}
		]
	},
	{
		"name": "Fulvic Ionic Multi Mineral",
		"startWeek": 5,
		"order": 5,
		"dosage": 5,
		"dosageUnits": "ml",
		"dosesPerDay": 4,
		"required": true,
		"timeOfDay": false,
		"notes": "Start with lower dose, and increase as tolerated.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "Good State",
				"url": "https://goodstate.com/collections/man/products/ionic-man-mans-liquid-ionic-multi-mineral?variant=40297780215891",
				"amountPerDose": 5,
				"numberOfDoses": 96,
				"notes": "This product is offered in different quantities. You will need at approximately 1·8L for 90 days."
			}
		]
	},
	{
		"name": "Copper",
		"startWeek": 5,
		"order": 4,
		"dosage": 2,
		"dosageUnits": "mg",
		"dosesPerDay": 2,
		"required": false,
		"timeOfDay": "M",
		"notes": "Take after food.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "Good State",
				"url": "https://goodstate.com/collections/ionic-copper/products/good-state-liquid-ionic-copper-96-servings-at-2mg-each-plus-2-mg-fulvic-acid-8-fl-oz",
				"amountPerDose": 2,
				"numberOfDoses": 96,
				"notes": ""
			}
		]
	},
	{
		"name": "Iron",
		"startWeek": 5,
		"order": 4,
		"dosage": 10,
		"dosageUnits": "mg",
		"dosesPerDay": 2,
		"required": false,
		"timeOfDay": "M",
		"notes": "Take after food.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "Good State",
				"url": "https://goodstate.com/collections/ionic-iron/products/good-state-liquid-ionic-iron-48-servings-at-10mg-plus-2-mg-fulvic-acid-8-fl-oz",
				"amountPerDose": 10,
				"numberOfDoses": 48,
				"notes": ""
			}
		]
	},
	{
		"name": "Vanadium",
		"startWeek": 5,
		"order": 4,
		"dosage": 2,
		"dosageUnits": "ml",
		"dosesPerDay": 1,
		"required": false,
		"timeOfDay": "PM",
		"notes": "Take after food.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "Spain",
				"supplier": "Naturitas",
				"url": "https://www.naturitas.com/#/dffullscreen/query=ifigen%20vanadium",
				"amountPerDose": 2,
				"numberOfDoses": 75,
				"notes": ""
			}
		]
	},
	{
		"name": "Cobalt",
		"startWeek": 5,
		"order": 4,
		"dosage": 2,
		"dosageUnits": "ml",
		"dosesPerDay": 1,
		"required": false,
		"timeOfDay": "PM",
		"notes": "Take after food.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "Spain",
				"supplier": "Naturitas",
				"url": "https://www.naturitas.com/#/dffullscreen/query=ifigen%20cobalt",
				"amountPerDose": 2,
				"numberOfDoses": 75,
				"notes": ""
			}
		]
	},
	{
		"name": "Bismuth",
		"startWeek": 5,
		"order": 4,
		"dosage": 2,
		"dosageUnits": "ml",
		"dosesPerDay": 1,
		"required": false,
		"timeOfDay": "PM",
		"notes": "Take after food.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "Spain",
				"supplier": "Naturitas",
				"url": "https://www.naturitas.com/#/dffullscreen/query=ifigen%20bismuth",
				"amountPerDose": 2,
				"numberOfDoses": 75,
				"notes": ""
			}
		]
	},
	{
		"name": "Germanium (Ge-132)",
		"startWeek": 5,
		"order": 3,
		"dosage": 150,
		"dosageUnits": "mg",
		"dosesPerDay": 1,
		"required": false,
		"timeOfDay": "PM",
		"notes": "Take after food.",
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
		"name": "Sulphur",
		"startWeek": 5,
		"order": 4,
		"dosage": 3,
		"dosageUnits": "g",
		"dosesPerDay": 1,
		"required": false,
		"timeOfDay": "PM",
		"notes": "Take after food.",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "Spain",
				"supplier": "Naturitas",
				"url": "https://www.naturitas.com/#/dffullscreen/query=msm%20salud",
				"amountPerDose": 3,
				"numberOfDoses": 66,
				"notes": ""
			}
		]
	},
	{
		"name": "Liver",
		"startWeek": 1,
		"order": 3,
		"dosage": 30,
		"dosageUnits": "gr",
		"dosesPerDay": 1,
		"required": false,
		"timeOfDay": false,
		"notes": "",
		"purchaseOptions": [
			{
				"country": "all",
				"countryOfOrigin": "US",
				"supplier": "iHerb",
				"url": "https://www.iherb.com/pr/universal-nutrition-classic-series-uni-liver-argentine-beef-liver-250-tablets/41651",
				"amountPerDose": 30,
				"numberOfDoses": 250,
				"notes": "Liver is very nutrient dense. No need to take it every day."
			}
		]
	},
	{
		"name": "Resveratrol",
		"startWeek": 99,
		"order": 3,
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
				"url": "https://www.iherb.com/pr/now-foods-resveratrol-200-mg-60-veg-capsules/14767",
				"quantity": 1,
				"amountPerDose": 200,
				"numberOfDoses": 60,
				"notes": ""
			}
		]
	},
	{
		"name": "Hesperidin",
		"startWeek": 99,
		"order": 3,
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
