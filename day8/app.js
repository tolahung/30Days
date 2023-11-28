let username = document.getElementById('username');
let email = document.getElementById('email');
let pass = document.getElementById('pass');
let cfpass = document.getElementById('cf-pass');
let form = document.forms.registForm;
console.log(form);


// Show input error message
function isError(input, message){
    // hàm này sẽ thêm class vào thẻ cha của thẻ input và chỏ đến thẻ small sau đó thêm nội dung cho thẻ
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.add('error');
    small.innerText = message;
}

// Show success outline
function isSuccess(input){
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.remove('error');
    small.innerText = '';
}

function checkEmpty(listInput){
    let isEmptyError = false; // biến này để check tổng thể form xem có lỗi không
    listInput.forEach(input => {
        if(input.value.trim() === ''){
            isError(input, `${getFieldName(input)} khong duoc de trong`);
            isEmptyError = true;
        }else{
            isSuccess(input);
        }
    });
    return isEmptyError;// lúc này isEmptyError trả về true có nghĩa là đang có trường để trống
}

function checkEmail(input){
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
    if(regexEmail.test(input.value.trim())){
        isSuccess(input);
    }else{
        isError(input, 'email valid');
    }
}

//Checking usename Length
function checkLength(input, min, max){
    if(input.value.length < min){
        isError(input,`${getFieldName(input)} must be at least ${min} characters`)
    }else if(input.value.length > max){
        isError(
			input,
			`${getFieldName(input)} must be less than ${max} characters`
		)
    }else{
        isSuccess(input)
    }
}   

// Check passwords match
function checkPasswordsMatch(input1, input2) {
	if (input1.value !== input2.value) {
		isError(input2, 'Passwords do not match')
	}
}

// hàm này dùng để tham chiếu đến id của thẻ và lấy ra tên id làm tên input
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    //Ý nghĩa câu lệnh if nyaf là: 
    //vì hàm checkEmpty trả về true là có trường đang để trống vì thế ta dùng toán tử ! 
    //tức là nếu không trường nào để trống thì sẽ chạy những hàm bên trong 
    if(!checkEmpty([username, email, pass, cfpass])){
        checkLength(username, 2, 15);
        checkLength(pass, 6, 25);
        checkEmail(email);
        checkPasswordsMatch(pass, cfpass);
    }else{
        checkEmpty([username, email, pass, cfpass])
    }
})