import Express from 'express';
import { routerApp } from '../routers';

const app = Express();

export default function BootstrapExpress() {
  app.use('', routerApp);
  app.listen(3000, () => {});
}
