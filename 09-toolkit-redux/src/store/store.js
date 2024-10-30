import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter";
import { pokemonSlice } from "./slices/pokemon";
import { todosApi } from "./apis/todosApi";

/**
 * @constant store
 * @description This is the main store of our react app
 */
export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    // Espacio donde voy almacenar los resultados de mis end points.
    [todosApi.reducerPath]: todosApi.reducer,
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
  },

  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
