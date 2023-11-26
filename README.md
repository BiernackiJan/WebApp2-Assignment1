# Assignment 1 - ReactJS app.

Name: Jan Biernacki

## Overview.

This repository includes the files for the First Assignment - Web Applications 2 in semester one of my 3rd year of study.

This assignment is a web application built to retrieve a moviebase collection from The Movie DataBase (TMDB)


### Features.
 
General Functionality:
+ Changed page header to look nicer and cleaner
+ Made header look nicer with Icons and opening menu for Actors
+ Changed Movie Details page to only display two movie Posters not a large amount
+ Discover movies Import changed to show more than one page of movies from tmbd
+ Pagination added to pages that view a lot of movies from the changed import
+ Bubbles pop up when Icons are hovered over so that there is space saving and more of a flow and lookk to the web app


Firebase: 
+ Added a Login and Signup buttons to the end of header to Login to or create an account 
+ Once logged in two new buttons appear in the place of Login and Signup (Account, Log Out)


Movies Filter/Sort:
+ New Filter by year for movies
+ Sort integrated into the filter card


Actors Filter/Search:
+ Search function to search for actors by name


Extra Movie Pages: 
+ Top Rated movies
+ Now playing movies in theaters/cinemas
+ Recommended button on movie card takes you to recommendations based on the movie
+ Movie Details page now displays top 10 actors in a movie
+ View More Card in Movie details will open a page with all actors and crew with search function to look for actors my name and a filter to view all (crew and cast), cast only or crew only


Extra Actor Pages:
+ Popular Actor Page
+ Daily trending actors page
+ Weekly trending actors page
+ Clicking on an actor card takes you to the Actor Details page, which shows their info and the movies they played in


Other Pages:
+ Added a nicely styled log in and sign up page


## Setup requirements.
+ Install Firebase using npm


## API endpoints.

Movies:
+ Movie Details Page - /movies/:id
+ Upcoming Movies Page - /movies/upcoming
+ Now Playing Movies Page - /movies/nowPlaying
+ Top Rated Movies Page - /movies/topRated
+ Recommend Movies Page - /movies/:id/recommendations
+ Favorite Movies Page - /movies/favorites
+ Watch List Page - /movies/watchList
+ Add Movie Review Page - /reviews/form
+ Movie Review Page - /reviews/:id


Actors: 
+ Actor Details Page - /movies/:id/actors/:id
+ Movie Cast Page - /movies/:id/actors
+ Movie Actors Page - /movies/:id/actorsOnly
+ Movie Crew Page - /movies/:id/crewOnly
+ Popular Actors Page - /actors/popular
+ Actors Weekly Page - /actors/actorsWeekly
+ Actors Daily Page - /actors/actorsDaily 


Account:
+ Sign In Page - /login
+ Sign Up Page - /register


## Routing.

Movies: 
+ /movies/:id - displays movie details for the movie that was clicked on. Shows actors and more information
+ /movies/upcoming - displays a list of movies that are upcomming and will be released soon
+ /movies/nowPlaying - displays a list of movies that are now being screened in Cinemas and Theaters
+ /movies/topRated - displays a list of Top Rated Movies of all time
+ /movies/:id/recommendations - displays movie recommendations depending on the movie chosen
+ /movies/favorites - displays the movies that were favourited by the user
+ /movies/watchList - displays movies that the user added to their watchlist
+ /reviews/form - displays a review form to add a review to the movie
+ /reviews/:id - displays a selected movie review


Actors: 
+ /movies/:id/actors/:id - displays a selected actors detail page, showing information about them. With a list of movies they played in
+ /movies/:id/actors - displays all actors and crew for a selected movie
+ /movies/:id/actorsOnly - displays only actors for a selected movie
+ /movies/:id/crewOnly - displays only crew members for a selected movie
+ /actors/popular - displays a list of popular actors 
+ /actors/actorsWeekly - displays a list of top actors for the week
+ /actors/actorsDaily - displays a list of top actors for the day


Account:
+ /login - displays the sign in page
+ /register - displays the create account page


## Independent learning (If relevant).

Firebase:
+ Researched how to integrate firebase into my assignment - https://firebase.google.com/
+ Watched a tutorial on Firebase with JavaScript - https://www.youtube.com/watch?v=knk5Fjrpde0&ab_channel=Firebase


New Pages:
+ All imports and new pages were taken from TMDB - https://developer.themoviedb.org/reference/intro/getting-started