
import admin from './admin/index'
import user from './user/index'

const loginAdmin = '/login/admin'
const loginUser = '/login/user'

export default [
  {
    path: `${loginAdmin}`,
    component: admin,
    exact: false,
    requireAuth: false,
  },
  {
    path: `${loginUser}`,
    component: user,
    exact: false,
    requireAuth: false,
  },
];