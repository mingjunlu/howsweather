# HowsWeather

## Installation
```
$ git clone https://github.com/mingjunlu/howsweather.git
$ cd howsweather
$ npm install
```

## Setup
1. Get an API key from [Dark Sky](https://darksky.net/dev/register)
2. Create a file named `.env.development.local` and enter the following text (remember to replace `enterYourDarkSkyApiKeyHere` with your API key)
```
HTTPS=true
REACT_APP_API_URL=https://api.darksky.net/forecast
REACT_APP_API_KEY=enterYourDarkSkyApiKeyHere
REACT_APP_API_SUFFIX=lang=zh-tw&units=si&exclude=flags
```
3. Save the file to `howsweather` folder (same level as `README.md`)

## Start a dev server
```
$ npm run lambda-serve
$ npm run dev
```
