import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { F1ApiService } from './services/f1-api.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageModule } from './components/page.module';
import { AppComponent } from '../app/app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, HttpClientModule, NgbModule, PageModule],
	providers: [F1ApiService],
	bootstrap: [AppComponent],
})
export class AppModule {}
