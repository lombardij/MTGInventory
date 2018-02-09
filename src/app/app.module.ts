import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LibraryComponent } from './library/library.component';
import { CardService } from './library/library.service';
import { ManaComponent } from './shared/mana/mana.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LibraryComponent,
    ManaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'library', component: LibraryComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
