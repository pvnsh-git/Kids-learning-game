import Card from '../../commons/Card';
import { wrapperText } from '../../commons/wrapperText';
import styles from './_styles.module.scss'

type IwrapperText = {
    Alphabet: string,
    Number: string,
    Rainbow: string,
    Month: string,
    Transport: string,
    Fruit: string,
    Calender: string,
}
const games = ['Alphabet', 'Number', 'Rainbow', 'Month', 'Transport', 'Fruit', "Calender"]
const GameList = () => {

    const onCardClick = (func: Function) => {
        func();
    }

    return (
        <div className={styles.container} data-testid='cardContainer'>
            {games.length > 0 && games.map((item, index) => {
                return <Card key={item+index} cardIndex={index} onCardClick={onCardClick} header={item} imgSrc={item.toLowerCase()} cardText={wrapperText[item as keyof IwrapperText]} />
                
            }
            )}
           
           {/* <Card header='Number' imgSrc={number} text={wrapperText.numberCard} /> */}
        </div>
    )
}

export default GameList;