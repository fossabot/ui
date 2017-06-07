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
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component';
import { SortPipe } from './pipe/sort.pipe';
import { OpenToscaLoggerService } from './service/open-tosca-logger.service';
import { ApplicationManagementService } from './service/application-management.service';
import { GrowlMessageBusService } from './service/growl-message-bus.service';
import { ApplicationInstanceManagementService } from './service/application-instance-management.service';
import { ConfigurationModule } from '../configuration/configuration.module';
import { ApplicationInstancesManagementService } from './service/application-instances-management.service';
import { RepositoryManagementService } from './service/repository-management.service';
import { RouterModule } from '@angular/router';
import { ActionBarComponent } from './component/action-bar/action-bar.component';
import { ActionItemComponent } from './component/action-bar/action-item.component';
import { FuzzySearchPipe } from './pipe/fuzzy-search.pipe';
import { InputDebounceComponent } from './component/action-bar/input-debounce.component';
import { SearchComponent } from './component/action-bar/search.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ConfigurationModule
    ],
    declarations: [
        ActionBarComponent,
        ActionItemComponent,
        BreadcrumbComponent,
        FuzzySearchPipe,
        InputDebounceComponent,
        SearchComponent,
        SortPipe
    ],
    exports: [
        ActionBarComponent,
        ActionItemComponent,
        BreadcrumbComponent,
        FuzzySearchPipe,
        InputDebounceComponent,
        SearchComponent,
        SortPipe,
    ],
    providers: [
        ApplicationInstanceManagementService,
        ApplicationManagementService,
        GrowlMessageBusService,
        OpenToscaLoggerService,
        DatePipe,
        ApplicationInstancesManagementService,
        RepositoryManagementService,
    ]
})
export class CoreModule {
}