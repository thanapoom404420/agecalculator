const days = document.getElementById('days');
const months = document.getElementById('months');
const years = document.getElementById('years');
const day = document.getElementById('days-ans');
const month = document.getElementById('months-ans');
const year = document.getElementById('years-ans');
const form = document.getElementById('form');


form.addEventListener('submit',function(e){
    e.preventDefault();
    const a = new Date();
    let p = a.getFullYear();
    if(days.value === "" || days.value > 31){
        error(days,'This field is required');
    }
    else{
        success(days)
        calculate();
    }
    if(months.value ==="" || months.value > 12){
        error(months,'This field is required');
    }
    else {
        success(months)
        calculate();
    }
    if(years.value ==="" || years.value > p){
        error(years,'This field is required');
    }
    else {
        success(years)
        calculate();
    }
});

function calculate(){
    const x = new Date();
    let currentYear = x.getFullYear();
    let currentMonth = x.getMonth() + 1;
    let currentDay = x.getDate();
    let yearsDiff = currentYear - years.value;
    let monthsDiff = currentMonth - months.value;
    let daysDiff = currentDay - days.value;


    if (daysDiff < 0) {
        monthsDiff--; 
        daysDiff += new Date(currentYear, currentMonth, 0).getDate();
        day.textContent = daysDiff < 10 ? '0' + daysDiff : daysDiff;
        month.textContent = monthsDiff < 10 ? '0' + monthsDiff : monthsDiff;
        year.textContent = yearsDiff < 10 ? '0' + yearsDiff : yearsDiff;
    }

    if (monthsDiff < 0) {
        yearsDiff--; 
        monthsDiff += 12; 
        day.textContent = daysDiff < 10 ? '0' + daysDiff : daysDiff;
        month.textContent = monthsDiff < 10 ? '0' + monthsDiff : monthsDiff;
        year.textContent = yearsDiff < 10 ? '0' + yearsDiff : yearsDiff;
    }
    
     
}
calculate();

function error(input,message){
    const formControl = input.parentElement;
    formControl.className= 'info-box error';
    const small = formControl.querySelector('small');
    small.textContent = message;
}

function success(input){
    const formControl = input.parentElement;
    formControl.className= 'info-box input';
}


