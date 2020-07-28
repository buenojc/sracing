import React from 'react';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import VideoCardWrapper from './components/VideoCardWrapper';
import Carousel from './components/Carousel';
import data from './data/dados_iniciais.json';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Menu />
      <BannerMain
        videoTitle='Ferrari GT3 em Monza - iRacing'
        videoDescription='Aprenda a pilotar nesta pista técnica e se torne mais competitivo'
        url='https://www.youtube.com/watch?v=BMgge8YMh5g'
      />
      <VideoCardWrapper>
        {data.categorias.map((categoria) => (
          <Carousel category={categoria} />
        ))}
      </VideoCardWrapper>
      <Footer />
    </div>
  );
}

export default App;
