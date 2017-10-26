/* global __dirname */
const mongoose = require( 'mongoose' );

const Schema = mongoose.Schema;

const MODEL_NAME = __dirname.match(/^.*\\(\w+)$/)[1];
const _schema = {
    name: {
        type: 'String',
        required: true
    },
    teacher: { 
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'User' 
    },
    books: [
        { 
            type: Schema.Types.ObjectId, 
            ref: 'Book' 
        }
    ],
    students: [
        { 
            type: Schema.Types.ObjectId,
            ref: 'User' 
        }
    ]
};

const Model = mongoose.model(MODEL_NAME, new Schema(_schema));

module.exports=Model;
