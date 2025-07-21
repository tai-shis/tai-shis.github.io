import analogDreams from "../assets/analogDreams.jpg";

function Ad() {
	return (
		<div className='element-primary p-element flex-row flex'>
			<img
				src={analogDreams}
				alt='Analog Dreams'
				className='object-cover w-2/3 h-96 border-2 border-element-bg rounded-global bg-element-bg '
			/>
			<div className={"w-1/3 font-global p-6 text-default-subtext"}>
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
					GB: 2021/06/04 - 2021/06/24 | Base Kit | by pwade3
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
			</div>
		</div>
	);
}

export default Ad;
