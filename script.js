var container = document.createElement("div");
container.className = "container";
document.body.append(container);

var fooddishes = document.createElement("div");
fooddishes.className = "fooddishes";
fooddishes.innerHTML = '<span>Food Facts</span>'
container.append(fooddishes);

var sel = document.createElement("Select");
sel.id = "Fooddish";
sel.className = "selbox";


function opt_create(opname, val, valnam, content) {
    var op = document.createElement(opname);
    op.setAttribute(val, valnam);
    op.innerHTML = content;
    return op
}

var submitbtn = document.createElement("button");
submitbtn.setAttribute("type", "submit");
submitbtn.id = "btnsubmit";
submitbtn.className = "submitbtn";
submitbtn.innerHTML = "Submit";

var nextbtn = document.createElement("button");
nextbtn.setAttribute("type", "next");
nextbtn.id = "btnnext";
nextbtn.className = "nextbtn";
nextbtn.innerHTML = "Next";

var dispdata = document.createElement("div")
dispdata.id = "displaydata";
dispdata.className = "dispdata";

var seldiv = document.createElement("div");
seldiv.className = "seldiv";
seldiv.append(sel);

var submitbtndiv = document.createElement("div");
submitbtndiv.className = "submitbtndiv";
submitbtndiv.append(submitbtn);

var nextbtndiv = document.createElement("div");
nextbtndiv.className = "nextbtndiv";
nextbtndiv.append(nextbtn);

var textdiv = document.createElement("div");
textdiv.className = "textdiv"
textdiv.innerHTML = `<p><b>Please select the dish shown in the image to know their facts:</b></p>`;

var facts = document.createElement("div");
facts.className = "Dispfacts";
facts.id = "factsdisp";

var imga = document.createElement("img");
imga.id = "image_create";
imga.className = "imga";
dispdata.append(imga);

var op1 = opt_create("option", "value", "briyani", "Briyani");
var op2 = opt_create("option", "value", "burger", "Burger");
var op3 = opt_create("option", "value", "dosa", "Dosa");
var op4 = opt_create("option", "value", "butter-chicken", "Butter-chicken");
var op5 = opt_create("option", "value", "dessert", "Dessert");
var op6 = opt_create("option", "value", "idly", "Idly");
var op7 = opt_create("option", "value", "pasta", "Pasta");
var op8 = opt_create("option", "value", "rice", "Rice");
var op9 = opt_create("option", "value", "samosa", "Samosa");
var op10 = opt_create("option", "value", "pizza", "Pizza");

fooddishes.append(dispdata, nextbtndiv, textdiv, seldiv, submitbtndiv, facts);
sel.append(op1, op2, op3, op4, op5, op6, op7, op8, op9, op10);



