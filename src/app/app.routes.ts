import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home/home.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { GameWindowComponent } from './features/game/game-window/game-window.component';

export const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    {path:'auth', children: [
            {path:'register', component: RegisterComponent}
        ]
    },
    {path: 'game', component: GameWindowComponent, children:[

    ]}
];
