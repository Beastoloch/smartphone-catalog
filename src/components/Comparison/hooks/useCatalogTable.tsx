import { useDispatch, useSelector } from 'react-redux';
import { catalogActions, catalogSelectors } from '@/components/Comparison';
import { specifications } from '../const/specifications';
import { SpecificationTable } from '@/components/Comparison/types';
import { useEffect, useMemo } from 'react';
import { CatalogShowDifference } from '@/components/Comparison/CatalogShowDifference';
import { Phone } from '@/components/Phone/Phone';
import { LOAD_STATUS } from '@/components/Comparison/logic/types';
import { Smartphone } from '@/types/entities';

export const useCatalogTable = () => {
	const dispatch = useDispatch();
	const differences = useSelector(catalogSelectors.differences);
	const smartphones = useSelector(catalogSelectors.smartphones);
	const selectedSmartphones = useSelector(catalogSelectors.selectedSmartphones);
	const isShowDifferences = useSelector(catalogSelectors.isShowDifferences);
	const statusLoad = useSelector(catalogSelectors.statusLoad);

	useEffect(() => {
		dispatch(catalogActions.setStatusLoad(LOAD_STATUS.loading));

		fetch('/public/smartphones.json')
			.then((r) => r.json())
			.then((r: Smartphone[]) => {
				dispatch(catalogActions.setResponse(r));
			})
			.catch(() => {
				dispatch(catalogActions.setStatusLoad(LOAD_STATUS.error));
			});
	}, []);

	const specificationsTableValues = useMemo(() => {
		return specifications.reduce((result, { text, property, formatter = (value) => value }) => {
			if (isShowDifferences && !differences.includes(property)) {
				return result;
			}

			result.push({
				property,
				values: [text, ...selectedSmartphones.map((v) => formatter(v[property]))],
			});

			return result;
		}, [] as SpecificationTable[]);
	}, [isShowDifferences, differences, selectedSmartphones]);

	const infoTableValues = useMemo(
		() =>
			selectedSmartphones.reduce(
				(r, v, idx) => {
					return [
						...r,
						<Phone
							phone={v}
							isShowArrow={smartphones.length > selectedSmartphones.length}
							styles={`${idx === selectedSmartphones.length - 1 ? 'popup-position-top' : 'popup-position-top-left'}`}
						/>,
					];
				},
				[<CatalogShowDifference />],
			),
		[selectedSmartphones, smartphones.length],
	);

	return {
		statusLoad,
		infoTableValues,
		specificationsTableValues,
	};
};
