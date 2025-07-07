import image from "../assets/Pondering.svg";

function Icon() {
	return (
		<div className='hidden md:flex bg-element-bg border-2 border-border rounded-global p-element m-element box-content basis-64 shadow-test animate-in-right'>
			<img
				src={image}
				alt='Source: transhumans.xyz'
				className='h-96 w-64 object-cover'
			/>
		</div>
	);
}

export default Icon;
