import { Component } from '@angular/core';
import { PaginateComponent } from '../paginate/paginate.component';

@Component({
  selector: 'app-table-list',
  standalone: true,
  imports: [PaginateComponent],
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.scss'
})

export class TableListComponent {

}
