
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';

import HeaderFilm from './components/HeaderFim';
import FilmList from './components/FilmList';
import UpComingFilm from './components/UpComingFilm';
import Banner from './components/Banner';
import Comment from './components/Comment';
import Intro from './components/Intro';
import Event from './components/Event';
import News from './components/News';

import ViewFilmDetail from './components/View/ViewFilmDetail'
import SeatBooking from './components/Booking/SeatBooking';
const App = () => {
  return (
    
  <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <HeaderFilm/>
           
            </div>
          }
        >
          </Route>
       
      </Routes>
      <Routes>
      <Route
          path="/"
          element={
            <div>
              <FilmList/>
              
            </div>
          }
        >
        
          </Route>
            
            <Route path="phimdangchieu" element=
            {<div>
              <HeaderFilm/>
              <FilmList />
            </div>}>
            </Route>
            <Route path="phimsapchieu" element={<div>
              <HeaderFilm/>
              <UpComingFilm />
               </div>}>

            </Route>
      </Routes>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Banner/>
              <Comment />
           
            </div>
          }
        >
          </Route>
       
      </Routes>
      <Routes>
        <Route
          path="/intro"
          element={
            <div>
              <Intro/>
           
            </div>
          }
        >
          </Route>
       
      </Routes>
      <Routes>
        <Route
          path="/news"
          element={
            <div>
              <News/>
           
            </div>
          }
        >
          </Route>
       
      </Routes>
      <Routes>
        <Route
          path="/thisfilm/:id"
          element={
            <div>
             <ViewFilmDetail/>
           
            </div>
          }
        >
          </Route>
       
      </Routes>
      <Routes>
      <Route
          path="/seatbooking"
          element={
            <div>
             <SeatBooking/>
           
            </div>
          }
        >
          </Route>
       
      </Routes>
    
      <Footer />
      
    
  </>


  )
    
}


export default App;