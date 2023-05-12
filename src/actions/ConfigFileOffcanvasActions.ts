import { ConfigFileModel } from "../api/StackdApi";

export enum ConfigFileOffcanvasActionTypes {
    ShowConfigFileOffcanvas,
    HideConfigFileOffcanvas,
  }
  
  export interface ConfigFileOffcanvasAction {
    type: ConfigFileOffcanvasActionTypes;
    config_file?: ConfigFileModel;
  }
  
  export function showConfigFileOffcanvas(config_file:ConfigFileModel): ConfigFileOffcanvasAction {
    return {
      type: ConfigFileOffcanvasActionTypes.ShowConfigFileOffcanvas,
      config_file: config_file
    };
  }
  
  export function hideConfigFileOffcanvas(): ConfigFileOffcanvasAction {
    return {
      type: ConfigFileOffcanvasActionTypes.HideConfigFileOffcanvas,
    };
  }