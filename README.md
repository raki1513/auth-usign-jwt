##Authentication Using JWR and Express JS with MongoDB 
The Following project is a  Backend server which uses Express.JS and Database as MongoDB and is used to authenticate and autharise a user
It has the following routes
##1.Signup
This is a basic route through which the user can register himself in the database and the server makes sure that the username and email are unique 
A user with the same username cannot enter into the database. same goes for email

##2.Login 
This is a basic route through which the user can authenticate himself from the database and get his own information. In this process we generate a JWT token
and the token is passed to a middleware where the token gets autheraized and produces out the user data

##3.Profile
This is a Protected route which can be accessed only by the authenticateed user. This uses http.get request and gets all the appropriate data of the user based 
on the JWT secret key generated 

For any Queries 
Email me : rakeshratnam21@gmail.com
LinkedIn : https://www.linkedin.com/in/rakeesshhhh/
