import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUser } from '../../redux/action/user';
import { useAppDispatch } from '../../redux/hooks/hooks';
import Skills from '../../skills/Skills';
import '../registration/register.css';


const Application = (props: any) => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [gender, setGender] = useState('male');
    const [country, setCountry] = useState('')
    const [edu, setEdu] = useState('ug')
    const [terms, setTerms] = useState(false);
    const [error, setError] = useState('');
    const [countryList, setCountryList] = useState<string[]>([])

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        getCountryList();
    }, [])

    const getCountryList = async () => {
        const url = `https://restcountries.com/v3.1/all`
        let countries=[];
        try {
            let res = await fetch(url);
            countries = await res.json();
            countries = countries.map((item: any) => {
                const country = item?.name?.common;
                return country.length > 20 ? `${country.slice(0, 20)}...` : country;
            }).sort()
        } catch (error: any) {
            console.log('error: ', error.message);
        }
        setCountryList([...countryList, ...countries]);
        setCountry(countries[0]);
    }


    const setFirstName = (e: ChangeEvent<HTMLInputElement>) => {
        setError('');
        setFname(e.target.value);
    }
    const setLastName = (e: ChangeEvent<HTMLInputElement>) => {
        setError('');
        setLname(e.target.value);
    }
    const setGenderValue = (e: ChangeEvent<HTMLInputElement>) => {
        setError('');
        console.log('gender value ', e.target);
        setGender(e.target.value)
    }
    const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setError('');
        setCountry(e.target.value);
    }
    const handleEdChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setError('');
        setEdu(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        const target = e.target as typeof e.target & {
            fname: {value: string},
            lname: {vlaue: string},
            gender: {value: string},
            edu: {value: string},
            country: {value: string},
            terms: {value: boolean}
        }
        const fname = target.fname.value;
        console.log(fname , lname , gender , edu , country, terms);
        if (fname && lname && gender && edu && country) {
            console.log('dispatch')
            dispatch(fetchUser({fname, lname, gender, edu, country, terms}))
            navigate('/country_list') 
        } else {
            e.preventDefault();
            console.log('error');
            setError('Please fill all data *')
        }
    }

    const handleChangeTerms = (e:ChangeEvent<HTMLInputElement>) => {
        setTerms(e.target.checked);
    }

    return (
        <>
            <div className='container'>
                <div className='inner-container'>
                    <h2 className='register-header'>Register</h2>
                    <form className='register-form' onSubmit={handleSubmit}>
                        <div className='input-wrap'>
                            <div className='name-wrap'>
                                <label htmlFor='fname' >First Name<sup>*</sup></label>
                                <input id='fname' name='fname' placeholder='Write your first name here' className='form_input' type='text' value={fname} onChange={setFirstName} />
                            </div>
                            <div className='name-wrap'>
                                <label htmlFor='lname'>Last Name<sup>*</sup></label>
                                <input id='lname' name='lname' placeholder='Write your last name here' className='form_input' type='text' value={lname} onChange={setLastName} />
                            </div>
                        </div>
                        <div className='name-wrap'>
                            <label>Gender<sup>*</sup></label>
                            <div onChange={setGenderValue} className='gender-wrap'>
                            <label htmlFor='male'><input id='male' name='gender' type='radio' value='male' defaultChecked />Male</label>
                            <label htmlFor='female'><input id='female' name='gender' type='radio' value='female' />Female</label>
                            <label htmlFor='other'><input id='other' name='gender' type='radio' value='other' />Other</label>
                            </div>
                        </div>
                        <div className='name-wrap'>
                            <label>Education<sup>*</sup></label>
                            <select name="education" value={edu} id="education" className='form_input' onChange={handleEdChange}>
                                <option value="ug">Under Graduation</option>
                                <option value="gd">Graduation</option>
                                <option value="pg">Post Graduation</option>
                            </select>
                        </div>
                        <div className='name-wrap'>
                            <label>Country<sup>*</sup></label>
                            <div className='country-wrap'>
                                <select value={country} name='country' onChange={handleCountryChange} className='form_input'>
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
                        <div>
                            <label htmlFor="terms">
                                <input id='terms' type='checkbox' checked={terms} name='terms' onChange={handleChangeTerms} />
                                I agree to the <a href="#">terms and conditions</a>.
                            </label>
                        </div>
                        <div>
                            {error && <p style={{color: 'red', fontWeight: '700'}}>{error}</p>}
                        </div>
                        <div>
                            <button type='submit' className='submit_btn' >
                                Submit
                            </button>
                            <button type='reset' className='submit_btn'>
                                Reset
                            </button>
                        </div>


                    </form>
                    <div>
                        <Skills skills={['react', 'js', 'es6']} />
                    </div>
                </div>
            </div>
        </>


    )
}

export default Application;
