let data = [
	{
		"image": "./images/image-waffle-desktop.jpg",
		"name": "Waffle with Berries",
		"category": "Waffle",
		"price": 6.50,
		"alt": "Waffle-With-Berries",
		"nbr": 0
	},
	{
		"image": "./images/image-creme-brulee-desktop.jpg",
		"name": "Vanilla Bean Crème Brûlée",
		"category": "Crème Brûlée",
		"price": 7.00,
		"alt": "Crème-Brûlée",
		"nbr": 0
	},
	{
		"image": "./images/image-macaron-desktop.jpg",
		"name": "Macaron Mix of Five",
		"category": "Macaron",
		"price": 8.00,
		"alt": "Macaron",
		"nbr": 0
	},
	{
		"image": "./images/image-tiramisu-desktop.jpg",
		"name": "Classic Tiramisu",
		"category": "Tiramisu",
		"price": 5.50,
		"alt": "Tiramisu",
		"nbr": 0
	},
	{
		"image": "./images/image-baklava-desktop.jpg",
		"name": "Pistachio Baklava",
		"category": "Baklava",
		"price": 4.00,
		"alt": "Baklava",
		"nbr": 0
	},
	{
		"image": "./images/image-meringue-desktop.jpg",
		"name": "Lemon Meringue Pie",
		"category": "Pie",
		"price": 5.00,
		"alt": "Pie",
		"nbr": 0
	},
	{
		"image": "./images/image-cake-desktop.jpg",
		"name": "Red Velvet Cake",
		"category": "Cake",
		"price": 4.50,
		"alt": "Cake",
		"nbr": 0
	},
	{
		"image": "./images/image-brownie-desktop.jpg",
		"name": "Salted Caramel Brownie",
		"category": "Brownie",
		"price": 4.50,
		"alt": "Brownie",
		"nbr": 0
	},
	{
		"image": "./images/image-panna-cotta-desktop.jpg",
		"name": "Vanilla Panna Cotta",
		"category": "Panna Cotta",
		"price": 6.50,
		"alt": "Panna-Cotta",
		"nbr": 0
	},
];

let productsList = document.querySelector(".products-list");

for (let i = 0; i < 9; i++) {
	let product = document.createElement("div");
	let pic = document.createElement("div");
	let content = document.createElement("div");
	let addCart = document.createElement("div");
	let nbrProducts = document.createElement("div");
	let price = document.createElement("span");
	let span = document.createElement("span");
	let svg = document.createElement("img");
	let img = document.createElement("img");
	let h5 = document.createElement("h5");
	let h4 = document.createElement("h4");
	let incr = document.createElement("img");
	let decr = document.createElement("img");
	let nbrP = document.createElement("span");

	product.className = "product";
	pic.className = "pic";
	content.className = "content";
	addCart.className = "add-cart";
	nbrProducts.className = "nbr-products";
	incr.className = "increment";
	decr.className = "decrement";
	nbrP.className = "nbr"
	//#	children of content
	h5.innerHTML = data[i].category;
	h4.innerHTML = data[i].name;
	price.innerHTML = `$${data[i].price.toFixed(2)}`;
	content.append(h5, h4, price);
	//#	children of addCart
	svg.src = "./images/icon-add-to-cart.svg";
	svg.alt = "icon-add-to-cart"
	span.innerHTML = "Add to Cart";
	addCart.append(svg, span);
	//#	children of nbrProducts
	incr.src = "./images/icon-increment-quantity.svg";
	incr.alt = "increment-icon";
	decr.src = "./images/icon-decrement-quantity.svg";
	decr.alt = "decrement-icon";
	nbrP.innerHTML = `${data[i].nbr}`;
	nbrProducts.append(decr, nbrP, incr);
	//#	children of picture
	img.src = data[i].image;
	img.alt = data[i].alt;
	img.width = "170";
	pic.setAttribute("index", `${i}`);
	pic.append(img, addCart, nbrProducts);
	//#	chlidren of product
	product.append(pic, content);
	//#	children of productsList
	productsList.append(product);
}