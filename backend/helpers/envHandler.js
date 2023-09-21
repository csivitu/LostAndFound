import { config } from 'dotenv';

config({ path: './.env' });

const envHandler = (envName) => {
  const env = process.env[envName];
  if (!env) {
    console.error(`ENV ${envName} is not defined.`);
  }
  return env;
};

export default envHandler;
