import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Demo',
      email: 'demo@gmail.com',
      password: bcrypt.hashSync('password', 8),
    },
    {
      name: 'Test',
      email: 'test@gmail.com',
      password: bcrypt.hashSync('password', 8),
    },
  ],
};

export default data;
