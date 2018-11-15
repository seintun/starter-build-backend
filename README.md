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
5. Add `"knex": "knex"` at the end of scripts inside package.json
6. `npm run knex migrate:make users` & create migrations
7. `npm run knex seed:make 01_users` & create seeds
- `npm run knex migrate:latest`,
- `npm run knex seed:run`
- `npm run knex migrate:currentVersion`, 
- `npm run knex migrate:rollback` for status check

# Users Migration
```sh
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (table) => {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.string('userId').notNullable().defaultTo('');
        table.string('password').notNullable().defaultTo('');
        table.string('email').notNullable().defaultTo('');
        table.timestamps(true,true);
    })
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
```

# Users Sample Seeds
```sh
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { 
          name: 'Dave', 
          userId: 'dave', 
          password: 'password123', 
          email: 'dave@galvanize.com'
        },
        {
          name: 'Elizabeth', 
          userId: 'elizabeth', 
          password: 'password123', 
          email: 'elizabeth@email.com'
        },
        {
          name: 'John', 
          userId: 'john', 
          password: 'password123', 
          email: 'john@email.com'
        },
        {
          name: 'Mary', 
          userId: 'mary', 
          password: 'password123', 
          email: 'mary@email.com'
        },
        {
          name: 'Isabella', 
          userId: 'isabella', 
          password: 'password123', 
          email: 'isabella@email.com'
        }
      ]);
    });
};
```