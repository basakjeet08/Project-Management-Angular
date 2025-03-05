import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { UserType } from '../models/UserType';
import { MockAuthService } from './mock-auth.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private CLIENT_USER_DATA = 'CLIENT_USER_DATA';

  constructor(private mockAuthService: MockAuthService) {}

  // This function returns the client token data info
  getLocalData() {
    const clientData = localStorage.getItem(this.CLIENT_USER_DATA);
    return clientData ? JSON.parse(clientData) : null;
  }

  // This function sets the client data for now
  setLocalData(clientData: User) {
    localStorage.setItem(this.CLIENT_USER_DATA, JSON.stringify(clientData));
  }

  // This function creates a user and adds its entry in the local storage
  registerUser(
    name: string,
    username: string,
    password: string,
    type: string
  ): void {
    let userType: UserType;

    if (type === UserType.PROJECT_MANAGER) {
      userType = UserType.PROJECT_MANAGER;
    } else {
      userType = UserType.DEVELOPER;
    }

    this.mockAuthService.addUser(new User(name, username, userType, password));
  }

  // This function is used to verify if the user is valid or not
  loginUser(username: string, password: string) {
    // Fetch the old data and check with all
    const user = this.mockAuthService.isUserValid(
      new User(null, username, null, password)
    );

    if (user) {
      this.setLocalData(user);
      return true;
    }

    return false;
  }

  // This function returns the current logged in user
  getLoggedInUser(): User {
    return this.getLocalData();
  }

  // This function checks if the
  isLoggedIn(): boolean {
    return this.getLocalData();
  }

  // This function logs out the user
  logout() {
    localStorage.removeItem(this.CLIENT_USER_DATA);
  }
}
