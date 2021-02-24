
import index from './index'

export const FEATURE_PATH = '/failure';

export default [
  {
    path: `${FEATURE_PATH}`,
    component: index,
    exact: false,
    requireAuth: true,
  }
];