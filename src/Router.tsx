import { Route, Routes } from "react-router-dom";
import { IssuesProvider } from "./contexts/IssuesContext";
import { Blog } from "./pages/Blog";
import { Post } from "./pages/Post";

export function Router() {
  return (
    <IssuesProvider>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </IssuesProvider>
  )
}