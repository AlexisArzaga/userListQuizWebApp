import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';
import { BlockUiTemplateComponent } from './sharedModule/block-ui-template/block-ui-template.component';
import { BlockUIModule } from 'ng-block-ui';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { EditorLayoutComponent } from './layout/editor-layout/editor-layout.component';
import { ViewerLayoutComponent } from './layout/viewer-layout/viewer-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
    BlockUiTemplateComponent,
    AdminLayoutComponent,
    EditorLayoutComponent,
    ViewerLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BlockUIModule.forRoot({
      template: BlockUiTemplateComponent
  }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
