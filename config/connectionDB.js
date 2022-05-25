if(process.env.NODE_ENV === 'mongo'){
    const {connectMongoDB} = require('./MongoPersistence/mongoDb')
    connectMongoDB()
    }
    if(process.env.NODE_ENV === 'mysql'){
    const {connectMySQLDB} = require('./MySQLPersistence/mysqldb')
    connectMySQLDB()
    }