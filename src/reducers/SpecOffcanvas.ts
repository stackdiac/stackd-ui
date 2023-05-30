import { SpecOffcanvasActionTypes, SpecOffcanvasAction } from "../actions/SpecOffcanvasActions"

const initialState = {
    show: false,
    spec: null,
}

export default function specOffcanvasStore(state = initialState, action : SpecOffcanvasAction) {

    switch (action.type) {
        case SpecOffcanvasActionTypes.ShowSpecOffcanvas: 
            return {
                ...state,
                show: true,
                spec: action.spec
            };
        case SpecOffcanvasActionTypes.HideSpecOffcanvas:
            return {
            ...state,
            show: false,
            spec: null
            };
        default:
            return state;        
    }
 
}