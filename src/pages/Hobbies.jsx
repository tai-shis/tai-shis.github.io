import { React } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hobbies() {
	return (
		<div className='min-w-full mt-6 mb-6 mx-auto lg:min-w-5xl flex lg:flex-row flex-col'>
			<div className='element-primary p-6 flex lg:w-1/2'>
				<motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }}>
					<Link to='/hobbies/keyboards'>Keyboards</Link>
				</motion.div>
			</div>

			<div className='element-primary p-6 flex lg:w-1/2'>
				<motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }}>
					<p>This page is a work in progress</p>
				</motion.div>
			</div>
		</div>
	);
}

export default Hobbies;
