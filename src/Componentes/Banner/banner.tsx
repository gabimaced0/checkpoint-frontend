import './banner.css';
import estrelaCheia from '../../assets/img/estrelaCheia.svg'
import estrela from '../../assets/img/estrela.svg'
import img1 from '../../assets/img/img1.png'
import img2 from '../../assets/img/img2.png'

function Banner(){
    return (
            <section>
                <div className='geral'>
                    <h1 className='titulo'>GOD OF WAR: RAGNARÖK</h1>
                    <div className='avaliacoes'>
                        <div className='avaliacaoRatings'>
                            <h1>AVALIAÇÃO DA RATINGS</h1>
                            <div className='estrelaNota'>
                                <img src={estrelaCheia} alt="" />
                                <p>9,6/10</p>
                            </div>
                        </div>
                        <div className='suaAvaliacao'>
                            <h1>SUA AVALIAÇÃO</h1>
                            <div className='estrelaAvaliar'>
                                <img src={estrela} alt="" />
                                <p>Avaliar</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='geral2'>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                </div>
                
            </section>
        
    )
}
export default Banner;