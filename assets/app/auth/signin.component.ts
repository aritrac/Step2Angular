import { Component, OnInit } from "@angular/core";

import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})

export class SigninComponent implements OnInit {
    myForm: FormGroup;
    
    onSubmit(){
        console.log(this.myForm);
        this.myForm.reset();
    }
    
    ngOnInit(){
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.myForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.pattern(re)]),
            password: new FormControl(null, Validators.required)
        });
    }
}