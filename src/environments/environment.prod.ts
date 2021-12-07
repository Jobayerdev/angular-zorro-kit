import { enableAkitaProdMode } from '@datorama/akita';

export const environment = {
  production: true,
};

if (environment.production) {
  enableAkitaProdMode();
}
