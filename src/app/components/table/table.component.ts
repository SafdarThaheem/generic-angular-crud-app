import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicTableService } from 'src/app/shared/services/dynamic-table.service';
import { DynamicTable } from 'src/app/shared/services/models/dynamic-table';
import { UsersType } from 'src/app/shared/services/models/users-type';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  keyArray: DynamicTable[] = [];
  public usersList: any[] = [];

  constructor(
    private dynamicTable: DynamicTableService,
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.keyArray = this.dynamicTable.keyArray;
    this.getUser();
  }

  getUser() {
    this.userService.getUsers().subscribe((res: any) => {
      this.usersList = res;
      console.log(this.usersList);
    });
  }

  onDelete(userId: string) {
    this.userService.deleteUser(userId).subscribe((res) => {
      alert('User Deleted Successful');
      this.usersList = this.usersList.filter((user) => user.id !== userId);
    });
  }

  onEdit(uId: string) {
    this.router.navigate([`/edit/${uId}`]);
  }
}
