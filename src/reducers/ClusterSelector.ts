import { ClusterSelectorActionTypes, ClusterSelectorAction } from "../actions/ClusterSelectorAction"

const initialState = {
    clusters: null,
    selected: null,
}

export default function clusterSelectorStore(state = initialState, action : ClusterSelectorAction) {

    switch (action.type) {
        case ClusterSelectorActionTypes.LoadClusters:
            return {
                ...state,
                clusters: action.clusters                
            };
        case ClusterSelectorActionTypes.SelectCluster:
            return {
                ...state,
                selected: action.selected
            };
        default:
            return state;        
    }
 
}