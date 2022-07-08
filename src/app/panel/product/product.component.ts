import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/@core/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Output() dataSearch = new EventEmitter<any>();
  searchKeyWord: any;
  productsList: any = [];
  // productsAlternate:any=[...this.productsList];

  ///// pagination
  currentPage: any = 1;
  elementPerpage = 5;
  collectionSize: any;
  constructor(
    private productService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }
  // ngOnChange(){
  //   this.getproductList();
  // }
  // getproductList(){
  //   return this.productsList;
  // }

  getProduct() {
    this.productService.getProducts().subscribe(content => {
      this.productsList = content;
      this.collectionSize = this.productsList.length;
    })
  }

  onKeyup(data: any) {
    if (data.keycode !== 13 && data.keycode !== 8) {
      this.searchKeyWord = data;
    }
    if (this.searchKeyWord.length === 0) {
      this.productsList = this.getProduct();
    }
    if (this.searchKeyWord) {
      if (this.searchKeyWord.length > 2) {
        if (data.keycode !== 13 && data.keycode !== 8) {
          const resualtList = this.productsList.filter((item: any) => item.title?.includes(this.searchKeyWord));
          if (resualtList.length !== 0) this.productsList = resualtList;
          // else {
          // this.toastrService.error('not mach any key')
          return;
          // }
        }
      }
    }
  }
  checkedItem(data: any) {
    this.productService.getProductsSpecificCategory(data).subscribe(content => {
      if (content)
        this.productsList = content
    });

  }

  productById(index: any, line: any) {
    return line.id;
  }
}
