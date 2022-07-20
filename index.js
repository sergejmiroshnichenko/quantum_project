const form = document.querySelector('#form'),
    button = document.querySelector('#button')


form.addEventListener("input", inputHandler);
form.addEventListener('submit', submitHandler);


function submitHandler(e) {
    e.preventDefault();
    console.log(form.elements['name'].value, form.elements['email'].value, form.elements['message'].value);
    alert('The form data can be sent to Fetch, the data in console');
    clearForm();
    makeButtonDisabled();
}

function makeButtonDisabled() {
    button.setAttribute('disabled', '');
    button.classList.remove('open');
}

function makeButtonEnabled() {
    button.classList.add('open');
    button.removeAttribute('disabled');
}

function clearForm() {
    ['name', 'email', 'message'].forEach(item => {
        form.elements[item].value = '';
        form.elements[item].classList.remove('valid');
        form.elements[item].classList.remove('inValid');
    });
}

function inputHandler({target}) {
    if (isFormValid()) {
        makeButtonEnabled()
    } else {
        makeButtonDisabled()
    }
    checkInput(target);
}

function checkInput(input) {
    if (isValidInput(input) || input.value.length === 0) {
        makeInputValid(input)
        removeErrorLabel(input)
        if(input.value.length === 0){
            makeLabelRegular(input)
        }
    } else {
        if (!nasInputLabel(input)) {
            makeInputInValid(input)
            createErrorLabel(input)
        }
    }
}

function makeLabelRegular(input) {
    input.classList.remove('inValid');
    input.classList.remove('valid');
}

function removeErrorLabel(input) {
    const p = input.parentNode.querySelector('p');
    p && input.parentNode.removeChild(p);
}

function nasInputLabel(input){
    return !!input.parentNode.querySelector('p');
}

function createErrorLabel(input) {
    const p = document.createElement('p');
    p.textContent = input.dataset.error;
    p.classList.add('error-label');
    input.parentNode.append(p);
}

function makeInputValid(input) {
    input.classList.remove('inValid');
    input.classList.add('valid');
    input.setAttribute('is-valid', '1');
}

function makeInputInValid(input) {
    input.classList.remove('valid');
    input.classList.add('inValid');
    input.setAttribute('is-valid', '0');
}

function isValidInput(input) {
    const re = new RegExp(input.dataset.reg);
    return re.test(input.value)
}

function isFormValid() {
    return isValidInput(form.elements['name']) && isValidInput(form.elements['email']);
}

/************************************** ТАБЫ ФОТОК *******/

const tabBtns = document.querySelector('.tabs');
const tabTitle = document.querySelectorAll('.people-slider-mini');


tabBtns.addEventListener('click', (event) => {
        let currentBtn = event.target,
            tabId = currentBtn.getAttribute('data-tab'),
            currentText = document.querySelectorAll('.tab-item')

        tabTitle.forEach(function (item) {
            item.classList.remove('active')
        })

        currentText.forEach(function (item) {
                let currentDataText = item.getAttribute('data-tab')
                tabId === currentDataText ? item.classList.remove('none') : item.classList.add('none')
            }
        )
        currentBtn.classList.add('active')
    }
)

/****************************** СДВИГ  ВЛЕВО и ВПРАВО *******/

function swiperight() {
    const tabRight = document.getElementById('right');
    tabRight.addEventListener('click', function () {
        let currentIndex = 0;
        const tabTitleArray = [...tabTitle]
        tabTitleArray.forEach((item, key) => {
            if (item.classList.value.includes('active')) {
                currentIndex = key;
            }
        })
        if (currentIndex === tabTitleArray.length - 1) {
            currentIndex = 0
        } else {
            currentIndex++;
        }
        toggleCarusel(currentIndex, tabTitleArray)
    })
}

swiperight()
swipeleft()

function swipeleft() {
    const tabLeft = document.querySelector('.fa-angle-left');
    tabLeft.addEventListener('click', function () {
        let currentIndex = 0;
        const tabTitleArray = [...tabTitle];
        tabTitleArray.forEach((item, key) => {
            if (item.classList.value.includes('active')) {
                currentIndex = key;
            }
        })
        if (currentIndex - 1 === -1) {
            currentIndex = tabTitleArray.length - 1
        } else {
            currentIndex--;
        }
        toggleCarusel(currentIndex, tabTitleArray);
    })
}

/****************************** КАРУСЕЛЬ *******/

function toggleCarusel(index, array) {
    let dataAttribute = array[index].getAttribute('data-tab');
    array.forEach(function (item) {
        item.classList.remove('active');
    })
    const currentText = document.querySelectorAll('.tab-item');
    currentText.forEach(function (item) {
            let currentDataText = item.getAttribute('data-tab');
            dataAttribute === currentDataText ? item.classList.remove('none') : item.classList.add('none');
        }
    )
    array[index].classList.add('active');
}

/****************************** АККОРДИОН *******/

const items = Array.from(document.querySelectorAll('.accordion-title'));

items.forEach((item) => {
    item.addEventListener('click', itemHandler);
})

function itemHandler(e) {
    e.preventDefault();
    let currentItem = e.target.closest('.accordion-title');
    let currentContent = e.target.nextElementSibling;
    currentItem.classList.toggle('active');
    if (currentItem.classList.contains('active')) {
        currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
    } else {
        currentContent.style.maxHeight = '0';
    }
}