import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/@core/services/products.service';
import { sortPriceEnum } from 'src/app/shared/enums/sortPrice.enum';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Output() dataSearch = new EventEmitter<any>();
  searchKeyWord: any;
  productsList: any = [];
  //////searchBox///////
  resualt: Boolean = false;
  SearchDone: Boolean = false;
  ///// pagination///////
  currentPage: any = 1;
  elementPerpage = 5;
  collectionSize: any;
  //// categorySidebar///
  categoryList: any = [];
  //// sort Section///////
  clearSort: any = 'clear';
  //// range Price///////
  minPrice: any;
  maxPrice: any;
  constructor(
    private productService: ProductsService,
  ) { }
  get SortPrice() {
    return sortPriceEnum
  }
  ngOnInit(): void {
    this.getProduct();
  }


  getProduct() {
    this.productService.getProducts().subscribe(content => {
      this.resualt = true;
      this.productsList = content;
      const min = this.productsList.reduce((prev: any, current: any) => (prev.price < current.price) ? prev : current);
      const max = this.productsList.reduce((prev: any, current: any) => (prev.price > current.price) ? prev : current);
      // const max = this.productsList.reduce((op:any, item:any) => op = op > item.price ? op : item.price, 0);
      this.minPrice = min.price;
      this.maxPrice = max.price
      console.log(this.productsList);

      this.collectionSize = this.productsList.length;
    })
  }

  onKeyup(data: any) {
    if (data.keycode !== 13 && data.keycode !== 8) {
      this.SearchDone = true;
      this.searchKeyWord = data;
    }
    if (this.searchKeyWord.length === 0) {
      this.productsList = this.getProduct();
    }

    if (this.searchKeyWord) {
      if (this.searchKeyWord.length > 2) {
        debugger
        if (data.keycode !== 13 && data.keycode !== 8) {
          const resualtList = this.productsList.filter((item: any) => item.title?.includes(this.searchKeyWord));
          if (resualtList.length !== 0) this.productsList = resualtList;
          else {
            this.resualt = false;
            return;
          }
        }
      }
    }
  }
  isClickOnCategory(data: any) {
    if (this.categoryList.length === 0) {
      this.categoryList.push(data)
    }
    else {
      const resualt = this.categoryList.find((item: any) => item === data)
      if (resualt)
        this.categoryList = this.categoryList.filter((item: any) => item !== data);
      if (this.categoryList.length === 0)
        this.getProduct();
      else
        this.categoryList.push(data)
    }
    this.productsList.length = 0
    this.categoryList.map((item: any) => {
      this.productService.getProductsSpecificCategory(item).subscribe((content: any) => {
        content.map((res: any) => {
          this.productsList.push({
            id: res.id,
            title: res.title,
            price: res.price,
            category: res.category,
            description: res.description,
            image: res.image
          })
        })
      })
    })
  }

  // sortPrice(data: any) {
  //   if (data == this.clearSort)
  //     this.getProduct();
  //   else
  //     this.productService.SortResults('desc').subscribe(resualt => {
  //       this.productsList = resualt
  //     })
  // }
  sortByPrice(data: any) {
    if (data == this.clearSort)
      this.getProduct();
    var list2 = this.productsList;
    for (let i = 0; i < list2.length; i++) {
      for (let j = 0; j < list2.length - 1; j++) {
        if (data == sortPriceEnum.asc) {
          if (list2[j].price > list2[j + 1].price) {
            let swap = list2[j];
            list2[j] = list2[j + 1];
            list2[j + 1] = swap;
          }
        }
        if (data == sortPriceEnum.desc) {
          if (list2[j].price < list2[j + 1].price) {
            let swap = list2[j];
            list2[j] = list2[j + 1];
            list2[j + 1] = swap;
          }
        }
      }
    }
    this.productsList = list2;
  }

  productById(index: any, line: any) {
    return line.id;
  }
  handleRangePrice(data: any) {
    // this.getProduct();
    this.productsList = this.productsList.filter((item: any) => item.price > data)
  }

}
 // test(){

  //   if (this.categoryList.length === 0) {
  //     this.productsList.length = 0
  //     this.categoryList.push({
  //       title: data,
  //       ischecked: true
  //     })
  //   }
  //   else {
  //     const resualt = this.categoryList.find(item => item.title === data)
  //     if (resualt)
  //       resualt.ischecked = false;
  //     else this.categoryList.push({ title: data, ischecked: true })
  //   }
  //   this.categoryList.map(item => {
  //     if (item.ischecked === true) {
  //       this.productService.getProductsSpecificCategory(item.title).subscribe((content: any) => {
  //         // if (this.productsList.length === 0) {
  //         //   this.productsList = content
  //         //   return
  //         // }
  //         // else
  //           content.map((res: any) => {
  //             this.productsList.push({
  //               id: res.id,
  //               title: res.title,
  //               price: res.price,
  //               category: res.category,
  //               description: res.description,
  //               image: res.image
  //             })
  //           })
  //       });
  //     }
  //     console.log("list", this.productsList);
  //   })
  // }