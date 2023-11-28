
const demoData = [
    {
        name: 'Day 1'
    },

    {
        name: 'Day 2'
    }
]

function saveData(data){
    localStorage.setItem('miniProject', JSON.stringify(data));
}

// saveData(demoData);

function loadData(){
    return JSON.parse(localStorage.getItem('miniProject'));
}


// console.log(loadData());

function isError(mess){
    const small = formAdd.querySelector('small');
    small.innerText = mess; 
}
function isSuccess(mess){
    const small = formAdd.querySelector('small');
    small.innerText = mess; 
}

function add(newArr){
    let data = loadData();
    data.push(newArr);
    saveData(data);
}


function checkEmpty(input){
    if(input.value.trim() === ''){
        isError('B can nhap du lieu vao form');
    }else{
        checkLength(input,2,15);
    }
}

function checkLength(input, min, max){
    const length = true
    if(input.value.length < min){
        isError('ban can nhap tren 2 ky tu');
        length =false
    }else if(input.value.length > max){
        isError('phai khong vuot quas nhat 10 ki tu');
    }else{
        const newArr = {
            name: input.value
        }
        add(newArr);
        isError('');
        isSuccess(`${input.value} da them thanh cong`);
        input.value = '';
    }
    return length;
}


//Event
const formAdd = document.forms.form;
let nameInput = document.querySelector('.namePJ');
formAdd.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkEmpty(nameInput);
})


