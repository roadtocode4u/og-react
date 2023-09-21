import express from 'express';
import fs from 'fs';
import path from 'path';

const dirname = path.resolve();

const app = express();
const PORT = process.env.PORT || 5000;

const META_FOR_STORIES = [
  {
    id: 1,
    title: "Story 1",
    description: "This is the first story",
    thumbnail: "https://picsum.photos/200/300"
  },
  {
    id: 2,
    title: "Story 2",
    description: "This is the second story",
    thumbnail: "https://picsum.photos/200/300"
  },
  {
    id: 3,
    title: "Story 3",
    description: "This is the third story",
    thumbnail: "https://picsum.photos/200/300"
  }
]

app.get("/health", (req, res) => {
  res.send("All good!");
});

const indexPath = path.join(dirname, '..', 'client', 'dist', 'index.html');

app.use(express.static(path.resolve(dirname, '..', 'client', 'dist')));

app.get('/*', (req, res, next) => {
  fs.readFile(indexPath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('Error during file reading', err);
      return res.status(404).end()
    }

    const storyId = req.query.id;
    const story = META_FOR_STORIES.find(story => story.id === Number(storyId));
    if (!story) {
      return res.status(404).end();
    }

    htmlData = htmlData
      .replace("<title>Stories</title>", `<title>${story.title}</title>`)
      .replace('__META_OG_TITLE__', story.title)
      .replace('__META_OG_DESCRIPTION__', story.description)
      .replace('__META_DESCRIPTION__', story.description)
      .replace('__META_OG_IMAGE__', story.thumbnail)

    return res.send(htmlData);
  });
});
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

