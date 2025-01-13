import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { FaPhoneAlt } from "react-icons/fa";  // Importing the phone icon

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  // Handle button click to scroll to the contact section
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="section" ref={ref}>
      <div className="w-full md:w-5/6 md:mx-auto px-5 md:px-0">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn({ direction: "right", delay: 0.3 })}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn({ direction: "left", delay: 0.5 })}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I'm a Full Stack Developer
            </h3>
            <p className="mb-6">
			I am an ambitious and motivated web developer with considerable technical
			skills, demonstrating strong self-discipline and the ability to work with
			minimal supervision. I am capable of playing a key role in developing websites 
			to ensure maximum accessibility. I have experience with JavaScript, React, Node.js,
			MongoDB, UX/UI design, Express.js, SQL, Python, HTML, CSS, and Git. I am always
			looking to expand my knowledge and skill set.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div className="">
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView && <CountUp start={0} end={1} duration={3} />}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>
              <div className="">
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView && <CountUp start={0} end={50} duration={3} />}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>
              <div className="">
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView && <CountUp start={0} end={20} duration={3} />}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="text-xl font-medium">Contact Information</h4>
              <p>
                <strong>Phone:</strong>
                {/* Make the phone number clickable with a link */}
                <a href="tel:+212 609 367 978" className="flex items-center text-accent">
                  <FaPhoneAlt className="mr-2" /> +212 609 367 978
                </a>
              </p>
            </div>
            <div className="flex gap-x-8 items-center">
              <button onClick={handleContactClick} className="btn btn-lg">
                Contact me
              </button>
              <a href="https://yourportfolio.com" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
