import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  error: string = "";

  titles: any = [
    'Nous écrire',
    'Laissez-nous un petit mot, ou adressez-nous vos bons conseils pour survivre à l\'arrivée d\'un petit être'
  ]

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  sendContact(){
    if (this.contactForm.invalid) {
      this.error = "Une erreur s'est produite, essayez à nouveau.";
      return;
    }

    let _formData = new FormData();
    _formData.append("name", this.contactForm.value.name);
    _formData.append("email", this.contactForm.value.email);
    _formData.append("message", this.contactForm.value.message);

    this.http.post(environment._apiurl + "/contact", _formData).subscribe((data) => {
      this.error = "Votre message a bien été envoyé !"
     }, error => { this.error = "Une erreur s'est produite, essayez à nouveau."});
     this.contactForm.reset();
  }
  

}
