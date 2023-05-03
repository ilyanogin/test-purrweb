let form= document.querySelector('.js-form'),
formInputs = document.querySelectorAll('.js-input'),
formArea= document.querySelector('.inp_7');
form.onsubmit = function () {
  formArea.forEach(function(input){
        if(input.value === ''){
        input.classList.add('invalid');
  }
        else{
            input.classList.remove('invalid');
        }})
        return false
    };
form.onsubmit = function () {
      formInputs.forEach(function(input){
        if (input.value === '') {
            input.classList.add('invalid');
            console.log('input not filled');
        }
         else {
            input.classList.remove('invalid')
        }
        
    })
   return false
};