var suddata = {

    "briyani": {
        "facts": "Biryani, a culinary masterpiece with historical roots in Mughlai cuisine, has evolved into a diverse and beloved dish across the Indian subcontinent. Originating from the kitchens of the Mughal emperors, biryani is a testament to the rich culinary heritage of the region. Its versatility is evident in the multitude of regional variations, such as the famed Hyderabadi Biryani, Lucknawi Biryani, Kolkata Biryani, and Malabar Biryani. One of the defining features of biryani is its layered cooking technique, where rice and meat are partially cooked separately before being layered and cooked together, creating a harmonious fusion of flavors. Aromatic spices like cloves, cardamom, cinnamon, and bay leaves contribute to the dish's distinctive taste. Biryani's allure lies in its adaptability, accommodating both traditionalists with meat-based renditions and those embracing vegetarian choices with ingredients like vegetables, paneer, or soy chunks. Symbolizing warmth and togetherness, biryani often graces festive occasions, weddings, and family gatherings. Beyond its regional prominence, biryani has transcended borders, earning global recognition and finding a place on diverse international menus. When served."
    },

    "burger": {
        "facts": "The burger, a quintessential icon of fast food culture, has a fascinating history and widespread appeal. Originating in the United States, the classic burger consists of a ground meat patty, typically beef, sandwiched between two halves of a soft bun. This simple yet ingenious creation has evolved into a culinary phenomenon, with countless variations to suit diverse tastes. The burger's journey began in the early 20th century, attributed to its invention at a fair in Seymour, Wisconsin, or by the hands of Louis Lassen in New Haven, Connecticut. The innovation of placing the cooked ground meat between slices of bread made it a convenient, handheld delight. Since then, the burger has undergone a myriad of transformations, embracing different meats, such as chicken, turkey, or even vegetarian patties made from beans or vegetables. Accompanying the patty, various toppings like lettuce, tomatoes, cheese, pickles, onions, and condiments such as ketchup, mustard, and mayonnaise contribute to the burger's diverse flavor profile. The concept of fast-food chains, popularized by the likes of McDonald's and Burger King, further propelled the burger into global stardom."
    },

    "dosa": {
        "facts": "Dosa, a cherished staple in South Indian cuisine, is a versatile and beloved dish with a rich history and a unique culinary identity. Originating from the southern regions of India, particularly in states like Karnataka, Tamil Nadu, and Andhra Pradesh, dosa has earned its place as a cultural and gastronomic icon. At its core, dosa is a thin, crispy pancake made from a fermented batter of rice and urad dal (black gram). This distinctive batter undergoes a fermentation process, contributing to the dosa's characteristic tangy flavor and airy texture. The preparation of dosa requires skill and precision, as the batter is spread thinly on a hot griddle, creating a delicate, lacy pattern. One of dosa's standout features is its versatility. It can be enjoyed in various forms, ranging from the classic plain dosa served with coconut chutney and sambar (a flavorful lentil-based soup) to a myriad of stuffed dosa variations. Popular fillings include spiced potatoes (masala dosa), cheese, vegetables, and even non-vegetarian options."
    },

    "butter-chicken": {
        "facts": "Butter Chicken, also known as Murgh Makhani, is a celebrated dish in Indian cuisine that has captivated food enthusiasts around the world with its rich flavors and creamy texture. Originating from the culinary traditions of North India, particularly in Delhi, this dish has become an iconic representation of Indian comfort food. The preparation of Butter Chicken involves marinating chicken pieces in a blend of yogurt and spices before cooking them in a tandoor (clay oven) for a distinct smoky flavor. The cooked chicken is then simmered in a luscious tomato-based sauce enriched with cream, butter, and a medley of aromatic spices. The result is a velvety, mildly spiced curry with tender chunks of chicken, offering a harmonious balance of flavors. The roots of Butter Chicken can be traced back to the Moti Mahal restaurant in Delhi, where it is believed to have been created by Chef Kundan Lal Gujral in the 1950s. Since then, Butter Chicken has become a global sensation, gracing the menus of Indian restaurants worldwide."
    },

    "dessert": {
        "facts": " Desserts, the sweet finale to a meal, hold a special place in the world of culinary delights, offering a diverse array of flavors, textures, and cultural influences. From decadent chocolates to refreshing fruit sorbets, desserts cater to the universal human craving for sweetness, making them a cherished part of global gastronomy. In the realm of desserts, the options are as limitless as one's imagination. Classics like chocolate cake, apple pie, and cheesecake coexist with traditional treats from various cultures, such as Italian tiramisu, French crème brûlée, and Indian gulab jamun. Each dessert tells a unique story, often rooted in cultural heritage and culinary traditions. One popular category of desserts is the world of pastries and baked goods. Flaky croissants, delicate éclairs, and buttery tarts showcase the artistry of pastry chefs worldwide. Meanwhile, the realm of frozen desserts boasts a refreshing variety, from creamy ice creams and sorbets to gelatos and shaved ice concoctions."
    },

    "idly": {
        "facts": "Idly, a quintessential dish in South Indian cuisine, stands as a simple yet integral part of breakfast and culinary traditions. Originating from the southern regions of India, idly represents a harmonious blend of simplicity, nutrition, and cultural significance. The preparation of idly involves a fermented batter made from a combination of rice and urad dal (black gram). This batter undergoes a fermentation process, allowing it to rise and achieve a light, fluffy texture. The result is a steamed, circular cake with a mild, slightly tangy flavor. Idly's appeal lies not only in its taste but also in its nutritional profile. Being steamed rather than fried, idly is considered a healthy and easily digestible option. It is often served with an array of accompaniments, such as coconut chutney, tangy sambar (a lentil-based vegetable stew), and spicy tomato chutney, enhancing the overall dining experience. The cultural significance of idly goes beyond its nutritional value. It is a staple in South Indian households and a symbol of homely comfort. Its versatility allows for various adaptations, including the introduction of additional ingredients like vegetables or even a fusion twist, such as masala idly."
    },

    "pasta": {
        "facts": " Pasta, a culinary marvel with roots deeply embedded in Italian cuisine, has transcended cultural boundaries to become a globally cherished dish. Originating in Italy, the art of making pasta has been perfected over centuries, evolving into an extensive variety of shapes, sizes, and preparations. At its core, pasta is made from unleavened dough consisting of durum wheat flour and water or eggs. The dough is shaped into various forms, such as spaghetti, penne, fusilli, or ravioli, each designed to pair harmoniously with different sauces and accompaniments. One of the hallmarks of pasta is its incredible versatility. It serves as a canvas for an array of sauces, ranging from the classic marinara and creamy Alfredo to rich Bolognese and pesto. The combination of pasta and sauce creates a symphony of flavors, textures, and aromas that can be tailored to suit diverse palates."
    },

    "rice": {
        "facts": "Rice, a staple grain that serves as a dietary foundation for a significant portion of the global population, holds a place of paramount importance in cuisines worldwide. Originating from Asia, particularly in regions like China and India, rice has become a versatile and indispensable ingredient, contributing to an array of dishes that span cultural boundaries. The sheer diversity of rice varieties, from long-grain basmati to short-grain sushi rice, offers an extensive palette for culinary exploration. Each type possesses its unique characteristics, influencing the texture, flavor, and aroma of the dishes it graces. The process of cooking rice varies, from steaming to boiling or simmering, and the choice of cooking method can further enhance its qualities. In Asian cultures, rice often takes center stage, accompanying a medley of dishes and forming the basis of many meals. In contrast, in Western cuisines, it might appear as a side dish or as an integral component of diverse recipes. Whether it's a comforting bowl of risotto in Italy, a fragrant biryani in India, or sushi in Japan, rice's adaptability shines through."
    },

    "samosa": {
        "facts": "Samosa, a delightful and popular snack originating from the Indian subcontinent, has earned its place as a cherished culinary treasure both within its cultural roots and beyond. This triangular pastry is a culinary icon, celebrated for its crispy exterior, flavorful filling, and the artistry involved in its creation. The traditional samosa consists of a thin, crispy pastry shell made from a mixture of wheat flour, water, and sometimes a hint of ajwain (carom seeds). The filling, a harmonious blend of spiced potatoes, peas, and often other ingredients like lentils or minced meat, adds layers of taste and texture to the overall experience. What sets the samosa apart is its versatility and adaptability. While the classic potato-filled samosa remains a favorite, regional variations and inventive twists have given rise to a myriad of fillings, including spicy chickpeas, paneer (Indian cottage cheese), or even sweet variations with ingredients like khoya (reduced milk) and nuts."
    },

    "pizza": {
        "facts": "Pizza, a global culinary sensation that originated from humble Italian beginnings, has evolved into an iconic and universally adored dish. Born in Naples, Italy, pizza's roots trace back to the simple combination of flatbread, tomato sauce, and cheese. However, its journey from a local Neapolitan specialty to a worldwide phenomenon has been nothing short of extraordinary. The classic pizza is characterized by a thin, doughy crust, topped with tomato sauce, mozzarella cheese, and a variety of other ingredients such as pepperoni, mushrooms, olives, and basil. The harmonious blend of these elements creates a symphony of flavors and textures that have resonated with people across continents. The Neapolitan pizza, with its distinctive chewy crust and fresh, high-quality ingredients, earned recognition as a UNESCO Intangible Cultural Heritage. As pizza made its way to the United States in the late 19th and early 20th centuries with Italian immigrants, it underwent further transformation. The introduction of new toppings and the emergence of different regional styles, such as New York and Chicago pizza, added to the diversity of this beloved dish."
    }
}

