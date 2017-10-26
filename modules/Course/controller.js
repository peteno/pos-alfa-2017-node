const express = require('express');
const router = express.Router();

const Model = require( './model' );

const ACTION_PATH = './../../actions/';;
const find = require(ACTION_PATH + 'find')(Model);
    
const create = require(ACTION_PATH + 'create')(Model);

const findOne = require(ACTION_PATH + 'findOne')(Model);

const update = require(ACTION_PATH + 'update')(Model);

const remove = require(ACTION_PATH + 'delete')(Model);

module.exports = {
    find,
    create,
    findOne,
    update,
    remove
};
