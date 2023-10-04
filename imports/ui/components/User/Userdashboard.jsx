import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

// Set user roles
Meteor.methods({
  'users.setRole': function (userId, role) {
    Roles.addUsersToRoles(userId, role);
  },
});
