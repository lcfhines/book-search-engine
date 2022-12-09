# GraphQL API: Book Search Engine 

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

This application is a Google Books API search engine that has been refactored to be a GraphQL API built with Apollo Server. 

The app was built using a RESTful API which has been replaced with an Apollo Server to use GraphQL queries and mutations to fetch and modify data. The existing authentication middleware has been modified so it works in the context of a GraphQL API. An Apollo Provider was created so that requests can communicate with the Apollo Server.

## Installation

Run ```npm i``` in the root of the directory. 

Run ```npm develop``` to start and open the app in your browser. The server, accessible via the GraphQL path, will also be started.


## Usage

To use the app, search for a book and hit submit to see images and info for matching results. To save a book, log in or sign up. View saved books by navigating to 'See Your Books'.


## Deployed Application

The app was deployed using Heroku and can be found [here]().  

![Screenshot 2022-12-08 at 6 52 46 PM](https://user-images.githubusercontent.com/113798073/206591100-9122461f-344f-413c-995d-e76cbed6150f.png)


## Technologies

MERN Stack

## Credits

[lcfhines](https://github.com/lcfhines)

## License

This application is covered by [MIT License](https://choosealicense.com/licenses/mit/).
