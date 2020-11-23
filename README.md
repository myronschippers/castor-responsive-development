# Responsive Development


## Description

Going over terms and best practices when making applications that have to be flexible to multiple screen sizes.


## Prerequisites

- Node.js (*recommend Node Version Manager, `nvm`, for install*)
- PostgreSQL (*recommend Postico for testing*)


## Installation

The follow are instructions on setting up, installing, and running the local development environment


### Setting Up the Database

- in terminal from any directory run: `createdb fantastic_bestiary`
- from your favorite GUI connect to the `fantastic_bestiary` database and run the queries from `/database/init.js`
- in order to load up some sample data run the queries from `/database/data.js`


### Local Development

*All terminal commands in this section should be run from the root of the project directory.*

- terminal: `npm install`
- terminal: `npm run server`
- in new terminal: `npm run client`
