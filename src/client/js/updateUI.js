import {resetUI} from '../js/resetUI'

const bodyContainer = document.getElementById('body-container');
const emptyList = document.getElementById('list-placeholder');

//If default text exists, remove it then add card, if no default text, just add new card
const addTripInfo = (res) => {
    if (document.contains(emptyList) == true) {

        emptyList.style.display = "none";

        let tripCard = document.createElement('div');
        tripCard.classList.add('body-card')
        bodyContainer.appendChild(tripCard);

        let tripContainer = document.createElement('div');
        tripContainer.classList.add('body-card-container');
        tripCard.appendChild(tripContainer);

        let newTrip = document.createElement('div');
        tripContainer.appendChild(newTrip)

        let addCity = document.createElement('h2')
        let addTemp = document.createElement('p')
        let addStartDate = document.createElement('p')
        let addEndDate = document.createElement('p')
        let removeTrip = document.createElement('a')
        let addPicture = document.createElement('img')

        addCity.innerHTML = `Destination: ${res.city}`;
        addStartDate.innerHTML = `Departure: ${res.startDate}`;
        addEndDate.innerHTML = `Return: ${document.getElementById('date-end').value}`
        addTemp.innerHTML = `Temperature: ${res.temp}°`;
        removeTrip.innerHTML = `Remove trip`;
        removeTrip.id = "remove-trip";
        addPicture.src = `${res.cityPicture}`;

        newTrip.appendChild(addCity);
        newTrip.appendChild(addTemp);
        newTrip.appendChild(addStartDate);
        newTrip.appendChild(addEndDate);

        let imgContainer = document.createElement('div');
        tripContainer.appendChild(imgContainer);
        addPicture.classList.add('body-card-container-img')
        imgContainer.appendChild(addPicture);

        tripCard.appendChild(removeTrip);

        //Add remove trip button functionality to each card
        removeTrip.addEventListener("click", () => {
            tripCard.remove();
            resetUI();
          });

    } else if (document.contains(emptyList) == false) {
        
        let tripCard = document.createElement('div');
        tripCard.classList.add('body-card')
        bodyContainer.appendChild(tripCard);

        let tripContainer = document.createElement('div');
        tripContainer.classList.add('body-card-container');
        tripCard.appendChild(tripContainer);

        let newTrip = document.createElement('div');
        tripContainer.appendChild(newTrip)

        let addCity = document.createElement('h2')
        let addTemp = document.createElement('p')
        let addStartDate = document.createElement('p')
        let addEndDate = document.createElement('p')
        let removeTrip = document.createElement('a')
        let addPicture = document.createElement('img')

        addCity.innerHTML = `Destination: ${res.city}`;
        addStartDate.innerHTML = `Departure: ${res.startDate}`;
        addEndDate.innerHTML = `Return: ${document.getElementById('date-end').value}`
        addTemp.innerHTML = `Temperature: ${res.temp}°`;
        removeTrip.innerHTML = `Remove Trip`;
        removeTrip.id = "remove-trip";
        addPicture.src = `${res.cityPicture}`;

        newTrip.appendChild(addCity);
        newTrip.appendChild(addTemp);
        newTrip.appendChild(addStartDate);
        newTrip.appendChild(addEndDate);

        let imgContainer = document.createElement('div');
        tripContainer.appendChild(imgContainer);
        addPicture.classList.add('body-card-container-img')
        imgContainer.appendChild(addPicture);

        tripCard.appendChild(removeTrip);

        removeTrip.addEventListener("click", () => {
            tripCard.remove();
            resetUI();
                }
          );
    }
};

export {addTripInfo}
export {resetUI}
