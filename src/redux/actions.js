import { SET_SELECTED_SECTION, SET_ACTIVE_SECTION } from './types.js'

export function setSelectedSection(move) {
    return {
        type: SET_SELECTED_SECTION,
        payload: move
    }
}

export function setActiveSection(section) {
    return {
        type: SET_ACTIVE_SECTION,
        payload: section
    }
}