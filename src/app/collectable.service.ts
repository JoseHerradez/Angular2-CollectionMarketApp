import { Collectable } from './collectable.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CollectableService {
  private collectables: Collectable[] = [
    {description: 'A very rare copy of "JQuery for Dummies"', type: 'Book'},
    {description: 'The first letter ever written', type: 'Piece of Paper'},
    {description: 'An used condom', type: 'Garbage'},
    {description: 'A photo of my beautiful Girlfriend', type: 'Photo'}
  ];
  
  private collection: Collectable[] = [];
  
  constructor() { }
  
  getCollectables() {
    return this.collectables;
  };
  
  getCollection() {
    return this.collection;
  };
  
  addToCollection(item: Collectable) {
    if(this.collection.indexOf(item) !== -1) return;
    
    this.collection.push(item);
  };
  
  removeFromCollection(item: Collectable) {
    this.collection.splice(this.collection.indexOf(item), 1);
  };
}
