import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/@core/services/products.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() categorySelected = new EventEmitter<any>();
  listCategories: any[] = []

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.productService.getallcategories().subscribe(data => this.listCategories = data)
  }
  
  onCheckboxChange(item: any) {
    this.categorySelected.emit(item);
  }
}
