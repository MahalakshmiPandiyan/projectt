import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DisplayEventService } from '../service/display-event.service';
import { display_event } from '../service/display_event';

@Component({
  selector: 'app-add-event-details',
  templateUrl: './add-event-details.component.html',
  styleUrls: ['./add-event-details.component.scss']
})
export class AddEventDetailsComponent implements OnInit {
  add_details: display_event[] = [];
  featuresDetails: FormGroup | any;
  message: string='';
  message1: string='';
  error: string='';

  constructor(private router: Router, private route: ActivatedRoute, private displayService: DisplayEventService, private formBuilder: FormBuilder) {

    this.featuresDetails = this.formBuilder.group({
      feature: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]{1,15}$')]),
      details: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]{1,100}$')])
    })
  }
  _id: string = '';

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this._id = params['_id']
    });
    if (this._id.length == 24) {
      this.onEdit(this._id);
    }
  }
  onEdit(_id: any) {
    console.log("edit" + _id);
    this.displayService.getList();
    this.displayService.getUserId(this._id).subscribe((res) => {
      this.editFeatures(res)
    },
      (err) => {
        this.error = err.message;
        alert(err.error.message)

      });
  }
  editFeatures(add_details: display_event) {
    this.featuresDetails.patchValue({
      feature: add_details.feature,
      details: add_details.details

    })
  }
  backButton() {
    this.router.navigate(['/home'])
  }
  tableDisplay(add_details: FormGroup) {
    if (!this._id) {
      //Create New User
      this.displayService.postDetails(add_details.value).subscribe((data:any) => {
        this.message = data['message'];
        alert(this.message)
      },
        (err) => {
          this.error = err.message;
          alert(err.error.message)
        });
    }
    else {
      //Update User info
      this.displayService.putEvent(add_details.value, this._id).subscribe((res:any) => {
        this.message1 = res['message'];;
        alert(this.message1)
      },
        (err) => {
          this.error = err.message;
          alert(err.error.message)
        });
    }
    this.router.navigate(['/home'])
  }

  get feature() {
    return this.featuresDetails.get('feature')
  }

  get details() {
    return this.featuresDetails.get('details')
  }

}

