import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidator {
    static checkOldPassword(control: AbstractControl): Promise<ValidationErrors|null> {
        return new Promise((resolve) =>   {
            // setTimeout(() => {
                if (control.value !== '1234') {
                    resolve({
                        checkOldPassword: true
                    });
                }else {
                    resolve(null);
                }
            // }, 1000);
        });
    }

    static shouldPasswordMatches(control: AbstractControl): ValidationErrors|null {
        const newPassword = control.get('newPassword').value;
        const confirmPassword = control.get('confirmPassword').value;
        if ( newPassword !== confirmPassword ) {
            return { shouldPasswordMatches: true };
        }
        return null;
    }
}