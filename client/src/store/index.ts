import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./cardSlice";
import showPopupSlice from "./showPopupSlice";


const rootReducer = combineReducers({
    allCards: cardsSlice,
    popup:showPopupSlice,
});

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;