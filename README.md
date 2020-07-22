
<!-- Beginning of Readme to present -->
# MyNutshell: The Revolution in Informational Dashboards

## Description: 
Note: This dashboard is not for the fainthearted. There's a difference between us. You think the people of this country exist to provide you with position. I think your position exists to provide those people with freedom. And I go to make sure that they have it. This dashboard is to provide you and your associates the ability to disseminate information between one another or cute dog pics. 

## Setup: Follow these steps exactly

1. Clone this repository
1. `cd` into the directory it creates
1. Make a `database.json` file in the `api` directory
1. Serve the JSON file database.json utilizing the json-server -p 5002 -w database.json in terminal. Note: you must have npm installed.
1. Now serve main.js in scripts directory using command `npm start`
1. Open google chrome web browser and go to the port that you have served the site to. You should be seeing the webpage at this point in chrome. 
1. Register and begin your journey in the world of free flowing information. 


> **Note:** Your `database.json` file is already in the `.gitignore` file for this project, so it will never be added to the repo or pushed to Github.

###### How it works:

Each user has a unique ID by which it can be associated with other tables.
Each table has a unique ID and a reference to an associated user via the user's id; this is represented by "userId".

In the case of the "friends" table, each object is to be thought of as a relationship.  Each object, or "relationship", is represented with a unique ID.  The essence of the relationship is constructed by the "userId" and the "followingUserId", wherein the "userId" represents the user and the "followingUserId" represents the friend of the user. 

In the "example.json" file, Jane (userId 3) is friends with both Billy (userId 2) and Bob (userId 1); consequently Billy and Bob are both friends with Jane. So in the first and second relationship object, in the "friends" table, activeUserId 3 has a userId of 2 in the relationship with the ID of 1 and userId of 1 in the relationship with the ID of 2. Thus, Jane is friends with both Billy and Bob.


## JSON folder
Your JSON folder will be automatically populated with the information you and your allies add into the dashboard. Do not worry if this is blank at start up but, if it stays blank after registration, please check your ports for proper flow path of information. 

## Database Structure and nomenclature
For reference of what the database should look like, see "example.json" in the API directory.  Please ensure that variable names are identical to those listed in the example file.

## Support

Support and assistance can be found from your fellow allies at NSS-day-cohort-41/react-nutshell-the-hazelnuts. 

## Release

Expected release should be July 22, 2020 but we are coders so be prepared for delays. 

## Authors and Acknowledgements

The Creators of this dashboard are: Chad Jones, Sisi Freeley, Gavin Swofford, and Rob Mixon. Contributions were made form Rose Wisotzky, Sage Klein and Brenda Long. 

## License
[MIT](https://choosealicense.com/licenses/mit/)
