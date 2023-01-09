import React, { useRef } from 'react'
import { animate, motion } from "framer-motion"
import Typewriter from 'typewriter-effect'
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs"
import ME from "../assets/logo.png"
// import ME2 from "../assets/logo2.png"
const Home = () => {

    const clientCount = useRef(null);
    const projectCount = useRef(null);

    const animationClientsCount = () => {
        animate(0, 100, {
            duration: 1,
            onUpdate: (v) => (clientCount.current.textContent = v.toFixed())
        })
    };
    const animationProjecttsCount = () => {
        animate(0, 500, {
            duration: 1,
            onUpdate: (v) => (projectCount.current.textContent = v.toFixed())
        })
    };

    const animation = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            }
        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            }
        }
    }
    return (
        <div id='home'>
            <section>
                <div>
                    <motion.h1 {...animation.h1}>
                        Hi, <br /> I'am Raghu
                    </motion.h1>
                    <Typewriter
                        options={{
                            strings: ["A Developere, Designer, and Creater"],
                            autoStart: true,
                            loop: true,
                            cursor: "",
                            wrapperClassName: "typewriterpara"
                        }}
                    />
                    <div>
                        <a href="mailto:hiitechz07@gmail.com">Hire Me</a>
                        <a href="#works">Projects  <BsArrowUpRight /></a>
                    </div>
                    <article>
                        <p>
                            +<motion.span whileInView={animationClientsCount} ref={clientCount}>100</motion.span>
                        </p>
                        <span>Clients Worldwide</span>
                    </article>
                    <aside>
                        <article>
                            <p>
                                +<motion.span whileInView={animationProjecttsCount} ref={projectCount}>500</motion.span>

                            </p>
                            <span> Projects Done</span>
                        </article>

                        <article data-special>
                            <p>
                                Contact
                            </p>
                            <span>Hiitechz07@gmail.com</span>
                        </article>
                    </aside>
                </div>
            </section>
            <section>
                <img src={ME} alt="Raghu" />
            </section>
            <BsChevronDown />
        </div>
    )
}

export default Home