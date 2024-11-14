var searchBox = document.getElementById('searchBox');
var contactnames = document.getElementById('contactnames');
var contactList = document.querySelectorAll('.contactalphabets');


// event listener
searchBox.addEventListener('keyup', function() {
    var inputValue = searchBox.value.toLowerCase();

    for (let i = 0; i < contactList.length; i++) {
      const contact = contactList[i];
      const text = contact.textContent || contact.innerText; // Get the text content of the item
      if (text.toLowerCase().indexOf(inputValue) > -1) {
        contact.style.display = ''; // Show the item if it matches
      } else {
        contact.style.display = 'none'; // Hide the item if it doesn't match
      }
    }
});

contactList.forEach(function(contact) {
  contact.onclick = function() {
      searchBox.innerHTML = this.textContent;
      // banklist.classList.toggle('hide');
      // arrow.classList.toggle('rotate');
  };
});