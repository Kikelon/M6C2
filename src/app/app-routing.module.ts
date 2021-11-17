import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent} from './pages/contact-page/contact-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './pages/footer/footer.component'

const routes: Routes = [
  {path: "home", component: HomePageComponent},
  {path: "contact", component : ContactPageComponent},
  {path: "login", component : LoginPageComponent},
  {path: "register", component : RegisterPageComponent},
  {path: "about", component : AboutComponent},
  {path: "footer", component : FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
