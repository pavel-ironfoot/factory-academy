import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface cardsState {
    cards: {
        id:number,
        number: string,
        mainPicture: string[],
        blow: boolean,
        hugCleaning: boolean,
        cork: boolean,
        type:string,
        hangingInformation1:string, 
        hangingInformation2:string,
        corkImage:string,
    }[];
    
    searchCards: {
        id:number,
        number: string,
        mainPicture: string[],
        blow: boolean,
        hugCleaning: boolean,
        cork: boolean,
        type:string,
        hangingInformation1:string, 
        hangingInformation2:string,
        corkImage: string,
    }[];
}

const initialState: cardsState = {
    cards: [],
    searchCards: [],
}

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        updateCards(state, action) {
            state.cards = action.payload;
        },
        updateKatalogSearchCards(state, action) {
            state.searchCards = action.payload;
        }
    }
});

export default cardsSlice.reducer;
export const { updateCards,updateKatalogSearchCards, } = cardsSlice.actions;