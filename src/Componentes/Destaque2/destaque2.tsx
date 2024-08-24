import './destaque2.css';
import estrelaCheia from '../../assets/img/estrelaCheia.svg'
import iconeLike from '../../assets/img/iconeLike.png'
import iconeDeslike from '../../assets/img/iconeDeslike.png'
import tresPontos from '../../assets/img/tresPontos.png'
import setaBaixo from '../../assets/img/setaBaixo.png'


function Destaque2(){
    return (
      <div className="geralDestaque2">
        <div className="avaliacaoEmDestaque2">
            <h1 className='tituloAvaliacaoEmDestaque'> AVALIAÇÃO EM DESTAQUE</h1>
            <div className='estrelaNota'>
                <img src={estrelaCheia} alt="" />
                <p>10/10</p>
            </div>
        </div>
        <div className='autor'>
              <p className='claudiaRayara'>ClaudiaRayara</p>
              <p className='data'>14 de novembro de 2022</p>
          </div>
          <div className='segundoTexto'>
            <h1 className='tituloWhatAn'>This game took part of my soul...</h1>
            <div className='spoiler'>
                Warning: Spoilers!
                <img src={setaBaixo} alt="" />
            </div>
          </div>
          <div className='likeDeslikePonto'>
            <div className='likeDeslike'>
              <div className='like'>
                <img src={iconeLike} alt="" />
                <p>24</p>
              </div>
              <div className='like'>
                <img src={iconeDeslike} alt="" />
                <p>6</p>
              </div>
            </div>
            <img src={tresPontos} alt="" />
          </div>
            

      </div>
    );
}

export default Destaque2;