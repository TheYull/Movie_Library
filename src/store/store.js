import { configureStore, createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import themeReducer from "../features/theme/themeSlice";
import contentReducer from "../features/content/contentSlice"
import personReducer from "../features/persons/personSlice"
import searchReducer from "../features/search/searchSlice"

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        content: contentReducer,
        person: personReducer,
        search: searchReducer,
    }
});

export const useAppSelector = (selector) => useSelector(createSelector(selector, (res) => res));