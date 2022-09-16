import { combineReducers } from '@reduxjs/toolkit';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from '../reducer/reducer';
import thunk from 'redux-thunk';
import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux';

const rootReducer = combineReducers({
  pokemons: reducer,
})

export type IRootState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
