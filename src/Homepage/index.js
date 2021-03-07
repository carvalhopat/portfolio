import './Homepage.scss';
import {useEffect} from 'react'
import cx from 'classnames';
import useHomepage from './useHomepage'

function Homepage() {
    const {      
        glowProgramming,
        setGlowProgramming,
        glowDesign,
        setGlowDesign,
        eventProps,
        universeParticles
    } = useHomepage()

        useEffect(() => {
          universeParticles()
        }, [universeParticles])

  return (
    <>
    <div className={cx( "circle programming-circle", { [`outter-prog-animation`]: glowProgramming })}>
      <span className={cx( "outer-circle", { [`inner-glow`]: glowProgramming })}>
        <a href="https://github.com/carvalhopat" target="_blank" rel="noreferrer" className="inner-circle" {...eventProps(setGlowProgramming)}>
          code
        </a>
      </span>
    </div>
    <div className={cx( "circle design-circle", { [`outter-design-animation`]: glowDesign })}>
      <span className={cx( "outer-circle", { [`inner-glow`]: glowDesign })}>
        <a href="https://cargocollective.com/pcarvalho" target="_blank" rel="noreferrer" className="inner-circle" {...eventProps(setGlowDesign)}>
          design
        </a>
      </span>
    </div>
    <div id="wrapper"> 
        <div className="author">Patrícia Carvalho</div>
    </div>
    </>
  );
}

export default Homepage;
