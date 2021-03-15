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
        hoverEffectDesign,
        setHoverEffectDesign,
        eventProps,
        universeParticles
    } = useHomepage()

        useEffect(() => {
          universeParticles()

          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []) 

  return (
    <>
    <div className="wrapper">
      <div className="circle programming-circle">
        <div className={cx( "circle programming-circle", "second-programming-circle", { [`outter-prog-animation`]: glowProgramming })}>
          <span className={cx( "outer-circle", { [`inner-glow`]: glowProgramming })}>
            <a href="https://github.com/carvalhopat" target="_blank" rel="noreferrer" className="inner-circle" {...eventProps(setGlowProgramming)}>
              code
            </a>
          </span>
        </div>
        <div className="circle programming-circle back-circle"></div>
        <div className={cx( "circle design-circle", { [`outter-design-animation`]: glowDesign, [`hoverEffect`]: hoverEffectDesign })}  {...eventProps(setHoverEffectDesign)}>
          <span className={cx( "outer-circle", { [`inner-glow`]: glowDesign })}>
            <a href="https://cargocollective.com/pcarvalho" target="_blank" rel="noreferrer" className="inner-circle" {...eventProps(setGlowDesign)}>
              design
            </a>
          </span>
        </div>
        <div className="circle design-circle back-circle"></div>
      </div>
    </div>
    <div id="author-wrapper"> 
        <div className="author">Patrícia Carvalho</div>
    </div>
    </>
  );
}

export default Homepage;
