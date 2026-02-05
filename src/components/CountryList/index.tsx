import { connect, useSelector } from 'react-redux'
import { getEducation } from '../../redux/constants';
import { education } from '../../types/types';
import styles from './_styles.module.scss'



const CountryList = () => {
  const userDetails = useSelector((state: any) => state.userDetails);
  console.log('userDetails', userDetails)

  return (
    <table className={styles.userTable}>
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Education</th>
          <th>Residence</th>
          <th>Authorized?:</th>
        </tr>
      </thead>
      <tbody>
        {
          (userDetails?.length > 0) && userDetails.map((user: any, index: number) =>
            <tr key={user.fname + index}>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{getEducation[user.edu as keyof education]}</td>
              <td>{user.country}</td>
              <td><input type='radio' defaultChecked={user.terms} name={'pvn'+index} /></td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}

// const mapStateToProps = ({userDetails}: {userDetails: userProps}) => {
//     return {
//         userDetails
//     }
// }

export default connect()(CountryList);