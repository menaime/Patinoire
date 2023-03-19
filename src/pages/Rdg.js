import React, { useContext } from 'react';
// import images

// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const Rdg = () => {
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
        <div className='flex lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
         
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex-1'
          >
            <h1 className='h1'>Réglement</h1>
            <p className='mb-12'>
            
<b >Extrait du Réglement</b>
<br>
</br>
Une tenue correcte et décente est exigée dans l'établissement
Il est interdit de boire ou de manger sur la piste
Il est interdit de fumer dans un établissement sportif, vestiaires et cafétéria compris
Patiner à une allure excessive est interdit durant le patinage général, le patinage de vitesse est seulement autorisé
lors des minutes de vitesse
Il est interdit de patiner dans le sens contraire ET faire DES TROUS ou des coulées est sanctionné par la mise à la porte immédiate
Faire des chaînes de plus de 3 personnes n'est pas autorisé
Pratiquer le patinage artistique, le Freestyle, le hockey ou s'adonner à des jeux dangereux est interdit
Il est interdit de faire et de lancer des boules de neige
Le tour de piste n'est pas autorisé aux personnes non munies de patins ou d'un ticket d'entrée patinage
Des bancs sont à votre disposition autour de la piste, s'assoir sur la rambarde n'est pas autorisé
Mettre des patins engage votre propre responsabilité civile et l'acceptation de tout risque pouvant survenir
du fait du déséquilibre engendré par le port de patins
Afin s'assurer la sécurité et la tranquillité de sa clientèle, un circuit d'enregistrement vidéo a été installé
et tout fauteur de trouble verbal ou physique sera expulsé temporairement et/ou définitivement des installations
Afin de satistaire aux normes de sécurité, un système d'alarme et des portes de secours ont été installées. Toute
personne déclanchant le système ou ouvrant les portes de secours sans raison valables, sera mis à la porte
définitivement de la patinoire
</p>
            <Link to={'/portfolio'} className='btn'>
            <b>DANS LE CAS OU VOUS ESTIMEZ AVOIR ETE INJUSTEMENT TRAITE LORS DE VOTRE VENUE A LA PATINOIRE DE CHARLEROI VEUILLEZ NOUS CONTACTER VIA LE FORMULAIRE DE CONTACT</b>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Rdg;
