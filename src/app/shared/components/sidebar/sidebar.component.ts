import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ProductsService } from 'src/app/@core/services/products.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() categorySelected = new EventEmitter<any>();
  @Output() rangePriceSelected = new EventEmitter<any>();
  @Output() availableProducts = new EventEmitter<any>();

  @Input() minPrice: any;
  @Input() maxPrice: any;
  products: boolean=false;
  listCategories: any[] = []
  rangePriceValue: any = 0;
  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.productService.getallcategories().subscribe(data => this.listCategories = data)
  }

  onCategoryChecked(item: any) {
    this.categorySelected.emit(item);
  }
  changedRangePrice(item: any) {
    this.rangePriceSelected.emit(item);
  }
  selectProducts(data:any) {
    this.availableProducts.emit(data);  
  }
}