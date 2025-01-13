import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa"; // Importing FaEye for the eye icon
import img1 from "../../assets/MyResipes.jpg";
import img2 from "../../assets/portfolio-img2.png";
import img3 from "../../assets/portfolio-img3.png";

const Work: React.FC = () => {
	return (
		<section id="work" className="section">
			<div className="w-full md:w-5/6 md:mx-auto px-5 md:px-0">
				<div className="flex flex-col lg:flex-row gap-x-10">
					<motion.div
						variants={fadeIn({ direction: "right", delay: 0.3 })}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
					>
						<div className="">
							<h2 className="h2 leading-tight text-accent">
								My Latest <br /> Work.
							</h2>
							<p className="max-w-sm mb-16">
								In my most recent project, I successfully developed a responsive and user-friendly web application
							</p>
							<button className="btn btn-sm">View all projects</button>
						</div>

						{/* First image with Eye Icon */}
						<div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
							<a href="https://github.com/Saraaam" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
								<div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
								<img
									className="group-hover:scale-125 transition-all duration-500 w-full h-full object-cover"
									src={img2}
									alt="Full Stack Development Project"
								/>
							</a>

							{/* Eye Icon for "View" */}
							<div className="absolute bottom-5 left-5 z-50">
								<a href="https://github.com/Saraaam" target="_blank" rel="noopener noreferrer">
									<FaEye className="text-white text-3xl hover:text-accent transition-all duration-300" />
								</a>
							</div>

							<div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
								<span className="text-gradient">Full Stack Development</span>
							</div>
							<div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
								<span className="text-3xl text-white">Project Title</span>
							</div>
						</div>
					</motion.div>

					<motion.div
						variants={fadeIn({ direction: "left", delay: 0.2 })}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 flex flex-col gap-y-10"
					>
						{/* Second image with Eye Icon */}
						<div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
							<a href="https://github.com/Saraaam" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
								<div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
								<img
									className="group-hover:scale-125 transition-all duration-500 w-full h-full object-cover"
									src={img1}
									alt="Front-end Development Project"
								/>
							</a>

							{/* Eye Icon for "View" */}
							<div className="absolute bottom-5 left-5 z-50">
								<a href="https://github.com/Saraaam" target="_blank" rel="noopener noreferrer">
									<FaEye className="text-white text-3xl hover:text-accent transition-all duration-300" />
								</a>
							</div>

							<div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
								<span className="text-gradient">Front-end Development</span>
							</div>
							<div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
								<span className="text-3xl text-white">Project Title</span>
							</div>
						</div>

						{/* Third image with Eye Icon */}
						<div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
							<a href="https://github.com/Saraaam" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
								<div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
								<img
									className="group-hover:scale-125 transition-all duration-500 w-full h-full object-cover"
									src={img3}
									alt="Full-Stack Development Project"
								/>
							</a>

							{/* Eye Icon for "View" */}
							<div className="absolute bottom-5 left-5 z-50">
								<a href="https://github.com/Saraaam" target="_blank" rel="noopener noreferrer">
									<FaEye className="text-white text-3xl hover:text-accent transition-all duration-300" />
								</a>
							</div>

							<div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
								<span className="text-gradient">Full-Stack Development</span>
							</div>
							<div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
								<span className="text-3xl text-white">Project Title</span>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Work;
