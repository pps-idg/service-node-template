import express from "express";

// Initializations
const app = express();

// Settings
app.set("port", process.env.PORT || 3005);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes

// Starting server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
