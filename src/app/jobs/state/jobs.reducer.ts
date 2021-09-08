import {
  createReducer,
  on,
  Action,
  createFeatureSelector,
  createSelector,
} from "@ngrx/store";
import { Job } from "../../shared/models/jobs";

import * as jobsActions from "./jobs.actions";

export interface State {
  jobs: Job[];
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  jobs: [],
  loading: false,
  error: null,
};

const jobsReducer = createReducer<State>(
  initialState,
  on(jobsActions.getJobs, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(jobsActions.getJobsSuccess, (state, { jobs }) => ({
    ...state,
    loading: false,
    error: null,
    jobs,
  })),
  on(jobsActions.getJobsError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(jobsActions.deleteJob, (state, { id }) => {
    const updatedJobs = state.jobs.filter((job) => {
      return job.id !== id;
    });
    return {
      ...state,
      jobs: updatedJobs,
      loading: true,
      error: null,
    };
  }),
  on(jobsActions.deleteJobSuccess, (state, { id }) => ({
    ...state,
    loading: false,
    error: null,
    id,
  })),
  on(jobsActions.deleteJobError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(jobsActions.addJobLoad, (state, action) => {
    let job = { ...action.job };

    return {
      ...state,
      jobs: [...state.jobs, job],
      loading: true,
      error: null,
    };
  }),
  on(jobsActions.addJobSuccess, (state, { job }) => ({
    ...state,
    loading: false,
    error: null,
    job,
  })),
  on(jobsActions.addJobError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(jobsActions.updateJobLoad, (state, action) => {
    const updatedJob = state.jobs.map((job) => {
      return action.job.id === job.id ? action.job : job;
    });

    return {
      ...state,
      jobs: updatedJob,
      loading: true,
      error: null,
    };
  }),
  on(jobsActions.updateJobSuccess, (state, { job }) => ({
    ...state,
    loading: false,
    error: null,
    job,
  })),
  on(jobsActions.updateJobError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return jobsReducer(state, action);
}

export const selectJobsState = createFeatureSelector<State>("jobsFeature");

export const selectJobs = createSelector(
  selectJobsState,
  (state) => state.jobs
);

export const selectJobById = (id: string | null) =>
  createSelector(selectJobsState, (state) => {
    return state.jobs.find((job) => job.id === id);
  });
