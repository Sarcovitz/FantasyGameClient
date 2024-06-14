import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home/home.component';
import { RegisterComponent } from './features/auth/register/register.component';

export const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    {path:'auth', children: [
            {path:'register', component: RegisterComponent}
        ]
    }
];
