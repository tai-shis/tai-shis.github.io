import { Link } from "react-router-dom";

function Header() {
	return (
		<nav className='gap-element border-2 border-border rounded-global ps-element pt-0 pb-0 m-element shadow-test bg-element-bg'>
			<div className='flex flex-row p-2 font-global font-bold text-default-subtext text-xl'>
				<div
					className='border-2 border-element-bg rounded-global bg-element-bg transition duration-150 ease-in-out p-4 w-32 ms-2 
                               hover:shadow-test hover:border-background hover:translate-x-1.5 hover:-translate-y-1.5 text-center'
				>
					<Link to='/'>Homepage</Link>
				</div>
				<div
					className='border-2 border-element-bg rounded-global bg-element-bg transition duration-150 ease-in-out p-4 w-32 ms-2
                               hover:shadow-test hover:border-background hover:translate-x-1.5 hover:-translate-y-1.5 text-center'
				>
					<Link to='/projects'>Projects</Link>
				</div>
				<div
					className='border-2 border-element-bg rounded-global bg-element-bg transition duration-150 ease-in-out p-4 w-32 ms-2
                               hover:shadow-test hover:border-background hover:translate-x-1.5 hover:-translate-y-1.5 text-center'
				>
					<Link to='/stuff'>Stuff</Link>
				</div>
			</div>
		</nav>
	);
}

export default Header;
