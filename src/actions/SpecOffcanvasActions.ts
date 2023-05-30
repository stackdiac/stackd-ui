import { SpecModel } from "../api/StackdApi";

export enum SpecOffcanvasActionTypes {
    ShowSpecOffcanvas,
    HideSpecOffcanvas,
}

export interface SpecOffcanvasAction {
  type: SpecOffcanvasActionTypes;
  spec?: SpecModel;
}

export function showSpecOffcanvas(spec:SpecModel): SpecOffcanvasAction {
  return {
    type: SpecOffcanvasActionTypes.ShowSpecOffcanvas,
    spec: spec
  };
}

export function hideSpecOffcanvas(): SpecOffcanvasAction {
  return {
    type: SpecOffcanvasActionTypes.HideSpecOffcanvas,
  };
}