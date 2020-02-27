import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { EstadisticasAdminComponent } from './estadisticas-admin/estadisticas-admin.component';
import { UsuariosAdminComponent } from './usuarios-admin/usuarios-admin.component';
import { FormsModule} from "@angular/forms";


@NgModule({
  declarations: [SidebarAdminComponent, EstadisticasAdminComponent, UsuariosAdminComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    SidebarAdminComponent,
    EstadisticasAdminComponent,
    UsuariosAdminComponent
  ]
})
export class AdminModule2 { }
