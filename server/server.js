const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json());
 // needed for axios requests
 app.use(bodyParser.json());

const galleryRouter = require("./routes/gallery.router");

/** ---------- EXPRESS ROUTES ---------- **/

app.use(`/gallery`, galleryRouter);
/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});