import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { BodyHomeComponent } from './home/body-home/body-home.component';
import { BodyLoginComponent } from './login/body-login/body-login.component';
import { BodyRegistroComponent } from './registro/body-registro/body-registro.component';
import { BodyMapaComponent } from './mapa/body-mapa/body-mapa.component';
import { BodyNosotrosComponent } from './nosotros/body-nosotros/body-nosotros.component';
import { BodyProductosComponent } from './productos/body-productos/body-productos.component';
import { BodyTiendasComponent } from './tiendas/body-tiendas/body-tiendas.component';
import { BodyContactenosComponent } from './contactenos/body-contactenos/body-contactenos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';

const appRoutes: Routes =[
   {path: 'inicio', component: BodyHomeComponent},
   {path: 'nosotros', component: BodyNosotrosComponent},
   {path: 'contactanos', component: BodyContactenosComponent},
   {path: 'login', component: BodyLoginComponent},
   {path: 'registro', component: BodyRegistroComponent},
   {path: 'mapa', component: BodyMapaComponent},
   {path: 'tiendas', component: BodyTiendasComponent },
   {path: 'productos', component: BodyProductosComponent},
   {path: '', redirectTo: '/inicio', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    BodyHomeComponent,
    BodyLoginComponent,
    BodyRegistroComponent,
    BodyMapaComponent,
    BodyNosotrosComponent,
    BodyProductosComponent,
    BodyTiendasComponent,
    BodyContactenosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule,
  RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
