import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { from, Observable } from "rxjs";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { Job } from "../../../shared/models/jobs";
import * as jobsActions from "../../state/jobs.actions";
import * as fromJobs from "../../state/jobs.reducer";
import { JobsService } from "src/app/jobs.service";
import { filter } from "rxjs/operators";
import { asLiteral } from "@angular/compiler/src/render3/view/util";
import { Router } from "@angular/router";

@Component({
  selector: "app-jobs",
  templateUrl: "./jobs.component.html",
  styleUrls: ["./jobs.component.scss"],
})
export class JobsComponent implements OnInit {
  jobs$!: Observable<Job[]>;
  add = faPlus;
  searchValue!: string;

  constructor(private store: Store, private router: Router) {}
  ngOnInit(): void {
    this.store.dispatch(jobsActions.getJobs());

    this.jobs$ = this.store.select(fromJobs.selectJobs);
  }

  onAdd(): void {
    // TODO: feel free to modify any files.
    // NOTE: Only maintain console.log that are useful in debugging
    console.log("Add button is pressed");
  }

  deleteJob(id: string) {
    if (confirm("Are you sure you want to delete a job")) {
      this.store.dispatch(jobsActions.deleteJob({ id }));
    }
  }
}
