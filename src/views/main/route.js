import index from './index'

export const FEATURE_PATH = '/';

export default [
  {
    path: `${FEATURE_PATH}`,
    component: index,
    exact: false,
    requireAuth: false,
  }
];