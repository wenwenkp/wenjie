import React from 'react';

const Home = () => {
    return (
        <div className="home">
            <div className="home--main">
                <a name="home"></a>
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
                <a href="#about" className="btn btn-primary btn-lg" role="button" aria-pressed="true">View my work</a>
            </div>
        </div>
    )
}

export default Home;

