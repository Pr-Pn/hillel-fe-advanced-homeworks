function Tasks (_formInput, _todosWrapper) {
    this.todosWrapper = document.querySelector(_todosWrapper);
    this.addItem = (event) => {
        event.preventDefault();
        this.input = event.target.querySelector(_formInput);
        this.todosWrapper.insertAdjacentHTML('beforeend', this.createTemplate(this.input.value));
        this.input.value = '';
        document.querySelectorAll('.js--delete').forEach(btn => {
            btn.addEventListener('click', this.delete);
        });
        document.querySelectorAll('.todo-item__done').forEach( checkbox => {
            checkbox.addEventListener('change', this.done);
        })
    }
    this.createTemplate = function (description) {
        return `
        <div class="todo-item js--todo-item">
            <input class="todo-item__done" type="checkbox">            
            <div class="todo-item__description">${description}</div>                       
            <button class="todo-item__delete js--delete">Видалити</button>            
        </div>
        `
    }
    this.delete = (event) => {
        event.target.closest('.js--todo-item').remove();
    }
    this.done = (event) => {
        const checkbox = event.target;
        const description = checkbox.parentNode.querySelector("div.todo-item__description");
        if (checkbox.checked) {
            description.classList.add('js--done');
        } else {
            description.classList.remove('js--done');
        }
    }
}

const tasks = new Tasks(
    '.js--form__input',
    '.js--todos-wrapper'
);
document.querySelector('.js--form').addEventListener('submit', tasks.addItem);
