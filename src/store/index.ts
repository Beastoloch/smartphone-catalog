import { configureStore } from '@reduxjs/toolkit';
import { catalogReducer } from '@/components/Comparison';

export const store = configureStore({
	reducer: {
		catalog: catalogReducer,
	}
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
