import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface changeState {
    showSwitcher: boolean;
    showCorksSwitcher: boolean;
    showEditInformation: boolean,
}
const initialState: changeState = {
    showSwitcher: false,
    showCorksSwitcher: false,
    showEditInformation: false,
}

const showPopupSlice = createSlice({
    name: 'show popup',
    initialState,
    reducers: {
        changeShowLoginPopup(state, action: PayloadAction<boolean>) {
            state.showSwitcher = action.payload;
        },
        changeShowCorkPopup(state, action: PayloadAction<boolean>) {
            state.showCorksSwitcher = action.payload;
        },
        changeShowEditPopup(state, action: PayloadAction<boolean>) {
            state.showEditInformation = action.payload;
        }
    }
});

export default showPopupSlice.reducer;
export const { changeShowLoginPopup, changeShowCorkPopup, changeShowEditPopup } = showPopupSlice.actions;