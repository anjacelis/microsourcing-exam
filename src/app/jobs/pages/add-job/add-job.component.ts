import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Guid } from "guid-typescript";
import { Job, JobType } from "src/app/shared/models/jobs";
import * as jobsActions from "../../state/jobs.actions";

@Component({
  selector: "app-add-job",
  templateUrl: "./add-job.component.html",
  styleUrls: ["./add-job.component.scss"],
})
export class AddJobComponent implements OnInit {
  jobForm = new FormGroup({
    company: new FormControl("", [Validators.required]),
    title: new FormControl("", [Validators.required]),
    date: new FormControl("", [Validators.required]),
    type: new FormControl("", [Validators.required]),
  });

  id: Guid;
  get JobType() {
    return JobType;
  }

  constructor(private store: Store) {
    this.id = Guid.create();
  }

  ngOnInit(): void {}

  onAddJob() {
    if (!this.jobForm.valid) {
      return;
    }

    const job: Job = {
      id: this.id.toString(),
      company: this.jobForm.value.company,
      logo: "http://dummyimage.com/184x100.png/cc0000/ffffff",
      link: "https://cnn.com/integer/non/velit/donec/diam/neque/vestibulum.xml?nisl=molestie&duis=hendrerit&bibendum=at&felis=vulputate&sed=vitae&interdum=nisl&venenatis=aenean&turpis=lectus&enim=pellentesque&blandit=eget&mi=nunc&in=donec&porttitor=quis&pede=orci&justo=eget&eu=orci&massa=vehicula&donec=condimentum&dapibus=curabitur&duis=in&at=libero&velit=ut&eu=massa&est=volutpat&congue=convallis&elementum=morbi&in=odio&hac=odio&habitasse=elementum&platea=eu&dictumst=interdum&morbi=eu&vestibulum=tincidunt&velit=in&id=leo&pretium=maecenas&iaculis=pulvinar&diam=lobortis&erat=est&fermentum=phasellus&justo=sit&nec=amet&condimentum=erat&neque=nulla&sapien=tempus&placerat=vivamus&ante=in&nulla=felis&justo=eu&aliquam=sapien&quis=cursus&turpis=vestibulum&eget=proin&elit=eu&sodales=mi&scelerisque=nulla&mauris=ac&sit=enim&amet=in&eros=tempor&suspendisse=turpis&accumsan=nec&tortor=euismod&quis=scelerisque&turpis=quam&sed=turpis&ante=adipiscing&vivamus=lorem&tortor=vitae&duis=mattis&mattis=nibh&egestas=ligula&metus=nec&aenean=sem&fermentum=duis&donec=aliquam&ut=convallis",
      date: this.jobForm.value.date,
      title: this.jobForm.value.title,
      type: this.jobForm.value.type,
    };

    this.store.dispatch(jobsActions.addJobLoad({ job }));
  }
}
