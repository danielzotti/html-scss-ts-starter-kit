import {defineConfig} from 'vite'
import sass from 'sass'

export default defineConfig({
    plugins: [],
    css: {
        preprocessorOptions: {
            scss: {
                implementation: sass,
            },
        },
    },
});
