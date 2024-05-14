import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DynamicTableService } from 'src/app/shared/services/dynamic-table.service';
import { UsersType } from 'src/app/shared/services/models/users-type';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  public keyArray: any[] = [];
  public userForm = this.fb.group(this.dynamicTable.keyObject);
  public usersArray: any;
  public selectedUser: any;
  public selectedUserId: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dynamicTable: DynamicTableService,
    private fb: FormBuilder,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.keyArray = this.dynamicTable.keyArray;
    this.getUserByID();
  }

  getUserByID() {
    this.selectedUserId = this.route.snapshot.paramMap.get('id');
    if (this.selectedUserId) {
      this.userService.userByID(this.selectedUserId).subscribe((res) => {
        this.selectedUser = res;
        this.setValue();
      });
    }
  }

  setValue() {
    if (this.selectedUser) {
      this.userForm.setValue({
        firstName: this.selectedUser.firstName,
        lastName: this.selectedUser.lastName,
        age: this.selectedUser.age,
        city: this.selectedUser.city,
        balance: this.selectedUser.balance,
        creditCardNumber: this.selectedUser.creditCardNumber,
        phone: this.selectedUser.phone,
      });
    }
  }

  onEdit() {
    const updatedUser: UsersType = this.userForm.value as unknown as UsersType;
    this.userService
      .updateUser(this.selectedUserId, updatedUser)
      .subscribe((res) => {
        console.log('User updated successfully', res);
        this.userForm.reset();
        this.router.navigate(['/']);
      });
  }
}
