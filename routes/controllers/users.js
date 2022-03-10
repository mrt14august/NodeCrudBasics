const { v4: uuidv4 } = require("uuid"); // generates random ID everytime

let users = [];

const getUser = (req, res) => {
  console.log(users);
  res.send(users);
};

const addUser = (req, res) => {
  const userId = uuidv4();
  users.push({ ...req.body, userId });

  console.log(`user with the name ${req.body.firstname} added to the database`);
  res.send(`user with the name ${req.body.firstname} added to the database`);
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((ele) => ele.userId !== id);
  res.send(`user with user id ${id} deleted from DataBase`);
};

const getUserById = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.userId == id);

  res.send(foundUser);
  console.log(`yes...found the user with the given id...${foundUser}`);
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, age } = req.body;

  const ele = users.find((ele) => ele.userId === id);

  if (firstname) ele.firstname = firstname;

  if (lastname) ele.lastname = lastname;

  if (age) ele.age = age;

  res.send(`user with id ${id} changed with data provided in patch request`);
};

module.exports = { getUser, addUser, deleteUser, getUserById, updateUser };
