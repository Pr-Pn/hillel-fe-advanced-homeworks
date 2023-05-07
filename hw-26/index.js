const NAME_ATTR = "name";
const TYPE_ATTR = "type";
const VALUE_ATTR = "value";
const PLACEHOLDER_ATTR = "placeholder";
const ID_ATTR = "id";
const FOR_ATTR = "for";
const CHECKED_ATTR = "checked";

const INPUT_TAG_NAME = "input";
const DIV_TAG_NAME = "div";
const LABEL_TAG_NAME = "label";

class RegistrationForm {
    constructor(_registrationFormSelector, elements) {
        this.form = document.querySelector(_registrationFormSelector);
        this.elements = elements;
        this.form.addEventListener("submit", (event) => {
            event.preventDefault();
            this.logInputData();
        })
    }

    render() {
        this.elements.forEach(el => this.form.append(el.toHtml()));
    }

    logInputData() {
        this.elements.filter(el => !(el instanceof ButtonElement)).forEach(el => {
            console.log(el.getDescription());
        })
    }

}

class FormElement {
    constructor(name, type, value) {
        this.name = name;
        this.type = type;
        this.value = value;
    }
    getDescription() {
        return `${this.name}: ${this.value}`;
    }
}

class TextElement extends FormElement {
    constructor(name, type, value, placeholder) {
        super(name, type, value);
        this.placeholder = placeholder;
    }

    setValue(value) {
        this.value = value;
    }

    toHtml() {
        const textInput = document.createElement(INPUT_TAG_NAME);
        textInput.setAttribute(NAME_ATTR, this.name);
        textInput.setAttribute(TYPE_ATTR, this.type);
        textInput.setAttribute(VALUE_ATTR, this.value);
        textInput.setAttribute(PLACEHOLDER_ATTR, this.placeholder);
        textInput.addEventListener("change", (e) => this.setValue(e.target.value));
        return textInput;
    }
}

class CheckboxElement extends FormElement {
    constructor(name, value, checked) {
        super(name, "checkbox", value, checked);
        this.checked = checked;
    }

    getDescription() {
        return `${this.name}: ${this.checked}`;
    }

    toHtml() {
        const div = document.createElement(DIV_TAG_NAME);

        const checkboxElement = document.createElement(INPUT_TAG_NAME)
        checkboxElement.setAttribute(NAME_ATTR, this.name);
        checkboxElement.setAttribute(TYPE_ATTR, this.type);
        const id = this.type + Math.random() * 100;
        checkboxElement.setAttribute(ID_ATTR, id);
        if (this.checked) {
            checkboxElement.setAttribute(CHECKED_ATTR, "")
        }
        checkboxElement.addEventListener("change", (e) =>
            this.checked = e.target.attributes[CHECKED_ATTR] != null
        )

        const label = document.createElement(LABEL_TAG_NAME);
        label.setAttribute(FOR_ATTR, id);
        label.innerText = this.value;

        div.append(checkboxElement, label);
        return div;
    }
}

class ButtonElement extends FormElement {
    constructor() {
        super("Register", "submit", "");
    }

    toHtml() {
        const buttonElement = document.createElement("button");
        buttonElement.setAttribute(TYPE_ATTR, this.type);
        buttonElement.innerText = this.name;
        return buttonElement;
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const form = new RegistrationForm(
        "#js--registration-form",
        [
            new TextElement("username", "text", "", "Your name"),
            new TextElement("email", "email", "", "Your email"),
            new TextElement("password", "password", "", "Your password"),
            new TextElement("repeatPassword", "password", "", "Repeat password"),
            new CheckboxElement("agreement", "I agree", false),
            new ButtonElement()
        ]);
    form.render();
})


/*
TextElement - должен иметь метод, который создаст input и вернёт его для будущего монтирования на страницу.
    При инициализации, должна быть возможность указать его значение "placeholder"

CheckboxElement - должен иметь метод, который создаст input и вернёт его для будущего монтирования на страницу.
    При инициализации, должна быть возможность указать его значение "checked"

ButtonElement - должен иметь метод, который создаст button и вернёт его для будущего монтирования на страницу.*/
