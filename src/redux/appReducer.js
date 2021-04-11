import { SET_SELECTED_SECTION, SET_ACTIVE_SECTION } from './types.js';
import { SECTIONS } from '../components/Sections.js';

const initialAppState = {
    activeSection: 'home',
}

function changeActiveSection(currentSection, move = null) {
    const index = SECTIONS.indexOf(currentSection);
    let section = currentSection;

    if (index === -1) {
        return new Error('undefined section ' + currentSection);
    }

    if (move === 'up' && index !== 0) {
        section = SECTIONS[index - 1];
    }

    if (move === 'down' && index !== (SECTIONS.length - 1)) {
        section = SECTIONS[index + 1];
    }

    return section;
}

export const appReducer = (state = initialAppState, action) => {
    switch (action.type) {
        case SET_SELECTED_SECTION:
            return {...state, activeSection: changeActiveSection(state.activeSection, action.payload)};
        case SET_ACTIVE_SECTION:
            return {...state, activeSection: action.payload};
        default: return state;
    }
}