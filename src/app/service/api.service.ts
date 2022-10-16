import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { Products } from '../models/products';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //private productsUrl: string = 'http://localhost:3100/api/products';
  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<any>("http://localhost:3100/api/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}

var PRODUCTS: Products[] = [
  {
      id: 1,
      servico: 'Corte  cabelo',
      description: 'Um corte de Cabelo...',
      duration: 30,
      code: 'XLF-1212',
      rating: 3,
      price: 30.00,
      imageUrl: '/assets/images/cli.png',
  },
  {
      id: 2,
      servico: 'Barba',
      description: 'Uma Barba Feita...',
      duration: 10,
      code: 'XLF-5050',
      rating: 4,
      price: 15.00,
      imageUrl: '/assets/images/cli.png',
  },
  {
      id: 3,
      servico: 'Alisamento e Hidratacao',
      description: 'Alisamento e Hidratacao do Cabelo...',
      duration: 45,
      code: 'XLF-3442',
      rating: 7,
      price: 40.00,
      imageUrl: '/assets/images/cli.png',
  },
  {
      id: 4,
      servico: 'Pigmentacao no Cabelo',
      description: 'Pigmentacao no  Cabelo...',
      duration: 20,
      code: 'XLF-6060',
      rating: 6,
      price: 18.00,
      imageUrl: '/assets/images/cli.png',
  }
];
