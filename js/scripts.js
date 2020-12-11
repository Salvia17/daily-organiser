function newItem () {

//Adding a new item to the list of items
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert('You must write something!'');
  } else {
    $('#list').append(li);
  };

//Adding a cross out function for the list os items
  function crossOut() {
    li.toggleClass('strike');
  };

//Adding event listener for double click on the list item
//Crosses out the list item
  li.on('dblclick', function crossOut(){
    li.toggleClass('strike');
  });

//Adding the "x" delete button
  let deleteButton = $('<deleteButton></deleteButton>');
  deleteButton.append(document.createTextNode('x'));
  li.append(deleteButton);

//Adding event listener for single click on the list item
//Deletes the list item
  deleteButton.on('click', deleteListItem);
  function deleteListItem () {
    li.addClass('delete');
  };

    //Allows reordering of items
      $('#list').sortable();
}
