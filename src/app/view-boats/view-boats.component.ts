import { Component, OnInit } from '@angular/core';
import { Boat, BoatGridColumn, BoatType } from '@app/_models';
import { BoatsService } from '@app/_services/boats.service';
import {orderBy, SortDescriptor} from '@progress/kendo-data-query';
import {GridDataResult} from '@progress/kendo-angular-grid';
import {Router} from '@angular/router';

@Component({
  selector: 'boats-view-boats',
  templateUrl: './view-boats.component.html'
})
export class ViewBoatsComponent implements OnInit {
  boats: Boat[] = [];
  public multiple = false;
  public allowUnsort = true;
  public sort: SortDescriptor[] = [{
    field: 'name',
    dir: 'desc'
  }];
  BoatType: typeof BoatType = BoatType;
  public gridView: GridDataResult;
  public columns: BoatGridColumn[] = [
    { field: 'name', title: 'Boat Name' },
    { field: 'size', title: 'Size (ft)' },
    { field: 'type', title: 'Boat Type' },
    { field: 'model.model', title: 'Model' },
  ];

  constructor(private boatsService: BoatsService, private router: Router) {

  }

  ngOnInit() {

    this.fetchData();
  }
  public sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadProducts();
  }
  fetchData(): void{
    this.boatsService.getAll().subscribe(
      res => {

        this.boats = [...res];
        console.table(this.boats);
        this.loadProducts();
      }
    );
  }
  redirectToNew(){
    this.router.navigateByUrl('/new');
  }
   loadProducts(): void {

    this.gridView = {
      data: orderBy(this.boats, this.sort),
      total: this.boats.length
    };
  }


}
