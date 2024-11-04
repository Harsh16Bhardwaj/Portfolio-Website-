import { useState } from 'react';
import ThreeScene from './components/landing/landing'
import HeroSection from './components/landing/mainsection/herosection'
import Skills from './components/skills/skills'
import Projects from './components/projects/projects'
import Projects1 from './components/projects/projects1'
import Projects2 from './components/projects/projects2'
import Default from './components/landing/mainsection/default'
function App() {
  const [showHeroSection, setShowHeroSection] = useState(false);
  return (
    <>
        <ThreeScene>
        {showHeroSection ? <><HeroSection /> </> : <Default onBegin={() => setShowHeroSection(true)} />}
        </ThreeScene >
        {/* <Skills /> */}
        <Projects />

    </>
  );
}

export default App
