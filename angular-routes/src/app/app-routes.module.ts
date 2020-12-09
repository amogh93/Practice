import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { MailComponent } from './mail/mail.component';

const routes:Routes=[
  {path:'mail',component:MailComponent},
  {path:'calendar',component:CalendarComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutesModule { }
