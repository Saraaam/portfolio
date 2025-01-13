import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { BsArrowUpRight } from "react-icons/bs";

const services = [
	{
		name: "back-end Development",
		description:
			"optimizing databases, ensuring security, and enhancing system performance for seamless operations.",
		link: "Learn more",
	},
	{
		name: "Frontend Development",
		description:
			"Developing dynamic, user-friendly front-end interfaces that ensure responsive design, smooth interactions, and exceptional visual appeal.",
		link: "Learn more",
	},
	{
		name: "UX/UI Designer",
		description:
			"Designing intuitive and visually engaging UX/UI interfaces, focusing on seamless user experiences, responsive designs, and accessibility, while ensuring consistency and usability across all platforms.",
		link: "Learn more",
	},
	{
		name: "Graphic Designer",
		description:
			"Creating visually compelling graphic designs that communicate your brand’s message, enhance user experience, and captivate your audience.",
		link: "Learn more",
	},
];

const Services = () => {
	return (
		<section id="services" className="section">
			<div className="w-full md:w-5/6 md:mx-auto px-5 md:px-0">
				<div className="flex flex-col lg:flex-row">
					<motion.div
						variants={fadeIn({ direction: "right", delay: 0.3 })}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
					>
						<h2 className="h2 text-accent mb-6">What I Do.</h2>
						<h3 className="h3 max-w-[455px] mb-16">
							I'm a Full-Stack Developer and Graphic Designer with over 1 yaers of experience
						</h3>
						<button className="btn btn-sm">See my work</button>
					</motion.div>
					<motion.div
						variants={fadeIn({ direction: "left", delay: 0.5 })}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1"
					>
						<div className="">
							{services.map((service, i) => {
								const { name, description, link } = service;
								return (
									<div
										key={i}
										className="border-b border-white/20 h-[146px] mb-[38px] flex"
									>
										<div className="max-w-[476px]">
											<h4 className="text-xl tracking-wider font-primary font-semibold mb-6">
												{name}
											</h4>
											<p className="font-secondary leading-tight">
												{description}
											</p>
										</div>
										<div className="flex flex-col flex-1 items-end">
											<a
												href="#"
												className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
											>
												<BsArrowUpRight />
											</a>
											<a
												href="#"
												className="text-gradient text-sm capitalize"
											>
												{link}
											</a>
										</div>
									</div>
								);
							})}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Services;
