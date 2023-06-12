import * as fromList from './save/save.reducer';
import { SaveEffects } from './save/save.effects';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface BuildingState {
  list: fromList.ListState
}

export const reducer: ActionReducerMap<BuildingState> = {
  list: fromList.reducer
}

export const effects: any = [
  SaveEffects
]

export const getBuildingState = createFeatureSelector<BuildingState>('building');
