var defaultConfig = require('./default');

module.exports = {
    port: process.env.PORT  || 8443,
    host: process.env.HOST || '0.0.0.0',
    db: {
        uri: process.env.MONGODB_URI || 'mongodb://newsletter-cosmos:josOnx8KVWU4ZpD0aKGgSdiQN9DOzvToI7R3Af5Ewupa6hTkMHtijC30InHQ18rlcObYYzSFlY4S56UlKcFFGQ==@newsletter-cosmos.documents.azure.com:10255/?ssl=true',
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