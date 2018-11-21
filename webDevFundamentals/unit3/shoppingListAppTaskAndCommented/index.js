// prevents using global variables
'use strict';

//this is an array of objects
const STORE = [
  {name: "apples", checked: false},
  {name: "oranges", checked: false},
  {name: "milk", checked: true},
  {name: "bread", checked: false}
];

//this returns html markup which is the box for individual item. Item, ItemIndex are passed in. Not sure about template?
function generateItemElement(item, itemIndex, template) {
  return `
    <li class="js-item-index-element" data-item-index="${itemIndex}">
      <span class="shopping-item js-shopping-item ${item.checked ? "shopping-item__checked" : ''}">${item.name}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle js-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete js-item-delete">
            <span class="button-label">delete</span>
        </button>
      </div>
    </li>`;
}

// STORE can and will get passed as an argument to this function. 
// This maps through shoppingList (or STORE which we will pass) and for each item in store runs against the generateItemElement function.
function generateShoppingItemsString(shoppingList) {
  console.log("Generating shopping list element");

  const items = shoppingList.map((item, index) => generateItemElement(item, index));
  
  return items.join("");
}
//runs shoppingListItemString into the HTML class .js-shopping-list element
function renderShoppingList() {
  // render the shopping list in the DOM
  console.log('`renderShoppingList` ran');
  const shoppingListItemsString = generateShoppingItemsString(STORE);

  // insert that HTML into the DOM
  $('.js-shopping-list').html(shoppingListItemsString);
}

// pushes new item to store the new item being what is supplied to fuction as argument
function addItemToShoppingList(itemName) {
  console.log(`Adding "${itemName}" to shopping list`);
  STORE.push({name: itemName, checked: false});
}

// on click event which...
function handleNewItemSubmit() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    console.log('`handleNewItemSubmit` ran');
    // grabs value of user input and stores in cosnt 
    const newItemName = $('.js-shopping-list-entry').val();
    // then clears the box 
    $('.js-shopping-list-entry').val('');
    // then adds that value to store via addItemTohoppingList
    addItemToShoppingList(newItemName);
    renderShoppingList();
  });
}

// toggle function on the passed item 
function toggleCheckedForListItem(itemIndex) {
  console.log("Toggling checked property for item at index " + itemIndex);
  STORE[itemIndex].checked = !STORE[itemIndex].checked;
}

function getItemIndexFromElement(item) {
    // turn the item into a jquery object 
    const itemIndexString = $(item)
    // use closest method to get parent element which has the .js-item-index-element class on it
    .closest('.js-item-index-element')
    // then we set intemIndexString to the value of that elements data-item-inde attribute. This raw value will be a string as it is stored in DOM...
    .attr('data-item-index');
    // so we parse at interger from the strinf and return the resulting value
    return parseInt(itemIndexString, 10);
}

//when .js-item-toggle is clicked we trigger an event which...
function handleItemCheckClicked() {
  $('.js-shopping-list').on('click', `.js-item-toggle`, event => {
    console.log('`handleItemCheckClicked` ran');
    //get the idex of the item clicked by passing the event target throgh the above mentioned function
    const itemIndex = getItemIndexFromElement(event.currentTarget);
    // then toggle the check box using the toggleCheckedForListItem function
    toggleCheckedForListItem(itemIndex);
    renderShoppingList();
  });
}
//Use Splice method. View will auto update because DOM is based on Store 
function deleteFromStore(itemIndex){
  console.log("Removed from Store: ${itemIndex}");
  STORE.splice(itemIndex, 1);
  
}

function handleDeleteItemClicked() {
  $('.js-shopping-list').on('click', '.js-item-delete', event => {
    const itemIndex = getItemIndexFromElement(event.currentTarget);
    deleteFromStore(itemIndex);
    renderShoppingList();
  });
}



 

// this function will be our callback when the page loads. it's responsible for
// initially rendering the shopping list, and activating our individual functions
// that handle new item submission and user clicks on the "check" and "delete" buttons
// for individual shopping list items.
function handleShoppingList() {
  renderShoppingList();
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();
}

// when the page loads, call `handleShoppingList`
$(handleShoppingList);