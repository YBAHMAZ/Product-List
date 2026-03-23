let iconCart = document.getElementsByClassName("add-cart");
let cart = document.querySelector(".cart");
let orders = document.querySelector(".orders");
let emptyCart = document.querySelector(".empty-cart");
let title = cart.firstElementChild;

for (let i = 0; i < iconCart.length; i++) {
	iconCart[i].onclick = () => {
		let index = parseInt(iconCart[i].parentElement.getAttribute("index"));
		let nbrProducts = iconCart[i].nextElementSibling;
		iconCart[i].previousElementSibling.style.border = "solid 2px #c73a0f";
		iconCart[i].style.display = "none";
		nbrProducts.style.display = "flex";
		nbrProducts.children[1].innerHTML = `${++data[index].nbr}`;
		emptyCart.style.display = "none";
		orders.style.display = "flex";
		createItem(index);
	};
}

let totalPrice = document.querySelectorAll(".total-price");
let total = 0;
let nbItems = 0;

function createItem(i) {
	let hrElemnt = document.createElement("hr");
	let item = document.createElement("div");
	item.className = "item";
	item.setAttribute("name", `${i}`);
	item.innerHTML = `
	<h5 class="name">${data[i].name}</h5>
	<div class="prices">
		<span class="nb-times">1x</span>
		<span class="p-original">@$${data[i].price.toFixed(2)}</span>
		<span class="all-price">$${data[i].price.toFixed(2)}</span>
	</div>`;
	orders.prepend(item, hrElemnt);
	total += data[i].price;
	totalPrice[0].innerHTML = `$${total.toFixed(2)}`;
	nbItems++;
	title.innerHTML = `Your Cart (${nbItems})`;
}

let incrs = document.getElementsByClassName("increment");
let decrs = document.getElementsByClassName("decrement");
let items = document.getElementsByClassName("item");

for (let i = 0; i < incrs.length; i++) {
	incrs[i].onclick = () => {
		if (data[i].nbr === 10)
			return;
		data[i].nbr++;
		nbItems++;
		title.innerHTML = `Your Cart (${nbItems})`;
		incrs[i].previousElementSibling.innerHTML = `${data[i].nbr}`;
		let current = items.namedItem(`${i}`);
		current.lastElementChild.firstElementChild.innerHTML = `${data[i].nbr}x`;
		current.lastElementChild.lastElementChild.innerHTML = `$${(data[i].nbr * data[i].price).toFixed(2)}`;
		total += data[i].price;
		totalPrice[0].innerHTML = `$${total.toFixed(2)}`;
	}
}

for (let i = 0; i < decrs.length; i++) {
	decrs[i].onclick = () => {
		data[i].nbr--;
		decrs[i].nextElementSibling.innerHTML = `${data[i].nbr}`;
		let current = items.namedItem(`${i}`);
		current.lastElementChild.firstElementChild.innerHTML = `${data[i].nbr}x`;
		current.lastElementChild.lastElementChild.innerHTML = `$${(data[i].nbr * data[i].price).toFixed(2)}`;
		total -= data[i].price;
		totalPrice[0].innerHTML = `$${total.toFixed(2)}`;
		nbItems--;
		title.innerHTML = `Your Cart (${nbItems})`;
		if (!data[i].nbr) {
			iconCart[i].previousElementSibling.style.border = "none";
			iconCart[i].nextElementSibling.style.display = "none";
			iconCart[i].style.display = "flex";
			data[i].nbr = 0;
			items.namedItem(`${i}`).nextElementSibling.remove();
			items.namedItem(`${i}`).remove();
			if (!nbItems) {
				emptyCart.style.display = "flex";
				orders.style.display = "none";
			}
			return;
		}
	}
}

let confirmOrder = document.getElementById("confirm");
let confirmed = document.querySelector(".confirmed");
let popup = document.querySelector(".div-popup");

confirmOrder.onclick = () => {
	popup.style.display = "flex";
	for (let i = 0; i < items.length; i++) {
		let image = data[items[i].getAttribute("name")].image;
		let name = data[items[i].getAttribute("name")].name;
		let price = data[items[i].getAttribute("name")].price.toFixed(2);
		let nbr = data[items[i].getAttribute("name")].nbr;
		let hrElemnt = document.createElement("hr");
		let itemEl = document.createElement("div");
		itemEl.className = "item-confirmed";
		itemEl.innerHTML = `
			<img src=${image}>
			<div>
				<h6>${name}</h6>
				<span>${nbr}x</span>
				<span>@$${price}</span>
			</div>
			<h4>$${(price * nbr).toFixed(2)}</h4>`;
		confirmed.prepend(itemEl, hrElemnt);
	}
	totalPrice[1].innerHTML = `$${total.toFixed(2)}`;
}