import HomePage from './pages/HomePage'
import PostsPage from './pages/PostsPage'
import VitePage from './pages/VitePage'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HeaderDefault from './components/HeaderDefault'
import FooterDefault from './components/FooterDefault'
import PostPage from './pages/PostPage'
import CreatePostPage from './pages/CreatePostPage';


function App() {
  return (
    <div>
      <HeaderDefault />
      <Routes>
        {/* A route for the home page */}
        <Route path="/" element={<HomePage />} />

        {/* A route for the posts page */}
        <Route path="/posts" element={<PostsPage />} />

        {/* A route for the vite default page */}
        <Route path="/vite" element={<VitePage />} />

        {/* Route for the posts */}
        <Route path="/posts/:id" element={<PostPage />} />

        {/* Route for post creation page */}
        <Route path="/posts/create" element={<CreatePostPage />} />

      </Routes>
      <FooterDefault />
    </div>
  )
}

export default App
