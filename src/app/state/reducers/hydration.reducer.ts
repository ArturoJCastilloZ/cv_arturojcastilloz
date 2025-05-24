import { ActionReducer, Action } from "@ngrx/store";
import { AppState } from "@States/app.state";
import { hydrateSuccess } from "@Actions/hydration.action";

function isHydrateSuccess(action: Action): action is ReturnType<typeof hydrateSuccess> {
    return action.type === hydrateSuccess.type;
}

export const hydrationMetaReducer = (reducer: ActionReducer<AppState>): ActionReducer<AppState> => {
    return (state, action) => {
        if (isHydrateSuccess(action)) {
            return action.state;
        } else {
            return reducer(state, action);
        }
    };
};