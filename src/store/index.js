import  { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer } from './reducer';
import { customerReducer } from './customerReducer';
import { composeWithDevTools } from 'redux-devtools-extension';  //npm i redux-devtools-extension инструмернт разработчика
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    cash: reducer,
    customers: customerReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); //thunk асинхронная ф-ция