# Calling REST API using token

Rename file `.env.default` to `.env` and place your credentials for your app.

## Test end points using cUrl

curl "https://api.lufthansa.com/v1/oauth/token" -X POST -d "client_id=**YOUR-CLIENT-ID**" -d "client_secret=**YOUR-SECRET**" -d "grant_type=client_credentials"

request data from protected end-point using token

curl -H "Authorization: Bearer **YOUR-TOKEN**" -H "Accept: application/json" https://api.lufthansa.com/v1/references/airports/FRA

## Install and run app

`yarn install`

`node app.js`
