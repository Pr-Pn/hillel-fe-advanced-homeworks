"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var CAPITAL_LETTER_INVALID_MESSAGE_CLASS = "validation_message__capital-letter";
  var ONE_NUMBER_INVALID_MESSAGE_CLASS = "validation_message__one-number";
  var PUNCTUATION_MARK_INVALID_MESSAGE_CLASS = "validation_message__punctuation-mark";
  var MIN_LENGTH_INVALID_MESSAGE_CLASS = "validation_message__min-length";
  var CAPITAL_LETTER_REGEX = /[A-Z]+/g;
  var ONE_NUMBER_REGEX = /\d+/g;
  var PUNCTUATION_MARK_REGEX = /[.,\/#!$%\^&\*;:{}=\-_`~()]+/;
  var MIN_LENGTH_REGEX = /.{8,}/g;
  var _form = document.querySelector('form');
  _form.addEventListener('submit', function (event) {
    var formData = new FormData(event.target);
    var password = formData.get('password');
    if (!isValid(password)) {
      event.preventDefault();
    }
  });
  _form.addEventListener("change", function (event) {
    isValid(event.target.value);
  });
  function isValid(password) {
    var result = true;
    validateByRegex(CAPITAL_LETTER_REGEX, CAPITAL_LETTER_INVALID_MESSAGE_CLASS);
    validateByRegex(ONE_NUMBER_REGEX, ONE_NUMBER_INVALID_MESSAGE_CLASS);
    validateByRegex(PUNCTUATION_MARK_REGEX, PUNCTUATION_MARK_INVALID_MESSAGE_CLASS);
    validateByRegex(MIN_LENGTH_REGEX, MIN_LENGTH_INVALID_MESSAGE_CLASS);
    function validateByRegex(regex, targetElementClass) {
      if (!password.match(regex)) {
        document.querySelector(".".concat(targetElementClass)).classList.remove("hidden");
        result = false;
      } else {
        document.querySelector(".".concat(targetElementClass)).classList.add("hidden");
      }
    }
    return result;
  }
});