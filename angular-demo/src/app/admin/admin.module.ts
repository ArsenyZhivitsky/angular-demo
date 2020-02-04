import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from '../auth/login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { MainLayoutComponent } from '../shared/components/main-layout/main-layout.component';

@NgModule({
    declarations: [
        //AdminLayoutComponent,
        MainLayoutComponent,
        LoginPageComponent,
        DashboardPageComponent,
        CreatePageComponent,
        EditPageComponent
    ],
    imports: [
        CommonModule,
        // RouterModule.forChild([
        //     {
        //         path: "", component: MainLayoutComponent, children: [
        //             {path: "", redirectTo: "/admin/login", pathMatch: "full"},
        //             {path: "login", component: LoginPageComponent},
        //             {path: "dashboard", component: DashboardPageComponent},
        //             {path: "create", component: CreatePageComponent},
        //             {path: "user/:id/edit", component: EditPageComponent}
        //         ]
        //     }
        // ])
    ],
    exports: [RouterModule]
})

export class AdminModule {

}