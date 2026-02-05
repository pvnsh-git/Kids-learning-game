import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSpeechSynthesis } from "react-speech-kit";
import { ARRAY_LIST, COLOR_NAMES } from "../../../utils/data";
import Modal from "../../commons/Modal";
import Footer from "../Footer";
import styles from './_styles.module.scss';

const Rainbow = () => {
    const [mappingArr, setMappingArr] = useState<string[]>([])
    const [modalItem, setModalItem] = useState<null | string>('')
    const [isOpen, setIsOpen] = useState(false)
    const [openPigment, setOpenPigment] = useState(false);
    const [pathType, setPathType] = useState('');
    const { speak } = useSpeechSynthesis();
    const location = useLocation();

    useEffect(() => {
        let path = location.pathname.slice(location.pathname.lastIndexOf('/'));
        console.log('path', path)
        switch (path) {
            case '/rainbow':
                setMappingArr(COLOR_NAMES);
                setPathType('rainbow')
                break;
            case '/transport':
                const transportArr = ARRAY_LIST['transport'];
                setMappingArr(transportArr);
                setPathType('transport')
                break;
            case '/fruit':
                const fruitArr = ARRAY_LIST['fruit'];
                setMappingArr(fruitArr);
                setPathType('fruit')
                break;

            default:
                setMappingArr([]);
                break;
        }
    }, [location.pathname])

    const openPigmentModal = (content: string) => {
        setIsOpen(true)
        setModalItem(content)
        setOpenPigment(true)
        speak({ text: content })
    }
    return (
        <>
            <Footer />
            <div className={styles.rainbow_container}>
                {mappingArr.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={styles.rainbow_color_box}
                            style={pathType === 'rainbow' ? { backgroundColor: item } : {}}
                            onClick={() => openPigmentModal(item)}
                        >
                            <div className={styles.pigment} title={item}>{item}</div>
                            {(pathType === 'fruit' || pathType === 'transport') &&
                                <div className={styles.imageWrap}>
                                    <img src={require(`../../../assets/img/${pathType}/${item}.png`)} alt={item ?? undefined} height={100} width={100} />
                                </div>
                            }
                        </div>
                    )
                })
                }
            </div>
            {
                isOpen && pathType === 'rainbow' &&
                <Modal setIsOpen={setIsOpen}>
                    <div className={styles.modalContent} style={{ backgroundColor: modalItem ?? "" }}>
                        {modalItem}
                    </div>
                </Modal>
            }
            {
                isOpen && (pathType === 'fruit' || pathType === 'transport') &&
                <Modal setIsOpen={setIsOpen} heading={modalItem}>
                    <div className={styles.modalContent}>
                        <img src={require(`../../../assets/img/${pathType}/${modalItem}.png`)} alt={modalItem ?? undefined} className={styles.syllableImages} />

                    </div>
                </Modal>
            }
            {/* {
                isOpen &&
                <>
                    <div className={styles.modal_base} onClick={closePigmentModal} />
                    <div className={styles.pigment_modal}
                        style={{ backgroundColor: pigmentColor ?? "" }}
                    >
                        <div className={styles.closeBtn} onClick={closePigmentModal}>X</div>
                        <div className={styles.modalContent}>
                            {pigmentColor}
                        </div>
                    </div>
                </>
            } */}
        </>
    )
}

export default Rainbow;     