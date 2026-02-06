import { defineConfig } from 'vite'
import {resolve} from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react(),
        AutoImport(
            {
                imports: [
                    {
                        'clsx': [
                            ['default', 'clsx'],
                        ],
                    },
                ],
                dts: './src/auto-imports.d.ts',
            })
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
            '@scss': resolve(__dirname, './src/utils/scss'),
            '@components': resolve(__dirname, './src/components'),
            '@pages': resolve(__dirname, './src/pages'),
            '@sections': resolve(__dirname, './src/sections'),
            '@CustomHooks':resolve(__dirname, './src/CustomHooks'),
        },
    },
    server: {
        host: true
    },
    base: '/test/'
})