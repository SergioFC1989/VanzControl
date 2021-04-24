import index from './index'

export const FEATURE_PATH = '/start_shift';

export default [
  {
    path: `${FEATURE_PATH}`,
    component: index,
    exact: false,
    requireAuth: false,
  }
];