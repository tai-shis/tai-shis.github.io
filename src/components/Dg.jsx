import dreamingGirl from "../assets/dreamingGirl.jpg";
import dreamingGirlBack from "../assets/dreamingGirlBack.jpg";

import { useState } from "react";

function Ad() {
	const [dgHover, setdgHover] = useState(false);

	return (
		<div className='element-primary p-element w-full'>
			<img
				src={dgHover ? dreamingGirlBack : dreamingGirl}
				alt='Dreaming Girl'
				onMouseEnter={() => setdgHover(true)}
				onMouseLeave={() => setdgHover(false)}
				className='object-cover w-full h-96 border-2 border-element-bg rounded-global bg-element-bg ease-in-out transition duration-150
                        hover:shadow-test hover:border-background hover:translate-x-1.5 hover:-translate-y-1.5'
			/>
		</div>
	);
}

export default Ad;
