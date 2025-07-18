function Me() {
	return (
		<div className='element-primary h-min p-6'>
			<div className='flex h-min'>
				<div>
					<p className='text-default-text font-global text-2xl font-bold'>
						Tai Shishiba
					</p>

					<span className='text-default-subtext font-global text-l hidden lg:flex'>
						Bachelor of Computer Science | Mount Royal University
					</span>
					<span className='text-default-subtext font-global text-l flex lg:hidden'>
						Bachelor of Computer Science
						<br />
						Mount Royal University
					</span>
				</div>
				<hr className='bg-border' />
			</div>
		</div>
	);
}

export default Me;
