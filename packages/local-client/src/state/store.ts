// import { ActionType } from './action-types/index';
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { persistMiddleware } from "./middlewares/persist-middleware";

export const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk, persistMiddleware)));

// store.dispatch({
//   type: ActionType.INSERT_CELL_AFTER,
//   payload: {
//     id: null,
//     type: 'code',
//   }
// });

// store.dispatch({
//   type: ActionType.INSERT_CELL_AFTER,
//   payload: {
//     id: null,
//     type: 'text'
//   }
// });

// store.dispatch({
//   type: ActionType.INSERT_CELL_AFTER,
//   payload: {
//     id: null,
//     type: 'code'
//   }
// });

// store.dispatch({
//   type: ActionType.INSERT_CELL_AFTER,
//   payload: {
//     id: null,
//     type: 'text'
//   }
// });