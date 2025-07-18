/* global __COMMIT_DATE__ */
function Footer() {
	return (
		<footer className='element-primary p-6 responsive'>
			<span className='text-default-subtext font-global text-l inline-block'>
				© 2025 - Tai Shishiba
			</span>
			<span className=' text-default-subtext font-global text-l float-right hidden md:inline-block'>
				Last Commit:{" "}
				<a
					href='https://github.com/tai-shis/tai-shis.github.io'
					className='hover:underline'
				>
					{__COMMIT_DATE__.split("T")[0]}
				</a>
			</span>
		</footer>
	);
}

export default Footer;
