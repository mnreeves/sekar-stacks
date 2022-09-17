import Express from 'express';

(async () => {
  const app = Express();
  app.get('/', (req, res) => {res.send('k')});

  app.listen(3000, () => {});
})();
