import { useEffect, useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  useSearchParams,
} from "react-router-dom";
import "./App.css";

const STORIES = [
  {
    id: "1",
    title: "The First Story",
  },
  {
    id: "2",
    title: "The Second Story",
  },
  {
    id: "3",
    title: "The Third Story",
  },
];

const StoryPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [story, setStory] = useState({});

  useEffect(() => {
    if (id) {
      const story = STORIES.find((story) => story.id === id);
      setStory(story);
    }
  }, [id]);

  return (
    <>
      <h1 className="text-center">Open Graph</h1>
      <div className="container text-center">
        <h2>{story.title}</h2>
        <p>{story.description}</p>
      </div>
    </>
  );
};

const HomePage = () => {
  return (
    <>
      <h1 className="text-center">Open Graph</h1>
      <div>
        <a href="/story?id=1">Story 1</a> <br />
        <a href="/story?id=2">Story 2</a> <br />
        <a href="/story?id=3">Story 3</a>
      </div>
    </>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/story",
    element: <StoryPage />,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
