import { Smartphone } from '@/types/entities';

export enum LOAD_STATUS {
	none = 'none',
	loading = 'loading',
	loaded = 'loaded',
	error = 'error',
}

export type Specifications = (keyof Smartphone)[];

export interface CatalogSchema {
	statusLoad: LOAD_STATUS;
	isShowDifferences: boolean;
	differences: Specifications;
	showSmartphoneCount: number;
	smartphones: Smartphone[];
	selectedSmartphones: Smartphone[];
}

export interface ChangeSmartphonePayload {
	from: Smartphone;
	to: Smartphone;
}
