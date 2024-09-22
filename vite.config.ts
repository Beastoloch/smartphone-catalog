import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(() => {
	return {
		plugins: [react()],
		resolve: {
			alias: {
				'@/types': path.join(__dirname, 'src/types'),
				'@/components': path.join(__dirname, 'src/components'),
				'@/data': path.join(__dirname, 'src/data'),
				'@/UI': path.join(__dirname, 'src/UI'),
				'@/images': path.join(__dirname, 'src/images'),
				'@/store': path.join(__dirname, 'src/store'),
			},
		},
	};
});
