import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [{
    path: '', component:HomeComponent
},
{
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then(m=>m.routes),
},
{
    path: 'counter', 
    loadChildren: ()=>import('./counter/counter.routes').then(m=>m.routes)
},
{
    path: 'posts',
    loadChildren: ()=>import('./posts/posts.routes').then(m=>m.routes)
   
}
];
