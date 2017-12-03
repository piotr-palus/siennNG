import {Action} from '@ngrx/store';

// STATE
export interface State {
  loggedIn: boolean;
  name: string;
  email: string;
  users: string[];
}

export const initialState: State = {
  loggedIn: false,
  name: '',
  email: '',
  users: []
};

// ACTIONS

export const LOGIN = 'LOGIN';

export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload?: any) {
  }
}

export const LOGOUT = 'LOGOUT';

export class Logout implements Action {
  readonly type = LOGOUT;

  constructor(public payload?: any) {
  }
}

export const SAVE_USER_INFO = 'SAVE_USER_INFO';

export class SaveUserInfo implements Action {
  readonly type = SAVE_USER_INFO;

  constructor(public payload: any) {
  }
}

export const ADD_USER_TO_GAME = 'ADD_USER_TO_GAME';

export class AddUserToGame implements Action {
  readonly type = ADD_USER_TO_GAME;

  constructor(public payload: any) {
  }
}

export const UPDATE_USERS_IN_GAME = 'UPDATE_USERS_IN_GAME';

export class UpdateUsersInGame implements Action {
  readonly type = UPDATE_USERS_IN_GAME;

  constructor(public payload: any) {
  }
}


// REDUCER

export function appReducer(state = initialState, action: Action): State {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        loggedIn: true
      };
    }

    case LOGOUT: {
      return {
        ...state,
        loggedIn: false
      };
    }

    case SAVE_USER_INFO: {
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name
      };
    }

    case ADD_USER_TO_GAME: {
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    }

    case UPDATE_USERS_IN_GAME: {
      return {
        ...state,
        users: action.payload
      };
    }

    default:
      return state;
  }
}

export type Actions
  = Login |
  Logout |
  SaveUserInfo |
  AddUserToGame |
  UpdateUsersInGame;


// SELECTORS

export const getLoggedState = (state: State) => state.loggedIn;
export const getUserName = (state: State) => state.name;
export const getUserEmail = (state: State) => state.email;
export const getUsersInGame = (state: State) => state.users;
