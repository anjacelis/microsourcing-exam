import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { JobsComponent } from "./pages/jobs/jobs.component";
import { JobDescriptionComponent } from "./pages/job-description/job-description.component";
import { AddJobComponent } from "./pages/add-job/add-job.component";

const routes: Routes = [
  { path: "", component: JobsComponent },
  { path: "add", component: AddJobComponent },
  { path: ":id", component: JobDescriptionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobsRoutingModule {}
