const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 8005; 

// CORS Middleware
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

// Middleware to parse JSON requests
app.use(bodyParser.json());


let users = [
    { id: 1, name: "Kafeel Ahmed Swati", age: 25, city: "Lahore", phone: "1234567890", email:"ahmed@gmail.com" },
    { id: 2, name: "Hassan Khan", age: 30, city: "Multan", phone: "2345678901", email:"hassan@gmail.com" },
    { id: 3, name: "Huraira Khan", age: 28, city: "Karachi", phone: "3456789012",email:"huraira@gmail.com" },
    { id: 4, name: "Aaad Khan", age: 35, city: "Islamabad", phone: "4567890123",email:"asad@gmail.com" },
    { id: 5, name: "Ali Swati", age: 27, city: "Abbottabad", phone: "5678901234",email:"ali@gmail.com" },
];


app.get("/api/users", (req, res) => {
    res.json(users);
});


app.post("/api/users", (req, res) => {
    const { name, age, city, phone, email } = req.body;
    if (!req.body.name || !req.body.age || !req.body.city || !req.body.phone) {
        return res.status(400).json({ message: "All fields are required." });
    }
    const newUserId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
    const newUser = { id: newUserId, ...req.body };
    users.push(newUser);
    res.json(newUser);
});


app.put("/api/users/:id", (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex((u) => u.id == id);
    if (userIndex !== -1) {
        users[userIndex] = { id: Number(id), ...req.body };
        res.json(users[userIndex]);
    } else {
        res.status(404).send("User not found");
    }
});


app.delete("/api/users/:id", (req, res) => {
    const { id } = req.params;
    const isUserPresent = users.find((u) => u.id == id);
    if (isUserPresent) {
        users = users.filter((u) => u.id != id);
        res.json({ message: "User deleted" });
    } else {
        res.status(404).json({ message: "User not found" });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
