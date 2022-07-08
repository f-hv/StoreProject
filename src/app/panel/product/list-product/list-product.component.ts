import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCT } from 'src/app/@core/models/product.model';
import { ProductsService } from 'src/app/@core/services/products.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  productsList:PRODUCT[]=[];
  searchKeyWord:any;
   ///// pagination
   currentPage: any = 1;
   elementPerpage = 5;
   collectionSize:any;
  constructor(
    private productService: ProductsService,
    private activatedRote:ActivatedRoute
  ) { }


  ngOnInit(): void {
    // this.getProduct();
    // const paramsRoute=this.activatedRote.snapshot.paramMap;
    // console.log(paramsRoute);
    
    // if(paramsRoute){
    //    this.productsList = this.productsList.filter((item:any) => item.title?.includes(paramsRoute));
    // }    
  }

  // getProduct() {
  //   this.productService.getProducts().subscribe(content => {
  //     this.productsList.push(content);    
  //     this.collectionSize = this.productsList.length;

  //   })
  // }  
}
