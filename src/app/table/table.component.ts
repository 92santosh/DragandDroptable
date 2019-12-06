import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TableElements, PeriodicElement } from '../interfaces/tableElements';
import { CdkDragStart, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  reorderedColumns:any[] = [];
  columns:any[] = [];
  constructor() { }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit() {
    console.log(this.dataSource);
    // this.reorderedColumns = JSON.parse(localStorage.getItem("columns") || "[]");
    // console.log(this.reorderedColumns);
    this.setNewColumns();
    this.dataSource.paginator = this.paginator;
    this.setDisplayedColumns();
  }
 
  displayedColumns: any[] = [];
  previousIndex: number;
  public setNewColumns() {
    // if(this.reorderedColumns) {
    //   this.columns = this.reorderedColumns;
    // }
    // else {
      this.columns = [ 
        {field: 'select'},
        { field: 'address'},
        { field: 'landRegister'},
        { field: 'estateNo'},
        { field: 'year'},
        { field: 'journalNo'},
        { field: 'category'},
        { field: 'identification'},
      ]
  }
  public deleteSingleElement() {
    this.columns.shift();
    console.log(this.columns);
  }
  tableData: any[] = [
     {address: "Smedeholm", landRegister: "Harlev,2a",estateNo: 37130, year: 2017, journalNo: "afsf", category: "toftank", identification :"sgsdr"},
     {address: "Smedeholm", landRegister: "Harlev,2a",estateNo: 37130, year: 2017, journalNo: "vfdsf", category: "toftank", identification: "sfs"},
     {address: "Smedeholm", landRegister: "Harlev,2a",estateNo: 37130, year: 2017, journalNo: "sfsd", category: "toftank", identification: "sf"},
     {address: "Smedeholm", landRegister: "Harlev,2a",estateNo: 37130, year: 2017, journalNo: "sfas", category: "toftank", identification: "sfsd"},
     {address: "Smedeholm", landRegister: "Harlev,2a",estateNo: 37130, year: 2017, journalNo: "sfaf", category: "toftank", identification: "sfdsa"},
     {address: "Smedeholm", landRegister: "Harlev,2a",estateNo: 37130, year: 2017, journalNo: "sfdad", category: "toftank", identification: "sfa"},
     {address: "Smedeholm", landRegister: "Harlev,2a",estateNo: 37130, year: 2017, journalNo: "sfdsfsf", category: "toftank", identification: "sfas"},
     {address: "Smedeholm", landRegister: "Harlev,2a",estateNo: 37130, year: 2017, journalNo: "sfda", category: "toftank", identification: "sf"},
     {address: "Smedeholm", landRegister: "Harlev,2a",estateNo: 37130, year: 2017, journalNo: "sfaf", category: "toftank", identification: "sfa"},
     {address: "Smedeholm", landRegister: "Harlev,2a",estateNo: 37130, year: 2017, journalNo: "sfa", category: "toftank", identification: "sfa"},
     {address: "Smedeholm", landRegister: "Harlev,2a",estateNo: 37130, year: 2017, journalNo: "sfadsgf", category: "toftank", identification: "fsa"}
  ];
  // dataSource = this.tableData;
  dataSource = new MatTableDataSource<any>(this.tableData);
  setDisplayedColumns() {
    this.columns.forEach((colunm, index) => {
      colunm.index = index;
      this.displayedColumns[index] = colunm.field;
    });
  }

  dragStarted(event: CdkDragStart, index: number ) {
    this.previousIndex = index;
  }
  
  dropListDropped(event: CdkDropList, index: number) {
    if (event) {
      moveItemInArray(this.columns, this.previousIndex, index);
      this.setDisplayedColumns();
    }
    // localStorage.setItem("columns",JSON.stringify(this.columns));
  }
  // isSticky (column: string) {
  //   // return column === 'select' ? true : false;
  // }
}
