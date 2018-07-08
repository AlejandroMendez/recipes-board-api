import { pool } from '../../server'

export const get_users = (users) => {
  const q = { text: 'SELECT * FROM t_user' };
  pool.connect((err, client, release) => {
    if (err) {
      console.log('fucking error...');
      return console.error('Error acquiring client', err.stack)
    }
    
    client.query(q.text, (err, result) => {
      release();
      if (err) {
        return console.error('Error executing query', err.stack)
      }
      users(err, result.rows);
    });
  });
}

export const register_user = (userData, registerUser) => {
  let today = new Date();
  today = JSON.stringify(today);

  // dd = today.getDay()
  // mm = today.getMonth()+1; // Enero -> 0
  // yyyy = today.getFullYear();
  // hh = today.getHours();
  // mm = today.getMinutes();
  // ss = today.getSeconds();

  const q = 
  `INSERT INTO t_user (user_name, user_email, user_password, user_image, user_account_created_at) 
    VALUES ('${userData.userName}', '${userData.email}', '${userData.password}', '', '${today}')`;
  console.log('my query: ');
  console.log(q);
  
  pool.connect((err, client, release) => {
    if (err) {
      console.log('fucking error...');
      return console.error('Error acquiring client', err.stack)
    }
    
    client.query(q, (err, result) => {
      release();
      if (err) {
        return console.error('Error executing query', err.stack)
      }
      console.log(result)
    });
  });
};