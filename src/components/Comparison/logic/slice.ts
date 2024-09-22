import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CatalogSchema, ChangeSmartphonePayload, LOAD_STATUS, Specifications } from './types';
import { DEFAULT_SMARTPHONES_COUNT } from '@/components/Comparison/const/phones';
import { Smartphone } from '@/types/entities';

const initialState: CatalogSchema = {
	differences: [],
	smartphones: [],
	statusLoad: LOAD_STATUS.none,
	isShowDifferences: false,
	showSmartphoneCount: DEFAULT_SMARTPHONES_COUNT,
	selectedSmartphones: [],
};

const catalogSlice = createSlice({
	name: 'catalog',
	initialState,
	reducers: {
		setStatusLoad: (state, action: PayloadAction<LOAD_STATUS>) => {
			state.statusLoad = action.payload;
		},

		setResponse: (state, action: PayloadAction<Smartphone[]>) => {
			state.smartphones = action.payload;
			state.selectedSmartphones = action.payload.slice(0, DEFAULT_SMARTPHONES_COUNT);
			state.statusLoad = LOAD_STATUS.loaded;
		},

		changeDifferences: (state) => {
			if (!state.isShowDifferences || !state.selectedSmartphones.length) {
				return;
			}

			const specifications = Object.keys(state.selectedSmartphones[0]) as Specifications;
			state.differences = specifications.reduce((result, specification) => {
				const value = state.selectedSmartphones[0][specification];
				const isDifference = state.selectedSmartphones.some(
					(smartphone) => smartphone[specification] !== value,
				);

				if (isDifference) {
					result.push(specification);
				}

				return result;
			}, [] as Specifications);
		},

		setShowDifferences: (state, action: PayloadAction<boolean>) => {
			state.isShowDifferences = action.payload;

			if (!state.isShowDifferences) {
				state.differences = [];
			}

			catalogSlice.caseReducers.changeDifferences(state);
		},

		selectSmartphone: (state, action: PayloadAction<ChangeSmartphonePayload>) => {
			const index = state.selectedSmartphones.findIndex(
				(v) => v.id === action.payload.from.id,
			);
			if (index === -1) {
				return;
			}
			state.selectedSmartphones.splice(index, 1, action.payload.to);
			catalogSlice.caseReducers.changeDifferences(state);
		},

		setShowSmartphoneCount: (state, action: PayloadAction<number>) => {
			state.showSmartphoneCount = action.payload;

			if (action.payload === state.selectedSmartphones.length) {
				return;
			}

			if (action.payload < state.selectedSmartphones.length) {
				state.selectedSmartphones.splice(action.payload);
			} else {
				for (const smartphone of state.smartphones) {
					if (action.payload === state.selectedSmartphones.length) {
						break;
					}

					if (!state.selectedSmartphones.find((v) => v.id === smartphone.id)) {
						state.selectedSmartphones.push(smartphone);
					}
				}
			}

			catalogSlice.caseReducers.changeDifferences(state);
		},
	},
	selectors: {
		differences: (state) => state.differences,
		smartphones: (state) => state.smartphones,
		isShowDifferences: (state) => state.isShowDifferences,
		showSmartphoneCount: (state) => state.showSmartphoneCount,
		selectedSmartphones: (state) => state.selectedSmartphones,
		smartphonesCount: (state) => state.smartphones.length,
		selectedSmartphonesCount: (state) => state.smartphones.length,
		statusLoad: (state) => state.statusLoad,
	},
});

export const {
	actions: catalogActions,
	reducer: catalogReducer,
	selectors: catalogSelectors,
} = catalogSlice;
