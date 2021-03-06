export class AppConfig {
  static readonly APP_NAME = 'vapox';
  static readonly MONGO_DB_NAME = 'vapox';
  static readonly MONGO_PORT = 27017;
  static readonly MONGO_URL = `mongodb://localhost:${ AppConfig.MONGO_PORT }/${ AppConfig.MONGO_DB_NAME }`;
  static readonly PORT = 3000;
  static readonly API_VERSION = 1;
  static readonly API_URL = `/api/v${ AppConfig.API_VERSION }`;
}
