import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatRadioModule} from '@angular/material/radio';

import { HttpClientModule } from '@angular/common/http';
import { CheckoutComponent } from './checkout/checkout.component';
import { OnestepcheckoutComponent } from './onestepcheckout/onestepcheckout.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [AppComponent, CheckoutComponent, OnestepcheckoutComponent, SuccessComponent],
  imports: [BrowserModule, 
    AppRoutingModule, 
    BrowserAnimationsModule, 
    SharedModule, 
    NgxSkeletonLoaderModule,
    FormsModule,
    ReactiveFormsModule, 
    MatCarouselModule,
    HttpClientModule,
    MatRadioModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
