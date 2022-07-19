const form = document.getElementById('form'),
    button = document.getElementById('button'),
    formInputs = document.querySelectorAll('.input'),
    inputName = document.getElementById('name'),
    inputEmail = document.querySelector('.js-input-email');

const p = document.createElement('p');


form.onsubmit = function (){
    let emailValue = inputEmail.value,
        nameValue = inputName.value;

    formInputs.forEach((input) => {
        if(input.value === ''){
            input.classList.add('error');
            input.append(p);
            p.textContent='Поле пустое';
            p.style.color='red';
            // p.position='absolute';
        }
    })
    return false
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
        console.log(tabTitleArray)
        tabTitleArray.forEach((item, key) => {
            if (item.classList.value.includes('active')) {
                currentIndex = key;
            }
        })
        if (currentIndex === tabTitleArray.length-1) {
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
            currentIndex = tabTitleArray.length-1
        } else {
            currentIndex--;
        }
        toggleCarusel(currentIndex, tabTitleArray);
    })
}

/****************************** КАРУСЕЛЬ *******/

function toggleCarusel(index, array){
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










// const inputArr = Array.from(form);
// const validInputArr = [];
//
// inputArr.forEach((item) => {
//     if(item.hasAttribute('data-reg')){
//         item.setAttribute('is-valid', '0');
//         validInputArr.push(item);
//     }
// })
//
//
// form.addEventListener("input", inputHandler);
// button.addEventListener('click', buttonHandler);
//
// function inputHandler({target}) {
//     if (target.hasAttribute("data-reg")) {
//         inputCheck(target);
//     }
// }
//
// function inputCheck(item) {
//     const inputValue = item.value;
//     const inputReg = item.getAttribute("data-reg");
//     const reg = new RegExp(inputReg);
//     if (reg.test(inputValue)) {
//         item.style.border = '1.6px solid #0EAC00';
//         item.setAttribute('is-valid', '1');
//     } else {
//         item.style.border = '1.6px solid #EB5757';
//         item.setAttribute('is-valid', '0');
//     }
// }
//
// function buttonHandler(e) {
//     const isAllValid = [];
//     validInputArr.forEach((item) => {
//         isAllValid.push(item.getAttribute('is-valid'));
//     })
//     const isValid = isAllValid.reduce((acc,curr) => {
//         return acc && curr
//     });
//     if(!Boolean(Number(isValid))){
//         e.preventDefault();
//     }
// }



