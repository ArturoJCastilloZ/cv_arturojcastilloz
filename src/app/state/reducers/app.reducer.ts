import { createReducer, on } from "@ngrx/store";
import { 
    GET_ABOUT_SUCCESS,
    GET_HEADERS_SUCCESS,
    GET_HERO_SUCCESS,
    GET_IMAGES_SUCCESS,
    GET_JOBS_SUCCESS,
    GET_STUDIES_SUCCESS, SHOW_SPINNER 
} from "@Actions/global.actions";
import { CatalogState } from "@States/catalog.state";

export const initialState: CatalogState = {
    menu: [],
    about: [],
    images: [],
    hero: [],
    studies: [],
    jobs: [],
    showSpinner: false
}

export const catalogReducer = createReducer(
    initialState,
    on(GET_HEADERS_SUCCESS, (state, {response}) => ({
        ...state,
        menu: response
    })),
    on(GET_ABOUT_SUCCESS, (state, {response}) => ({
        ...state,
        about: response,
        studies: [],
        hero: [],
        jobs: []
    })),
    on(GET_IMAGES_SUCCESS, (state, {response}) => ({
        ...state,
        images: response
    })),
    on(GET_HERO_SUCCESS, (state, {response}) => ({
        ...state,
        hero: response,
        studies: [],
        about: [],
        jobs: []
    })),
    on(GET_STUDIES_SUCCESS, (state, {response}) => ({
        ...state,
        about: [],
        studies: response,
        hero: [],
        jobs: []
    })),
    on(GET_JOBS_SUCCESS, (state, {response}) => ({
        ...state,
        about: [],
        studies: [],
        hero: [],
        jobs: response
    })),
    on(SHOW_SPINNER, (state, {loading}) => ({
        ...state,
        showSpinner: loading
    })),
);