import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

// Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

//
import { FlexLayoutModule } from "@angular/flex-layout";
import { PagesListComponent } from './header/pages-list/pages-list.component';
import { SettingsComponent } from './components/settings/settings.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    PagesListComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    //
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    //
    FlexLayoutModule

  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
