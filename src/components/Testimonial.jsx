import React from 'react'
import logo2 from "../assets/logo2.png"
const Testimonial = () => {
    return (
        <div id='testimonial'>
            <h2> Testimonial</h2>
            <section>
                <TestimonialCard
                    name={'Raghu'}
                    feedback={"Very Good "}


                />
                <TestimonialCard
                    name={'Sonu'}
                    feedback={"Your best explenation "}


                />
                <TestimonialCard
                    name={'Sagar'}
                    feedback={"One of the best example "}


                />

            </section>
        </div>
    )
};

const TestimonialCard = ({ name, feedback }) => {
    return (
        <React.Fragment>

            <article>
                <img src={logo2}
                    alt="User"
                />
                <h4>{name}</h4>
                <p>{feedback}</p>
            </article>
        </React.Fragment>

    )
}

export default Testimonial