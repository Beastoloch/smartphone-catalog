import { useSelector } from 'react-redux';
import { catalogSelectors } from '@/components/Comparison';
import { useMemo, useState } from 'react';

const formatString = (value: string) => value.toLowerCase().trim();

export const useSearchPhone = () => {
	const smartphones = useSelector(catalogSelectors.smartphones);
	const selectedSmartphones = useSelector(catalogSelectors.selectedSmartphones);

	const [searchValue, setSearchValue] = useState<string>('');

	const searchSmartphones = useMemo(
		() => smartphones.filter((v) => !selectedSmartphones.includes(v)),
		[smartphones, selectedSmartphones],
	);

	const searchResultSmartphones = useMemo(
		() =>
			searchSmartphones.filter((v) =>
				formatString(v.name).includes(formatString(searchValue)),
			),
		[searchSmartphones, searchValue],
	);

	return {
		searchSmartphones,
		searchResultSmartphones,
		searchValue,
		setSearchValue,
	};
};
