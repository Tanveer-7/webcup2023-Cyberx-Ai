const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "cyberx_admin",
  host: "cyberx.maurice.webcup.hodi.host ",
  password: "r~P4q3vartuM",
  database: "cyberx_db_reve_ai",
});

app.post("/create", (req, res) => {
  
  
  const user_id = req.body.user_id;
  const email = req.body.email;
  const username = req.body.username;
  const age = req.body.age;
  const password = req.body.password;
 

  db.query(
    "INSERT INTO user_auth (user_id, email, username, age, password) VALUES (?,?,?,?,?)",
    [user_id, email, username, age, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/create", (req, res) => {
  
  const post_id = req.body.post_id;
  const post_text = req.body.post_text;
  const username = req.body.username;
  const time = req.body.time;
  const happy_emotes = req.body.happy_emotes;
  const sad_emotes = req.body.sad_emotes;
  const scared_emotes = req.body.scared_emotes;
  const total_emotes = req.body.total_emotes;
 

  db.query(
    "INSERT INTO user_posts (post_id, post_text, username, time, happy_emotes, sad_emotes,scared_emotes,total_emotes) VALUES (?,?,?,?,?,?,?,?)",
    [post_id, post_text, username, time, happy_emotes, sad_emotes,scared_emotes,total_emotes],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

// to get the post comment along with the 
app.get("/user_posts", (req, res) => {
  db.query("SELECT * FROM user_posts", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const wage = req.body.wage;
  db.query(
    "UPDATE user_posts SET scared_emotes = ? WHERE id = ?",
    [wage, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM user_posts WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
