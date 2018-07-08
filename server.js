// "use strict";
import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import pg from 'pg';

import routes from './api/routes/recipes_routes';

const port = process.env.PORT || 3000;
const app = express();

// const pg = require('pg');
export const pool = new pg.Pool({
  host: 'localhost',
  port: 5432,
  user: 'recipes_user',
  password: '#recipesdb@',
  database: 'recipes_board_db'
});


app.disable('x-powered-by');
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port);
app.use('/api/v1', routes);

// Catch 404 and forward to error handler
// app.use((req, res, next) => {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// Error handler
// app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
//   res
//     .status(err.status || 500
//     .render('error', {
//       message: err.message
//     });
// });

console.log('API server started on:');
console.log(`http://localhost:${port}/`);

// export default app;