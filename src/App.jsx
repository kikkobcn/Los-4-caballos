import './App.css'
import bgImage from './images_videos/production ID_5206820.mp4'

function App() {

  return (
    <div className="App">
      <video autoPlay loop muted>
          <source src={bgImage} type="video/mp4" />
      </video>

      <div className="text-wrapper">    
        <h1>   Los 4 Caballos   </h1>
          <div className="text-wrapper">
            <h2>Ejercicio  Javascript</h2>
            <p className="parrafo">
            El caballo de Mac es mas oscuro que el de Smith, pero es mas rapido y mas viejo que el de Jack.
            El caballo de Jack es aun mas lento que el de Willy y que el de Smith, pero es mas oscuro
            que el de Smith.
            El caballo de Willy es mas joven que el de Mac, cuyo caballo es mas viejo que el de Smith,
            que pero es mas claro que el de Willy.
          <div className="parrafo1">            
            <div>A traves de un programa en Javascript: </div>
            <div>1. determinar de quien es el caballo mas viejo;</div>
            <div>2. determinar de quien es el caballo mas lento;</div>
            <div>3. determinar de quien es el caballo mas claro;</div>
            </div>
            </p>
          </div>
      </div>
    </div>                                                                                              
  );
}

export default App
