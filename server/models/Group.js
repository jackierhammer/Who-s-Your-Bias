const { Schema, model } = require('mongoose');

const groupSchema = new Schema({
    groupName: {
        type: String,
        required: true
    },
    activeMembers: [
        {
            type: String
        }
    ],
    image: {
        type: String,
    }
});

const Group = model('Group', groupSchema);

module.exports = Group;