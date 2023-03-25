import React, { useContext } from 'react';
// import images
import WomanImg from '../img/home/woman.png';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const Horaire = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'
    >
       <div className='container flex-auto mx-auto py-2 px-3.5 '>
        {/* text & img wrapper */}
        <div className='flex-col justify-center py-20 '>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'
          >
            <h1 className='h2'>
              Dernier mois <br />Dimanche 02 Avril 2023
            </h1>
            <p className='text-[26px] lg:text-[40px] font-primary mb-4 lg:mb-12'>
              La Saison Commencera <br />Le Premier Octobre </p>

            <div className='flex pt-4 space-x-6'>
            <Link to={'/Contact'} className='btn mb-[30px]'>
              Contactez-Nous
            </Link>
          
            </div>


          </motion.div>
          {/* image */}
          <div className='flex justify-end max-h-96 lg:max-h-max'>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className='relative lg:-right-40 overflow-hidden'
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={WomanImg}
                alt=''
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Horaire;
