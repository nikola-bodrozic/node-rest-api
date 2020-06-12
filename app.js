const axios = require('axios');
var querystring = require('querystring');
require('dotenv').config()

const data = {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    grant_type: 'client_credentials'
};

const encData = querystring.stringify(data);
const baseURL = 'https://api.lufthansa.com/v1';

const createUser = async () => {
    try {
        const resT = await axios.post(`${baseURL}/oauth/token`, encData);
        const token = resT.data.access_token;
        const head = {
            headers: {
                Authorization: "Bearer " + token,
                Accept: "application/json"
            }
        };
        const resA = await axios.get(`${baseURL}/references/airports/FRA`, head);
        console.log(resA.data.AirportResource);
    } catch (err) {
        console.error(err);
    }
};

createUser();

