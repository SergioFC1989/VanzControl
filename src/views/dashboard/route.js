import Dashboard from './Dashboard'

export const FEATURE_PATH = '/dashboard'

export default [
  {
    path: `${FEATURE_PATH}`,
    component: Dashboard,
    exact: false,
    requireAuth: false,
  }
]