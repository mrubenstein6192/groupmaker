// dbPassword = 'mongodb+srv://YOUR_USERNAME_HERE:'+ encodeURIComponent('YOUR_PASSWORD_HERE') + '@CLUSTER_NAME_HERE.mongodb.net/test?retryWrites=true';

module.exports = {
    mongoURI: process.env.MONGODB_URI || 'mongodb://localhost/groupmaker'
};