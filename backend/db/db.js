const {MongoClient} = require('mongodb');

//set the connection url and database name
const url = process.env.URL_MONGO;
const dbName = process.env.DB_NAME_MONGO;

//create a new mongoclient
const client = new MongoClient(url,{ useNewUrlParser: true});

//connect to the database

async function connect(){
    try{
        //connect the client to the server
        await client.connect();

        //log a message
        console.log('Conectado ao banco de dados');

        //select database
        const db = client.db(dbName);

    }catch(err){
        //log any errors
        console.error(err);
    }finally{
        //close the client connection
        await client.close()
    }
}


module.exports = connect;
