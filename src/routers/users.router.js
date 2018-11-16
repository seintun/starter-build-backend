const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/users.controller')

router.get('/', ctrl.fetchUsers);

// router.get('/:id', ctrl.findUser);
// router.post('/', ctrl.createUser);
// router.post('/login', ctrl.loginUser);
// router.put('/:id', ctrl.editUser);
// router.delete('/:id', ctrl.deleteUser);

module.exports = router;