export default function Home(){
    return(
      <>
      <div className="p-5 mb-4 bg-light reounded-3 border">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">First Paragraph in Jumbotron</h1>
          <p className="col=md-8 fs-4">Using a series of utilities, you can create this  jumbotron, just like the one in previous versions in Bootstrap. Check out the examples below for how you can remix and restyle it to our liking</p>
          <button className="btn btn-primary btn-lg" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Click here to show Modal box</button>
        </div>
      </div>
      <div className="modal fade" id="exampleModal" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              This is my first modal box
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save change</button>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
  