import { loadRemoteModule } from '@angular-architects/native-federation';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', loadChildren: () => loadRemoteModule({
    remoteEntry: 'http://localhost:4201/remoteEntry.json',
    exposedModule: './Routes'
  }).then((m) => m.remoteRoutes) }
];
