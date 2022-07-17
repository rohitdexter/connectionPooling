const axios = require('axios');
let averageTimeSum = 0;
const loadTestWithPoolUsers = async () => {
    try {
        const driverArray = new Array(65).fill(0)
        for (const x of driverArray) {
            let fromTime = new Date();
            await axios.get(`http://localhost:3001/`); //On this port pool connection API will be running
            let toTime = new Date();
            averageTimeSum += (toTime.getTime() - fromTime.getTime()) / 1000

        }
        return;
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
}


(async () => {
    await loadTestWithPoolUsers().catch(err => console.error(err));
    console.log(`POOL CONNECTION TIME `,averageTimeSum);
})()



