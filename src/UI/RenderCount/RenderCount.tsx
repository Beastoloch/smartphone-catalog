import { useRef } from 'react';

// @TODO НАДО УДАЛИТЬ ПОТОМ
export const RenderCount = () => {
	const count = useRef(1);
	count.current += 1;

	return (
		<div style={{ position: 'absolute', color: 'red' }}>Was rendered {count.current} times</div>
	);
};
