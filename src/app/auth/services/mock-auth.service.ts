import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class MockAuthService {
  // This is the auth key which will store the data and act as a fake backed
  private DATABASE_USER_LIST_DATA = 'DATABASE_USER_LIST_DATA';

  // This function gets the local storage data for users
  getLocalStorage(): User[] {
    return JSON.parse(
      localStorage.getItem(this.DATABASE_USER_LIST_DATA) || '[]'
    );
  }

  // This function is used to set data in the local storage
  setLocalStorage(data: User[]): void {
    localStorage.setItem(this.DATABASE_USER_LIST_DATA, JSON.stringify(data));
  }

  // Function to add a new User to the database
  addUser(user: User) {
    const data = this.getLocalStorage();
    data.push(user);
    this.setLocalStorage(data);
  }

  // This function checks if the password and username matches
  isUserValid(userInput: User): User | undefined {
    // Fetching the previous data
    const data = this.getLocalStorage();

    // Checking if we found the needed data or not
    const foundValue = data.find(
      (user) =>
        user.username === userInput.username &&
        user.password === userInput.password
    );

    return foundValue;
  }
}
