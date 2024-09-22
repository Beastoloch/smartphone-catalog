import styles from './Catalog.module.scss';
import { Table, TableRow, TableHead, TableColumn, TableText } from '@/UI/Table';
import { Wrapper } from '@/UI/Wrapper/Wrapper';
import { ProductNumber } from '@/components/ProductNumber/ProductNumber';
import { useCatalogTable } from '@/components/Comparison/hooks/useCatalogTable';
import { LOAD_STATUS } from '@/components/Comparison/logic/types';

export const Catalog = () => {
	const { specificationsTableValues, infoTableValues, statusLoad } = useCatalogTable();

	if (statusLoad === LOAD_STATUS.none) {
		return null;
	}

	if (statusLoad === LOAD_STATUS.loading) {
		return (
			<div className={styles.comparison}>
				<Wrapper>
					<h4>Loading smartphones...</h4>
				</Wrapper>
			</div>
		);
	}

	if (statusLoad === LOAD_STATUS.error) {
		return (
			<div className={styles.comparison}>
				<Wrapper>
					<h4>Error load smartphones</h4>
				</Wrapper>
			</div>
		);
	}

	return (
		<div className={styles.comparison}>
			<Wrapper>
				<div className={styles.comparison__head}>
					<p className={styles.comparison__headTitle}>Смартфоны</p>
					<ProductNumber />
				</div>
			</Wrapper>
			<Wrapper>
				<Table>
					<TableHead style={{ paddingBottom: '76px' }}>
						{infoTableValues.map((value, idx) =>
							idx === 0 ? (
								<TableColumn key={idx}>{value}</TableColumn>
							) : (
								<TableColumn key={idx}>{value}</TableColumn>
							),
						)}
					</TableHead>
				</Table>
			</Wrapper>
			<div className={styles.comparison__background}>
				<Wrapper>
					<Table>
						{specificationsTableValues.map((row) => (
							<TableRow key={row.property}>
								{row.values.map((column, idx) =>
									idx === 0 ? (
										<TableColumn
											key={idx}
											style={{ color: '#a4a9b9', minWidth: '150px' }}
										>
											<TableText>{String(column).toUpperCase()}</TableText>
										</TableColumn>
									) : (
										<TableColumn key={idx} style={{ marginLeft: '2.5%' }}>
											<TableText>{column}</TableText>
										</TableColumn>
									),
								)}
							</TableRow>
						))}
					</Table>
				</Wrapper>
			</div>
		</div>
	);
};
