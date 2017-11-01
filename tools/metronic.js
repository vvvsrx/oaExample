import path from 'path';
import { spawn } from './lib/cp';
import { makeDir, copyDir } from './lib/fs';

const options = {
  cwd: path.resolve(__dirname, '../public/metronic/tools'),
  stdio: ['ignore', 'inherit', 'inherit'],
};

/**
 * build metronic files
 */
async function metronic() {
  await makeDir('build');
  await spawn('npm', ['install'], options);
  await spawn('bower', ['install'], options);
  await spawn('gulp', ['--prod'], options);
  await makeDir('build/public/assets/metronic');
  copyDir(
    'public/metronic/theme/dist/default/default/assets',
    'build/public/assets/metronic',
  );
}

export default metronic;
