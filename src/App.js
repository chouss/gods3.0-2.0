import igods3 from './gods30.jpg';
import igods2 from './gods20.jpg';
import vec from './Vector3.png';
import './App.css';


const App = () => {

  return (
    <div className="App">
      <div className="div_kbira1">
        
        <div className="div10">
          <h id="titre_gods30">About GODS 3.0  </h>
          <img src={vec} className="vec1" />
          <img src={vec} className="vec1"/>
        </div>

        <div className = "div11">
          <img src={igods3} alt="Image_GODS_3.0" id="img_gods30" />
          <p id="para1">Go Data Science (GODS) is an online  competition in Data Science that lasts up to 15 hours. In teams, competitors will try to tackle a 
                problem and try to come up with the optimal solution. In addition to the competition, the event will include workshops and conferences.
            </p>
        </div>
      </div>

      <div className="div_kbira2">
        
        <div className="div20">
          <h id="titre_gods20">About GODS 2.0  </h>
          <img src={vec} className="vec2" />
          <img src={vec} className="vec2"/>
        </div>

        <div className = "div21">
          
            <p id="para2">Open innovation is one of the founding principles of the event. Thanks to this methodology, everyone can bring their skills and expertise to the development of innovative solutions in Data Science.
                For this, IEEE ENSI Student Branch is organizing for the second time GODS 2.0 (GO Data Science) hackathon in collaboration with CIS CHAPTER, taking place on the 18th and 19th of February in an Online format.
            </p>
            <img src={igods2} alt="Image_GODS_2.0" id="img_gods20" />

            <div id="counter1">
                <div id="text3">Last year Stats</div>
                <div class="flex_cont">
                  <div><p class="titre_cercle">Participent</p><span class="circless" id="participantsCount">0</span></div>
                  <div><p class="titre_cercle">Workshops</p><span class="circless" id="workshopsCount">0</span></div>
                  <div><p class="titre_cercle">Prizes</p><span class="circless" id="prizesCount">0</span></div>
                </div>
              </div>

        </div>
      </div>





    </div>
  );
}

export default App;
