
# Crypto Dictionary 

This is my react project for softuni defense for the ReactJS course: 
https://softuni.bg/trainings/3727/reactjs-june-2022

To start the project:

1. Open the server folder  in integrated terminal 
and type node server.js

2. Open the client folder  in integrated terminal 
and type :

      npm i - command installs a 
      package and any packages that it depends on.

      npm start- To start the react project in localhost:3000.
     
     
## Project

For backend i'm using 
https://github.com/softuni-practice-server/softuni-practice-server

Home page:

![Home](https://user-images.githubusercontent.com/19151979/185765361-e8868dd9-7d14-429f-97a1-08159b9a9425.PNG)


The home page is available to users and guests.It also displays a collection of several cryptocurrencies with an opportunity to read more information from users and guests

Details page:

The Details page is available to users and guests. It will display 3 facts about the coin and at the end working lightning network address.


![datails3](https://user-images.githubusercontent.com/19151979/185437086-145b6ff7-0d1d-402f-be8c-2831c3a03bb2.PNG)

Meme page:

The page is available to users and guests. It also displays a collection of several memes.

![memePage](https://user-images.githubusercontent.com/19151979/185765756-e195b12f-ea6a-4b79-b4bd-ce399754cc5b.PNG)



Login Page:


![Login](https://user-images.githubusercontent.com/19151979/185437912-8f11475a-f4ed-49da-9a20-ac0baa645e84.PNG)

After a successful login, it will redirect to the home page and save the user information in localStorage. If you try again to acces the route '/login'
it will redirect you to 404 page.

In case of wrong  username or passowrd it will display:

![Error loginpage](https://user-images.githubusercontent.com/19151979/185765437-904077ee-9460-491e-b5df-1e73b474e04c.PNG)



Register Page:

![Register](https://user-images.githubusercontent.com/19151979/185438433-3303bfeb-5623-45b4-aaaa-feda4afe7d66.PNG)

After a successful register, it will redirect to the home page and save the user information in localStorage. If you try again to acces the route '/registe'
it will redirect you to 404 page.

In case of invalid input:

![invalid input](https://user-images.githubusercontent.com/19151979/185765558-38bc2fd0-c3f3-418d-b2f8-e8116829c57c.PNG)



## Loged in user

A logged in user can create memes, edit and delete the ones they have created. Once they create the meme, it will redirect to the meme page.

Create Page:

![create](https://user-images.githubusercontent.com/19151979/185439925-ec799c0c-c215-44ca-916a-5b79066465e3.PNG)

In case of invalid input it will display:

![invalidCreate input](https://user-images.githubusercontent.com/19151979/185765625-e7afff0a-b823-4330-83f5-29c3ebbb797d.PNG)


Edit Page: It will generate in the fields the current information for the meme that you want to edit.

![Edit](https://user-images.githubusercontent.com/19151979/185439989-9196ee52-9cfe-45a6-ad6d-f5abb5cc4bc0.PNG)

Meme Details Page:

For logged in user which is the creator it will display:


![LogedinMemeDetailsCreator](https://user-images.githubusercontent.com/19151979/185765894-a3373c97-36d7-4528-9d8e-0373e020cadd.PNG)

For logged in user which is not the creator it will display:

![MemeDetailsLogedinNote creator](https://user-images.githubusercontent.com/19151979/185765933-39183791-0cd3-4379-acd4-c9a209cc9c8e.PNG)

For guest it will display:

![guestMemeDetails](https://user-images.githubusercontent.com/19151979/185765957-4e3ef915-8d0e-42e6-8eea-734dd9283824.PNG)




