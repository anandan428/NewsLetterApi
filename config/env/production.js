var defaultConfig = require('./default');

module.exports = {
    db: {
        uri: process.env.MONGODB_URI || 'mongodb://newsletter1-db:6dysjLZIMBlud80euhOPsE4kKJ9wceBUujbMOoQH2gAPBQEH182wAz3fgNMWQU4Q4ADnipV5OGzeBFFqvbsVoQ==@newsletter1-db.documents.azure.com:10255/?ssl=true',
        options: {
            useNewUrlParser: true
        },
        debug: process.env.MONGO_DEBUG || false
    },
    log: {
        format: process.env.LOG_FORMAT || 'combined',
        fileLogger: {
            directoryPath: process.cwd(),
            fileName: 'app.log',
            maxsize: 10485760,
            maxFiles: 3,
            json: false
        }
    },
    app: {
        title: defaultConfig.app.title + '- Production Environment'
    },
    cors: {
        whiteList: ['http://localhost:3000']
    }
}