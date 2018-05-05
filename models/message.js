var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var  User = require('./user');

var schema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId}
});

schema.post('remove', function(message){
    User.findById(message.user, function(err, user) {
        if(err){
            //TODO
        }
        user.messages.pull(message);
        user.save();
    });
});

module.exports = mongoose.model('Message',schema);