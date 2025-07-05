function Me() {
	return (
		<div className='bg-element-bg border-2 border-border rounded-global shadow-test h-min p-6 m-element animate-in-left'>
			<div className='flex h-min'>
				<div>
					<p className='text-default-text font-global text-3xl font-bold'>
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
				<hr className='bg-border h:1' />
			</div>
		</div>
	);
}

export default Me;
