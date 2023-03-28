import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup,  Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PasswordMatchValidator} from "../../../shared/validators/password_match_validator";
import {IUserRegister} from "../../../shared/interfaces/IUserRegister";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit{

  registeredForm !: FormGroup;
  isSubmitted =false;
  returnUrl ='';

  constructor(
    private formBuilder : FormBuilder,
    private userService : UserService,
    private activatedRoute : ActivatedRoute,
    private router : Router,
  ) {
  }
  ngOnInit(): void {
    console.log("ngONINIT...")
    this.registeredForm = this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      email : ['',[Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.minLength(2)]],
      confirmPassword : ['',[Validators.required]],
      address : ['',[Validators.required,Validators.minLength(5)]]
    }
    ,{
      validators : PasswordMatchValidator('password','confirmPassword')
      });
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }

  get fc(){
    return this.registeredForm.controls;
  }

  submit(){
    console.log("Submitted....")
    this.isSubmitted =true;
    if(this.registeredForm.invalid) return;
    console.log("Submitted 2....")
    const fv = this.registeredForm.value;
    const user : IUserRegister= {
      name: fv.name,
      email: fv.email,
      password : fv.password,
      confirmPassword :fv.confirmPassword,
      address : fv.address
    };
    this.userService.register(user).subscribe(_ =>{
      this.router.navigateByUrl(this.returnUrl);
    })
  }
}
