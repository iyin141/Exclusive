import cors from "cors";
import express from 'express';
import path from 'path';
import { promises as fs } from 'fs';

const paths = [
  { file: "Men.json", path: '/men' },
  { file: "Women.json", path: '/women' },
  { file: "baby.json", path: '/kids' },
  { file: "Flash.json", path: '/flash' },
  {file:"Best.json",path:'/best'}
];



const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
const frontendpath = path.join(__dirname, "..", "frontend", "dist");




app.use(express.static(frontendpath));
console.log("server running");
app.post("/",(req,res) => {
    res.sendFile(path.join(frontendpath, "index.html"));
});

async function processFile(file: string): Promise<object[]> {
  try {
    const filePath = path.join(__dirname, "Data", file);
    const data = await fs.readFile(filePath, 'utf8');
    const parsed = JSON.parse(data);
    return parsed.products || [];
  } catch (error) {
    console.error(`Error reading ${file}:`, error);
    throw new Error(`Failed to read file: ${file}`);
  }
}


paths.forEach(({ file, path }) => {
  app.post(path, async (req, res) => {
    try {
      const data = await processFile(file);
      res.json(data);
   
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ success: false, message: error.message });
      }
      else {
        res.status(500).json({ success: false, message: "An unknown error occurred" });
      }
      }
  });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
