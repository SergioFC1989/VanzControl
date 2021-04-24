import dashboardManagerRoutes from './views/manager/dashboard/route'
import failureRoutes from './views/failure/route'
import mainRoutes from './views/main/route'
import loginRoutes from './views/login/route'
import registerRoutes from './views/register/route'
import startShiftRoutes from './views/driver/route'

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  ...dashboardManagerRoutes,
  ...failureRoutes,
  ...loginRoutes,
  ...registerRoutes,
  ...startShiftRoutes,
  ...mainRoutes,
];