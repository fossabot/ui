/**
 * Copyright (c) 2017 University of Stuttgart.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and the Apache License 2.0 which both accompany this distribution,
 * and are available at http://www.eclipse.org/legal/epl-v10.html
 * and http://www.apache.org/licenses/LICENSE-2.0
 *
 * Contributors:
 *     Michael Falkenthal - initial implementation
 *     Michael Wurster - initial implementation
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationManagementRoutingModule } from './application-management-routing.module';
import { ConfigurationService } from './../configuration/configuration.service';
import { ApplicationDetailComponent } from './application-detail/application-detail.component';
import { CoreModule } from '../core/core.module';
import { ApplicationInstanceDetailComponent } from './application-instance-detail/application-instance-detail.component';
import { ApplicationInstanceDetailResolverService } from './application-instance-detail/application-instance-detail-resolver.service';
import { ApplicationInstanceListComponent } from './application-instance-list/application-instance-list.component';
import { ApplicationUploadComponent } from './application-upload/application-upload.component';
import { ApplicationDetailResolverService } from './application-detail/application-detail-resolver.service';
import { ApplicationComponent } from './application/application.component';
import { ApplicationOverviewComponent } from './application-overview/application-overview.component';
import { RouterModule } from '@angular/router';
import { AccordionModule, FieldsetModule, CodeHighlighterModule } from 'primeng/primeng';
import { ModalModule, BsDropdownModule, ProgressbarModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { AccordionModule as ngxAccordionModule } from 'ngx-bootstrap';
import { NgUploaderModule } from 'ngx-uploader';
import { NgSpinKitModule } from 'ng-spin-kit';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        ApplicationManagementRoutingModule,
        CommonModule,
        CodeHighlighterModule,
        FormsModule,
        ProgressbarModule,
        NgUploaderModule,
        BrowserAnimationsModule,
        NgSpinKitModule,
        ProgressbarModule.forRoot(),
        ngxAccordionModule.forRoot(),
        ModalModule.forRoot(),
        BsDropdownModule.forRoot(),
        RouterModule,
        FieldsetModule,
        AccordionModule,
        CoreModule
    ],
    declarations: [
        ApplicationDetailComponent,
        ApplicationInstanceDetailComponent,
        ApplicationInstanceListComponent,
        ApplicationUploadComponent,
        ApplicationComponent,
        ApplicationOverviewComponent
    ],
    providers: [
        ConfigurationService,
        ApplicationInstanceDetailResolverService,
        ApplicationDetailResolverService
    ]
})
export class ApplicationManagementModule {
}
