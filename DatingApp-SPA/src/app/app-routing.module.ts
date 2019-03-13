import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { AuthGuard } from './services/guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './services/_resolvers/member-detail.resolver';
import { MemberListResolver } from './services/_resolvers/member-list.resolver';

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
      { path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver}},
      { path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver}},
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
