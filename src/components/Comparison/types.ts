import { Smartphone } from '@/types/entities';
import { ReactNode } from 'react';

export interface Specification {
	text: string;
	property: keyof Smartphone;
	formatter?: (value: any) => ReactNode;
}

export interface SpecificationTable {
	property: keyof Smartphone;
	values: ReactNode[];
}
