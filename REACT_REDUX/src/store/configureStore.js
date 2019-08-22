import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers"
import thunk from "redux-thunk";

export default function configureStore(initialState) {
    // const cEnhancers = typeof window === 'object' &&
    //     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    //     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    //         // Extensions
    //     }) : compose;

    // const enhancers = cEnhancers(
    //     applyMiddleware(thunk)
    // );

    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk));
}

// import { createStore, applyMiddleware } from "redux";
// import rootReducer from "../reducers"
// import thunk from "redux-thunk";

// console.log(rootReducer);

// export default function configureStore(initialState) {
//     return createStore(
//         rootReducer, 
//         initialState, 
//         applyMiddleware(thunk));
// }