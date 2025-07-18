import AnalogDreams from "../components/Ad.jsx";
import DreamingGirl from "../components/Dg.jsx";
import Yellow from "../components/Yellow.jsx";

function Hobbies() {
	return (
		<div className='min-w-full'>
			<AnalogDreams />
			<div className='flex flex-row'>
				<DreamingGirl />
				<Yellow />
			</div>
		</div>
	);
}

export default Hobbies;
