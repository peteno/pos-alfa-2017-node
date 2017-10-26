const mongoose = require( 'mongoose' );

const Schema = mongoose.Schema;

const MODEL_NAME = __dirname.match(/^.*\\(\w+)$/)[1];

const _schema = {
  title: String,
  author: String,
  pages: Number
};

const Model = mongoose.model(MODEL_NAME, new Schema(_schema));

module.exports=Model;
