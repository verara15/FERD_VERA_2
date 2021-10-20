import { Progress } from 'reactstrap';

export default function Skill({id}){
    return(
    <section  className="skills section-bg"  id={id}>
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Skills</h2>
        </div>

        <div className="row skills-content">
          <div className="col-lg-6">
            <div className="progress-container">
              <span className="skill">HTML + CSS <i className="val">85%</i></span>
              <Progress max="100" value="85">          
              </Progress>
            </div>
            <div className="progress-container">
              <span className="skill">JAVASCRIPT <i className="val">80%</i></span>
              <Progress max="100" value="80">         
              </Progress>
            </div>
            <div className="progress-container">
              <span className="skill">REACT JS <i className="val">75%</i></span>
              <Progress max="100" value="75">
              </Progress>
            </div>

          </div>

          <div className="col-lg-6">
          <div className="progress-container">
              <span className="skill">SQL <i className="val">85%</i></span>
              <Progress max="100" value="85">
              </Progress>
            </div>
            <div className="progress-container">
              <span className="skill">PHP <i className="val">75%</i></span>
              <Progress max="100" value="75">
              </Progress>
            </div>
            <div className="progress-container">
              <span className="skill">C <i className="val">85%</i></span>
              <Progress max="100" value="85">
              </Progress>
            </div>

          </div>

        </div>

    </div>
    </section>

    );
}