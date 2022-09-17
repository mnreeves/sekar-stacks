import Express from 'express';

const app = Express();

export default function BootstrapExpress() {
  app.get('/', (req, res) => {res.send('ok')});
  app.listen(3000, () => {});
}
