import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
 
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { RegisterComponent } from './components/business-users/register/register.component';
import { ListComponent } from './components/business-users/list/list.component';
import { DeleteComponent } from './components/business-users/delete/delete.component';
import { UpdateComponent } from './components/business-users/update/update.component';
import { RunAllRulesComponent } from './components/rules/run-all-rules/run-all-rules.component';
import { RunIndividualRuleComponent } from './components/rules/run-individual-rule/run-individual-rule.component';
import { DeleteUserComponent } from './components/users/delete-user/delete-user.component';
import { DeleteCarComponent } from './components/users/delete-car/delete-car.component';
import { EditComponent } from './components/edit/edit.component';
import { InformationComponent } from './components/business-users/information/information.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UserInformationComponent } from './components/users/user-information/user-information.component';
import { CarsListComponent } from './components/users/cars-list/cars-list.component';
import { CarsInformationComponent } from './components/users/cars-information/cars-information.component';
import { TransactionsListComponent } from './components/users/transactions-list/transactions-list.component';
import { UserTripsListComponent } from './components/users/user-trips-list/user-trips-list.component';
import { PaymethodsComponent } from './components/paymethods/paymethods.component';
import { TripsListComponent } from './components/trips/trips-list/trips-list.component';
import { TripInformationComponent } from './components/trips/trip-information/trip-information.component';
import { ServersListComponent } from './components/servers/servers-list/servers-list.component';
import { ServerInformationComponent } from './components/servers/server-information/server-information.component';
import { RulesListComponent } from './components/rules/rules-list/rules-list.component';
import { RuleInformationComponent } from './components/rules/rule-information/rule-information.component';
import { RegisterServerComponent } from './components/servers/register-server/register-server.component';
import { UpdateServerComponent } from './components/servers/update-server/update-server.component';
import { ServerResetTokenComponent } from './components/servers/server-reset-token/server-reset-token.component';
import { DeleteServerComponent } from './components/servers/delete-server/delete-server.component';
import { CreateRuleComponent } from './components/rules/create-rule/create-rule.component';
import { DeleteRuleComponent } from './components/rules/delete-rule/delete-rule.component';
import { UpdateRuleComponent } from './components/rules/update-rule/update-rule.component';
import { CommitsListComponent } from './components/rules/commits-list/commits-list.component';
import { RuleAtCommitComponent } from './components/rules/rule-at-commit/rule-at-commit.component';

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'login', component: LoginComponent},
	{path: 'business-users/register', component: RegisterComponent, canActivate:[AuthGuard]},
	{path: 'business-users/list', component: ListComponent, canActivate:[AuthGuard]},
	{path: 'business-users/delete', component: DeleteComponent, canActivate:[AuthGuard]},
	{path: 'business-users/update', component: UpdateComponent, canActivate:[AuthGuard]},
	{path: 'business-users/information', component: InformationComponent, canActivate:[AuthGuard]},
	{path: 'users/delete', component: DeleteUserComponent, canActivate:[AuthGuard]},
	{path: 'users/list', component: UsersListComponent, canActivate:[AuthGuard]},
	{path: 'users/information', component: UserInformationComponent, canActivate:[AuthGuard]},
	{path: 'users/cars/delete', component: DeleteCarComponent, canActivate:[AuthGuard]},
	{path: 'users/cars/list', component: CarsListComponent, canActivate:[AuthGuard]},
	{path: 'users/cars/information', component: CarsInformationComponent, canActivate:[AuthGuard]},
	{path: 'users/transactions/list', component: TransactionsListComponent, canActivate:[AuthGuard]},
	{path: 'users/trips/list', component: UserTripsListComponent, canActivate:[AuthGuard]},
	{path: 'servers/list', component: ServersListComponent, canActivate:[AuthGuard]},
	{path: 'servers/information', component: ServerInformationComponent, canActivate:[AuthGuard]},
	{path: 'servers/register', component: RegisterServerComponent, canActivate:[AuthGuard]},
	{path: 'servers/update', component: UpdateServerComponent, canActivate:[AuthGuard]},
	{path: 'servers/reset-token', component: ServerResetTokenComponent, canActivate:[AuthGuard]},
	{path: 'servers/delete', component: DeleteServerComponent, canActivate:[AuthGuard]},
	{path: 'trips/list', component: TripsListComponent, canActivate:[AuthGuard]},
	{path: 'trips/information', component: TripInformationComponent, canActivate:[AuthGuard]},
	{path: 'rules/run-all-rules', component: RunAllRulesComponent, canActivate:[AuthGuard]},
	{path: 'rules/run-individual-rule', component: RunIndividualRuleComponent, canActivate:[AuthGuard]},
	{path: 'rules/list', component: RulesListComponent, canActivate:[AuthGuard]},
	{path: 'rules/create', component: CreateRuleComponent, canActivate:[AuthGuard]},
	{path: 'rules/update', component: UpdateRuleComponent, canActivate:[AuthGuard]},
	{path: 'rules/delete', component: DeleteRuleComponent, canActivate:[AuthGuard]},
	{path: 'rules/information', component: RuleInformationComponent, canActivate:[AuthGuard]},
	{path: 'rules/commits/list', component: CommitsListComponent, canActivate:[AuthGuard]},
	{path: 'rules/commits/rule-at-commit', component: RuleAtCommitComponent, canActivate:[AuthGuard]},
	{path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
	{path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
	{path: 'profile/edit', component: EditComponent, canActivate:[AuthGuard]},
	{path: 'paymethods', component: PaymethodsComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    RegisterComponent,
    ListComponent,
    DeleteComponent,
    UpdateComponent,
    RunAllRulesComponent,
    RunIndividualRuleComponent,
    DeleteUserComponent,
    DeleteCarComponent,
    EditComponent,
    InformationComponent,
    UsersListComponent,
    UserInformationComponent,
    CarsListComponent,
    CarsInformationComponent,
    TransactionsListComponent,
    UserTripsListComponent,
    PaymethodsComponent,
    TripsListComponent,
    TripInformationComponent,
    ServersListComponent,
    ServerInformationComponent,
    RulesListComponent,
    RuleInformationComponent,
    RegisterServerComponent,
    UpdateServerComponent,
    ServerResetTokenComponent,
    DeleteServerComponent,
    CreateRuleComponent,
    DeleteRuleComponent,
    UpdateRuleComponent,
    CommitsListComponent,
    RuleAtCommitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    BsDropdownModule.forRoot(appRoutes),
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
