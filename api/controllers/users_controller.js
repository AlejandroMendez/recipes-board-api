import {
  get_users,
  register_user
} from '../models/users_model';

exports.getUsers = (req, res) => {
  get_users((error, users) => {
    res.json({users});
  });
};

exports.registerUser = (req, res) => {
  const userData = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    lastName: req.body.last_name,
    userName: req.body.user_name
  };

  register_user(userData,(error, registerUser) => {
  });
};
