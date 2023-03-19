import React, { useContext } from 'react';
// import images
import WomanImg from '../img/Tarifs/aiguisage-patin.jpg';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const Tarifs2 = () => {
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
        {/* text &  */}
        <div className='flex h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
         {/* image */}
         <div className='flex-1 max-h-20 lg:max-h-min order-2  overflow-hidden'>
            <img src={WomanImg} alt='' />
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex-1'
          >
            <h1 className='h2'>Tarifs, Location de patins, Aiguisages</h1>
            <p className='mb-6'>
Location de cadenas au prix de 6€ (1€ de location et 5€ de caution)
Lors des séances calmes, location de petites chaises à 6€ (1€ de location et 5€ de caution)
(Attention  jamais pendant les séances de 14h à 16h )
Apprendre à patiner ?
Le mercredi de 16h30 à 17h30 et le samedi de 10h45 à 11h45
des cours sont donnés par des moniteurs aux enfants jusqu'à +/- 15 ans !!!pas de cours possible au-delà de cet âge!!!
Affûter vos patins? C est possible !
Renseignez-vous à la location de patins
(Attention délai de plusieurs jours)
<p>Apprendre à patiner ?</p>
Le mercredi de 16h30 à 17h30 et le samedi de 10h45 à 11h45
des cours sont donnés par des moniteurs aux enfants jusqu'à +/- 15 ans !!!pas de cours possible au-delà de cet âge!!!
Affûter vos patins? C est possible !
(Attention délai de plusieurs jours)
<b>
</b>
Affutage des patins
<br>
</br>
Pour l'affutage des patins nous vous proposons 2 solutions:
<br>
</br>
Vous déposez vos patins EN SEANCE PUBLIQUE avec un délais de 1 semaine au prix de 7€.
Vous déposez vos patins EN SEANCE PUBLIQUE,nous les affutons directement avec un delais de +-30 minutes au prix de 10€.
Nous n'autorisons pas le dépot et le retrait des patins en dehors des horaires de seances publique
</p>
            <Link to={'/Rdg'} className='btn mb-[10px] mx-auto lg:mx-0 self-start'>
            <b>Le réglement</b>
            </Link>
            
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Tarifs2;
