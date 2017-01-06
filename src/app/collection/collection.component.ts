import { Component, OnInit } from '@angular/core';

import { CollectableService } from '../collectable.service';
import { Collectable } from '../collectable.model';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styles: []
})
export class CollectionComponent implements OnInit {
  collectedItems: Collectable[] = [];
  
  onRemoveFromCollection(item: Collectable) {
    this.collectableService.removeFromCollection(item);
  };
  
  constructor(private collectableService: CollectableService) { }

  ngOnInit() {
    this.collectedItems = this.collectableService.getCollection();
  }

}
