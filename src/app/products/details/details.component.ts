import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/@core/services/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

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
