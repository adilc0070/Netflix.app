import React from 'react'
import NavBar from './components/NavBar/NavBar'
import {ComedyMovies,Documentaries,HorrorMovies,RomanceMovies,actions,originals,Mystery} from './urls'
import './App.css'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost title='Netflix Originals' url={originals} />
        <RowPost title='Action' isSmall url={actions} />
        <RowPost title='Comedy' isSmall url={ComedyMovies} />
        <RowPost title='Documentaries' isSmall url={Documentaries} />
        <RowPost title='Horror' isSmall url={HorrorMovies} />
        <RowPost title='Romance' isSmall url={RomanceMovies} />
        <RowPost title='Mystery' isSmall url={Mystery} />
    </div>
  );
}

export default App;