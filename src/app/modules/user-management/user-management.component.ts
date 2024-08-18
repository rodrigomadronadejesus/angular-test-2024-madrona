import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { BaseUiComponent } from '../../components/base-ui/base-ui.component';
import { FormUserComponent  } from '../../components/form-user/form-user.component';
import { TableListComponent } from '../../components/table-list/table-list.component';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [
    ButtonComponent,
    BaseUiComponent,
    FormUserComponent,
    TableListComponent
  ],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent {

}
