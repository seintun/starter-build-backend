const knex = require('./db')

const fetchUsers = () => {
  return knex('users')
      .select(['users.id','users.userId','users.name','users.email'])
      .orderBy('users.name', 'ASC');
}

module.exports = {
  fetchUsers
}