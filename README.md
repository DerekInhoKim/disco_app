# discord_clone_frontend

Disco is a simplified clone of the popular app Discord.

MVP

The core features of this project are as follows:

Functionality to display servers which are associated with a user
Functionality to display channels which are associated with individual servers
Functionality to display messages that belong to a specific channel
Functionality for multiple users to live chat amongst each other within these channels


Stretch goals

There were two stretch goals for the project:

Functionality to assign a user a role, providing them with additional access to manage servers, channels, and messages
Functionality for a user to display a status as a part of their message, that is constant until the user updates their status

Technologies utlized

PSQL -- used for database storage and manageement
Express -- used for route handling and api configuration
React/Redux -- used to display frontend components such as login page/home page
Socket.io -- used for live chat functionality between users in the same channel
Heroku -- used to deploy the backend routes and Express server
AWS Amplify -- used to deploy the frontend build using React/Redux
