import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { queryNormalizer } from '../../utils';

@Injectable({
  providedIn: 'root',
})
export class BaseService<IFilter, ICreate, IUpdate> {
  protected readonly END_POINT = environment.API_ENDPOINT;
  constructor(protected readonly http: HttpClient) {}

  filter(options: IFilter) {
    return this.http.get(`${this.END_POINT}?${queryNormalizer(options)}`);
  }
  getById(id: string): Observable<any> {
    return this.http.get(this.END_POINT + id);
  }

  create(payload: ICreate): Observable<any> {
    return this.http.post(this.END_POINT, payload);
  }

  update(id: string, payload: IUpdate): Observable<any> {
    return this.http.put(this.END_POINT + id, payload);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(this.END_POINT + id);
  }
}
