export default function HeroSection(){
    return(
        <div className="container">
            <div className="hero--section--content">
                <img src="./img/illustration-intro.png" alt="intro" />
                <h1 className="hero--section-title">All your files in one secure location, accessible anywhere.</h1>
                <p className="hero--section-paragraph">Fylo stores all your most important files in one secure location. Access them wherever 
                    you need, share and collaborate with friends family, and co-workers.
                </p>
                <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
    );
}