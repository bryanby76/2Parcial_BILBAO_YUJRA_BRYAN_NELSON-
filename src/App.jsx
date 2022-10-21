import './App.css'
import diana from './assets/image-diana.jpg'

function App() {

  return (
    <div class="container">
    <section class="main">
      <div class="background"></div>
      <div class="data">
        <div class="image-profile">
          <img src={diana} alt="Victor's pic" />
        </div>
        <div class="data__details">
          <span>Victor Crest</span>
          <span>26</span>
        </div>
        <span>Has maiorum habemus detraxit at. Timeam fabulas splendide et his.Usu nullam dolorum quaestio ei, sit vidit facilisis ea. Per ne impedit iracundia neglegentur.</span>
      </div>
    </section>
    <footer>
      <div>
        <span class="subtitle">85K</span>
        <span class="letters">Followers</span>
      </div>
      <div>
        <span class="subtitle"> 805K</span>
        <span class="letters"> Likes</span>
      </div>
      <div>
        <span class="subtitle">1.4K</span>
        <span class="letters"> Photos</span>
      </div>
    </footer>
  </div>
  )
}

export default App
