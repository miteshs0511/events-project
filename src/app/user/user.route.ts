import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';
import { SignUpComponent } from './signup.component';

export const userRoutes = [
    {path: 'profile', component: ProfileComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignUpComponent}
];
