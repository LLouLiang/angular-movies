import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { actorDTO } from '../actors.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-index-actors',
  templateUrl: './index-actors.component.html',
  styleUrls: ['./index-actors.component.css']
})
export class IndexActorsComponent implements OnInit {

  constructor(private actorsService: ActorsService) { }

  actors: actorDTO[];
  totalAmountOfRecords;
  currentPage = 1;
  pageSize = 5;
  ngOnInit(): void {
    // /*
    // * Updated because of pagination
    // */
    // // this.actorsService.get().subscribe((actors: actorDTO[])=>{
    // //   this.actors = actors
    // // });
    // this.actorsService.get().subscribe((response: HttpResponse<actorDTO[]>)=>{
    //   this.actors = response.body;
    //   this.totalAmountOfRecords = response.headers.get("totalAmountOfRecords"); // use the added header"totalAmountOfRecords" from web api HttpContextExtensions 
    // });
    this.loadData();
  }

  loadData() {
     /*
    * Updated because of pagination
    */
    // this.actorsService.get().subscribe((actors: actorDTO[])=>{
    //   this.actors = actors
    // });
    this.actorsService.get(this.currentPage, this.pageSize).subscribe((response: HttpResponse<actorDTO[]>)=>{
      this.actors = response.body;
      this.totalAmountOfRecords = response.headers.get("totalAmountOfRecords"); // use the added header"totalAmountOfRecords" from web api HttpContextExtensions 
    });
  }

  updatePagination(event:PageEvent){
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;

    this.loadData();
  }

  columnsToDisplay = ['name','actions'];
  delete(id: number){
    this.actorsService.delete(id).subscribe(()=>{
      this.loadData();
    });
  }
}
