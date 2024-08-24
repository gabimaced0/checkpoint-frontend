import './enredo.css';
import seta from '../../assets/img/seta.png';


function Enredo(){
    return (
        <div className='enredoGeral'>
            <div className='setaEnredo'>
                <img src={seta} alt="" />
                ENREDO
                
            </div>
            <p className='textoEnredo'>Kratos and his son Atreus face the oncoming Norse apocalypse, Ragnarok</p>
        </div>
    )
}
export default Enredo;