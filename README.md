# Setting Up backend with node_modules
1. Fork and clone
2. `npm init -y`
3. `npm install express morgan cors body-parser`

# Setting Up backend with knex migration & seeds
1. `npm install knex pg`
2. `createdb DATABASE_NAME`
3. Change the database name inside the existing knexfile.js with
  connection: {
    host: 'localhost',
    // DATABASE_NAME
    database: 'INSERT_DATABASE_NAME'
  }
4. Use `psql - l` to check if database is successfully created
5. `npm run knex migrate:make users` & create migrations
6. `npm run knex seeds:make 01_users` & create seeds
7. Use `npm run knex migrate:currentVersion`, `npm run knex migrate:latest`, `npm run knex migrate:rollback` for status check