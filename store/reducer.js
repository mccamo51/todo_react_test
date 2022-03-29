import actions from "./actions";
import AuthClass from "./StorageKey";


export const initialState = {
  loggedIn: Boolean(AuthClass.getLocalData())
};

// dispatch({type: actions.login})
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.login:
      return { ...state, loggedIn: true };
    case actions.logout:
      return { ...state, loggedIn: false };
  }
};
