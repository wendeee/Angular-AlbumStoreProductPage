import  'rxjs/add/operator/map';
import { Http, Response} from '@angular/http';
import { Injectable } from '@angular/core';
import { Album } from './album'
import { Observable } from 'rxjs/Observable';
import { Product } from './product';


@Injectable()
export class ProductService {
  private _albumUrl: string = '../assets/album.json';

  constructor(private _http: Http) {}
  getAlbum(id: number): Observable<Album>{
    return this._http.get(this._albumUrl)
    .map((response => <Album>response.json()))   
  };
   
  getProducts(): Observable<Product[]>{
    this._http.get(_productsUrl).map(response => 
       {<Product[]>response.json()});
}}
