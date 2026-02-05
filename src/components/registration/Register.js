import React, { useEffect, useState } from 'react';
import * as apiService from '../__mocks__/fetch'
import './register.css';

const Register = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [gender, setGender] = useState('male');
    const [country, setCountry] = useState('')
    const [countryList, setCountryList] = useState([])

    useEffect(() => {
        getCountryList();
    }, [])

    const getCountryList = async () => {
        const url = `https://restcountries.com/v3.1/all`
        let countries = await apiService.fetchData(url);
        countries = countries.map( item => {
            const country = item?.name?.common;
            return country.length > 20 ? `${country.slice(0, 20)}...` : country;
        }).sort()
        setCountryList([...countryList, ...countries]);
        setCountry(countries[0]);
    }


    const setFirstName = (e) => {
        setFname(e.target.value);
    }
    const setLastName = (e) => {
        setLname(e.target.value);
    }
    const setGenderValue = (e) => {
        setGender(e.target.value)
    }
    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    }

    return (
        <>
            <div className='container'>
                <div className='inner-container'>
                    <div className='register-header'>Register</div>
                    <form className='register-form'>
                        <div className='input-wrap'>
                            <div className='name-wrap'>
                                <label id='fname' >First Name</label>
                                <input className='form_input' aria-labelledby='fname' type='text' value={fname} onChange={setFirstName} />
                            </div>
                            <div className='name-wrap'>
                                <label htmlFor='lname'>Last Name</label>
                                <input id='lname' className='form_input' type='text' value={lname} onChange={setLastName} />
                            </div>
                        </div>
                        <div className='name-wrap'>
                            <label>Gender</label>
                        <div onChange={setGenderValue} className='gender-wrap'>
                            <input data-testid='gender' name='gender' type='radio' value='male' defaultChecked />Male
                            <input data-testid='gender' name='gender' type='radio' value='female' />Female
                            <input data-testid='gender' name='gender' type='radio' value='other' />Other
                        </div>
                        </div>
                        <div className='name-wrap'>
                        <label>Country</label>
                        <div className='country-wrap'>
                            <select data-testid='country-select' value={country} onChange={handleCountryChange} className='form_input'>
                                <>
                                    <option value=''>-- Select a country --</option>
                                    {
                                        countryList.length > 0 && countryList.map(country =>
                                            <option value={country} key={country}>{country}</option>
                                        )
                                    }
                                </>

                            </select>
                        </div>
                        </div>

                    </form>
                </div>
            </div>
        </>


    )
}

export default Register;