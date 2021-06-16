import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycletest',
  templateUrl: './lifecycletest.component.html',
  styleUrls: ['./lifecycletest.component.css']
})
export class LifecycletestComponent implements OnInit, OnChanges, OnDestroy,DoCheck, AfterViewInit {

  constructor() { }
  ngDoCheck(): void {
    console.log(`do check`);
  }
  ngAfterViewInit(): void {
    console.log(`do after view init`);
  }
  ngOnDestroy(): void {
    console.log(`do destory`);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`do change`);
    console.log(changes);
  }

  ngOnInit(): void {
    console.log(`do Init`);
  }
  @Input()
  title: string;


}
