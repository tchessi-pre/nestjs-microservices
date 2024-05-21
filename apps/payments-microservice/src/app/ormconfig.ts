import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

function ensureDefined(variable: string | undefined, variableName: string): string {
  if (typeof variable === 'undefined') {
    throw new Error(`Environment variable ${variableName} is not defined.`);
  }
  return variable;
}

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: ensureDefined(process.env.DB_HOST, 'DB_HOST'),
  port: parseInt(ensureDefined(process.env.DB_PORT, 'DB_PORT'), 10),
  username: ensureDefined(process.env.DB_USERNAME, 'DB_USERNAME'),
  password: ensureDefined(process.env.DB_PASSWORD, 'DB_PASSWORD'),
  database: ensureDefined(process.env.DB_NAME, 'DB_NAME'),
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: ensureDefined(process.env.DB_SYNCHRONIZE, 'DB_SYNCHRONIZE') === 'true',  // à utiliser uniquement en développement
};
