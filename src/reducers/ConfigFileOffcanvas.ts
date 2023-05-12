import { ConfigFileOffcanvasActionTypes, ConfigFileOffcanvasAction } from "../actions/ConfigFileOffcanvasActions"

const initialState = {
    show: false,
    config_file: null,
}

export default function configFileOffcanvasStore(state = initialState, action : ConfigFileOffcanvasAction) {

    switch (action.type) {
        case ConfigFileOffcanvasActionTypes.ShowConfigFileOffcanvas: 
            return {
                ...state,
                show: true,
                config_file: action.config_file
            };
        case ConfigFileOffcanvasActionTypes.HideConfigFileOffcanvas:
            return {
            ...state,
            show: false,
            config_file: null
            };
        default:
            return state;        
    }
 
}