import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: 'identity-management',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Routes',
      }).then((m) => m.routes),
  },
  {
    path: '',
    redirectTo: 'identity-management/signup',
    pathMatch: 'full',
  },
];

