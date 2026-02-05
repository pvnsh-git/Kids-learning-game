import { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import { ALPHABET_DATA } from '../../../utils/data';
import styles from './_styles.module.scss';

interface IAlphaProps {
  type: string,
  syllable: string,
  key: number
}

const SingleSyllable = (props: IAlphaProps) => {
  const { speak } = useSpeechSynthesis();
  const [animation, setAnimation] = useState('')
  const [showModal, setShowModal] = useState(false)

  const getAlphabetData = () => {
    return ALPHABET_DATA[props.syllable.toLowerCase()] || { meaning: '', emoji: '' };
  }

  const getTextToSpeak = () => {
    if (props.type.includes('alphabet')) {
      const data = getAlphabetData();
      return data.meaning || props.syllable;
    }
    return props.syllable;
  }

  const handlePlay = () => {
    setAnimation('onClick');
    speak({ text: getTextToSpeak() })
    
    // Show modal for alphabets
    if (props.type.includes('alphabet')) {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        setAnimation('');
      }, 3000)
    } else {
      setTimeout(() => {
        setAnimation('');
      }, 2000)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handlePlay();
    }
  }

  const handleCloseModal = () => {
    setShowModal(false);
    setAnimation('');
  }

  const alphabetData = getAlphabetData();
  
  // Get letter-specific class for unique hover effects
  const getLetterClass = () => {
    if (props.type.includes('alphabet')) {
      const letter = props.syllable.toLowerCase();
      return styles[`letter_${letter}`] || '';
    }
    return '';
  }
  
  return (
    <>
      <div className={styles.container} data-testid='single-syllable' >
        {(props.type === 'transport' || props.type === 'fruit') && 
          <img src={require(`../../../assets/img/${props.type}/${props.syllable}.png`)} alt={props.syllable} className={styles.syllableImages} />
        }
        <div 
          className={`${styles.syllable} ${animation ? styles[animation] : ''} ${getLetterClass()}`} 
          onClick={handlePlay}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="button"
          aria-label={`Play ${props.syllable}`}
        >
          {props.syllable}
        </div>
      </div>

      {/* Modal overlay for alphabet zoom */}
      {showModal && props.type.includes('alphabet') && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent}>
            <div className={styles.zoomedLetter}>{props.syllable}</div>
            <div className={styles.alphabetImage}>{alphabetData.emoji}</div>
            <div className={styles.meaningText}>{alphabetData.meaning}</div>
          </div>
        </div>
      )}
    </>
  )
}

export default SingleSyllable;