import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/@core/services/products.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent implements OnInit {
  id: any;
  detailsProduct: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.paramMap;
    this.id = params.get('id');
    this.getDetailsProduct();
  }

  getDetailsProduct() {
    this.productService.getProduct(this.id).subscribe(content => {
      this.detailsProduct = content;
      console.log(content);

    })
  }

}
