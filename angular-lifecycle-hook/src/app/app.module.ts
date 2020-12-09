import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { FormsModule } from '@angular/forms'
import { LogService } from './log-service';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
