import { config } from 'dotenv-safe';
import { postgresConfig } from './util/config.js';

config();

// const option = {
//   transform: {
//     ...postgres.camel,
//     undefined: null,
//   },
// };

export default postgresConfig;
