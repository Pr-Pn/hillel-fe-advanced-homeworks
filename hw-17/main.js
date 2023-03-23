function UserTable({ form, content, userInfo, addButton }) {
    this.init = function () {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.addUser(
                form.elements['name'].value,
                form.elements['phone'].value,
                form.elements['age'].value
            )
        })
        addButton.addEventListener('click', function () {
            form.reset();
            form.classList.add('open');
        })
        this.loadUsers();
        document.querySelectorAll('.delete').forEach(btn => {
            btn.addEventListener('click', this.deleteUser);
        });
    }
    this.addUser = function (name, phone, age) {
        const user = {
            id: Math.floor(Math.random() * 100),
            name,
            phone,
            age,
        }
        this.userTemplate(user);
        form.reset();
        form.classList.remove('open');
        const currentUsers = JSON.parse(localStorage.getItem('users')) || [];
        currentUsers.push(user);
        localStorage.setItem('users', JSON.stringify(currentUsers));
    }
    this.loadUsers = function () {
        const users = JSON.parse(localStorage.getItem('users'));
        if (users) {
            users.forEach(user => this.userTemplate(user))
        }
    }
    this.deleteUser = function (event) {
        const button = event.target;
        const item = button.closest('.js--item');
        const userId = +item.querySelector('.user-id').innerText;
        const users = JSON.parse(localStorage.getItem('users'));
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === userId) {
                item.remove();
                users.splice(i, 1);
                break;
            }
        }
        localStorage.setItem('users', JSON.stringify(users));
    }
    this.userTemplate = function (user) {
        content.insertAdjacentHTML('beforeend', (
            `<tr class="js--item">`+
                `<td class="user-id">${user.id}</td>`+
                `<td>${user.name}</td>`+
                `<td>${user.phone}</td>`+
                `<td>${user.age}</td>`+
                `<td>
                    <button class="btn">View</button>
                    <button class="btn">Edit</button>
                    <button class="btn delete">Delete</button></td>`+
            `</tr>`
        ))
    }
}

(new UserTable({
    form: document.querySelector('.js--form'),
    userInfo: document.querySelector('.js--user'),
    addButton: document.querySelector('.js--add'),
    content: document.querySelector('.js--content'),
})).init();
