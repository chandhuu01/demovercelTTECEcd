import axios from 'axios';
import React, { useState } from 'react';

function Reg()
{
    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const ChangeName = (e) =>
    {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const submit = async () =>
    {
        try
        {
            const res = await axios.post("http://cabsystemsms-1.onrender.com/reg", data)
            console.log(res.data)
        }
        catch (xyz)
        {
            alert(xyz.response.data)
        }
    }
    return (
        <>

            <h1>i am App</h1>
            <input onChange={ChangeName} name="username" placeholder='enter username' />
            <input onChange={ChangeName} name="email" placeholder='enter email' />
            <input onChange={ChangeName} name="password" placeholder='enter password' />
            <button onClick={submit}>submit</button>
        </>
    )
}

export default Reg
