const expressApp = require('express')();
const { Pool } = require('pg')

const client = new Pool({
    user: 'postgres', //never hardcode the credentials directly always use env variables this is for just tutorial purpose 
    host: 'localhost', //never hardcode the credentials directly always use env variables this is for just tutorial purpose
    database: 'connectionPooling', //never hardcode the credentials directly always use env variables this is for just tutorial purpose
    password: 'qwerty@1', //never hardcode the credentials directly always use env variables this is for just tutorial purpose
    port: 5432, //never hardcode the credentials directly always use env variables this is for just tutorial purpose
    max: 70,
    idleTimeoutMillis: 0,
    connectionTimeoutMillis: 0,
})

expressApp.get('/', async (req, res) => {
    try {
        console.log(`Request recieved at`, Date.now())
        const fromTime = new Date();
        await client.connect();
        const data = await client.query(`SELECT * FROM users`);
        const toTime = new Date();
        return res.json({ statusCode: 200, data: data.rows, timeTaken: (toTime.getTime() - fromTime.getTime()) / 1000 })

    }
    catch (err) {
        console.error(err);
        return res.json({ statusCode: 500, message: `Server Error Occurs` });
    }

})


expressApp.listen(3001, () => {
    console.log(`Server is listening to port 3001`);
})