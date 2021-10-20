export default function Resume({id}){
    return(
    <section  className="resume"  id={id}>
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Resume</h2>    
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Vera</h4>
              <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
              <ul>
                <li>Bogor, Parung Panjang</li>
                <li>085711443468</li>
                <li>vera1@student.umn.ac.id</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Universitas Multimedia Nusantara </h4>
              <h5>2018 - expected Aug 2022</h5>
              <p>Computer Science, GPA 3.84</p>
              <p>Specializing in Oracle Databases.</p>
              <p>Dean's List Internal Scholarship for 4th Semester with Grade Point 3.94 (2020)</p>
            </div>
            <div className="resume-item">
              <h4>SMA Perguruan Buddhi</h4>
              <h5>2015 - 2018</h5>
              <p>2nd Internal General Champion for 1th Semester (2015</p>
              <p>2rd Internal General Champion for 2th Semester (2016)</p>
              <p>3rd Internal General Champion for 4th Semester (2017)</p>
              <p>Participated in National Science Olympiad for High School (2017)</p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Work Experiences</h3>
            <div className="resume-item">
              <h4>Research Internship</h4>
              <h5>2021</h5>
              <p><em>Universitas Multimedia Nusantara  </em></p>
              {/* <ul>
                <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
              </ul> */}
            </div>
            <h3 className="resume-title">Awards</h3>
            <div className="resume-item">
              <h4>Shopee Code League Data Analytic Challange</h4>
              <h5>2021</h5>
              <p><em>Participant </em></p>
            </div>
            <div className="resume-item">
              <h4>Bizcom UMN</h4>
              <h5>2021</h5>
              <p><em>2nd place best business idea in the team </em></p>
            </div>
            <div className="resume-item">
              <h4>Techstars Startup Weekend Event</h4>
              <h5>2020</h5>
              <p><em>Participant </em></p>
            </div>
          </div>
        </div>

      </div>
    </section>
    );
}