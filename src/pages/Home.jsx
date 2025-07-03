import Icon from '../components/Icon.jsx';
import Me from '../components/Me.jsx';
import About from '../components/About.jsx';

function Home() {
  return (
    <div className="flex h-min relative">
      <Icon />
      <div className="flex flex-col w-full">
        <Me />
        <About />
      </div>
    </div>
  );
}

export default Home;
