import {Action, ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';

export interface OwnAction extends Action {
  type: string;
  payload?: any;
}

// STATE
export interface State {
  loggedIn: boolean;
  products: string[];
}

export const initialState: State = {
  loggedIn: false,
  products: []
};

// new: metaReducer that just calls the main reducer
export function metaReducer(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state, action) {
    return appReducer(state, action);
  };
}

// new: MetaReducer for StoreModule.forRoot()
export const metaReducers: MetaReducer<any>[] = [metaReducer];
// ACTIONS

export const LOGIN = 'LOGIN';

export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload?: any) {
  }
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload?: any) {
  }
}

export const SET_LOGGEDIN_STATE = 'SET_LOGGEDIN_STATE';

export class SetLoggedInState implements Action {
  readonly type = SET_LOGGEDIN_STATE;

  constructor() {
  }
}

export const LOGOUT = 'LOGOUT';

export class Logout implements Action {
  readonly type = LOGOUT;

  constructor() {
  }
}

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export class FetchProducts implements Action {
  readonly type = FETCH_PRODUCTS;

  constructor() {
  }
}


export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';

export class FetchProductsSuccess implements Action {
  readonly type = FETCH_PRODUCTS_SUCCESS;

  constructor(public payload?: null) {
  }
}


// REDUCER

export function appReducer(state = initialState, action: OwnAction): State {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      sessionStorage.setItem('SiennToken', action.payload.access_token);
      return {
        ...state,
        loggedIn: true
      };
    }

    case SET_LOGGEDIN_STATE: {
      return {
        ...state,
        loggedIn: true
      };
    }

    case LOGOUT: {
      sessionStorage.removeItem('SiennToken');
      return {
        ...state,
        loggedIn: false
      };
    }

    case FETCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: action.payload
      };
    }

    default:
      return state;
  }
}

export type Actions
  = Login |
  LoginSuccess |
  SetLoggedInState |
  Logout |
  FetchProducts |
  FetchProductsSuccess;


// SELECTORS

export const getLoggedState = (state: State) => state.loggedIn;
export const getProducts = (state: State) => state.products;
