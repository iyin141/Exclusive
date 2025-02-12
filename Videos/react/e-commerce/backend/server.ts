
import express from 'express';
import path from 'path';


const app = express();
const port = process.env.PORT || 5000;
const frontendpath = path.join(__dirname, "..", "frontend", "dist");


app.post('/', (req, res) => {
  res.send('Hello, World!');
});

app.use(express.static(frontendpath));
console.log("server running");
app.post("/",(req,res) => {
    res.sendFile(path.join(frontendpath, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
