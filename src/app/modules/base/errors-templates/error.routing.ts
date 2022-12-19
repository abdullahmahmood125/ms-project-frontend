import { Routes } from '@angular/router';
import { InternalServerComponent } from "./internal-server/internal-server.component";

export const errorRoutes: Routes = [
  {
    path: 'server/:id',
    component: InternalServerComponent
  },
];