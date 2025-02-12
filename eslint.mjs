import { spawn } from 'node:child_process';

const child = spawn(
  'node',
  ['node_modules/eslint/bin/eslint.js', '.', '--max-warnings', '0'],
  {
    stdio: 'inherit',
    shell: false, // no shell so we get the real exit code
  },
);

child.on('exit', (code) => {
  console.log('ESLint exited with code:', code);
  process.exit(code);
});
