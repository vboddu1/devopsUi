import { Component, OnInit } from '@angular/core';
import { RetriveService } from '../retrive.service';

@Component({
  selector: 'app-retrivepage',
  templateUrl: './retrivepage.component.html',
  styleUrls: ['./retrivepage.component.css']
})
export class RetrivepageComponent implements OnInit {
  sEmail1 = "";
  sEmail = "";
  sName = "";
  sPhoneNumber = "";
  sAddress = "";
  sDepartment = "Select Department";
  apiError = false;
  apiSuccess = false;
  showError = false;
  searchBar = false;
  showDiv = false;
  resp : any;
  constructor(public insertService : RetriveService) { }

  ngOnInit() {
    this.sDepartment = "Select Department";
  }

//insert function 
retrive() {
  if (this.sEmail1 != "") {

    console.log("email",this.sEmail);
    //calling api for hr agent list
    this.insertService.retriveApi(this.sEmail1).subscribe(res => {
      this.showDiv = true;
      this.sEmail1= "";
   console.log("retriving response", res);
   
   this.resp = res;
   this.sAddress = this.resp.result.sAddress;
   this.sName = this.resp.result.sName;
   this.sPhoneNumber = this.resp.result.sPhoneNumber;
   this.sEmail = this.resp.result.sEmail;
   this.sDepartment = this.resp.result.sDepartment;
   console.log(this.sAddress);
   console.log(this.resp);
   console.log(this.sName);
  //  create_date: "2018-11-16T16:04:01.329Z"
  //  sAddress: "mcity"
  //  sDepartment: "ece"
  //  sEmail: "pgedala@miraclesoft.com"
  //  sName: "pavani"
  //  sPhoneNumber: "7898908908"

    }, error => {
      console.log(error);
    })

  } else {

    this.searchBar = true;
    setTimeout(() => {
      this.searchBar = false;
    }, 3000);

  }
 
} 

}
