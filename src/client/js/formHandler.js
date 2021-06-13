import {addTripInfo} from '../js/updateUI'

//Collects values from form and sends them to API endpoint
const processCity = (event) => {
    event.preventDefault();

    let city = document.getElementById('city').value;
    let startDate = document.getElementById('date-start').value;
    let endDate = document.getElementById('date-end').value;

    if ((city === "") || (startDate === "") || (endDate === "")) {
        alert("Please enter city, departure date, and return date!")
    } else {
    fetch('https://guarded-ridge-29807.herokuapp.com//add', {
           method: 'POST',
           credentials: 'same-origin',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({city: city, startDate: startDate})
       })
       .then((res) => res.json())
       .then((res) => {
           addTripInfo(res);

       }
    )
}};

//Event listener for submit button
document.addEventListener('DOMContentLoaded', () => {
    const submit = document.getElementById("submit-button");
    submit.addEventListener("click", processCity);
}

export {processCity}
