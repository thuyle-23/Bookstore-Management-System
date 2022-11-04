import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HomeProductsComponent } from './home-products/home-products.component';
import { NgParticlesModule } from 'ng-particles';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [HomeComponent, HomeProductsComponent],
  imports: [CommonModule, HomeRoutingModule, 
    SharedModule, NgParticlesModule, MatCarouselModule.forRoot(),
    MatGridListModule, MatTabsModule, MatButtonToggleModule]
})
export class HomeModule {}
