import { BuildingResponse } from "./save.models";
import * as fromActions from './save.actions';

export interface ListState {
  building: BuildingResponse | null;
  loading: boolean | null;
  error: string | null;
  buildings: BuildingResponse[] | null;
}

export const initialState: ListState = {
  building: null,
  loading: null,
  error: null,
  buildings: null
}

export function reducer( state: ListState = initialState, action: fromActions.All | any) {
  switch (action.Types) {
    case fromActions.Types.CREATE:
      return { ...state, loading: true, error: null }
    case fromActions.Types.CREATE_SUCCESS:
      return { ...state, loading: false, error: null, building: action.building }
    case fromActions.Types.CREATE_ERROR:
      return { ...state, loading: false, error: action.error }
    case fromActions.Types.READ:
      return { ...state, loading: true, error: null }
    case fromActions.Types.READ_SUCCESS:
      return { ...state, loading: false, error: null, buildings: action.buildings }
    case fromActions.Types.READ_ERROR:
      return { ...state, loading: false, error: action.error }

    default:
      return state;
  }
}


