

export enum ClusterSelectorActionTypes {
    SelectCluster,
    LoadClusters,
  }
  
  export interface ClusterSelectorAction {
    type: ClusterSelectorActionTypes;
    clusters?: string[];
    selected?: string;
  }
  
  export function loadClusters(clusters: string[]): ClusterSelectorAction {
    return {
      type: ClusterSelectorActionTypes.LoadClusters,
      clusters: clusters
    };
  }
  
  export function selectCluster(name: string): ClusterSelectorAction {
    return {
      type: ClusterSelectorActionTypes.SelectCluster,
      selected: name
    };
  }