import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';

const routes: Routes = [
    {
        path: "",
        component: MainLayoutComponent,
        children: [
            {path: "", redirectTo: "/login", pathMatch: "full"},
            {path: "login", component: LoginPageComponent},
            {path: "", component: HomePageComponent},
            {path: "user/:id", component: UserPageComponent}
        ]
    },
    // {
    //     path: "admin", loadChildren: "./admin/admin.module#AdminModule"
    // }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})

export class AppRoutingModule {

}