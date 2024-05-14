import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditRoutingModule } from './edit-routing.module';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditUserComponent],
  imports: [CommonModule, EditRoutingModule, ReactiveFormsModule],
})
export class EditModule {}
