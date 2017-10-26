const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const MODEL_NAME = __dirname.match(/^.*\\(\w+)$/)[1];

const _schema = {
    name: String,
    type: {
        type: String,
        enum: ['teacher', 'student'],
        required: true,
        default: 'student'
    },
    email: String
};

const Model = mongoose.model(MODEL_NAME, new Schema(_schema));

module.exports=Model;
