const axios = require('axios');
let averageTimeSum = 0;
const loadTestWithOutPoolUsers = async () => {
    const driverArray = new Array(65).fill(0) //creating 65 users for load testing
    for (const x of driverArray) {
        try {
            let fromTime = new Date();
            await axios.get(`http://localhost:3000/`); // On this port native connection pooling API will be running
            let toTime = new Date();
            averageTimeSum += (toTime.getTime() - fromTime.getTime()) / 1000
        }
        catch (err) {
            console.error(err);
            process.exit(1);
        }
    }
}


(async () => {
    await loadTestWithOutPoolUsers().catch(err => console.error(err));
    console.log(`NATIVE CONNECTION TIME `,averageTimeSum);
})()