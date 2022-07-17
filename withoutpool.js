const expressApp = require('express')();
const { Client } = require('pg')



expressApp.get('/', async (req, res) => {
    try {
        const client = new Client({
            user: 'postgres',  //never hardcode the credentials directly always use env variables this is for just tutorial purpose
            host: 'localhost', //never hardcode the credentials directly always use env variables this is for just tutorial purpose
            database: 'connectionPooling', //never hardcode the credentials directly always use env variables this is for just tutorial purpose
            password: 'qwerty@1', //never hardcode the credentials directly always use env variables this is for just tutorial purpose
            port: 5432, //never hardcode the credentials directly always use env variables this is for just tutorial purpose
        })

        const fromTime = new Date();
        await client.connect();
        const data = await client.query(`SELECT * FROM users`);
        await client.end();
        const toTime = new Date();
        return res.json({ statusCode: 200, data: data.rows, timeTaken: (toTime.getTime() - fromTime.getTime()) / 1000 })

    }
    catch (err) {
        console.error(err);
        return res.json({ statusCode: 500, message: `Server Error Occurs` });
    }

})



expressApp.listen(3000, () => {
    console.log(`Server is listening to port 3000`);
})