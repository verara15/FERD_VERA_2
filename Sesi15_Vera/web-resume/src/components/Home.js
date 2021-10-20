export default function Home({ id }){
    return(    
        <section  className="d-flex flex-column justify-content-center hero" id={id}>
            <div className="container">
            <h1 id="nama">Vera</h1>
            <p id="desc">I'm <span>Front End Developer</span></p>
            <div className="social-links-home">
                <a href="https://www.linkedin.com/in/vera-vera" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                <a href="https://instagram.com/verassetiawan" className="instagram"><i className="bx bxl-instagram"></i></a>
            </div>
            </div>
        </section>      
    );
}