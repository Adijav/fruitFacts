/* Factory to share mock data across controllers */

(function(){
	angular.module("fruitFacts")
	.factory("DataService",DataService);

	function DataService(){
		var correctAnswers = [0,1,0,3,2,3,0,2,0,1];

		var fruitsData = [{
			type: "Apple",
			image_url: "../../images/apple.jpeg",
			price: 1.18,
			description: "The apple tree (Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today. Apples have been grown for thousands of years in Asia and Europe, and were brought to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek and European Christian traditions."
		},{
			type: "Banana",
			image_url: "../../images/banana.jpg",
			price: 0.86,
			description: "The banana is an edible fruit, botanically a berry,[1][2] produced by several kinds of large herbaceous flowering plants in the genus Musa.[3] In some countries, bananas used for cooking may be called plantains. The fruit is variable in size, color and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind which may be green, yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the top of the plant. Almost all modern edible parthenocarpic (seedless) bananas come from two wild species – Musa acuminata and Musa balbisiana. The scientific names of most cultivated bananas are Musa acuminata, Musa balbisiana, and Musa × paradisiaca for the hybrid Musa acuminata × M. balbisiana, depending on their genomic constitution. The old scientific name Musa sapientum is no longer used."
		},{
			type: "Grapes",
			image_url: "../../images/grapes.jpg",
			price: 2.55,
			description: "The cultivation of the domesticated grape began 6,000–8,000 years ago in the Near East.[1] Yeast, one of the earliest domesticated microorganisms, occurs naturally on the skins of grapes, leading to the innovation of alcoholic drinks such as wine. The earliest archeological evidence for a dominant position of wine-making in human culture dates from 8,000 years ago in Georgia.[2][3][4] The oldest known winery was found on the territory of modern Armenia, dating to around 4000 BC.[citation needed] By the 9th century AD the city of Shiraz was known to produce some of the finest wines in the Middle East. Thus it has been proposed that Syrah red wine is named after Shiraz, a city in Persia where the grape was used to make Shirazi wine.[5] Ancient Egyptian hieroglyphics record the cultivation of purple grapes,[citation needed] and history attests to the ancient Greeks, Phoenicians, and Romans growing purple grapes for both eating and wine production[citation needed]. The growing of grapes would later spread to other regions in Europe, as well as North Africa, and eventually in North America."
		},{
			type: "Kiwi",
			image_url: "../../images/kiwi.jpeg",
			price: 2.50,
			description: "The kiwifruit or Chinese gooseberry (often shortened to kiwi) is the edible berry of a woody vine in the genus Actinidia.[1][2] The most common cultivar group of kiwifruit ('Hayward')[3] is oval, about the size of a large hen's egg (5–8 cm (2.0–3.1 in) in length and 4.5–5.5 cm (1.8–2.2 in) in diameter). It has a fibrous, dull greenish-brown skin and bright green or golden flesh with rows of tiny, black, edible seeds. The fruit has a soft texture and a sweet but unique flavor. It is a commercial crop in several countries, such as Italy, New Zealand, Chile, Greece, and France.[4]"
		},{
			type: "Orange",
			image_url: "../../images/orange.jpg",
			price: 3.20,
			description: "The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae.[1] The fruit of the Citrus × sinensis is considered a sweet orange, whereas the fruit of the Citrus × aurantium is considered a bitter orange. The sweet orange reproduces asexually (apomixis through nucellar embryony); varieties of sweet orange arise through mutations.[2] The orange is a hybrid, between pomelo (Citrus maxima) and mandarin (Citrus reticulata). It has genes that are ~25% pomelo and ~75% mandarin;[2][3] however, it is not a simple backcrossed BC1 hybrid, but hybridized over multiple generations.[4] The chloroplast genes, and therefore the maternal line, seem to be pomelo.[2] The sweet orange has had its full genome sequenced.[2] Earlier estimates of the percentage of pomelo genes varying from ~50% to 6% have been reported.[3]"
		},{
			type: "Peach",
			image_url: "../../images/peach.jpg",
			price: 2.8,
			description: "The peach (Prunus persica) is a deciduous tree native to the region of Northwest China between the Tarim Basin and the north slopes of the Kunlun Shan mountains, where it was first domesticated and cultivated.[3] It bears an edible juicy fruit called a peach or a nectarine. The specific epithet persica refers to its widespread cultivation in Persia, whence it was transplanted to Europe. It belongs to the genus Prunus which includes the cherry, apricot, almond and plum, in the rose family. The peach is classified with the almond in the subgenus Amygdalus, distinguished from the other subgenera by the corrugated seed shell."
		},{
			type: "Pineapple",
			image_url: "../../images/pineapple.jpg",
			price: 1.8,
			description: "The pineapple (Ananas comosus) is a tropical plant with edible multiple fruit consisting of coalesced berries, also called pineapples,[2][3] and the most economically significant plant in the Bromeliaceae family.[4] Pineapples may be cultivated from a crown cutting of the fruit,[2][5] possibly flowering in 20–24 months and fruiting in the following six months.[5][6] Pineapple does not ripen significantly post-harvest.[7] Pineapples can be consumed fresh, cooked, juiced, or preserved. They are found in a wide array of cuisines. In addition to consumption, the pineapple leaves are used to produce the textile fiber piña in the Philippines, commonly used as the material for the men's Barong Tagalog and women's Baro't saya formal wear in the country. The fiber is also used as a component for wallpaper and other furnishings.[8]"
		},{
			type: "Strawberry",
			image_url: "../../images/strawberry.jpg",
			price: 1.6,
			description: "The garden strawberry (or simply strawberry; Fragaria × ananassa)[1] is a widely grown hybrid species of the genus Fragaria (collectively known as the strawberries). It is cultivated worldwide for its fruit. The fruit (which is not a botanical berry, but an aggregate accessory fruit) is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness. It is consumed in large quantities, either fresh or in such prepared foods as preserves, fruit juice, pies, ice creams, milkshakes, and chocolates. Artificial strawberry flavorings and aromas are also widely used in many products like lip gloss, candy, hand sanitizers, perfume, and many others."
		},{
			type: "Watermelon",
			image_url: "../../images/watermelon.jpg",
			price: 1.7,
			description: "Watermelon (Citrullus lanatus var. lanatus, family Cucurbitaceae) is a vine-like (scrambler and trailer) flowering plant originally from southern Africa. It is a large, sprawling annual plant with coarse, hairy pinnately-lobed leaves and white to yellow flowers. It is grown for its edible fruit, also known as a watermelon, which is a special kind of berry botanically called a pepo. The fruit has a smooth hard rind, usually green with dark green stripes or yellow spots, and a juicy, sweet interior flesh, usually deep red to pink, but sometimes orange, yellow, or white, with many seeds."
		}];

		var quizQuestions = [{
			question:"Name the fruit in the decidous of rose family",
			options:["Apple","Banana","Orange","Grape"],
			selected:null,
			correct:null
		},{
			question:"Name the fruit also called as plantains in some countries",
			options:["Kiwi","Banana","Orange","Peach"],
			selected:null,
			correct:null
		},{
			question:"Name the fruit whose domestic cultivation began 6000-8000 years ago",
			options:["Grape","Banana","Orange","Peach"],
			selected:null,
			correct:null
		},{
			question:"Name the fruit that is also called Chinese gooseberry",
			options:["Watermelon","Apple","Orange","Kiwi"],
			selected:null,
			correct:null
		},{
			question:"Name the fruit that belongs to citrus species",
			options:["Pineapple","Banana","Orange","Strawberry"],
			selected:null,
			correct:null
		},{
			question:"Name the fruit classified with the almond in the subgenus Amygdalus",
			options:["Pineapple","Banana","Orange","Peach"],
			selected:null,
			correct:null
		},{
			question:"Name the fruit that does not ripen significantly post-harvest",
			options:["Pineapple","Apple","Orange","Kiwi"],
			selected:null,
			correct:null
		},{
			question:"Name the fruit that is not a botanical berry, but an aggregate accessory fruit",
			options:["Banana","Apple","Strawberry","Kiwi"],
			selected:null,
			correct:null
		},{
			question:"Name the fruit that is originally from South Africa",
			options:["Watermelon","Apple","Orange","Kiwi"],
			selected:null,
			correct:null
		},{
			question:"Name the fruit that has religious and mythological significance in many cultures",
			options:["Strawberry","Apple","Orange","Kiwi"],
			selected:null,
			correct:null
		}];

		var dataObject = {
			fruitsData: fruitsData,
			quizQuestions: quizQuestions,
			correctAnswers: correctAnswers
		};

		return dataObject;
	}
})();