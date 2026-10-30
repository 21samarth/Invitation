import { copyFileSync, mkdirSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

// The original exported build references its files using absolute /assets URLs.
// Keep that public contract intact in both development and production builds.
export default {
  plugins: [
    {
      name: 'preserve-original-assets',
      closeBundle() {
        const source = resolve('assets');
        const output = resolve('dist/assets');
        mkdirSync(output, { recursive: true });

        // Copy only the legacy bundle and its public media. Vite owns generated
        // CSS/JS files in this directory, so copying the source folder wholesale
        // can contend with its output on Windows.
        for (const entry of readdirSync(source, { withFileTypes: true })) {
          if (entry.isFile() && entry.name !== 'index-fPVWWpik.css') {
            copyFileSync(resolve(source, entry.name), resolve(output, entry.name));
          }
        }

        const imageSource = resolve(source, 'img');
        const imageOutput = resolve(output, 'img');
        mkdirSync(imageOutput, { recursive: true });
        for (const entry of readdirSync(imageSource, { withFileTypes: true })) {
          if (entry.isFile()) copyFileSync(resolve(imageSource, entry.name), resolve(imageOutput, entry.name));
        }
      },
    },
  ],
};
