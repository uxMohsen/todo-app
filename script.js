const input = document.getElementById("input");
const btnAdd = document.getElementById("add");
const btnClear = document.getElementById("clear");
const btnDel = document.getElementById("btndel");
const ul = document.querySelector("ul");
const li = document.getElementsByClassName("list__item");

/////////////////////////////////////////////////////////////////
//ADDING NEW ITEM

const inputLength = () => {
	return input.value.length;
}

const newItem = () => {
	let btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Del"));
	btn.classList.add("list__btn");
	btn.setAttribute("id", "btndel");

	let item = document.createElement("li");
	item.appendChild(document.createTextNode(input.value));
	item.classList.add("list__item");
	item.insertAdjacentElement("afterbegin", btn);	

	ul.append(item);

	input.value = "";
};


const addItemClick = () => {
	if(inputLength() > 0) {
		newItem();
	}
};

const addItemPress = (event) => {
	if(inputLength() > 0 && event.which === 13) {
		newItem();
	}
}

btnAdd.addEventListener("click", addItemClick);
input.addEventListener("keypress", addItemPress);



/////////////////////////////////////////////////////////////////
//Deleting item

const checkItem = (a) => {
	if(a.target.tagName === "LI") {
		a.target.className="checked";
	} else if (a.target.className === "list__btn") {
		a.target.parentElement.remove();
	}
}

ul.addEventListener("click", checkItem);




/////////////////////////////////////////////////////////////////
//CLEAR ALL

const clearAll = () => {
		ul.textContent = "";
}

btnClear.addEventListener("click", clearAll);