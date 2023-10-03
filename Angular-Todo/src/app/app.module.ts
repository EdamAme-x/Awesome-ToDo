import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodosService } from './todos.service';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [AppComponent, AddComponent],
  imports: [BrowserModule, FormsModule],
  providers: [TodosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
