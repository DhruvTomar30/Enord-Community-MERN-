if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }
  
  const express = require("express");
  const cors = require("cors");
  const path = require("path");
  const app = express();
  const router = require("./routers");
  const bodyParser = require("body-parser");
  const PORT = process.env.PORT || 3000;
  
  const db = require("./db");

  //db connnection -calling db method to connect
  db.connect();

 

  //middleware

  app.use(bodyParser.json({ limit: "500mb" }));
  app.use(bodyParser.urlencoded({ extended: true, limit: "500mb" }));
  
  app.use(express.json());

  //headers
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });
  
  //api mounting , declaring route
  app.use("/api", router);


  app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
  app.use(express.static(path.join(__dirname, "/../frontend/build")));
  
  app.get("*", (req, res) => {
    try {
      res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
    } catch (e) {
      res.send("Welcome to Enord");
    }
  });
  
  app.use(cors());
  
  app.listen(PORT, () => {
    console.log(`Enord API is running on PORT No- ${PORT}`);
  });