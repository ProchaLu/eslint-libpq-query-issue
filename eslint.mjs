import { ESLint } from 'eslint';

async function runEslint() {
  try {
    const eslint = new ESLint();
    const results = await eslint.lintFiles(['.']);
    console.log(results);
  } catch (error) {
    console.error('ESLint crashed:', error);
    process.exit(1);
  }
}

runEslint().catch((error) => {
  console.error('Failed to run ESLint:', error);
});
