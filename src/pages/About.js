import React, { useContext } from 'react';
// import images
import WomanImg from '../img/about/woman.png';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'
    >
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className='container mx-auto h-full relative'
      >
        {/* text & img wrapper */}
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          {/* image */}
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
            <img src={WomanImg} alt='' />
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'
          >
            <h1 className='h1'>Histoire</h1>
            <p className='mb-12 max-w-sm'>
            La patinoire est créée en 1973 à l'initiative de Madame Loréal Renée et de Monsieur Masson François.
            Elle est construite sur un terrain communal de Montignies sur Sambre, dirigé alors par Monsieur Poffée, bourgmestre de l'époque.
              <b> C'est en 1985, qu'ils cèdent la gestion à Madame Masson Armande  et à Monsieur Jean-Charles Demeyere.
                </b> En 2006, un bail commercial remplace le bail emphythéotique, faisant de la patinoire un ensemble géré en collaboration avec la ville de Charleroi.
              <br />
              <br />
              Dés 2014, Monsieur Badr-Eddine Amirar rejoint l'équipe de la painoire.
            </p>
            <Link to={'/portfolio'} className='btn'>
              Plus d'histoires
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
