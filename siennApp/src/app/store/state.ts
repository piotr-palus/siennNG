import {Action} from '@ngrx/store';

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

export const LOGOUT = 'LOGOUT';

export class Logout implements Action {
  readonly type = LOGOUT;

  constructor(public payload?: any) {
  }
}

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export class LogoutSuccess implements Action {
  readonly type = LOGOUT_SUCCESS;

  constructor(public payload?: any) {
  }
}

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export class FetchProducts implements Action {
  readonly type = FETCH_PRODUCTS;

  constructor(public payload?: any) {
  }
}


export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';

export class FetchProductsSuccess implements Action {
  readonly type = FETCH_PRODUCTS_SUCCESS;

  constructor(public payload?: null) {
  }
}

export const UPLOAD_PRODUCT = 'UPLOAD_PRODUCT';

export class UploadProduct implements Action {
  readonly type = UPLOAD_PRODUCT;

  constructor(public payload?: any) {
  }
}

export const UPLOAD_PRODUCT_SUCCESS = 'UPLOAD_PRODUCT_SUCCESS';

export class UploadProductSuccess implements Action {
  readonly type = UPLOAD_PRODUCT_SUCCESS;

  constructor(public payload?: any) {
  }
}


// REDUCER

export function appReducer(state = initialState, action: OwnAction): State {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      console.log(action.payload);
      sessionStorage.setItem('SiennToken', action.payload.access_token);
      return {
        ...state,
        loggedIn: true
      };
    }

    case LOGOUT_SUCCESS: {
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

    case UPLOAD_PRODUCT_SUCCESS: {
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
  LoginSuccess|
  Logout |
  FetchProducts;


// SELECTORS

export const getLoggedState = (state: State) => state.loggedIn;
export const getProducts = (state: State) => state.products;
