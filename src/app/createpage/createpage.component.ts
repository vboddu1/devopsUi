import { Component, OnInit } from '@angular/core';
import { RetriveService } from '../retrive.service';

@Component({
  selector: 'app-createpage',
  templateUrl: './createpage.component.html',
  styleUrls: ['./createpage.component.css']
})
export class CreatepageComponent implements OnInit {

  sEmail = "";
  sName = "";
  sPhoneNumber = "";
  sAddress = "";
  sDepartment = "Select Department";
  apiError = false;
  apiSuccess = false;
  showError = false;

  constructor(public insertService: RetriveService) { }

  ngOnInit() {
    this.sDepartment = "Select Department";
  }

  //insert function 
  submit() {
    this.showError = false;
    var data = {
      "sName": this.sEmail,
      "sEmail": this.sName,
      "sAddress": this.sAddress,
      "sPhoneNumber": this.sPhoneNumber,
      "sDepartment": this.sDepartment
    }
    console.log(data);

    if (this.sEmail != '' && this.sName != '' && this.sPhoneNumber != '' && this.sAddress != '' && this.sDepartment != '') {

      console.log(data);
     // calling api inserting detials into api
       this.insertService.insertApi(data).subscribe(res => {
        this.apiSuccess= true;
         console.log("created response", res);
       }, error => {
        this.apiError = true;
         console.log(error);
       })

    } else {

      //alert("error");
      this.showError = true;
      setTimeout(() => {
        this.showError = false;
      }, 3000);

    }


  }

}
