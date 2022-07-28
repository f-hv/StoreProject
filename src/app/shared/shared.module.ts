import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { FormsModule } from '@angular/forms';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    SearchBoxComponent,
    StarRatingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[HeaderComponent,SidebarComponent,SearchBoxComponent,StarRatingComponent]
})
export class SharedModule { }
