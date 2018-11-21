//1. ADD SHOPPING ITEM- WORKING! 
$( "#js-shopping-list-form" ).submit(function( event ) {
    event.preventDefault();
    let answer = $('.js-shopping-list-entry').val();
    $('.shopping-list').append(
        `<li><span class="shopping-item">${answer}</span>
        <div class="shopping-item-controls">
             <button class="shopping-item-toggle">
             <span class="button-label">check</span>
             </button>
             <button class="shopping-item-delete">
             <span class="button-label">delete</span>
             </button>
         </div>
        </li>`
    )
    })

//2. DELETE ITEM BUTTON MOSTLY WORKING. BUT WILL NOT DELETE BORDER/BOX OF 
// NEW LI ADDED ITEMS WHEN THEY ARE DELETED 
// needs function(event)- not arrow function. Event being passed into funciton would not work
$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    // closest deletes containing li
    $(this).closest('li').remove();
});

//3. STRIKETHROUGH ELEMENT - NOT WORKING!

$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    console.log($(this));
    // closest goes up, find goes down 
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});






