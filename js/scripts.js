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


}
