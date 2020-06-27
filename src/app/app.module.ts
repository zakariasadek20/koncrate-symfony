import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlidesComponent } from './components/slides/slides.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { MessageComponent } from './components/message/message.component';
import { PostsComponent } from './components/posts/posts.component';
import { ServiceComponent } from './components/service/service.component';
import { ServicesComponent } from './components/services/services.component';
import { ShowPostComponent } from './components/show-post/show-post.component';
import { ShowServiceComponent } from './components/show-service/show-service.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SlidesComponent,
    AccueilComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent,
    MessageComponent,
    PostsComponent,
    ServiceComponent,
    ServicesComponent,
    ShowPostComponent,
    ShowServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
