import { Link } from "react-router-dom";

function Hobbies() {
	return (
		<div className='min-w-full mt-6 mb-6 mx-auto lg:min-w-5xl flex lg:flex-row flex-col'>
			<motion.div
				className='element-primary p-6 flex lg:w-1/2'
				initial={{ scale: 0.5 }}
				animate={{ scale: 1 }}
			>
				<Link to='/hobbies/keyboards'>Keyboards</Link>
			</motion.div>

			<motion.div
				className='element-primary p-6 flex lg:w-1/2'
				initial={{ scale: 0.5 }}
				animate={{ scale: 1 }}
			>
				<p>This page is a work in progress</p>
			</motion.div>
		</div>
	);
}

export default Hobbies;
