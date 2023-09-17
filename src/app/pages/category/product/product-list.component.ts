import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Page} from "../../../core/models/page.model";
import {TranslateService} from "@ngx-translate/core";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import * as fileSaver from 'file-saver';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  breadCrumbItems = [{label: 'menu.sysMng'}, {label: 'users.title', active: true}];

  searchForm: FormGroup = this.fb.group({
    natCd: [null]
  });
  lstProductType: any = [];
  lstGroup: any = [];
  lstDepts = [];
  lstStatus: any = [];
  tables: any = [];
  selectedAll: boolean = false;
  page = new Page();

  constructor(private fb: FormBuilder,
              private productService: ProductService,
              private translateService: TranslateService,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {

  }

  search() {
    this.setPage({offset: 0});
  }
  stringNullOrEmpty(value: any){
    if(value===""||value===null||value==undefined){
      return false;
    }else{
      return true;
    }
  }
  setPage(pageInfo) {
    const pageToLoad: number = pageInfo.offset;
    this.productService.search({
      pageNumber: '0',
      pageSize: 10,
      natCd:this.stringNullOrEmpty(this.searchForm.get("natCd").value)? {contains:this.searchForm.get("natCd").value}:null
    }).subscribe(res => this.onSuccess(res.body));
  }
  copy(value:any){
    navigator.clipboard.writeText(value);
    alert("Copied the text: " +value);
  }

  protected onSuccess(data: any | null): void {
    var jso = JSON.stringify(data.body.page.content);
    this.tables=data?.body?.page?.content;
    console.log(this.tables);

  }
  export() {

  }
  saveFile(data: any, filename?: string, contentType?: string) {
    const blob = new Blob([data], {type: contentType});
    fileSaver.saveAs(blob, filename);
  }

  selectAllChange() {
    this.tables = this.tables.map(e => {
      e['selected'] = this.selectedAll;
      return e
    })
  }
  deleteCheck(tables: any) {
    if (tables.filter(e => e.selected === true).length === 0) {
      return true
    } else return false
  }

  changePage(page) {
    if (page) {
      this.setPage({offset: page - 1})
    }
  }

  // create() {
  //   const res = this.modalService.open(ProductDialogComponent, {size: 'lg', centered: true});
  //   res.componentInstance.title = "Thêm mới dự án";
  //   res.componentInstance.action = "create";
  //   res.closed.subscribe(temp => {
  //     this.setPage({offset: 0})
  //   })
  // }
  // edit(table) {
  //   const res = this.modalService.open(ProductDialogComponent, {size: 'lg', centered: true});
  //   res.componentInstance.title = "Cập nhật thông tin dự án";
  //   res.componentInstance.action = "edit";
  //   res.componentInstance.inputData = table;
  //   res.closed.subscribe(temp => {
  //     this.setPage({offset: 0})
  //   })
  // }
  // push(table) {
  //   const res = this.modalService.open(ProductDialogComponent, {size: 'lg', centered: true});
  //   res.componentInstance.title = "Đăng tải dự án";
  //   res.componentInstance.action = "push";
  //   res.componentInstance.inputData = table;
  //   res.closed.subscribe(temp => {
  //     this.setPage({offset: 0})
  //   })
  // }
  // deleteProduct(table) {
  //   const res = this.modalService.open(ProductDialogComponent, {size: 'lg', centered: true});
  //   res.componentInstance.title = "Xóa dự án";
  //   res.componentInstance.action = "delete";
  //   res.componentInstance.inputData = table;
  //   res.closed.subscribe(temp => {
  //     this.setPage({offset: 0})
  //   })
  // }

  resetPassword(table) {

  }


  delete() {

  }

}

