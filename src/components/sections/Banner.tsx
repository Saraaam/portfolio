import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Image from "../../assets/avatar.svg";
import ImageP from "../../assets/fdeveloper.png";
import { HiDocumentDownload } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import resume from "../../assets/CV SARA AAMOUM.pdf";

const Banner = () => {
	return (
		<section id="home" className="min-h-[85vh] lg:min-h-[78vh] flex items-center">
			<div className="w-full md:w-5/6 md:mx-auto px-5 md:px-0">
				<div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
					<div className="flex-1 text-center font-secondary lg:text-left">
						{/* Title */}
						<motion.h1
							variants={fadeIn({ direction: "up", delay: 0.3 })}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="text-[55px] font-bold leading-[1] lg:text-[110px]"
						>
					    Sara <span>AAMOUM</span>
						</motion.h1>

						{/* Subtitle */}
						<motion.div
							variants={fadeIn({ direction: "up", delay: 0.4 })}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
						>
							<span className="mr-4">I am a</span>
							<TypeAnimation
								sequence={[
									"Full Stack Developer",
									2000,
									"Graphic Designer",
									2000,
									"UX/UI Designer",
									2000,
									"Wordpress Developer",
									2000,
								]}
								speed={50}
								className="text-accent"
								wrapper="span"
								repeat={Infinity}
							/>
						</motion.div>

						{/* Description */}
						<motion.p
							variants={fadeIn({ direction: "up", delay: 0.5 })}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="mb-8 max-w-lg mx-auto lg:mx-0"
						>
							Hey, I'm Sara AAMOUM, a Passionate Full Stack Developer. I love building web applications.
						</motion.p>

						{/* Buttons */}
						<motion.div
							variants={fadeIn({ direction: "up", delay: 0.6 })}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
						>
							<a
								href={resume}
								download
								className="btn btn-lg flex items-center gap-x-2"
							>
								Resume <HiDocumentDownload className="h-6 w-6" />
							</a>
							<Link
								to="work"
								activeClass="active"
								smooth={true}
								spy={true}
								className="text-gradient btn-link cursor-pointer"
							>
								My Portfolio
							</Link>
						</motion.div>

						{/* Social Links */}
						<motion.div
							variants={fadeIn({ direction: "up", delay: 0.7 })}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="flex text-xl gap-x-6 max-w-max mx-auto lg:mx-0"
						>
							<a href="https://github.com/Saraaam" target="_blank" rel="noopener noreferrer">
								<FaGithub />
							</a>
							<a
								href="https://www.linkedin.com/in/sara-aamoum/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaLinkedin />
							</a>
						</motion.div>
					</div>

					{/* Image */}
					<motion.div
	variants={fadeIn({ direction: "down", delay: 0.3 })}
	initial="hidden"
	whileInView={"show"}
	className="relative hidden lg:flex flex-1 items-center justify-center"
>
	{/* Avatar Image (Background) */}
	<img
		src={Image}
		alt="Avatar of Sara Aamoum"
		className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-auto "
	/>

	{/* Profile Image (Foreground) */}
	<img
		src={ImageP}
		alt="Profile of Sara Aamoum"
		className="relative z-10 w-[380px] h-auto"
	/>
</motion.div>


				</div>
			</div>
		</section>
	);
};

export default Banner;
