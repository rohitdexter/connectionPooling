const { Pool } = require('pg')

const client = new Pool({
    user: 'postgres', //never hardcode the credentials directly always use env variables this is for just tutorial purpose
    host: 'localhost', //never hardcode the credentials directly always use env variables this is for just tutorial purpose
    database: 'connectionPooling', //never hardcode the credentials directly always use env variables this is for just tutorial purpose
    password: 'qwerty@1', //never hardcode the credentials directly always use env variables this is for just tutorial purpose
    port: 5432, //never hardcode the credentials directly always use env variables this is for just tutorial purpose
    max: 20, //never hardcode the credentials directly always use env variables this is for just tutorial purpose
    idleTimeoutMillis: 0, //never hardcode the credentials directly always use env variables this is for just tutorial purpose
    connectionTimeoutMillis: 0, //never hardcode the credentials directly always use env variables this is for just tutorial purpose
})

const scriptToAddUsers = async () => {
    try {
        await client.connect();
        const driverArray = new Array(500).fill(0);
        for (const x of driverArray) {
            await client.query(`INSERT INTO "users"(name) values ('USER${Date.now()}')`);
        }
    }
    catch (err) {
        console.error(err);
        throw err;
    }
}


(async () => {
    console.log(`Script Started!`);
    await scriptToAddUsers().catch(err => console.error(err));
    console.log(`Script completed successfully`);
})()