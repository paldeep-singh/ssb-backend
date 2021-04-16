# ssb-backend

Backend repository for Spice Spice Baby recipe app containing code related to the application server and the Neo4j database. 

## ssb-app-server

Application server written in Typescript, utilising Express to handle web traffic, and Swagger for documentation. A GitHub Action has been set-up to automatically deploy the latest version of the application server onto Google App Engine. The Neo4j database is hosted on Google Compute Engine.


### Available API calls

API documentation can be found <a href="https://project-ssb-310204.ts.r.appspot.com/swagger/">here</a>.


## ssb-db

Folder containing python scripts used to obtain, clean and format recipe data. Also contains cypher scripts used to import data into Neo4j amongst other queries.

Current database schema:
<img src="https://i.imgur.com/eaebdOb.png" height=1000px></img>


#
