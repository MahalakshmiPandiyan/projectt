import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { History } from '../service/history';
import { HistoryService } from '../service/history.service';
import { UserService } from '../service/user.service';
import { FeaturesService } from '../service/features.service';
import { Features } from '../service/features';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  providers: [HistoryService]
})
export class EventComponent implements OnInit {
  minDate: any = ''
  eventForm: FormGroup | any;

  historyList: History[] = []
  locale = 'en-US'
  featuresList: Features[] = []

  _id: string = '';
  role: string = ''
  message: string='';
  message2: string='';
  error: string = ''

  constructor(private router: Router, private route: ActivatedRoute, private history: HistoryService, private userService: UserService, private formBuilder: FormBuilder, private featureService: FeaturesService) {
    this.role = this.userService.role;

    this.eventForm = this.formBuilder.group({
      event_name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]{1,15}$')]),
      event_date: new FormControl('', [Validators.required]),
      event_time: new FormControl('', Validators.required),
      organiser: new FormControl(''),
      features: new FormControl('')
    })

  }

  ngOnInit(): void {
    this.role = this.userService.role;
    this.featureService.getList().subscribe((data) => {
      this.featuresList = data as Features[]
    })
    this.route.params.subscribe(params => {
      this._id = params['_id']
    });
    if (this._id.length == 24) {
      this.onEdit(this._id);
    }
    this.nameList();
    this.dateValidation();
  }
  nameList() {
    for (let item of this.featuresList) {
    }
  }

  onEdit(_id: any) {
    console.log("edit" + _id);
    this.history.getList();
    this.history.getUserId(this._id).subscribe((res) => {
      this.editFeatures(res)
    })
  }

  editFeatures(historyList: History) {

    this.eventForm.patchValue({
      event_name: historyList.event_name,
      event_date: formatDate(historyList.event_date, 'yyyy-MM-dd', this.locale),
      event_time: historyList.event_time,
      organiser: historyList.organiser,
      features: historyList.features

    })
  }

  backButton() {
    this.router.navigate(['/home'])
  }
  tableDisplay(eventForm: FormGroup) {

    if (!this._id) {
      //Create New User
      this.history.postDetails(eventForm.value).subscribe((data:any) => {
        console.log(data);
        this.message =data['message'];
        alert(this.message)
      },
        (err) => {
          this.error = err.message;
          alert(err.error.message)

        });
    }
    else {
      //Update User info
      this.history.putEvent(eventForm.value, this._id).subscribe((res:any) => {
        this.message2 = res['message'];
        alert(this.message2)
      },
        (err) => {
          this.error = err.message;
          alert(err.error.message)

        });
    }
    this.router.navigate(['/home'])
  }
  back(){
        this.router.navigate(['/home'])

  }

  dateValidation() {
    let date: any = new Date();

    let toDate: any = date.getDate();
    if (toDate < 10) {
      toDate = "0" + toDate;
    }
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    let year = date.getFullYear();
    this.minDate = year + "-" + month + "-" + toDate;
    return true;
  }

  get event_name() {
    return this.eventForm.get('event_name')
  }
  get event_date() {
    return this.eventForm.get('event_date')
  }
  get event_time() {
    return this.eventForm.get('event_time')
  }
  get organiser() {
    return this.eventForm.get('organiser')
  }
  get features() {
    return this.eventForm.get('features')
  }
}