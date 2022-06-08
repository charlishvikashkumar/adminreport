import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { UIModule } from '../../shared/ui/ui.module';
import { WidgetModule } from '../../shared/widget/widget.module';

import { Ng5SliderModule } from 'ng5-slider';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbNavModule, NgbDropdownModule, NgbPaginationModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { NgSelectModule } from '@ng-select/ng-select';
import { MasterService } from './master.service';

import { MasterRoutingModule } from './master-routing.module';
import { ReportComponent } from './report/report.component';
import { ReportlistComponent } from './reportlist/reportlist.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReportviewComponent } from './report/reportview/reportview.component';

@NgModule({
  declarations: [
    ReportComponent,
    ReportlistComponent,
    ReportviewComponent,
    
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    ReactiveFormsModule,
    NgbNavModule,
    NgbModalModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgbDropdownModule,
    DropzoneModule,
    UIModule,
    WidgetModule,
    Ng5SliderModule,
    NgSelectModule,
    NgbPaginationModule,
    
  ],

  providers: [
    MasterService,
   
    
    // LoaderService,
    // { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true },
  ],


  
})
export class MasterModule { }




