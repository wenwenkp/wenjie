import React from 'react';

const Home = () => {
    return (
        <div className="home" id="wenjie">
            <div className="home--main">
                <h1 className="home--primary">
                    Hey There, I'm <span className="home--name">Wenjie Li</span>.
                </h1>
                <section className="home--secondary">
                    Based in San Francisco, CA.
                </section>
                <h1 className="home--primary">
                    Just Another 💻 <span className="home--title">Web Developer</span>.
                </h1>
                <section className="home--secondary">
                    Experienced In Front-End and Back-end.
                </section>
                <h1 className="home--primary">
                    And A Big Fan Of ⚽️ Soccer.
                </h1>
                <section className="home--secondary">
                    Yesssss, <span className="home--soccer">Manchester United!!</span>
                </section>
                <div>
                    <a href="#about" className="next">&#8595;</a>
                </div>
            </div>
        </div>
    )
}

export default Home;

