import { Injectable } from '@angular/core';
import { Article } from '../models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }

  getAll(): Article[]{
    return [
      {
        id: 1,
        model: 'X Wing',
        faction: 'Rebels',
        img: '/assets/ship-1.jpg',
        price: 150000,
        onSale: true,
      },
      {
        id: 2,
        model: 'TIE Fighter',
        faction: 'Imperial',
        img: '/assets/ship-2.jpg',
        price: 67000,
        onSale: true,
      },
      {
        id: 3,
        model: 'Y Wing',
        faction: 'Rebels',
        img: '/assets/ship-3.jpg',
        price: 176000,
        onSale: true,
      },
      {
        id: 4,
        model: 'TIE Bomber',
        faction: 'Imperial',
        img: '/assets/ship-4.jpg',
        price: 102000,
        onSale: false,
      },
    ]
  }
}
