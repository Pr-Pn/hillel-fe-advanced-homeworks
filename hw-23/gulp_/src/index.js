document.addEventListener('DOMContentLoaded', () => {
    const CAPITAL_LETTER_INVALID_MESSAGE_CLASS = "validation_message__capital-letter";
    const ONE_NUMBER_INVALID_MESSAGE_CLASS = "validation_message__one-number";
    const PUNCTUATION_MARK_INVALID_MESSAGE_CLASS = "validation_message__punctuation-mark";
    const MIN_LENGTH_INVALID_MESSAGE_CLASS = "validation_message__min-length";

    const CAPITAL_LETTER_REGEX = /[A-Z]+/g;
    const ONE_NUMBER_REGEX = /\d+/g;
    const PUNCTUATION_MARK_REGEX = /[.,\/#!$%\^&\*;:{}=\-_`~()]+/;
    const MIN_LENGTH_REGEX = /.{8,}/g;

    const _form = document.querySelector('form');

    _form.addEventListener('submit', event => {
        const formData = new FormData(event.target);
        const password = formData.get('password');
        if (!isValid(password)) {
            event.preventDefault();
        }
    })
    _form.addEventListener("change", event => {
        isValid(event.target.value);
    })
    function isValid(password) {
        let result = true;

        validateByRegex(CAPITAL_LETTER_REGEX, CAPITAL_LETTER_INVALID_MESSAGE_CLASS);
        validateByRegex(ONE_NUMBER_REGEX, ONE_NUMBER_INVALID_MESSAGE_CLASS);
        validateByRegex(PUNCTUATION_MARK_REGEX, PUNCTUATION_MARK_INVALID_MESSAGE_CLASS);
        validateByRegex(MIN_LENGTH_REGEX, MIN_LENGTH_INVALID_MESSAGE_CLASS);
        function validateByRegex(regex, targetElementClass) {
            if (!password.match(regex)) {
                document.querySelector(`.${targetElementClass}`).classList.remove("hidden");
                result = false;
            } else {
                document.querySelector(`.${targetElementClass}`).classList.add("hidden");
            }
        }
        return result;
    }
})

