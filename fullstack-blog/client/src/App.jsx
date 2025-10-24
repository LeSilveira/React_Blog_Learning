import HomePage from './pages/HomePage'
import PostsPage from './pages/PostsPage'
import VitePage from './pages/VitePage'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HeaderDefault from './components/HeaderDefault'
import FooterDefault from './components/FooterDefault'
import PostPage from './pages/PostPage'


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

      </Routes>
      <FooterDefault />
    </div>
  )
}

export default App
