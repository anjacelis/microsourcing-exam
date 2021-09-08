import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, mergeMap, catchError, tap } from "rxjs/operators";

import { JobsService } from "../../jobs.service";
import * as fromJobs from "./jobs.actions";

@Injectable()
export class JobsEffects {
  getJobs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromJobs.getJobs),
      mergeMap(() =>
        this.jobsService.getJobs().pipe(
          map((jobs) => fromJobs.getJobsSuccess({ jobs })),
          catchError((error) => of(fromJobs.getJobsError({ error })))
        )
      )
    )
  );

  deleteJobs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromJobs.deleteJob),
      mergeMap((action) =>
        this.jobsService.deleteJob(action.id).pipe(
          map((data) => fromJobs.deleteJobSuccess({ id: data.id })),
          catchError((error) => of(fromJobs.deleteJobError({ error })))
        )
      )
    )
  );

  addJobs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromJobs.addJobLoad),
      mergeMap((action) =>
        this.jobsService.addJobs(action.job).pipe(
          map((job) => fromJobs.addJobSuccess({ job })),
          catchError((error) => of(fromJobs.addJobError({ error })))
        )
      ),
      tap((action) => this.router.navigate(["/jobs"]))
    )
  );

  updateJobs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromJobs.updateJobLoad),
      mergeMap((action) =>
        this.jobsService.updateJobs(action.job).pipe(
          map((job) => fromJobs.updateJobSuccess({ job })),
          catchError((error) => of(fromJobs.updateJobError({ error })))
        )
      ),
      tap((action) => this.router.navigate(["/jobs"]))
    )
  );

  constructor(
    private actions$: Actions,
    private jobsService: JobsService,
    private router: Router
  ) {}
}
