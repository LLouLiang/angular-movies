import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { multipleSelectorModel } from '../multiple-selector.model';

@Component({
  selector: 'app-multiple-selector',
  templateUrl: './multiple-selector.component.html',
  styleUrls: ['./multiple-selector.component.css']
})
export class MultipleSelectorComponent implements OnInit {

  constructor() { }
  @Input()
  selectedItems: multipleSelectorModel[] = [];

  @Input()
  nonSelectedItems: multipleSelectorModel[] = [];

  ngOnInit(): void {
  }

  selectAll(){
    
    this.nonSelectedItems.push(...this.selectedItems);
    this.selectedItems = [];
  }
  unSelectAll(){
    this.selectedItems.push(...this.nonSelectedItems);
    this.nonSelectedItems = [];
  }

  select(item:multipleSelectorModel, index){
    this.selectedItems.push(item);
    this.nonSelectedItems.splice(index,1);
  }

  deSelect(item:multipleSelectorModel, index){
    this.nonSelectedItems.push(item);
    this.selectedItems.splice(index,1);
  }

}
