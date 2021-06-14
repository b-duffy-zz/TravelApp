const bodyContainer = document.getElementById('body-container');
const emptyList = document.getElementById('list-placeholder');

function resetUI() {
    const bodyCard = document.querySelector('.body-card')
    if (!bodyContainer.contains(bodyCard)) {
        emptyList.style.display = "inline";
        }
}


//If there are no more cards, restore default text to body container
document.addEventListener('DOMContentLoaded', () =>{
    bodyContainer.addEventListener('click', resetUI);
});

export {resetUI}