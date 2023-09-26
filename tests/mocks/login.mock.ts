const validPassword = 'ch4ng3m3';
const noUsernameLoginBody = { username: '', password: validPassword };
const validUsername = 'username';
const noPasswordLoginBody = { username: validUsername, password: '' };
const notExistingUserBody = { username: 'notfounduser', password: validPassword };
const existingUserWithWrongPasswordBody = { username: validUsername, password: 'wrong_password' };
const hashPassword = '$2a$10$lQGsGScdxhjGRuYVJX3PX.347IWLNiSk6hOiMmjxlzLEI32lg5LMW';
const existingUser = {
  id: 1, 
  username: validUsername,
  vocation: 'teacher',
  level: 2,
  password: hashPassword, 
  name: 'user1'
};

const validLoginBody = { username: validUsername, password: validPassword };

export default {
  noUsernameLoginBody,
  noPasswordLoginBody,
  notExistingUserBody,
  existingUserWithWrongPasswordBody,
  existingUser,
  validLoginBody,
};