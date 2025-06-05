import { build } from 'esbuild';

build({
  entryPoints: ['./index.js'],
  outfile: './dist/w3w.bundle.js',
  bundle: true,
  format: 'iife',
  target: ['es2020'],
  define: {
    global: 'window',
  },
  logLevel: 'info',
  sourcemap: false,
}).catch(() => process.exit(1));
