let myGroceryList = ["apple", "bananas", "cakes", "Milk", "Butter"];
const addButton = document.querySelector("#addNewItem");
const output = document.querySelector(".output");
const addItem = document.querySelector("#addItem");
addButton.addEventListener("click", function () {
    console.log("clicked");
    if (addItem.value) { myGroceryList.push(addItem.value); }
    build();
});



window.onload = build;
function build() {
    output.innerHTML = "<h2>My List</h2>";
    console.log("ready");
    const tbl = document.createElement("table");
    for (let i = 0; i < myGroceryList.length; i++) {
        const row = document.createElement("tr");
        row.ind = i;
        const cell1 = document.createElement("td");
        cell1.innerHTML = myGroceryList[i];
        row.appendChild(cell1);
        const cell2 = document.createElement("td");
        const span1 = document.createElement("span");
        span1.innerText = "Delete";
        span1.addEventListener("click", function () {
            console.log(myGroceryList[i]);
            let itemOut = myGroceryList.splice(i, 1);
            console.log(myGroceryList);
            build();
        });
        cell2.appendChild(span1);
        const span2 = document.createElement("span");
        span2.innerText = "Edit";
        span2.addEventListener("click", function () {
            let tempEle = row.firstElementChild;
            const newInput = document.createElement("input");
            newInput.value = tempEle.innerText;
            newInput.focus();
            tempEle.innerHTML = "";
            tempEle.appendChild(newInput);
            newInput.addEventListener("blur", function () {
                tempEle.innerHTML = newInput.value;
                myGroceryList[i] = newInput.value;
            })
            console.log(tempEle);
        })
        cell2.appendChild(span2);
        row.appendChild(cell2);
        tbl.appendChild(row);
    }
    output.appendChild(tbl);
}