/* módulos importados abaixo */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
/* componentes importados abaixo */
import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error-404/error-404.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component
  ],
  imports: [BrowserModule,
    FormsModule,
    RouterModule.forRoot([/* aqui definimos as rotas de navegação da aplicação */

      {//rota padrão quando estamos na raiz da aplicação
        path:'', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path:'courses', component: CourseListComponent
      },
      {//quando não encontrar a rota, haverá um redirecionamento para esse caminho
        path:'**', component: Error404Component
      }

    ])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
