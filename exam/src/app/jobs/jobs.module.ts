import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { JobsRoutingModule } from "./jobs-routing.module";
import { JobsComponent } from "./pages/jobs/jobs.component";
import { JobComponent } from "./pages/jobs/job/job.component";
import { JobDescriptionComponent } from "./pages/job-description/job-description.component";
import { AddJobComponent } from "./pages/add-job/add-job.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SearchfilterPipe } from "../searchfilter.pipe";

@NgModule({
  declarations: [
    JobsComponent,
    JobComponent,
    JobDescriptionComponent,
    AddJobComponent,
    SearchfilterPipe,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    JobsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class JobsModule {}
