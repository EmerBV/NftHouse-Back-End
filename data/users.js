import bcrypt from 'bcrypt'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Emer',
    email: 'emer@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'KC',
    email: 'kc@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users