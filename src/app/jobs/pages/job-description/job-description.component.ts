import { formatDate } from "@angular/common";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { faTextHeight } from "@fortawesome/free-solid-svg-icons";
import { Store } from "@ngrx/store";
import { Guid } from "guid-typescript";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Job, JobType } from "src/app/shared/models/jobs";
import * as jobsActions from "../../state/jobs.actions";
import * as fromJobs from "../../state/jobs.reducer";

@Component({
  selector: "app-job-description",
  templateUrl: "./job-description.component.html",
  styleUrls: ["./job-description.component.scss"],
})
export class JobDescriptionComponent implements OnInit {
  get JobType() {
    return JobType;
  }

  jobForm: any;

  job!: Job | undefined;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get("id");
      this.store.select(fromJobs.selectJobById(id)).subscribe((job) => {
        this.job = job;
        console.log(this.job);
        this.createForm();
      });
    });
  }

  createForm() {
    this.jobForm = new FormGroup({
      id: new FormControl(this.job?.id, [Validators.required]),
      logo: new FormControl(this.job?.logo, [Validators.required]),
      company: new FormControl(this.job?.company, [Validators.required]),
      title: new FormControl(this.job?.title, [Validators.required]),
      link: new FormControl(this.job?.link, [Validators.required]),
      date: new FormControl(
        this.job?.date ? formatDate(this.job?.date, "yyyy-MM-dd", "en") : null,
        [Validators.required]
      ),
      type: new FormControl(this.job?.type, [Validators.required]),
    });
  }

  onUpdateJob() {
    if (!this.jobForm.valid) {
      return;
    }

    const job: Job = {
      id: this.jobForm.value.id,
      company: this.jobForm.value.company,
      logo: this.jobForm.value.logo,
      link: this.jobForm.value.link,
      date: this.jobForm.value.date,
      title: this.jobForm.value.title,
      type: this.jobForm.value.type,
    };

    this.store.dispatch(jobsActions.updateJobLoad({ job }));
  }
}
