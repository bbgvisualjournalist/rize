var config = {}

//The published google spreadsheet with the data.
config.spreadsheet = 'https://docs.google.com/spreadsheets/d/1VtWYSW7Z-Dzjgln3MKWhYL3gEQo5J450aepk9NPv7KA/pubhtml'

//Each sheet in the spreadsheet gets its own .JSON file
config.sections = ['site', 'social', 'staff', 'map'];

//Change for local v. production
config.port = process.env.PORT || '3000';

//Timer for how often to update the JSON data
//20000 = 20 seconds; 60000 = 1 minute ; 300000 = 5 minutes
config.timer = 10000;

config.analytics = 'UA-1111111111-1';

module.exports = config;
