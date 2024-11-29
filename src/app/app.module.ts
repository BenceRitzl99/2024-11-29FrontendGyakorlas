import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecordComponent } from './record/record.component';
import { provideHttpClient } from '@angular/common/http';
import { SearchPipe } from './search.pipe';
import { AngularFireModule } from '@angular/fire/compat';
import { environments } from '../environments/environments';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RecordComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environments.firebaseConfig),
    AngularFireDatabaseModule
    
  ],
  providers: [
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
