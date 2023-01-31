const express = require("express");
const usersRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const {
  getAllUsers,
  getUserByEmail,
  createUser,
  getUser,
} = require("../db/models/users");

usersRouter.use((req, res, next) => {
  console.log("A request is being made to /users");

  next();
});

// register new user
usersRouter.post("/register", async (req, res, next) => {
  const { email, password } = req.body;
  //   console.log("AAAAAAAA", email);

  try {
    const existingUserCheck = await getUserByEmail(email);
    // console.log("BBBBBBBB", existingUserCheck);

    if (existingUserCheck) {
      res.status(401);
      next({
        name: "UserExistsError",
        message: `Email address ${email} is already a registered account. Please login with those account details.`,
      });
    } else if (password.length < 8) {
      res.status(401);
      next({
        name: "PasswordLengthError",
        message: "Password must be at least 8 characters long.",
      });
    } else {
      // create user in the DB
      const user = await createUser({ email, password });
      // if no user is created, send user reg error
      if (!user) {
        next({
          name: "UserCreationError",
          message: "There was a problem registering you. Please retry.",
        });
      } else {
        // user was created, create token
        const token = jwt.sign(
          {
            id: user.id,
            email,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "1w",
          }
        );
        // send success message, token, and user in response
        res.send({
          message: "Thank you for signing up!",
          token,
          user,
        });
      }
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

// login users
usersRouter.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  // if no username or password provided, send error
  if (!email || !password) {
    next({
      name: "MissingCredentialsError",
      message: "Please supply both a username and password",
    });
  }

  try {
    const user = await getUserByEmail(email);
    const hashedPassword = user.password;

    let passwordsMatch = await bcrypt.compare(password, hashedPassword);

    if (user && passwordsMatch) {
      // create token & return to user
      const token = jwt.sign({ id: user.id, email }, JWT_SECRET, {
        expiresIn: "1w",
      });
      res.send({ message: "you're logged in!", token, user });
    } else {
      next({
        name: "IncorrectCredentialsError",
        message: "Username or password is incorrect",
      });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

usersRouter.get("/", async (req, res) => {
  const users = await getAllUsers();

  res.send({
    users,
  });
});

usersRouter.get('/profile/me', async (req, res, next) => {
  const { email } = req.body
  console.log("USER in the route", user)
  try {
    const user = await getUserByEmail()
    if (!user) {
      next (res.status(401).send({
        error: "Error",
        message: "Unable to get a user by that name",
        name: "LogInError",
      }))
    }
    res.send(user)
    console.log("user data from getProfile", user)

  } catch (error) {
    next(error);
  }
})

module.exports = usersRouter;
