import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable()
export class HttpCoreApiService {

  constructor(private http: HttpClient) { }

}
