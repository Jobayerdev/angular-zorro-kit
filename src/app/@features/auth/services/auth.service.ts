import { HttpClient } from '@angular/common/http';
import { ILoginCredential } from '../interfaces';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { storage } from 'src/app/@shared/services/utils/localStorage.utilservice';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly END_POINT = environment.API_ENDPOINT + 'auth/';
  constructor(private http: HttpClient, private router: Router) {}

  login(payload: ILoginCredential) {
    return this.http.post(this.END_POINT + 'login', payload);
  }

  logout() {
    storage.clearAll();
    this.router.navigate(['auth']);
  }
}
