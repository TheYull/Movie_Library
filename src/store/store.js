import { configureStore, createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import themeReducer from "../features/theme/themeSlice";
import contentReducer from "../features/content/contentSlice";
import personReducer from "../features/persons/personSlice";
import searchReducer from "../features/search/searchSlice";
import onTvReducer from "../features/ontvshows/onTvSlice";
import personFilmographyReducer from "../features/persons/personFilmography/personFilmographySlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        content: contentReducer,
        onTv: onTvReducer,
        person: personReducer,
        search: searchReducer,
        personFilmography: personFilmographyReducer,
    }
});

export const useAppSelector = (selector) => useSelector(createSelector(selector, (res) => res));