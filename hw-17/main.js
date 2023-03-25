const OPEN_CLASS = 'open';

function UserTable({createForm, editForm, content, userInfo, addButton, currentUser}) {
    this.init = function () {
        createForm.addEventListener('submit', (event) => {
            event.preventDefault();
            this.addUser(
                createForm.elements.name.value,
                createForm.elements.phone.value,
                createForm.elements.age.value
            )
        });
        editForm.addEventListener('submit', () => {
            this.updateUser(
                editForm.elements.name.value,
                editForm.elements.phone.value,
                editForm.elements.age.value
            );
        });
        addButton.addEventListener('click', this.toggleCreateForm);
        this.loadUsers();
    }
    this.addUser = function (name, phone, age) {
        const user = {
            id: Math.floor(Math.random() * 100),
            name,
            phone,
            age,
        }
        this.addUserTemplate(user);
        this.toggleCreateForm();
        this.addUserToLocalStorage(user);
    }
    this.loadUsers = function () {
        const users = JSON.parse(localStorage.getItem('users'));
        if (users) {
            users.forEach(user => this.addUserTemplate(user))
        }
    }
    this.loadEditFormWithUserInfo = (event) => {
        const item = event.target.closest('.js--item');
        const userId = item.querySelector('.user-id').innerText;
        if (userId) {
            this.getUserFromLocalStorageById(userId);
            editForm.querySelector('.js--edit-form-name-input').setAttribute('value', currentUser.name);
            editForm.querySelector('.js--edit-form-phone-input').setAttribute('value', currentUser.phone);
            editForm.querySelector('.js--edit-form-age-input').setAttribute('value', currentUser.age);
            this.toggleEditForm();
        } else {
            console.log("UserId is missing");
        }
    }
    this.updateUser = function (name, phone, age) {
        const updatedUser = {
            id: currentUser.id,
            name: name,
            phone: phone,
            age: age
        }
        this.updateUserInLocalStorage(updatedUser);
        this.toggleEditForm();
    }
    this.deleteUser = function (event) {
        const button = event.target;
        const item = button.closest('.js--item');
        const userId = +item.querySelector('.user-id').innerText;
        const users = JSON.parse(localStorage.getItem('users'));
        item.remove();
        localStorage.setItem('users', JSON.stringify(users.filter(item => item.id !== userId)));
    }
    this.addUserTemplate = function (user) {
        const tableRow = document.createElement('tr');
        tableRow.classList.add('js--item');
        tableRow.insertAdjacentHTML('beforeend', (
            `<td class="user-id">${user.id}</td>` +
            `<td class="user-name">${user.name}</td>` +
            `<td class="user-phone">${user.phone}</td>` +
            `<td class="user-age">${user.age}</td>` +
            `<td>
                <button class="btn">View</button>
                <button class="btn js--edit_user_info_btn">Edit</button>
                <button class="btn js--delete_user_btn">Delete</button>
            </td>`
        ));
        tableRow.querySelector('.js--delete_user_btn').addEventListener('click', this.deleteUser);
        tableRow.querySelector('.js--edit_user_info_btn').addEventListener('click', this.loadEditFormWithUserInfo);
        content.append(tableRow);
    }

    // form control
    this.toggleCreateForm = () => {
        this.toggleForm(createForm);
    }
    this.toggleEditForm = () => {
        this.toggleForm(editForm);
    }
    this.toggleForm = (form) => {
        form.reset();
        if (form.classList.contains(OPEN_CLASS)) {
            form.classList.remove(OPEN_CLASS)
        } else {
            form.classList.add(OPEN_CLASS)
        }
    }

    // localStorage access
    this.getUserFromLocalStorageById = (id) => {
        const users = JSON.parse(localStorage.getItem('users'));
        if (users) {
            currentUser = users.find(user => user.id === +id);
        }
    }
    this.addUserToLocalStorage = (user) => {
        const currentUsers = JSON.parse(localStorage.getItem('users')) || [];
        currentUsers.push(user);
        localStorage.setItem('users', JSON.stringify(currentUsers));
    }
    this.updateUserInLocalStorage = (user) => {
        const currentUsers = JSON.parse(localStorage.getItem('users'));
        const targetUser = currentUsers.find(u => u.id === user.id);
        if (targetUser) {
            targetUser.name = user.name;
            targetUser.phone = user.phone;
            targetUser.age = user.age;
            localStorage.setItem('users', JSON.stringify(currentUsers));
        } else {
            console.log(`User with ${user.id} not found`);
        }
    }
}

(new UserTable({
    createForm: document.querySelector('.js--form'),
    editForm: document.querySelector('.js--form-edit'),
    userInfo: document.querySelector('.js--user'),
    addButton: document.querySelector('.js--add'),
    content: document.querySelector('.js--content'),
})).init();
