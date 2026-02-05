import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ARRAY_LIST, numberArrayCal } from "../../../utils/data";
import Footer from "../Footer";
import SingleSyllable from "./SingleSyllable";
import styles from './_styles.module.scss';

type TArrayList = {
  alphabet: string[],
  month: string[]
}

// const alphaArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
//   'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const SyllableList = () => {
  const [mappingArr, setMappingArr] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let path = location.pathname && location.pathname.slice(location.pathname.lastIndexOf('/'))
    console.log('path', path);
    switch (path) {
      case '/alphabet':
        let alphabetArr = ARRAY_LIST['alphabet']
        setMappingArr(alphabetArr)
        break;
      case '/number':
        const numberArr = numberArrayCal();
        setMappingArr(numberArr)
        break;
      case '/month':
        let monthsArr = ARRAY_LIST['month'];
        setMappingArr(monthsArr);
        break;
      case '/transport':
        let transportsArr = ARRAY_LIST['transport'];
        setMappingArr(transportsArr);
        break;
      case '/fruit':
        let fruitsArr = ARRAY_LIST['fruit'];
        setMappingArr(fruitsArr);
        break;
    
      default:
        setMappingArr([]);
        break;
    }
  }, [])

  const handleOptionsMode = () => {
    navigate('/type-to-speak')
  }

  return (
    <div data-testid='syllable-list' className={`${styles.listContainer} ${styles[location.pathname.slice(1)]}`}>
      <div className={styles.alphaWrapper}>
        {mappingArr.length > 0 && mappingArr.map((item: string, index: number) => {
          return <SingleSyllable type={location.pathname.slice(1)} syllable={item} key={index} />
        })
        }
      </div>
        <div className={styles.moreOption} onClick={handleOptionsMode}>
          <div className={styles.syllable}>More...</div>
        </div>
      <Footer />
    </div>
  )
}

export default SyllableList;