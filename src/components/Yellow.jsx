import yellow from "../assets/yellow.jpg";

function Yellow() {
	return (
		<div className='bg-element-bg border-border border-2 rounded-global shadow-test m-element p-element w-1/3 h-min block'>
			<img
				src={yellow}
				alt='Yellow'
				className='object-cover w-full h-max border-2 border-element-bg rounded-global bg-element-bg ease-in-out transition duration-150
                            hover:shadow-test hover:border-background hover:translate-x-1.5 hover:-translate-y-1.5'
			/>
		</div>
	);
}

export default Yellow;
