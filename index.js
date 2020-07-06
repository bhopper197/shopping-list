// This first function prevents default, while storing the value of the item.
$(function() {
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    const item = $(this).find('input[name="shopping-list-entry"]').val();
    $(".shopping-list").append(`<li><span class="shopping-item">${item}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`)});

// Applies the CSS style 'shopping-item__checked' when the check button is clicked.
$(".shopping-list").on("click", ".shopping-item-toggle", function()  {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
  });

// Delete item from list when 'shopping-item-delete button' is pressed.
  $(".shopping-list").on("click", ".shopping-item-delete", function (event) {
    this.closest("li").remove()
  })

});