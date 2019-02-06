import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ResultComponent } from './result.component';



// Search Result Route Configuration

export const routes: Routes = [
  { path: ':searchTerm', component: ResultComponent },
  { path: ':searchTerm/:tipo', component: ResultComponent },
  { path: '', redirectTo: '/main' },
];

export const searchResultRouting: ModuleWithProviders = RouterModule.forChild(routes);
