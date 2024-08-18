import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { BaseUiComponent } from '../../components/base-ui/base-ui.component'

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [
    ButtonComponent,
    BaseUiComponent
  ],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent {

}
