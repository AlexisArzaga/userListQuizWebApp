import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';
import { AuthGuardService } from './guards/auth.service';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { EditorLayoutComponent } from './layout/editor-layout/editor-layout.component';
import { ViewerLayoutComponent } from './layout/viewer-layout/viewer-layout.component';

const routes: Routes = [
  { path: "login", component:LoginComponent },
  { path: "register", component:RegisterComponent },
  { path: "userList", component:UserListComponent, canActivate: [AuthGuardService] },
  { path: "adminLayout", component:AdminLayoutComponent },
  { path: "editorLayout", component:EditorLayoutComponent },
  { path: "viewerLayout", component:ViewerLayoutComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
