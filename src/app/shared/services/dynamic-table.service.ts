import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class DynamicTableService {
  keyObject = {
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    age: ['', [Validators.required, Validators.min(2)]],
    city: ['', [Validators.required]],
    balance: ['', [Validators.required, Validators.minLength(2)]],
    creditCardNumber: ['', [Validators.required, Validators.maxLength(15)]],
    phone: ['', [Validators.required, Validators.maxLength(11)]],
  };

  keyArray = [
    { key: 'firstName', name: 'First Name', type: 'text' },
    { key: 'lastName', name: 'Last Name', type: 'text' },
    { key: 'age', name: 'Age', type: 'text' },
    { key: 'city', name: 'City', type: 'text' },
    { key: 'balance', name: 'Balance', type: 'text' },
    { key: 'creditCardNumber', name: 'Credit Card', type: 'text' },
    { key: 'phone', name: 'Phone', type: 'text' },
  ];

  constructor() {}
}
