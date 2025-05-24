import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { catalogReducer } from "@Reducers/app.reducer";
import { hydrationMetaReducer } from "@Reducers/hydration.reducer";
import { CatalogState } from "@States/catalog.state";

export interface AppState {
    catalogs: CatalogState
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
    catalogs: catalogReducer
}

export const metaReducers: MetaReducer[] = [hydrationMetaReducer]