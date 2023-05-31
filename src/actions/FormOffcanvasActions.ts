
import { RJSFSchema, UiSchema } from '@rjsf/utils';

export enum FormOffcanvasActionTypes {
    ShowFormOffcanvas,
    HideFormOffcanvas,
    SubmitFormOffcanvas,
}

export interface FormOffcanvasAction {
  type: FormOffcanvasActionTypes;
  schema?: RJSFSchema;
  uiSchema?: UiSchema;
  formData?: any;
  title?: string;
}

export function showFormOffcanvas(schema:RJSFSchema, uiSchema:UiSchema={}, formData:any={}, title:string): FormOffcanvasAction {
  
  return {
    type: FormOffcanvasActionTypes.ShowFormOffcanvas,
    schema: schema,
    uiSchema: uiSchema,
    formData: formData,
    title: title,
  };
}

export function hideFormOffcanvas(): FormOffcanvasAction {
  return {
    type: FormOffcanvasActionTypes.HideFormOffcanvas,
  };
}

export function submitFormOffcanvas(form): FormOffcanvasAction {  
  console.log("submitFormOffcanvas", form.formData);
  return {
    type: FormOffcanvasActionTypes.SubmitFormOffcanvas,
    formData: form.formData,
  };
}