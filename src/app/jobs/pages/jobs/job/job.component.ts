import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Job, JobType } from "../../../../shared/models/jobs";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-job",
  templateUrl: "./job.component.html",
  styleUrls: ["./job.component.scss"],
})
export class JobComponent implements OnInit {
  @Input() job: Job | null = null;
  faTimes = faTimes;
  isHover: boolean = false;
  @Output() onDeleteJob: EventEmitter<string> = new EventEmitter();

  JobType = JobType;

  constructor() {}

  ngOnInit(): void {}

  mouseEnter() {
    this.isHover = true;
  }

  mouseLeave() {
    this.isHover = false;
  }

  onDelete(id: string) {
    this.onDeleteJob.emit(id);
  }
}
