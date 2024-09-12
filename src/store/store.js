import { configureStore } from "@reduxjs/toolkit";
// import { uiSlice } from "./ui/uiSlice";
// import { calendarSlice } from "./calendar/calendarSlice";
import { authSlice } from "./auth/authSlice";
import { uiSlice, calendarSlice } from "./";

export const store = configureStore({
    reducer: {
        auth:     authSlice.reducer,
        calendar: calendarSlice.reducer,
        ui:       uiSlice.reducer
    },
    middleware: (getDefaultMiddlewere) => getDefaultMiddlewere({
        serializableCheck: false
    })

})