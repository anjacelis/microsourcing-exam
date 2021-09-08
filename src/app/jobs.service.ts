import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Job } from "./shared/models/jobs";
import jobs from "./jobs/jobs.json";

import { HttpClient, HttpClientModule } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class JobsService {
  private apiURL = "http://localhost:5000/jobs";
  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    // TODO: replace this one with an actual call to a API or json-server
    //return of(jobs);
    return this.http.get<Job[]>(this.apiURL);
  }

  deleteJob(id: string): Observable<Job> {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete<Job>(url);
  }

  addJobs(job: Job): Observable<Job> {
    return this.http.post<Job>(this.apiURL, job);
  }

  updateJobs(job: Job): Observable<Job> {
    const value = "/" + job.id;
    return this.http.put<Job>(this.apiURL + value, job);
  }
}
