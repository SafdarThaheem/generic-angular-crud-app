import { Component, OnInit } from '@angular/core';
import { UsersService } from './shared/services/users.service';
import { UsersType } from './shared/services/models/users-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  

  constructor(private userService: UsersService) {}

  ngOnInit(): void {

  }
}
