import { createAction, props } from "@ngrx/store";
import { Job } from "../../shared/models/jobs";

// Fetch all jobs
export const getJobs = createAction("[Jobs API] Get Jobs");
export const getJobsSuccess = createAction(
  "[Jobs API] Get Jobs Success",
  props<{ jobs: Job[] }>()
);
export const getJobsError = createAction(
  "[Jobs API] Get Jobs Error",
  props<{ error: string }>()
);

// Adding Job Actions
export const addJobLoad = createAction(
  "[Jobs API] Add Job Load",
  props<{ job: Job }>()
);
export const addJobSuccess = createAction(
  "[Jobs API] Add Job Success",
  props<{ job: Job }>()
);
export const addJobError = createAction(
  "[Jobs API] Add Job Error",
  props<{
    error: string;
  }>()
);

// TODO: add additional actions for other CRUD operations
export const deleteJob = createAction(
  "[Jobs API] Delete Job",
  props<{ id: string }>()
);

export const deleteJobSuccess = createAction(
  "[Jobs API] Delete Jobs Success",
  props<{ id: string }>()
);
export const deleteJobError = createAction(
  "[Jobs API] Delete Job Error",
  props<{
    error: string;
  }>()
);

// Updating Job Actions
export const updateJobLoad = createAction(
  "[Jobs API] Update Job Load",
  props<{ job: Job }>()
);
export const updateJobSuccess = createAction(
  "[Jobs API] Update Job Success",
  props<{ job: Job }>()
);
export const updateJobError = createAction(
  "[Jobs API] Update Job Error",
  props<{
    error: string;
  }>()
);
