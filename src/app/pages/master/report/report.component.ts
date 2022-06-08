import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MasterService } from '../master.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  public zoneId: any
  public zoneForm: FormGroup;
  public formAction: any = "Add"; // "Update"
  // Form submition
  submit: boolean;
  

  wardList:any=[];
  zoneList:any=[];


  dataloader: boolean = false;
  sinDetails: any;
  //cityList: any;

  /**
   * Returns form
   */
  get form() {
    return this.zoneForm.controls;
  }
  constructor(
    private fb: FormBuilder,
    private masterService: MasterService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {
    this.zoneForm = this.fb.group({
      zoneName: ['', Validators.required],
      zoneId: ['', Validators.required],
      wardId: ['', Validators.required]
    })
    this.submit = false;
    this.formAction = "Add"
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.zoneId = this.activatedRouter.snapshot.params['id'];
    this.zoneList = this.masterService.getZone().subscribe(data => {
      this.zoneList = data;
    });

    this.wardList = this.masterService.getWard().subscribe(data => {
      this.wardList = data;
    });

    if (this.zoneId) {
      this.formAction = "Update"
      this.masterService.getZoneById(this.zoneId).toPromise().then(data => {
        this.zoneList = data;
        Object.assign(this.zoneList, data);
        this.zoneForm = this.fb.group({
          'zoneId': new FormControl(this.zoneList.data.zoneId),
          'wardId': new FormControl(this.zoneList.data.wardId),
          'zoneName': new FormControl(this.zoneList.data.zoneName),
          'isActive': '1',
        })

        this.dataloader = true;
      }).catch(err => {
        console.log(err);
      })
     
    
    
    } else {
      this.formAction = "Add"
    }
  }


  getWard(event){
    console.log(event.target.value);
    var obj = {
      zoneId:event.target.value
    }
    this.masterService.getWardByZoneId(obj.zoneId).subscribe(data =>{
    this.zoneList = data;
    })
  }


  handleSubmit() {
    // if(this.stateForm.invalid){
    //   return
    // }
    //
    this.submit = false;
    if (this.formAction == "Add") {
      this.masterService.createCity( this.zoneForm.value)
        .then((response: any) => {

          if (!response.status) {
            Swal.fire('Data Add !', 'Data not create successfully! ', 'success');
            return;
          }
          Swal.fire('Data Add !', 'Data create successfully! ', 'success');
          this.router.navigate(['master/reportlist'])

        })
        .catch(err => console.log(err))
    }

    
    if (this.formAction == "Update") {
      this.masterService.updateReport(this.zoneId, this.zoneForm.value).subscribe(res => {
        this.sinDetails = res;
        if(this.sinDetails.status == true){
          Swal.fire('Data Update !', 'Data updated successfully! ', 'success');
        }else{
          Swal.fire('Data Not Update !', 'Data not updated successfully! ', 'success');
        }
        this.router.navigate(['master/reportlist'])

      })
    }
  }

}
