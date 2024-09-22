import { Specification } from '@/components/Comparison/types';
import trueIcon from '@/images/true.svg';
import falseIcon from '@/images/false.svg';

export const specifications: Specification[] = [
	{
		text: 'производитель',
		property: 'producerName',
	},
	{
		text: 'год релиза',
		property: 'releaseYear',
	},
	{
		text: 'Диагональ экрана (дюйм)',
		property: 'diagonal',
	},
	{
		text: 'Страна-производитель',
		property: 'producerCountry',
	},
	{
		text: 'Объем памяти',
		property: 'ramMemory',
		formatter: (value: string) => `${value} ГБ`,
	},
	{
		text: 'Частота обновления экрана',
		property: 'refreshRate',
		formatter: (value: any) => `${value} Гц`,
	},
	{
		text: 'NFC',
		property: 'nfc',
		formatter: (value: string) => (
			<img
				style={{ width: '22px' }}
				src={value ? trueIcon : falseIcon}
				alt={value}
			/>
		),
	},
	{
		text: 'Поддержка eSIM',
		property: 'esim',
		formatter: (value: string) => (
			<img
				style={{ width: '22px' }}
				src={value ? trueIcon : falseIcon}
				alt={value}
			/>
		),
	},
	{
		text: 'Поддержка беспроводной зарядки',
		property: 'wirelessCharging',
		formatter: (value: string) => (
			<img
				style={{ width: '22px' }}
				src={value ? trueIcon : falseIcon}
				alt={value}
			/>
		),
	},
	{
		text: 'Стоимость',
		property: 'price',
		formatter: (value: any) => `${value} ₽`,
	},
];
