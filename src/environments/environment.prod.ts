import { enableAkitaProdMode } from '@datorama/akita';
export const environment = {
  production: true,
  API_ENDPOINT: 'https://exmp.com/v1/', // staging endpoint
  SESSION_STORAGE_PREFIX: 'AJKE_',
};
if (environment.production) {
  enableAkitaProdMode();
}
