export default function Contact({id}){
    return(
    <section className="contact"  id={id}>
      <div className="container" >
        <div className="section-title">
          <h2>Contact</h2>
        </div>
        <div className="row mt-1">
          <div className="col-4 " >
            <div className="address info">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>Parung Panjang, Bogor</p>
            </div>
          </div>
          <div className="col-4">
            <div className="email info">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>vera1@student.umn.ac.id</p>
            </div>
          </div>
          <div className="col-4">
            <div className="phone info">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>085711443468</p>
                </div>
            </div>
        </div>

      </div>
    </section>
    );
}