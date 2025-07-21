import { Link } from "react-router-dom";

function Header() {
	return (
		<nav className='element-primary ps-element gap-element mt-16'>
			<div className='flex flex-row p-2 font-global font-bold text-default-text text-xl'>
				<div className='flex'>
					<div className='interactive-header-button'>
						<Link to='/'>Homepage</Link>
					</div>
					{/* <div className='interactive-header-button'>
                        <Link to='/projects'>Projects</Link>
                    </div>
                    <div className='interactive-header-button'>
                        <Link to='/stuff'>Stuff</Link>
                    </div> */}
					<div className='interactive-header-button'>
						<Link to='/hobbies'>Hobbies</Link>
					</div>
				</div>
				<div className='flex lg:hidden'></div>
			</div>
		</nav>
	);
}

export default Header;
