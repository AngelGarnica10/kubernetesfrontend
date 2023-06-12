import { createSelector } from "@ngrx/store";
import { getBuildingState, BuildingState } from '../index';
import { ListState } from "./save.reducer";

export const getListState = createSelector(
  getBuildingState,
  (state: BuildingState) => state.list
)


export const getLoading = createSelector(
  getListState,
  (state: ListState) => state.loading
)