// Get the sumbmitbtn element by id to display facts in innnerHTML webpage
var submitbutton = document.getElementById("btnsubmit");

// Add eventlistener to get the value display
submitbutton.addEventListener("click", function (event) {

    // To prevent the data for submissions
    event.preventDefault();

    //Get the user select dish throgh id
    var sleelement = document.getElementById("Fooddish");

    //Getting the dish selected by user in selected box
    var slevalue = sleelement.value;
    var displayfatcts = document.getElementById("factsdisp");

    //To display the facts of the user selected dish
    displayfatcts.innerHTML = `<p>${suddata[slevalue].facts}</p>`

});


// Get the nextbtn element by id to display image whenever the user click
var nextbuttton = document.getElementById("btnnext");

// Add eventlistener to get the value display
nextbuttton.addEventListener("click", function (event) {

    // To prevent the data for submissions
    event.preventDefault();

    // To display data in webpage
    var displaydatainhtml = document.getElementById("image_create");

    // Using async function to fetch data via API
    async function sud() {

        //try whether the api link is running and status code = 200;
        try {
            var res = await fetch(`https://foodish-api.com/api/`);
            var res_data = await res.json();
            displaydatainhtml.src = `${res_data.image}`

        }

        //catch error if api is not working
        catch (error) {
            console.log("data lost" + error.message);
        }
    }
    sud();
});

window.onload = function () {

    // Here using window.onload to display image whenever we refresh the webpage
    var displaydatainhtml = document.getElementById("image_create");

    // Using async function to fetch data via API
    async function sud() {

        //try whether the api link is running and status code = 200;
        try {
            var res = await fetch(`https://foodish-api.com/api/`);
            var res_data = await res.json();
            displaydatainhtml.src = `${res_data.image}`

        }

        //catch error if api is not working
        catch (error) {
            console.log("data lost" + error.message);
        }
    }
    sud();
}
