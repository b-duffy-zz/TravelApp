const bodyContainer = document.getElementById('body-container');
const bodyCard = document.querySelector('.body-card')
const emptyList = document.getElementById('list-placeholder');

//If there are no more cards, restore default text to body container
const resetUI = () => {
    if (bodyContainer.contains(bodyCard) == false) {
        emptyList.style.display = "inline";
        } 
    };

export {resetUI}