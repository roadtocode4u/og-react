import express from 'express';
import path from 'path';

const dirname = path.resolve();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/health", (req, res) => {
  res.send("All good!");
});

app.use(express.static(path.join(dirname, '..', 'client', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(dirname, '..', 'client', 'dist', 'index.html'));
});
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

