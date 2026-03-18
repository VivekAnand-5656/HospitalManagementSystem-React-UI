import React, { useState } from 'react'
import { toast, Bounce } from 'react-toastify';

const PatientLogin = () => {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (formData.email === "vivek@gmail.com" && formData.password === "123456") {
                toast.success('Login Successfully ', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                setFormData({
                    email: "",
                    password: ""
                })
            } else {
                toast.warn('Invalid email or password !', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            }
            //  const response = await axios.post(
            //   'https://yourapi.com/admin/login', // replace with your API
            //   formData,
            //   {
            //     headers: {
            //       'Content-Type': 'application/json',
            //       'Authorization': 'Bearer YOUR_API_KEY_OR_TOKEN', // put your token here
            //     },
            //   }
            // );

        } catch (error) {
            console.error("Error : ", error)
            toast.error('Something went wrorng !', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

        }

    }

    return (
        <form action=""
            onSubmit={handleSubmit}
            className=' w-full flex flex-col p-2 justify-around gap-3 ' >
            <label htmlFor="">Email</label>
            <input type="email" name='email' placeholder='user@gmail.com' required
                value={formData.email}
                onChange={handleChange}
                className=' outline-0 p-3 border border-[#7c7878] rounded ' />
            <label htmlFor="">Password</label>
            <div className=' outline-0 border border-[#7c7878] rounded ' >
                <input type={show ? "text" : "password"}
                    name="password" id="" placeholder='********' required
                    value={formData.password}
                    onChange={handleChange}
                    className=' w-[90%] outline-0 p-3 '
                />
                {
                    show ? <i className="fa-solid fa-lock cursor-pointer "
                        onClick={() => setShow(!show)}
                    ></i> : <i className="fa-solid fa-eye cursor-pointer "
                        onClick={() => setShow(!show)}
                    ></i>
                }

            </div>
            <button type='submit' className='w-full font-semibold rounded cursor-pointer p-2 bg-[#0411f8] text-white ' >Login</button>
            <p className=' text-center ' >Don't have an account? <a href="" className=' text-[#0411f8] ' >Register here</a></p>
        </form>
    )
}

export default PatientLogin