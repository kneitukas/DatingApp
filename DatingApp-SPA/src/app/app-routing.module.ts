import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberListComponent } from './member-list/member-list.component';
import { AuthGuard } from './services/guards/auth.guard';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'register', component: RegisterComponent },
    ]
  },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'members', component: MemberListComponent},
      { path: 'lists', component: ListsComponent},
      { path: 'messages', component: MessagesComponent},
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  },


  // { path: 'members', component: MemberListComponent, canActivate: [AuthGuard]},
  // { path: 'lists', component: ListsComponent, canActivate: [AuthGuard] },
  // { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard] },
  // { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
