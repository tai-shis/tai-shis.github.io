import image from "../assets/Pondering.svg";

function Icon() {
	return (
		<div className='hidden full:flex element-primary p-element box-content'>
			<img
				src={image}
				alt='Source: transhumans.xyz'
				className='h-96 w-64 object-cover'
			/>
		</div>
	);
}

export default Icon;
