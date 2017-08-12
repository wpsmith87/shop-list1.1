// Single state object
var state = {
    items: []
};

// State modification functions
var addItem = function(state, item) {
    state.items.push(item);
};

function updateItem(state, itemIndex, newItemState) {
  state.items[itemIndex] = newItemState;
}



var counter = 0

// Render functions
var renderList = function(state, element) {
    var itemsHTML = state.items.map(function(item) {
        return '<li>' +
          '<span class="shopping-item" value="'+ counter +'">' + 'Item:' + ' ' + item + '</span>' +
          '<div class="shopping-item-controls">' +
  '<button class=".shopping-item-toggle">' + 
      
         '<span id="shopItemCheckz" >check</span>' +
         '</button>' + '  ' + 
         '<button class="shopItemDelete">' +
         '<span>delete</span>' +
      '</button>' +
    '</div>' +
  '</li>';
  
  counter++;
  
    });
    element.html(itemsHTML);
    
    
     $(".shopItemDelete").click(function () { 
      var index = $(this).closest('.shopping-item').attr('value');
      $(this).closest('li').remove();
      state.items.splice(index,1);
       });
       
};

// Event listeners
$('.shopping-list-add').submit(function(event) {
    event.preventDefault();
    addItem(state, $('.shopping-list-add-input').val());
    renderList(state, $('.shopping-list'));
});
