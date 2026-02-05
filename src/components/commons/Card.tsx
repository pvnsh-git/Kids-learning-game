import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './_styles.module.scss';

interface ICardProps {
    key: string,
    imgSrc?: any,
    header: string,
    cardText: string,
    onCardClick: Function,
    cardIndex: number
}

const Card = (props: ICardProps) => {
    const [linkTo, setLinkTo] = useState('')

    useEffect(() => {
        switch (props.header) {
            case 'Alphabet':
                setLinkTo('/details/alphabet')
                break;
            case 'Number':
                setLinkTo('/details/number')
                break;
            case 'Rainbow':
                setLinkTo('/image/rainbow')
                break;
            case 'Month':
                setLinkTo('/details/month')
                break;
            case 'Transport':
                setLinkTo('/image/transport')
                break;
            case 'Calender':
                setLinkTo('/calender')
                break;
            case 'Fruit':
                setLinkTo('/image/fruit')
                break;
        
            default:
                setLinkTo('/error')
                break;
        }
    }, [props.header])
    

    const removeOverflow = () => {
        let cardEl = document.getElementsByClassName(`${styles['card']}`);
        for (let i = 0; i < cardEl.length; i++) {
            if (i == props.cardIndex) {
                let el = cardEl[i].children[2];
                let scrollDiv = el.children[1];
                scrollDiv.classList.remove(styles['scrollarowsContainer']);
                let divEl = scrollDiv.children;
                if (divEl) {
                    for (let i = 0; i < divEl.length; i++) {
                        divEl[i].classList.remove(styles['chevron']);
                    }
                }
            }
        }
    }

    const getMouseActivity = () => {
        let cardEl = document.getElementsByClassName(`${styles['card']}`);
        let isOverflowing;
        for (let i = 0; i < cardEl.length; i++) {
            if (i == props.cardIndex) {
                let el = cardEl[i].children[2];
                let textDiv = el.children[0];
                isOverflowing = el?.clientHeight < textDiv?.clientHeight;
                if (isOverflowing) {
                    let scrollDiv = el.children[1];
                    scrollDiv.classList.add(styles['scrollarowsContainer']);
                    let divEl = scrollDiv.children;
                    if (divEl) {
                        for (let i = 0; i < divEl.length; i++) {
                            divEl[i].classList.add(styles['chevron']);
                        }
                    }
                }
            }
        }
    }

    return (
        <div
            className={styles.card}
            data-testid='card'>
            <div className={styles.header}>
                {props.header}
            </div>
            <div>
                <img src={require(`../../assets/img/search_24.png`)} width={24} height={24} alt={props.header} />
                <img src={require(`../../assets/img/device_tv_24.png`)} width={24} height={24} alt={props.header} />
                <img src={require(`../../assets/img/phone_with_mobile_plan.png`)} width={24} height={24} alt={props.header} />
                <img src={require(`../../assets/img/arrow_right_24.png`)} width={24} height={24} alt={props.header} />
                <img src={require(`../../assets/img/${props.imgSrc}.webp`)} width='200px' height='150px' alt={props.header} />
            </div>
            <div
                id='card-body'
                className={styles.body}
                onMouseOver={() => props.onCardClick(getMouseActivity)}
                onScroll={() => props.onCardClick(removeOverflow)}
            >
                <div
                    id='card-body-text'
                >
                    {props.cardText}
                </div>
                <div id='arrow-container'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className={styles.footer}>
                {/* Go to the <a href={`/${props.header.toLowerCase()}`}>{props.header}</a> */}
                Go to the <Link to={linkTo}>{props.header}</Link>

            </div>
        </div>
    )
}

export default Card;