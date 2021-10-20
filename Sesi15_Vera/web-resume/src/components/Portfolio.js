
import { useState, useEffect } from "react";

export default function Portfolio({id}){
  const [image, setImage] = useState([])

  useEffect(() => {
    fetch(`./../data.json`)
    .then((response) => response.json())
    .then((data) => setImage(data))
  })
    return(
    <section  className="portfolio section-bg"  id={id}>
        <div className="container" data-aos="fade-up">
  
          <div className="section-title">
            <h2>Portfolio</h2>
          </div>
  
          <div className="row portfolio-container" >

            {
              image.map((imgfol, index) =>(
                <div className="col-lg-4 col-md-6 portfolio-item filter-app" key={index}>
                <div className="portfolio-wrap">
                  <img src={imgfol.img} className="img-fluid gambar" alt="foto1"/>
                  <div className="portfolio-info">
                    <h4>{imgfol.info}</h4>
                    <p>{imgfol.type}</p>
                    <div className="portfolio-links">
                      <a href={imgfol.detail} data-bs-toggle="modal" title="detail"><i className="bx bx-plus"></i></a>
                      <a href={imgfol.link} title="demo"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              ))
            }
          </div>
        </div>

        <div className="modal fade" id="exampleModal1" tabindex="-1" aria-aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Fetch Data</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="https://www.linkpicture.com/q/portfolio-1.jpg" className="d-block w-100" alt="1" width="300px"  height="300px"/>
                    </div>
                    <div className="carousel-item">
                      <img src="https://www.linkpicture.com/q/img1-2.jpg" className="d-block w-100" alt="2"/>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon left" aria-hidden="true"></span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  </a>
                </div>
                </div>
                <div className="modal-footer">             
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          
        <div className="modal fade" id="exampleModal2" tabindex="-1" aria-aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Clone Kode.id</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators2" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="https://www.linkpicture.com/q/portfolio-2.jpg" className="d-block w-100" alt="1" width="300px"  height="300px"/>
                    </div>
                    <div className="carousel-item">
                      <img src="https://www.linkpicture.com/q/img2-2.jpg" className="d-block w-100" alt="2"/>
                    </div>  
                    <div className="carousel-item">
                      <img src="https://www.linkpicture.com/q/img2-3.jpg" className="d-block w-100" alt="2"/>
                    </div>     
                     <div className="carousel-item">
                      <img src="https://www.linkpicture.com/q/img2-4.jpg" className="d-block w-100" alt="2"/>
                    </div>   
                    <div className="carousel-item">
                      <img src="https://www.linkpicture.com/q/img2-5.jpg" className="d-block w-100" alt="2"/>
                    </div>   
                    <div className="carousel-item">
                      <img src="https://www.linkpicture.com/q/img2-6.jpg" className="d-block w-100" alt="2"/>
                    </div>   
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon left" aria-hidden="true"></span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  </a>
                </div>
                </div>
                <div className="modal-footer">             
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          
        <div className="modal fade" id="exampleModal3" tabindex="-1" aria-aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">FIFO System</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <div id="carouselExampleIndicators3" className="carousel slide" data-ride="carousel" >
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators3" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators3" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators3" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="https://www.linkpicture.com/q/portfolio-3_1.jpg" className="d-block w-100" alt="1" width="300px"  height="300px"/>
                    </div>
                    <div className="carousel-item">
                      <img src="https://www.linkpicture.com/q/img3-2.jpg" className="d-block w-100" alt="2"/>
                    </div>    
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleIndicators3" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon left" aria-hidden="true"></span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators3" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  </a>
                </div>
                </div>
                <div className="modal-footer">             
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="exampleModal4" tabindex="-1" aria-aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">FIFO System</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <div id="carouselExampleIndicators4" className="carousel slide" data-ride="carousel" >
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators4" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators4" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators4" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="https://www.linkpicture.com/q/img4_1.jpg" className="d-block w-100" alt="1" width="300px"  height="300px"/>
                    </div>
                    <div className="carousel-item">
                      <img src="https://www.linkpicture.com/q/img4_2_1.jpg" className="d-block w-100" alt="2"/>
                    </div>    
                    <div className="carousel-item">
                      <img src="https://www.linkpicture.com/q/img4_3.jpg" className="d-block w-100" alt="3"/>
                    </div> 
                    <div className="carousel-item">
                      <img src="https://www.linkpicture.com/q/img4_4_1.jpg" className="d-block w-100" alt="4"/>
                    </div> 
                    <div className="carousel-item">
                      <img src="https://www.linkpicture.com/q/img4_5.jpg" className="d-block w-100" alt="5"/>
                    </div> 
                    <div className="carousel-item">
                      <img src="https://www.linkpicture.com/q/img4_6_1.jpg" className="d-block w-100" alt="6"/>
                    </div> 
                    <div className="carousel-item">
                      <img src="https://www.linkpicture.com/q/img4_7_1.jpg" className="d-block w-100" alt="7"/>
                    </div> 
                    <div className="carousel-item">
                      <img src="https://www.linkpicture.com/q/img4_8.jpg" className="d-block w-100" alt="8"/>
                    </div> 
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleIndicators4" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon left" aria-hidden="true"></span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators4" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  </a>
                </div>
                </div>
                <div className="modal-footer">             
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="exampleModal5" tabindex="-1" aria-aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Fetch Data</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators5" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators5" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators5" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="https://www.linkpicture.com/q/img-5.jpg" className="d-block w-100" alt="1" width="300px"  height="300px"/>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleIndicators5" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon left" aria-hidden="true"></span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators5" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  </a>
                </div>
                </div>
                <div className="modal-footer">             
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
    </section>
    );
}