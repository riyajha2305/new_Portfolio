const contactForm = document.querySelector('.contactForm');
let name = document.getElementById('contactName');
let email = document.getElementById('contactEmail');
let subject = document.getElementById('contactSubject');
let message = document.getElementById('contactMessage');


contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    let formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }

    console.log(formData);

    let xhr = new XMLHttpRequest();
    xhr.open('POST','/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log('xhrresponseText')
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert("Email sent");
            name.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        }else{
            alert('Something went wrong');
        }
    }

    xhr.send(JSON.stringify(formData));
})
