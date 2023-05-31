import { FormOffcanvasActionTypes, FormOffcanvasAction } from "../actions/FormOffcanvasActions"
import { RJSFSchema, UiSchema } from '@rjsf/utils';

const initialState = {
    show: false,
    schema: {},
    uiSchema: {},
    formData: {},
    title: "formoffcanvas title",
}

export default function FormOffcanvasStore(state = initialState, action : FormOffcanvasAction) {

    switch (action.type) {
        case FormOffcanvasActionTypes.ShowFormOffcanvas: 
            
            let st = {
                ...state,
                show: true,
                schema: action.schema,
                uiSchema: action.uiSchema,
                formData: action.formData,
                title: action.title,
            };
            
            return st;
        case FormOffcanvasActionTypes.HideFormOffcanvas:
            return {
            ...state,
            show: false,            
            };
        case FormOffcanvasActionTypes.SubmitFormOffcanvas:
                return {
                ...state,
                show: true,            
                };
        default:
            return state;        
    }
 
}