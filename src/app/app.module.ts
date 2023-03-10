import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { PercentagePipe } from './percentage.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, PercentagePipe, FilterPipe],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
