import loginRoutes from './views/login/route'
import dashBoardRoutes from './views/dashboard/route'
import startShiftRoutes from './views/start-shift/route'
import registerRoutes from './views/register/route'
import failureRoutes from './views/failure/route'

export default [
  ...loginRoutes,
  ...dashBoardRoutes,
  ...startShiftRoutes,
  ...registerRoutes,
  ...failureRoutes,
];