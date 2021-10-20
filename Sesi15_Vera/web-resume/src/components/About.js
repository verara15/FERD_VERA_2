import Profil from '../assets/img/profile-img.jpg'

export default function About({id}){
    return(
    <section  className="about"  id={id}>
        <div className="container" data-aos="fade-up">
  
          <div className="section-title">
            <h2>About</h2>
            <p>Hello, I am a fourth year Computer Science student at Multimedia Nusantara University with high problem solving skills, able to work in a team, easy to adapt and have a desire to learn. Designing and implementing what humans think into applications and websites is my favorite thing in programming.</p>
          </div>
  
          <div className="row">
            <div className="col-lg-4">
              <img src={Profil} class="img-fluid" alt="profile"/>
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>Front End Developer.</h3>
              <p className="fst-italic">
              Hi, and nice to meet you! I am a forth-year Computer Science student at Universitas Multimedia Nusantara with problem-solving skills and high adaptability. People describe me as a fast and eager learner. Currently looking for a company where I can improve my skills
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>15 Oktober 2000</span></li>               
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>085711443468</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Parung Panjang, Bogor</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>21</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Undergraduate</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>vera1@student.umn.ac.id</span></li>                
                  </ul>
                </div>
              </div>
            </div>
          </div>
  
        </div>
    </section>
    );
}