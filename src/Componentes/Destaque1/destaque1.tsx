import './destaque1.css';
import estrelaCheia from '../../assets/img/estrelaCheia.svg'
import iconeLike from '../../assets/img/iconeLike.png'
import iconeDeslike from '../../assets/img/iconeDeslike.png'
import tresPontos from '../../assets/img/tresPontos.png'


function Destaque1(){
    return (
      <div className="geralDestaque1">
        <div className="avaliacaoEmDestaque1">
            <h1 className='tituloAvaliacaoEmDestaque'> AVALIAÇÃO EM DESTAQUE</h1>
            <div className='estrelaNota'>
                <img src={estrelaCheia} alt="" />
                <p>10/10</p>
            </div>
        </div>
        <div className='autor'>
              <p className='caioHalbert'>CaioHalbert</p>
              <p className='data'>9 de novembro de 2022</p>
          </div>
          <div className='primeiroTexto'>
            <h1 className='tituloWhatAn'>What an incredible sequel!</h1>
            <p>
              A fantastic and strong continuation of its predecessor, God of War
              Ragnarök is not afraid to take unexpected turns, or slow its pace for
              you to fully explore an environment. It has the same upgrading system
              as before, but with better armor, in my opinion. Atreus is a little bit
              older now and it's so great to see everybody reprise their magnificent
              roles.
            </p>
            <p>
              I don't want to give away too much in this review, but it's definitely
              worth buying. One of the best looking games on PS5. It'll definitely
              be a game of the year contender with Elden Ring. If you're new to the
              series, I recommend you start with God of War (2018) If you have the
              dedication, you could always start from the very first one. They're
              all on the PS+ collection. I still have yet to beat this newest
              entry, but I wanted to spread the good word as soon as possible:
              Ragnarök is here and it is beautiful.
            </p>
          </div>
          <div className='likeDeslikePonto'>
            <div className='likeDeslike'>
              <div className='like'>
                <img src={iconeLike} alt="" />
                <p>33</p>
              </div>
              <div className='like'>
                <img src={iconeDeslike} alt="" />
                <p>11</p>
              </div>
            </div>
            <img src={tresPontos} alt="" />
          </div>

          
            

      </div>
    );
}

export default Destaque1;