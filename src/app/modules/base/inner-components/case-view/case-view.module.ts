import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { CaseViewComponent } from "./case-view.component";
import { PrimarySubjectComponent } from './primary-subject/primary-subject.component';
import { InvolvedPartiesComponent } from './involved-parties/involved-parties.component';
import { BriefSummaryComponent } from './brief-summary/brief-summary.component';
import { AttachmentsComponent } from './attachments/attachments.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CaseNotesComponent } from './case-notes/case-notes.component';
import { CorrespondencesComponent } from './correspondences/correspondences.component';
import { FinancialsComponent } from './financials/financials.component';
import { CaseClaimsComponent } from './case-claims/case-claims.component';
import { ReportingComponent } from './reporting/reporting.component';

const routes: Routes = [
  {
    path: '',
    component: CaseViewComponent,
  }
];


@NgModule({
  declarations: [
    CaseViewComponent,
    PrimarySubjectComponent,
    InvolvedPartiesComponent,
    BriefSummaryComponent,
    AttachmentsComponent,
    AnalyticsComponent,
    CaseNotesComponent,
    CorrespondencesComponent,
    FinancialsComponent,
    CaseClaimsComponent,
    ReportingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CaseViewModule { }
