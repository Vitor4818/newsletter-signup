
const button = document.getElementById('button')


function validar(event){
    event.preventDefault(event)
    const errorEmail = document.getElementById('error')
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailInput = document.getElementById('email')
    if (emailInput.value===''){
        emailInput.style.backgroundColor = 'rgba(255, 159, 159, 0.356)';
        emailInput.style.borderColor = 'rgb(255, 133, 133)';
        emailInput.value = ''
        errorEmail.textContent = 'This field is required'
    }else{
        errorEmail.textContent = ''
        if(emailRegex.test(emailInput.value)){
            errorEmail.textContent = ''
            emailInput.style.backgroundColor = 'white';
            emailInput.style.borderColor = 'black';
        }else{
            emailInput.style.backgroundColor = 'rgba(255, 159, 159, 0.356)';
            emailInput.style.borderColor = 'rgb(255, 133, 133)';
            emailInput.value = ''
            errorEmail.textContent = 'Please, type a valid Email'
            
        }
        
    }

}


button.addEventListener('click', validar)

