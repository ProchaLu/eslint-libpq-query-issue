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
  if (code === null) {
    console.log('ESLint process terminated without an exit code');
    process.exit(1);
  } else {
    const hexCode = '0x' + code.toString(16).toUpperCase().padStart(8, '0');
    console.log(`ESLint exited with code: ${code} (${hexCode})`);
    process.exit(code);
  }
});
