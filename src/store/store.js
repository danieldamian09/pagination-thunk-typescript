import { combineReducers } from '@reduxjs/toolkit';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from '../reducer/reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  pokemons: reducer,
})


export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

