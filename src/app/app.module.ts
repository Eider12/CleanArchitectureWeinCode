import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbumCardComponent } from './UI/view-models/album-card/album-card.component';
import { CircularProgressIndicatorComponent } from './UI/common/circular-progress-indicator/circular-progress-indicator.component';
import { AlbumGateway } from './domain/models/Album/gateway/album-gateway';
import { AlbumApiService } from './infraestructure/driven-adapter/album-api/album-api.service';
import { AlbumApiServiceWithoutDelay } from './infraestructure/driven-adapter/album-api/album-api-withou-delay.service';
import { HeroeCardComponent } from './UI/view-models/heroe-card/heroe-card.component';
import { HeroeGateway } from './domain/models/Heroes/gateway/heroe-gateway';
import { HeroeApiService } from './infraestructure/driven-adapter/heroe-api/heroe-api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AlbumCardComponent,
    CircularProgressIndicatorComponent,
    HeroeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: AlbumGateway, useClass: AlbumApiService},
    {provide: HeroeGateway, useClass: HeroeApiService}
  ],
  // providers: [{provide: HeroeGateway, useClass: HeroeApiService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
