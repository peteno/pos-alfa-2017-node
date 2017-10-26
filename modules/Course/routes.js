const express = require('express');
const router = express.Router();


const Controller = require('./controller');

require('./../Book/model');
require('./../User/model');

router.get('/', (req, res, next) =>
  Controller.find( req, res, next, {} )
);

router.get('/:id', (req, res, next) =>
  Controller.findOne( req, res, next )
);

router.get('/:id/populate', (req, res, next) => 
  Controller.findOne( req, res, next, ['teacher', 'students', 'books'] )
);

router.post('/', (req, res, next) =>
  Controller.create( req, res, next, {} )
);

router.put('/:id', (req, res, next) =>
  Controller.update( req, res, next )
);

router.delete('/:id', (req, res, next) =>
  Controller.remove( req, res, next )
);

module.exports = router;
