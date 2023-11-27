import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { LayoutPageComponent } from './pages/layoutPage/layoutPage.component';
import { HeroPageComponent } from './pages/heroPage/heroPage.component';
import { ListPageComponent } from './pages/listPage/listPage.component';
import { SearchPageComponent } from './pages/searchPage/searchPage.component';
import { NewPageComponent } from './pages/newPage/newPage.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';
import { HeroImagePipe } from './pipes/heroImage.pipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LayoutPageComponent,
    HeroPageComponent,
    ListPageComponent,
    SearchPageComponent,
    NewPageComponent,
    CardComponent,
    HeroImagePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
