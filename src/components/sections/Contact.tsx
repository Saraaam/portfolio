import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import InputField from "./InputField";
import emailjs from "emailjs-com";

const Contact = () => {
  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault(); // Prevent the default form submission
  
	// Cast e.target to HTMLFormElement
	const form = e.target as HTMLFormElement;
  
	// Send the form data using EmailJS
	emailjs
	  .sendForm(
		"service_y884346",    // Your EmailJS Service ID
		"template_bnqe0zo",    // Your Template ID
		form,                 // The form element
		"RlHOiprsjuJh5ldwi"   // Your EmailJS Public User ID
	  )
	  .then(
		(result) => {
		  console.log("Email sent successfully:", result);
		  alert("Message sent successfully!");
		},
		(error) => {
		  console.log("Error sending email:", error);
		  alert("Error sending message. Check the console for details.");
		}
	  );
  };
  
  return (
    <section id="contact" className="py-16 lg:section">
      <div className="w-full md:w-5/6 md:mx-auto px-5 md:px-0">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn({ direction: "right", delay: 0.3 })}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div className="">
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn({ direction: "left", delay: 0.3 })}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-12 p-6 items-start"
            onSubmit={handleSubmit} // Attach the handleSubmit function
          >
            <InputField type="text" name="from_name" placeholder="Your name" />
			<InputField type="email" name="email" placeholder="Your email" />

            <textarea
              className="bg-transparent border-b py-12 w-full outline-none placeholder:text-white focus:border-accent transition-all duration-300 resize-none mb-12"
              name="message" // Ensure name attribute is present
              placeholder="Your message"
            />
            <button type="submit" className="btn btn-lg">
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
