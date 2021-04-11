const wrapper = document.querySelector('#wrapper');


let input = document.createElement('input');
wrapper.append(input);

let button = document.createElement('button');
wrapper.append(button);

const storageNames = localStorage.getItem('names');
const names = storageNames ? storageNames.split(',') : [];

button.innerHTML = 'Отправить'

function addItem(name, index) {
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.innerHTML = name;
    li.append(span);

    let editButton = document.createElement('button');
    li.append(editButton);

    editButton.innerHTML = 'Редактировать';
    editButton.addEventListener('click', function () {
        let newName = prompt('Введите новое имя');
        span.innerHTML = newName;

        names[index] = newName
        localStorage.setItem('names', names)
    })

    let deleteButton = document.createElement('button');
    li.append(deleteButton);

    deleteButton.innerHTML = 'Удалить'
    deleteButton.addEventListener('click', function () {
        const confirmDelete = confirm('Удалить?');
        if (confirmDelete) {
            li.remove();

            names.splice(index, 1)
            localStorage.setItem('names', names)

        }

    })

    ul.append(li);
}

let ul = document.createElement('ul');
wrapper.append(ul);
button.addEventListener('click', function () {
    if (input.value === '') {
        return;
    };

    names.push(input.value);
    localStorage.setItem('names', names)

    addItem(input.value, names.length - 1);

    input.value = '';
})

names.forEach(function (name, index) {
    addItem(name, index);
})
