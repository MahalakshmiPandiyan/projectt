import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, NgForm, Validators, PatternValidator, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppModule } from '../app.module';
import { Features } from '../service/features';
import { FeaturesService } from '../service/features.service';
@Component({
  selector: 'app-addtional-features',
  templateUrl: './addtional-features.component.html',
  styleUrls: ['./addtional-features.component.scss']
})


export class AddtionalFeaturesComponent implements OnInit {

  featuresList: Features[] = [];
  featuresForm: FormGroup | any;
  message: string='';
  message1: string='';
  error: string='';

  constructor(private router: Router, private route: ActivatedRoute, private features: FeaturesService, private formBuilder: FormBuilder) {

    this.featuresForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]{1,15}$')]),
      amount: new FormControl('', [Validators.required,Validators.pattern('^[0-9]{1,6}$')])
    })
  }
  _id: string = '';
  nameValue: string='';
  amountValue: string='';

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this._id = params['_id']
    });
    if (this._id.length == 24) {
      this.onEdit(this._id);
    }

  }

  onEdit(_id: any) {
    this.features.getList();
    this.features.getUserId(this._id).subscribe((res) => {
      this.editFeatures(res)
    },
      (err) => {
        this.error = err.message;
        alert(err.error.message)

      });

  }
  editFeatures(featuresList: Features) {

    this.featuresForm.patchValue({
      name: featuresList.name,
      amount: featuresList.amount

    })
  }
  backButton() {
    this.router.navigate(['/home'])
  }

  tableDisplay(featuresForm: FormGroup) {

    if (!this._id) {
      //Create New User
      this.features.postDetails(featuresForm.value).subscribe((data) => {
        this.message = Object.values(data)[1];
        alert(this.message)
      },
        (err) => {
          this.error = err.message;
          alert(err.error.message)

        });
    }
    else {
      //Update User info
      this.features.putEvent(featuresForm.value, this._id).subscribe((res) => {
        this.message1 = Object.values(res)[1];
        alert(this.message1)
      },
        (err) => {
          this.error = err.message;
          alert(err.error.message)

        });
    }
    this.router.navigate(['/features_display'])
  }
  featuresValue() {
  }
  get name() {
    return this.featuresForm.get('name')
  }

  get amount() {
    return this.featuresForm.get('amount')
  }
 
}

