import {processCity} from '../js/formHandler'
import {addTripInfo} from '../js/updateUI'
import {resetUI} from '../js/resetUI'

import '../styles/main.scss';

import favicon from '../styles/assets/favicon.ico';
import boat from '../styles/assets/boat.png';

const headerLogo = document.getElementById('header-logo');
headerLogo.src = boat;

export {
    processCity,
    addTripInfo,
    resetUI
}
