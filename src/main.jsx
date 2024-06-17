// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { DataProvider } from './context/DataContext';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//       <Router>
//         <App />
//       </Router>
//   </React.StrictMode>
// );



import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import Home from './components/Home';
import NewPost from './components/NewPost';
import PostPage from './components/PostPage';
import EditPost from './components/EditPost';
import About from './components/About';
import Missing from './components/Missing';
import { DataProvider } from './context/DataContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='post' element={<NewPost />} />
      <Route path='post/:id' element={<PostPage />} />
      <Route path='edit/:id' element={<EditPost />} />
      <Route path='about' element={<About />} />
      <Route path='*' element={<Missing />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>
);

