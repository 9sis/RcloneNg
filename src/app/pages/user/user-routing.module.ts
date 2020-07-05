import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserLoginComponent } from './login/UserLogin.component';
import { UserComponent } from './user.component';
import { UserAddComponent } from './add/add.component';

const routes: Routes = [
	{
		path: '',
		component: UserComponent,
		pathMatch: 'full',
	},
	{
		path: 'add',
		component: UserAddComponent,
	},
	{
		path: 'login',
		component: UserLoginComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class UserRoutingModule {}
