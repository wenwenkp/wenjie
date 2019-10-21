import React from 'react';

const Home = () => {
    return (
        <div className="home" id="wenjie">
            <div className="home--main">
                <h1 className="home--primary">
                    Hey There, I'm Wenjie Li.
                </h1>
                <section className="home--secondary">
                    based in San Francisco, CA.
                </section>
                <h1 className="home--primary">
                    Just Another Web Developer.
                </h1>
                <section className="home--secondary">
                    Experienced In Front-End and Back-end.
                </section>
                <h1 className="home--primary">
                    And A Big Fan Of Soccer.
                </h1>
                <section className="home--secondary">
                    Yes, Man Utd!
                </section>
                <div>
                    <a href="#about">&#8595;</a>
                </div>
            </div>
        </div>
    )
}

export default Home;

