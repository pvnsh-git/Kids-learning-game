import { useLayoutEffect, useRef, useState } from 'react';
import { useSpeechSynthesis } from "react-speech-kit";
import { useLocation } from 'react-router-dom';
import styles from './_styles.module.scss';
import Footer from '../Footer';

const TypeToSpeak = () => {
    const { speak } = useSpeechSynthesis();
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const location = useLocation();
    const [inputValue, setInputValue] = useState('');

    useLayoutEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [])

    const handleSpeak = () => {
        speak({ text: inputValue, voices: window.speechSynthesis.getVoices() });
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    return (
        <div className={styles.TypeToSpeakWrapper}>
            <div className={styles.inputBox}>
                <div className={styles.notes}>
                    Please type any alphabet and press speak button to pronounce the alphabet
                </div>
                <textarea
                    ref={inputRef}
                    name='syllables'
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <div className={styles.btnWrapper}>
                    <button
                        className={styles.btn}
                        onClick={handleSpeak}
                    >
                        Speak
                    </button>
                    <Footer />
                </div>
            </div>
        </div>

    )
}

export default TypeToSpeak;