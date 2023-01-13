document.getElementById("groceryForm").addEventListener("submit", function(e) {
   e.preventDefault();
   let numItems = document.getElementById("amount").value;
   if(numItems>0){
   document.getElementById("items").style.display = "block";
   for (let i = 0; i < numItems; i++) {
      let itemInput = document.createElement("input");
      itemInput.setAttribute("type", "text");
      itemInput.setAttribute("placeholder", "Enter item " + (i + 1));
      itemInput.setAttribute("id", "item" + i);
      document.getElementById("items").appendChild(itemInput);
   }
   document.getElementById("saveBtn").style.display = "block";
   } else{
   alert("Invalid amount entered")
   }
});
let storedItems = []; // array to store the items
  
  function saveItems() {
    let numItems = document.getElementById("amount").value;
    for (let i = 0; i < numItems; i++) {
      let item = document.getElementById("item"+i).value;
      storedItems.push(item);
    }
    let list = document.getElementById("itemList");
    list.innerHTML = ""; // clear the list
    for (let i = 0; i < storedItems.length; i++) {
      let item = storedItems[i];
      let li = document.createElement("li");
      li.innerHTML = item;
      list.appendChild(li);
    }
  }