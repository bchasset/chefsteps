//data
var emails = [];
var duplicatesRemoved = [];

//event handlers
var handleSubmit = function(event) {
  event.preventDefault();
  emails = $('textarea').val().split(',');
  duplicatesRemoved = removeDuplicates(emails);
  renderRemovedList();
}

//render functions
function renderRemovedList() {
  var newList = $('<ul></ul>');
  $('.list').html(newList);
  duplicatesRemoved.forEach(function(email) {
    var listItem = $('<li></li>');
    listItem.text(email);
    newList.append(listItem);
  });
}

function updateTextArea() {
  $('textarea').text(emails.join(','));
}

//event listeners
$(document).ready(function() {

  $('.submission-form').submit(handleSubmit);

  $('.auto-generate').click(function(e) {
    e.preventDefault();
    emails = autoGenerate(20);
    updateTextArea();
  });

});
