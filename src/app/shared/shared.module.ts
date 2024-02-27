import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormulesComponent } from './components/tarif/formules.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormulesService } from './components/tarif/formules.service';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FormulesComponent,
    ImageSliderComponent
  ],
  providers:[FormulesService],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FormulesComponent,
    ImageSliderComponent
  ]
})
export class SharedModule { }
