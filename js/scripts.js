// Business Logic for AddressBook
function AddressBook() {
  this.contacts = [],
  this.currentId = 0
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

Contact.prototype.addAddress = function(address) {
  this.addresses.push(address);
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    }
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}



// Business logic for Contacts
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber,
  this.addresses = [];
  console.log(this.addresses)
  }

  function Address(email, address) {
    this.email = email,
    this.address = address
  }

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}


// User Interface Logic -------
var addressBook = new AddressBook();

function displayContactDetails(addressBookToDisplay) {
  var contactsList = $("ul#contacts");
  var htmlForContactInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact){
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
};

function showContact(contactId) {
  var contact = addressBook.findContact(contactId);
  $("#show-contact").show();
  $(".first-name").html(contact.firstName);
  $(".last-name").html(contact.lastName);
  $(".phone-number").html(contact.phoneNumber);
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + + contact.id + ">Delete Contact</button>");
}

function attachContactListeners() {
  $("ul#contacts").on("click", "li", function() {
    console.log("The id of this <li> is " + this.id + ".");
    showContact(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function () {
    addressBook.deleteContact(this.id);
    $("#show-contact").hide();
    displayContactDetails(addressBook);
  });
};


$(document).ready(function () {
  attachContactListeners();
  $("form#new-contact").submit(function (event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNumber = $("input#new-phone-number").val();
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-phone-number").val("");
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
    addressBook.addContact(newContact);
    displayContactDetails(addressBook);
    console.log(addressBook.contacts);
  });
  $("form#addressForm").submit(function(event) {
    event.preventDefault();
    var inputtedEmail = $("input#new-email-address").val();
    var inputtedAddress = $("input#new-address").val();
    var newAddress = new Address(inputtedEmail, inputtedAddress);
    addresses.addAddress(newAddress);
    displayContactDetails(addressBook);
    console.log(added);
  });
});
