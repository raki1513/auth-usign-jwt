<h1>Hello Everyone 👋. This is a basic Express back-end Server which Authenticates the User and Registers a User using JSONwebtoken</h1>
<h2>Authentication Using JWT and Express JS with MongoDB </h2>
The Following project is a  Backend server which uses Express.JS and Database as MongoDB and is used to authenticate and authorise a users
<br/><br/>It has the following routes
<h3>1.Signup</h3>
This is a basic route through which the user can register himself in the database and the server makes sure that the username and email are unique 
A user with the same username cannot enter into the database. same goes for email
<br/>
<h3>2. Login</h3> 
This is a basic route through which the user can authenticate himself from the database and get his own information. In this process we generate a JWT token
and the token is passed to a middleware where the token gets autheraized and produces out the user data
<br/>
<h3>3.Profile</h3>
This is a Protected route which can be accessed only by the authenticateed user. This uses http.get request and gets all the appropriate data of the user based 
on the JWT secret key generated 

<h1>For any Queries </h1>
Email me :rakeshratnam21@gmail.com
<br/>
LinkedIn : https://www.linkedin.com/in/rakeesshhhh/ 
<br/>
Get to Know me : https://bento.me/rakeshhhh
