const express = require('express')
const cors = require('cors')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const session = require('express-sessions')
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
require('dotenv').config()

//User model
const User = require('./models/Users')

const app = express()

//Database configuration
const db_string = process.env.MONGODB_CONNECTION_STRING

//connecting to database
mongoose.connect(db_string, { useNewUrlParser: true })
.then(() => console.log('Connection to database established!'))
.catch(err => console.log(err))    

//setting up passport local strategy
passport.use(
  new LocalStrategy(async(username, password, done) => {
    try {
      const user = await User.findOne({ username: username });
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      };
        brcrypt.compare(password, user.password, (err, res) => {
        if (res) {
            // passwords match! log user in
            return done(null, user)
        } else {
            // passwords do not match!
            return done(null, false, { message: "Incorrect password" })
        }         
        })
    } catch(err) {
      return done(err);
    };
  })
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function(id, done) {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch(err) {
    done(err);
  };
});

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//setting up CORS so client can send requests to the server. Client is hosted at port 5173 for dev.
app.use(cors())

app.use(express.json())
app.post('/register', (req,res) => {
    User.findOne({ username: req.body.username })
        .then(user => {
            if(user){
                //username already exists in our database
                //in this case, registration fails and we send them a 'username already exists alert through our react front-end
                res.send('fail')
            } else {
                //new username, in which case we send them a 'user account successfully created alert
                const newUser = new User({
                    username: req.body.username,
                    password: req.body.password
                })

                //hashing password before storing
                bcrypt.genSalt(20, (err,salt) => {
                    bcrypt.hash(newUser.password, salt, (err,hash) => {
                        if(err) throw err

                        //setting password in newUser object to the newly hashed password
                        newUser.password = hash

                        //time to save our user info
                        newUser.save()
                            .catch(err => console.log(err))
                    })
                })

                console.log(req.body, newUser)
                res.send('success')
                }
            }
        )
    }
)

//route for letting users login
app.post('/login', (req,res) => {

})

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`The server is running on port: ${port}`)
})