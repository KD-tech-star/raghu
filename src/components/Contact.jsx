import React, { useState } from 'react'
import vg from "../assets/vg.png"
const Contact = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        message: "",
    })
    const handleChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setInputs({...inputs, [e.target.name]: e.target.value })
        console.log(inputs)
    };

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(inputs)

    }


    return (
        <div id='contact'>
            <form onSubmit={submitHandler}>
                <h2>Contact Me</h2>
                <input type="text" placeholder='Enter your name'
                    name="name"
                    value={inputs.name}
                    onChange={handleChange}


                />
                <input type="email" placeholder='Enter your email'
                    name="email"
                    value={inputs.email}
                    onChange={handleChange}
                />
                <textarea name="message" placeholder='Your message' id="" cols="30" rows="4"

                    value={inputs.message}
                    onChange={handleChange}

                ></textarea>
                <button>Send</button>
            </form>

            <aside>
                <img src={vg} alt="graphics" />

            </aside>



        </div>
    )
}

export default Contact