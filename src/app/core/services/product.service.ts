import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/auth.models';
import {ApiUrl} from "../../shared/constant/ApiUrl.constant";
import {Observable} from "rxjs";
import {createRequestOption} from "../../shared/util/request-util";

@Injectable({ providedIn: 'root' })
export class ProductService {
    constructor(private http: HttpClient, private api: ApiUrl) { }
  public search(body?: any): Observable<any> {
    return this.http.post<any[]>(`${this.api.getCatalogApi()}/dblog/on-search`, body,{
      observe: 'response'
    });
  }
  public searchRegisterResult(body?: any): Observable<any> {
    return this.http.post<any[]>(`${this.api.getCatalogApi()}/product-register-result/on-search`, body,{
      observe: 'response'
    });
  }
  public searchRegisterResultPublic(body?: any): Observable<any> {
    return this.http.post<any[]>(`${this.api.getCatalogApi()}/product-register-result/on-search-public`, body,{
      observe: 'response'
    });
  }
  public searchRegister(body?: any): Observable<any> {
    return this.http.post<any[]>(`${this.api.getCatalogApi()}/product-register/on-search`, body,{
      observe: 'response'
    });
  }
  public insertOrUpdate(id?: any, body?: any): Observable<any> {

    return this.http.post<any>(`${this.api.getCatalogApi()}/product/create-or-update`, body, {
      observe: 'response'
    });
  }
    public insertOrUpdateResult(id?: any, body?: any): Observable<any> {

      return this.http.post<any>(`${this.api.getCatalogApi()}/product-register-result/createOrUpdate`, body, {
        observe: 'response'
      });

}
public findByPno(body?: any): Observable<any> {

  return this.http.post<any>(`${this.api.getCatalogApi()}/product-register/findByPno`, body, {
    observe: 'response'
  });

}
public checkPno(body?: any): Observable<any> {

  return this.http.post<any>(`${this.api.getCatalogApi()}/product-register-result/check-pno`, body, {
    observe: 'response'
  });

}
public findByNoInResult(body?: any): Observable<any> {
  return this.http.post<any[]>(`${this.api.getCatalogApi()}/product-register-result/find-by-pno`, body,{
    observe: 'response'
  });
}

public push(id?: any, body?: any): Observable<any> {

  return this.http.post<any>(`${this.api.getCatalogApi()}/product/push`, body, {
    observe: 'response'
  });

}
public deleteProduct(id?: any, body?: any): Observable<any> {

  return this.http.post<any>(`${this.api.getCatalogApi()}/product/delete`, body, {
    observe: 'response'
  });

}
public deleteProductRegister(body?: any): Observable<any> {

  return this.http.post<any>(`${this.api.getCatalogApi()}/product-register/delete`, body, {
    observe: 'response'
  });

}
public deleteProductRegisterResult(body?: any): Observable<any> {

  return this.http.post<any>(`${this.api.getCatalogApi()}/product-result-register/delete`, body, {
    observe: 'response'
  });

}
public sendingProductRegisterResult(body?: any): Observable<any> {

  return this.http.post<any>(`${this.api.getCatalogApi()}/product-result-register/send-pending`, body, {
    observe: 'response'
  });

}
public submittedProductRegister(body?: any): Observable<any> {

  return this.http.post<any>(`${this.api.getCatalogApi()}/product-register/create`, body, {
    observe: 'response'
  });

}
public openHSDK(body?: any): Observable<any> {

  return this.http.post<any>(`${this.api.getCatalogApi()}/product-register/open-register`, body, {
    observe: 'response'
  });
}
uploadFile(body: any) {
  return this.http.post(`${this.api.getCatalogApi()}/file/upload-file`,body,{
    observe: 'response'
  });
}

public sign(body?: any): Observable<any> {

  return this.http.post<any>(`${this.api.getCatalogApi()}/product-register-result/sign-file`, body, {
    observe: 'response'
  });

}

}
