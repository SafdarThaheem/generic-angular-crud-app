import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DynamicTableService } from 'src/app/shared/services/dynamic-table.service';
import { UsersType } from 'src/app/shared/services/models/users-type';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  keyArray: any[] = [];

  userForm = this.fb.group(this.dynamicData.keyObject);

  constructor(
    private dynamicData: DynamicTableService,
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.keyArray = this.dynamicData.keyArray;
  }

  onSubmit() {
    if (this.userForm.valid) {
      const user: UsersType = this.userForm.value as unknown as UsersType;
      this.userService.addUser(user).subscribe(() => {
        alert('User Added Successfully')
        this.userForm.reset();
        this.router.navigate(['/'])
      });
    }
  }
}
