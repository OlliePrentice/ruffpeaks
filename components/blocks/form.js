import { useState } from "react"
import Block from './block'
import Button from '../buttons/button'
import ReCAPTCHA from "react-google-recaptcha"

export default function Form({padding, captcha}) {

    const [errors, setErrors] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [service, setService] = useState('');
    const [message, setMessage] = useState('');
    const [captchaKey, setCaptchaKey] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => { 
        e.preventDefault()
        let data = {
            name,
            email,
            phone,
            service,
            captchaKey,
            message
        }

        const newErrors = [];
        
        if( !name ) {
            newErrors.push('Name can not be blank');
        }

        if( !email ) {
            newErrors.push('Email can not be blank');
        }

        if( !captchaKey ) {
            newErrors.push('Please complete the reCAPTCHA');
        }

        setErrors(newErrors);

        if( !errors.length ) {

            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((res) => {
                if (res.status === 200) {
                    setSubmitted(true)
                    setName('')
                    setEmail('')
                    setPhone('')
                    setService('')
                    setCaptchaKey('')
                    setMessage('')
                    setErrors([])
                } else {
                    newErrors.push('Something went wrong. Please try again');
                    setErrors(newErrors);

                }
            })
        }
    };


    return (
        <Block classes={padding || undefined}>
                <div className="container mx-auto">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-5xl text-center mb-12">Get in touch</h2>
                        <div>
                            {errors && <ul className="remove-bullets text-red-500 font-medium text-sm text-center">
                                {errors.map((error, index) => {
                                    return <li key={index} className="mb-0">{error}</li>;
                                })}
                            </ul>}
                            {!submitted &&
                            <form method="post">
                                <ul className="flex flex-wrap -mx-2 mb-0 remove-bullets">
                                    <li className="px-2 mb-6 w-full">
                                        <label htmlFor="contactName">Name<sup className="text-primary-400">*</sup></label>
                                        <input id="contactName" type="text" name="name" required placeholder="Name" onChange={(e)=>{setName(e.target.value)}} />
                                    </li>
                                    <li className="px-2 mb-6 w-full sm:w-1/2">
                                        <label htmlFor="contactEmail">Email Address<sup className="text-primary-400">*</sup></label>
                                        <input id="contactEmail" type="email" name="email" required placeholder="your@email.com" onChange={(e)=>{setEmail(e.target.value)}} />
                                    </li>
                                    <li className="px-2 mb-6 w-full sm:w-1/2">
                                        <label htmlFor="contactPhone">Phone</label>
                                        <input id="contactPhone" type="text" name="phone" placeholder="01234 567891" onChange={(e)=>{setPhone(e.target.value)}} />
                                    </li>
                                    <li className="px-2 mb-6 w-full">
                                        <label htmlFor="contactService">Service</label>
                                        <select id="contactService" name="service" defaultValue="" onChange={(e)=>{setService(e.target.value)}} >
                                            <option value="" disabled>Choose service</option>
                                            <option value="walking">Walking</option>
                                            <option value="sitting">Sitting</option>
                                            <option value="boarding">Boarding</option>
                                        </select>
                                    </li>
                                    <li className="px-2 mb-6 w-full">
                                        <label htmlFor="contactMessage">Message</label>
                                        <textarea id="contactMessage" name="message" placeholder="Your Message" onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                                    </li>
                                    <li className="px-2 mb-6 w-full">
                                        <div className="inline-block transform scale-75 relative -translate-x-9 sm:translate-x-0 sm:scale-100">
                                            <ReCAPTCHA
                                                sitekey={captcha}
                                                onChange={value => setCaptchaKey(value)}
                                            />
                                        </div>
                                    </li>
                                    <li className="px-2 mb-0 w-full">
                                        <Button url="/" style="tertiary" type="button" extraClasses="w-full !rounded" attributes={{type: "submit"}} onClick={(e)=>{handleSubmit(e)}}>Submit</Button>
                                    </li>
                                </ul>
                            </form>}

                            {submitted &&
                            <div className="text-center">
                                <span className="text-primary-500 font-bold">Your message has been sent!</span>
                            </div>}
                        </div>
                    </div>
                </div>
        </Block>
    )
}