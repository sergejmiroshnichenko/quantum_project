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



