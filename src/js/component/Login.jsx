import React, { useState } from "react";

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const [viewPassword, setViewPassword] = useState(false);
    const [type, setType] = useState('')
    const handleEmail = (event) => {
        console.log(event)
        setEmail(event.target.value)
    };

    const handlePassword = (event) => {
        console.log(event)
        setPassword(event.target.value)
    };

    const handleChecked = event => setChecked(event.target.checked);

    const handleViewPassword = () => setViewPassword(!viewPassword)

    const handleReset = () => {
        setEmail('');
        setPassword('');
        setChecked(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const dataToSend = {
            email: email,
            password: password,
            accept: checked
        }
        console.log(dataToSend)
        handleReset();
    }
    return (
        <div className="container text-start">
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <label forhtml="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        value={email} onChange={handleEmail} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="input-group mb-3">
                    <div className="form-floating">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type={viewPassword ? "text" : "password"} className="form-control" id="exampleInputPassword1"
                            value={password} onChange={handlePassword} />
                    </div>
                    <span className="input-group-text" onClick={handleViewPassword}>
                        {viewPassword ? <i className="far fa-eye-slash"></i> : <i className="far fa-eye"></i>}
                    </span>
                </div>
                <div className="form-floating mb-3">
                    <select class="form-select" aria-label="Default select example"
                    value={type} onChange={event => setType(event.target.value)}>
                        <option selected>Chose Role</option>
                        <option value="1">User</option>
                        <option value="2">Admin</option>
                        <option value="3">Dev</option>
                    </select>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"
                        checked={checked} onChange={handleChecked} />
                    <label className="form-check-label" forhtml="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary ms-3 mt-3">Submit</button>
                <button type="reset" className="btn btn-secondary ms-3 mt-3"
                    onClick={handleReset}>
                    Cancel
                </button>
            </form>
        </div>
    );

};