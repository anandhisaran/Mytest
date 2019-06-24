import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './public/layouts/header/header.component';
import { FooterComponent } from './public/layouts/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent
  ],
  exports: [
   HeaderComponent,
   FooterComponent,
   HomeComponent,
   AboutComponent
	],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
