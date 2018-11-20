var defaultConfig = require('./default');

module.exports = {
    db: {
        uri: process.env.MONGODB_URI || 'mongodb://newsletter-db:cmnEikMUCuVrUt3wVcQjFMtJaY43sbIzcDoCzwqUPVpDmprgWGVSpRiLsa1khAyF0zN2st0MMDiIYoJ519rtVA==@newsletter-db.documents.azure.com:10255/?ssl=true',
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