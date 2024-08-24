import seta from '../../assets/img/seta.png';
import './avaliacao.css';

function Avaliacao(){
    return (
        <div className="avaliacaoGeral">
            <div className="setaAvaliacoesUsuario">
                <img src={seta} alt="" />
                AVALIAÇÕES DE USUARIO
            </div>
            <div className='avaliar'>
                + Avaliar
            </div>
        </div>
    )
}
export default Avaliacao;