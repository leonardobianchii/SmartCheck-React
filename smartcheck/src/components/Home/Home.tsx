import React from 'react';
import Bloco from './Bloco';
import './Home.css';

// Importando as imagens
import planetEarthImg from '../../img/planet-earth_color.png';
import lightbulbImg from '../../img/lightbulb_color.png';

const Home: React.FC = () => {
  return (
    <main className="home-container">
      <section className="banner">
        <div className="container">
          <div className="conteudo-banner">
            <p>
              Dirija com <span>Confiança</span>, Diagnostique com <span>Inteligência</span>.
            </p>
            <a href="/produto" className="botao-saiba-mais">
              Saiba mais
            </a>
          </div>
        </div>
      </section>

      <section className="blocos">
        <div className="container">
          <Bloco
            imgSrc={planetEarthImg}
            titulo="Missão"
            descricao="Nossa missão é revolucionar a manutenção veicular..."
          />
          <Bloco
            imgSrc={lightbulbImg}
            titulo="Visão"
            descricao="Nosso objetivo é liderar globalmente em soluções de autodiagnóstico veicular..."
          />
          <Bloco
            imgSrc={planetEarthImg}
            titulo="Valores"
            descricao="Valorizamos a inovação, a confiabilidade, o empoderamento do usuário..."
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
