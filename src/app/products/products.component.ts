import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../@core/services/products.service';
import { categoryEnum } from '../shared/enums/categories.enum';
import { sortPriceEnum } from '../shared/enums/sortPrice.enum';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Output() dataSearch = new EventEmitter<any>();
  searchKeyWord: any;
  productsList: any = [];
  //////searchBox///////
  resualt: Boolean = false;
  SearchDone: Boolean = false;
  listElectronic: any = [];
  listJewelery: any = [];
  listMen: any = [];
  listWomen: any = [];

  ///// pagination///////
  currentPage: any = 1;
  elementPerpage = 5;
  collectionSize: number = 10;
  //// categorySidebar///
  categoryList: any = [];
  //// sort Section///////
  clearSort: any = 'clear';
  //// range Price///////
  minPrice: any;
  maxPrice: any;
  rate: any = null;
  ////infifnit scroll
  infiniteScrollDistance: any = 2
  infiniteScrollThrottle: any = 50
  //// change Url params
  urlParameters: any;
  constructor(
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  get SortPrice() {
    return sortPriceEnum
  }
  get categories() {
    return categoryEnum
  }
  ngOnInit(): void {
    this.getProduct();
    this.route.queryParams.subscribe(params => {
      console.log("params:",params)
      this.urlParameters = Object.assign({}, params);
    });
  }
  getProduct() {
    this.productService.getProducts().subscribe(content => {
      this.resualt = true;
      this.productsList = content;
      this.collectionSize = this.productsList.length;
      this.minMaxPrice();
      this.handleRangePrice('999');
    })
  }

  searchKeywordChange(data: any) {
    debugger
    this.searchKeyWord = data;
    if (!(this.searchKeyWord.length === 0) && this.searchKeyWord.length < 3) {
      return;
    }
    if (this.searchKeyWord.length === 0) {
      this.productsList = this.getProduct();
    }
    if (data.keycode !== 13 && data.keycode !== 8) {
      if (this.searchKeyWord.length > 2) {
        this.SearchDone = true;

        const resualtList = this.productsList.filter((item: any) => item.title?.includes(this.searchKeyWord));
        if (resualtList.length !== 0) {
          this.productsList = resualtList;
          this.listElectronic.length = 0;
          this.listJewelery.length = 0;
          this.listMen.length = 0;
          this.listWomen.length = 0;
          this.productsList.map((res: any) => {
            if (res.category == categoryEnum.ELECTRONIC) {
              this.listElectronic.push({
                id: res.id,
                title: res.title,
                price: res.price,
                category: res.category,
                description: res.description,
                image: res.image,
                rate: res.rating.rate,
                count: res.rating.count
              })
            }
            if (res.category == categoryEnum.JEWELERY) {
              this.listJewelery.push({
                id: res.id,
                title: res.title,
                price: res.price,
                category: res.category,
                description: res.description,
                image: res.image,
                rate: res.rating.rate,
                count: res.rating.count
              })
            }
            if (res.category == categoryEnum.MENSCLOTHING) {
              this.listMen.push({
                id: res.id,
                title: res.title,
                price: res.price,
                category: res.category,
                description: res.description,
                image: res.image,
                rate: res.rating.rate,
                count: res.rating.count
              })
            } if (res.category == categoryEnum.WOMENSCLOTHING) {
              this.listWomen.push({
                id: res.id,
                title: res.title,
                price: res.price,
                category: res.category,
                description: res.description,
                image: res.image,
                rate: res.rating.rate,
                count: res.rating.count
              })
            }
          })
        }
        else {
          this.resualt = false;
          return;
        }

      }
    }

  }
  filterOnCategory(categoryTitle: any) {
    debugger
    if (this.categoryList.length === 0) {
      this.categoryList.push(categoryTitle)
    }
    else {
      const resualt = this.categoryList.find((item: any) => item === categoryTitle)
      if (resualt){
        this.categoryList = this.categoryList.filter((item: any) => item !== categoryTitle);
        if (this.categoryList.length === 0)
          this.getProduct();
      }
      else{
          this.categoryList.push(categoryTitle)
      }

    }
    this.productsList.length = 0
    this.categoryList.map((item: any) => {
      this.productService.getProductsSpecificCategory(item).subscribe((content: any) => {
        content.map((res: any) => {
          this.urlParameters.parameterName = this.categoryList;// Take current queryParameters from the activated route snapshot
          this.router.navigate([], { relativeTo: this.route, queryParams: this.urlParameters });
          this.productsList.push({
            id: res.id,
            title: res.title,
            price: res.price,
            category: res.category,
            description: res.description,
            image: res.image,
            rate: res.rating.rate,
            count: res.rating.count
          })
        })
      })
    })
    console.log(this.urlParameters);

  }

  // sortPrice(data: any) {
  //   if (data == this.clearSort)
  //     this.getProduct();
  //   else
  //     this.productService.SortResults('desc').subscribe(resualt => {
  //       this.productsList = resualt
  //     })
  // }
  minMaxPrice() {
    const min = this.productsList.reduce((prev: any, current: any) => (prev.price < current.price) ? prev : current);
    const max = this.productsList.reduce((prev: any, current: any) => (prev.price > current.price) ? prev : current);
    this.minPrice = min.price;
    this.maxPrice = max.price
  }

  sortByPrice(type: any) {
    if (type == this.clearSort)
      this.getProduct();
    if (type == sortPriceEnum.asc) {
      this.productsList.sort((a: any, b: any) => (a.price < b.price ? -1 : 1));
    }

    if (type == sortPriceEnum.desc) {
      this.productsList.sort((a: any, b: any) => (a.price > b.price ? -1 : 1));
    }
  }

  productById(index: any, line: any) {
    return line.id;
  }
  handleRangePrice(data: any) {
    this.productsList = this.productsList.filter((item: any) => item.price < data)
  }
  availableProduct(data: any) {
    if (data)
      this.productsList = this.productsList.filter((item: any) => item.rating.count !== 0)
    else
      this.getProduct();

  }


}
