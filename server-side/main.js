const express = require('express');
const app = express();
const port = 8003;
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

app.use(bodyParser.json());

// Initial users with UUIDs
const users = [
  { id: uuidv4(), name: "ahmed", email: "ahmed@gmail.com" },
  { id: uuidv4(), name: "ali", email: "ali@gmail.com" },
  { id: uuidv4(), name: "hassan", email: "hassan@gmail.com" }
];

// Add User API
app.post("/api/addUser", (req, res, next) => {
  const { name, email } = req.body;

  const createUser = {
    id: uuidv4(),
    name: name,
    email: email,
  };

  users.push(createUser);
  console.log("New user:", createUser);
  res.status(200).json({ success: true, data: createUser });
});

// Get All Users API
app.get('/api/users', (req, res) => {
  res.status(200).json({ success: true, data: users });
});

// Get User by ID API
app.get('/api/users/:uid', (req, res) => {
  const id = req.params.uid;
  const user = users.find(u => u.id === id);

  if (user) {
    res.status(200).json({ success: true, data: user });
  } else {
    res.status(404).json({ success: false, msg: 'User not found' });
  }
});

// Update User API
app.patch('/users/:uid', (req, res, next) => {
  const id = req.params.uid;
  const { name, email } = req.body;

  const updateUser = users.find(u => u.id === id);

  if (updateUser) {
    const index = users.findIndex(u => u.id === id);
    users[index] = { id, name, email };

    res.status(200).json({ msg: 'User updated successfully', user: users[index] });
  } else {
    res.status(404).json({ msg: 'User not available' });
  }
});

// Delete User API
app.delete('/api/users/:uid', (req, res) => {
  const id = req.params.uid;
  const index = users.findIndex(u => u.id === id);

  if (index !== -1) {
    const deletedUser = users.splice(index, 1);
    res.status(200).json({ success: true, msg: 'User deleted successfully', data: deletedUser });
  } else {
    res.status(404).json({ success: false, msg: 'User not found' });
  }
});

app.listen(port, () => {
  console.log(`Express server is running on port: ${port}`);
});
