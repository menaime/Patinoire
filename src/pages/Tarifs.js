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

const Tarifs = () => {
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
            <h1 className='h1'>Tarifs</h1>
            <p className='mb-12'>
            
<b className='mb-12'>Nos Tarifs</b>
<br>
</br>

3,5€ pour les 3 ans à -5ans (petite chaise 1€)

5,5€ pour les -14ans

6,5€ pour les 14ans et +

+ 3€ de location de patins

Tarifs familles (parents et enfants) :
8€ patins inclus à partir de 4 personnes

5,5€ sans location de patins

Ce tarif peut s'appliquer aux groupes

(écoles, scouts, associations...) uniquement sur demande

Attention !!! Pour les séances de 14h à 16h :

pas de tarif familial et pas de location de petite chaise
Tarifs abonnements :



Pour 12 entrées :  - adultes 65€

                   - moins de 14 ans 55€

Informations supplémentaires
Clubs Sportifs
Ecole des Jeunes Patinoire Communale de Charleroi

E.J.P.C.C
Artistique : 2 heures par semaine : 40€/mois

Tel : 0493 12 95 55
Permanence pour tous les clubs En semaine de 17h30 à 18h30 Mercredi de 16h30 à 19h Samedi d 8h30 à 10h30 selon les niveaux possibilités de plus d'heures d'entrainements.

<br>

</br>


</p>
            <Link to={'/Tarifs2'} className='btn mb-[12px] mx-auto lg:mx-0 self-start'>
            <b>Suite des tarifs locations patins & Eguisages.</b>
            </Link>
            
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Tarifs;
