import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, take, tap} from "rxjs";
import {User} from "../shared/models/User";
import {IUserLogin} from "../shared/interfaces/IUserLogin";
import {HttpClient} from "@angular/common/http";
import {USER_LOGIN_URL, USER_REGISTER_URL} from "../shared/constants/urls";
import {ToastrService} from "ngx-toastr";
import {IUserRegister} from "../shared/interfaces/IUserRegister";

const USER_KEY = 'User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable: Observable<User>;

  constructor(private http: HttpClient, private toastrService: ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  login(userLogin: IUserLogin): Observable<any> {
    return this.http.post<any>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (data) => {
          this.setUserToLocalStorage(data);
          this.userSubject.next(this.getUserFromLocalStorage());

          this.toastrService.success(`Welcome to Foodmine ${data.user.name}!`, 'Login Successful'
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Login Failed');
        }
      })
    );
  }

  register(userRegister: IUserRegister): Observable<any> {
    return this.http.post<any>(USER_REGISTER_URL, userRegister).pipe(
      tap({
        next: (data) => {
          this.setUserToLocalStorage(data);
          this.userSubject.next(data.user);
          this.toastrService.success(`Welcome to the FoodMine ${data.user.name}`, 'register Successful')
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Register Failed')
        }
      })
    );
  }

  logout() {
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }

  private setUserToLocalStorage(user: any) {
    console.log("SET LOCAL");
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage(): User {
    const userJSON = localStorage.getItem(USER_KEY);
    let sendUser: User;
    if (userJSON) {

      sendUser = JSON.parse(userJSON).user as User;
      sendUser.token = JSON.parse(userJSON).token;

      return sendUser;
    }

    return new User();


  }
}
