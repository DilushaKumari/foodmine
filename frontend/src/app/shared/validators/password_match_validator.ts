import {AbstractControl} from "@angular/forms";

export const PasswordMatchValidator = (passwordControlName : string, confirmPasswordControlName :string)=>{
  const validator = (form : AbstractControl)=>{
    const passwordController = form.get(passwordControlName);
    const confirmPasswordController = form.get(confirmPasswordControlName);

    if(!passwordController || !confirmPasswordController) return;

    if(passwordController.value !== confirmPasswordController.value){
      confirmPasswordController.setErrors({notMatch:true});
    }else{
      const errors =confirmPasswordController.errors;
      if(!errors)return;

      delete errors.notMatch;
      confirmPasswordController.setErrors(errors);
    }
  }
  return validator;

}
