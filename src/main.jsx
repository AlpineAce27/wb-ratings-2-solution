import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import App from './App.jsx';
import './css/index.css';
import axios from 'axios';
import ErrorPage from './pages/ErrorPage.jsx';
import IndexPage from './pages/IndexPage.jsx';
import AllMoviesPage from './pages/AllMoviesPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import YourRatingsPage from './pages/YourRatingsPage.jsx';
import MovieDetailPage from './pages/MovieDetailPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<IndexPage />} />
      <Route
      path="/movies"
      element = {<AllMoviesPage/>}
      loader = {async () => {
        const res = await axios.get('/api/movies')
        //console.log(res.data)
        return {movies: res.data}
      }}/>
      <Route 
      path= "/movies/:movieId" 
      element = {<MovieDetailPage/>}
      loader = {async ({params}) => {
        const {movieId} = params
        const res = await axios.get(`/api/movies/${movieId}`)
        //console.log(res.data)
        return {movie: res.data}
      }}/>
      <Route path="/login" element = {<LoginPage/>}/>
      <Route path="/me" element = {<YourRatingsPage/>}/>
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
