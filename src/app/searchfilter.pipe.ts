import { Pipe, PipeTransform } from "@angular/core";
import { Job, JobType } from "./shared/models/jobs";

@Pipe({
  name: "searchfilter",
})
export class SearchfilterPipe implements PipeTransform {
  transform(Jobs: Job[], searchValue: string): any {
    if (!Jobs || !searchValue) {
      return Jobs;
    }
    // console.log(JobType.FullTime);
    console.log(JobType[1].toLocaleLowerCase());
    return Jobs.filter(
      (job) =>
        job.title
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase()) ||
        job.company
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase()) ||
        JobType[job.type].toLocaleLowerCase() ===
          searchValue.toLocaleLowerCase().replace(/\s+/g, "")
    );
  }
}
