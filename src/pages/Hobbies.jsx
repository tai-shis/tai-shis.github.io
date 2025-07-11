import analogDreams from "../assets/analogDreams.jpg";
import dreamingGirl from "../assets/dreamingGirl.jpg";
import dreamingGirlBack from "../assets/dreamingGirlBack.jpg";
import yellow from "../assets/yellow.jpg";

import { useState } from "react";

function Hobbies() {
	const [dgHover, setdgHover] = useState(false);

	return (
		<>
			<div className='bg-element-bg border-border border-2 rounded-global shadow-test h-min m-element p-element flex-row flex'>
				<img
					src={analogDreams}
					alt='Analog Dreams'
					className=' object-cover w-1/3 h-96 border-2 border-element-bg rounded-global bg-element-bg transition duration-150 ease-in-out ms-2
                               hover:shadow-test hover:border-background hover:translate-x-1.5 hover:-translate-y-1.5 text-center hover:w-2/3'
				/>
				<div className='text-default-subtext w-2/3 font-global ps-6'>
					<a
						className='font-bold text-xl'
						href='https://zoom65.com/'
						target='_blank'
					>
						Zoom65 EE
					</a>
					<p className='text-l'>
						Blush Pink | PVD SS Mirror Gold Knob & Backplate | by
						Meletrix
					</p>
					<br />
					<a
						className='font-bold text-xl'
						href='https://geekhack.org/index.php?topic=113197.0'
						target='_blank'
					>
						GMK Analog Dreams 2
					</a>
					<p className='text-l'>
						Base Kit | GB: 2021/06/04 - 2021/06/24 | by pwade3
					</p>
					<br />
					<a
						className='font-bold text-xl'
						href='https://rndkbd.com/products/gazzew-u4t-boba-tactile-switches'
						target='_blank'
					>
						Boba U4T
					</a>
					<p className='text-l'>
						Hand-Lubed | 65g Springs | Tactile | by Gazzew
					</p>
					<br />
					<p className='font-bold text-xl'>Notes:</p>
					<p classname='text-l'>
						This was my daily driver for quite some time and,
						especially on the left hand side, you can see the
						classic
						<i> GMK Shine</i>&trade; on the keycaps. The vaporwave
						aesthetic make it probably one of my favourite boards
						visually.
					</p>
				</div>
			</div>
			<div className='flex flex-row'>
				<div className='bg-element-bg border-border border-2 rounded-global shadow-test m-element p-element w-2/3 h-144 block'>
					<img
						src={dgHover ? dreamingGirlBack : dreamingGirl}
						alt='Dreaming Girl'
						onMouseEnter={() => setdgHover(true)}
						onMouseLeave={() => setdgHover(false)}
						className='object-cover w-full h-96 border-2 border-element-bg rounded-global bg-element-bg ease-in-out transition duration-150
                                   hover:shadow-test hover:border-background hover:translate-x-1.5 hover:-translate-y-1.5'
					/>
				</div>
				<div className='bg-element-bg border-border border-2 rounded-global shadow-test m-element p-element w-1/3 h-144 block'>
					<img
						src={yellow}
						alt='Yellow'
						className='object-cover w-full h-max border-2 border-element-bg rounded-global bg-element-bg ease-in-out transition duration-150
                                   hover:shadow-test hover:border-background hover:translate-x-1.5 hover:-translate-y-1.5'
					/>
				</div>
			</div>
		</>
	);
}

export default Hobbies;
