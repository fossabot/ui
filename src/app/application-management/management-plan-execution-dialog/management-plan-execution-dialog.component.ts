/**
 * Copyright (c) 2017 University of Stuttgart.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and the Apache License 2.0 which both accompany this distribution,
 * and are available at http://www.eclipse.org/legal/epl-v10.html
 * and http://www.apache.org/licenses/LICENSE-2.0
 */

import { Component, Input } from '@angular/core';
import { Plan } from '../../core/model/new-api/plan.model';
import { GrowlActions } from '../../core/growl/growl-actions';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../../store/app-state.model';

@Component({
    selector: 'opentosca-management-plan-execution-dialog',
    templateUrl: './management-plan-execution-dialog.component.html'
})
export class ManagementPlanExecutionDialogComponent {

    @Input()
    visible: boolean = true;

    runnable: boolean = false;

    @Input()
    plan: Plan = null;

    constructor(private ngRedux: NgRedux<AppState>) {
    }

    checkInputs(): void {
        for (const parameter of this.plan.input_parameters) {
            if (parameter.required !== 'YES') {
                continue;
            }

            if (parameter.value == null || parameter.value === '') {
                this.runnable = false;
                return;
            }
        }
        this.runnable = true;
    }

    runPlan(): void {
        this.visible = false;
        this.ngRedux.dispatch(GrowlActions.addGrowl(
            {
                severity: 'warning',
                summary: 'Plan NOT started',
                detail: 'The plan ' + this.plan.id + ' was not run. Blame the Dev!'
            }
        ));
    }
}
