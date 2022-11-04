import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
const storagePrefix = environment.SESSION_STORAGE_PREFIX;
const jwt = new JwtHelperService();

type StorageKeys = 'USER_NAME';

export const storage = {
  //?TOKEN
  getDecodedToken() {
    let data: any = localStorage.getItem(`${storagePrefix}token`);
    return jwt.decodeToken(data);
  },

  getToken: (): string | false => {
    let data: any = localStorage.getItem(`${storagePrefix}token`);
    return JSON.parse(data) as string;
  },
  setToken: (token: string) => {
    localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
  },

  //?ROLE
  getRole: (): string => {
    let data: any = localStorage.getItem(`${storagePrefix}role`);
    return JSON.parse(data) as string;
  },
  setRole: (role: string) => {
    localStorage.setItem(`${storagePrefix}role`, JSON.stringify(role));
  },

  clearAll: () => {
    localStorage.clear();
  },

  setData(data: any, key: StorageKeys) {
    localStorage.setItem(key, JSON.stringify(data));
  },

  getDate(key: StorageKeys) {
    let data: any = localStorage.getItem(key);
    return JSON.parse(data);
  },

  removeData(key: string) {
    localStorage.removeItem(key);
  },
};
