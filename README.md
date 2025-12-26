This is my first real backend project, built while learning backend development with Node.js and Express.
The project demonstrates server-side rendering using EJS, handling HTTP requests, working with the file system, and serving static files.

📌 Project Overview

This application allows users to:

View a list of text files stored on the server

Create new .txt files using a form

Store data dynamically using Node.js File System (fs)

Render dynamic pages using EJS templates

🛠 Tech Stack

Node.js

Express.js

EJS (Embedded JavaScript Templates)

File System (fs module)

Nodemon (for development)

📂 Project Structure
1st-real-project-in-backend/
│
├── index.js              # Main server file
├── package.json
├── package-lock.json
│
├── Views/                # EJS templates
│   └── index.ejs
│
├── Public/               # Static files (CSS, JS, images)
│
├── files/                # Text files created dynamically
│
└── README.md

⚙️ Features

Server-side rendering with EJS

Form handling using express.urlencoded()

Dynamic file creation using Node.js fs

Static file serving using express.static

Clean beginner-friendly backend logic

🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/your-username/1st-real-project-in-backend.git
cd 1st-real-project-in-backend

2️⃣ Install Dependencies
npm install

3️⃣ Start the Server
npm start


Server will run at:

http://localhost:3000

🧠 How It Works

GET /

Reads all files from the files directory

Renders them on the homepage using EJS

POST /create

Takes input from the form

Creates a .txt file dynamically

Saves data inside the files folder

📸 Screenshot (Optional)

You can add screenshots later like this:

![App Screenshot](./screenshot.png)

📈 Learning Outcome

Through this project, I learned:

How backend servers work

Request & response flow in Express

EJS templating engine

Handling forms and file system operations

Structuring a real backend project

🔮 Future Improvements

Add file delete & edit functionality

Use a database (MongoDB)

Add authentication

Convert to REST API

Improve UI with better styling

👨‍💻 Author

Aman BAM
Backend Developer (Learning Phase)
📍 India

⭐ Support

If you find this project helpful:

Give it a ⭐ on GitHub

Fork it

Share feedback
