import cor1 from '../imagenes/cor1.png'
import cor2 from '../imagenes/cor2.png'
import avi1 from '../imagenes/avi1.png'
import avi2 from '../imagenes/avi2.png'
import gallet from '../imagenes/galleta.png'





export const Respuesta = () => {
  return (
    <>
    <div className="row row-cols-1 row-cols-md-8 g-8">
<div className="col"> 
    
        <img src={cor1 } width={120} alt="algo" />
        <img src={avi1}  width={120}alt="algo" />
        <img src={cor2 } width={120} alt="algo" />
        <img src={avi2}  width={120}alt="algo" />
        <img src={gallet}  width={120}alt="algo" />
        <img src={cor1 } width={120} alt="algo" />
        <img src={avi1}  width={120}alt="algo" />
        <img src={cor2 } width={120} alt="algo" />
        <img src={avi2}  width={120}alt="algo" />
        <img src={gallet}  width={120}alt="algo" />
        </div>
        <div className="d-flex align-items-end flex-column mb-3">
<div className="p-2"><h1>💜Eres mía💜</h1></div>
</div>
        </div>

    </>
  )
}
