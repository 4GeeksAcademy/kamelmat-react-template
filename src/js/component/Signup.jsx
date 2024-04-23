import React, { useState } from "react";

export const Signup = () => {

    const [name, setName] = useState('Mark');
    const [surname, setSurname] = useState('Otto');
    const [username, setUsername] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [checked, setChecked] = useState('');
    const [picture, setPicture] = useState('');

    const handleName = (event) => {
        console.log(event)
        setName(event.target.value)
    };

    const handleSurname = (event) => {
        setSurname(event.target.value)
    };

    const handleUsername = (event) => {
        setUsername(event.target.value)
    };

    const handleCity = (event) => {
        setCity(event.target.value)
    };

    const handleState = (event) => {
        setState(event.target.value)
    };

    const handleZip = (event) => {
        setZip(event.target.value)
    };

    const handleChecked = (event) => {
        setChecked(event.target.checked)
    };

    const handlePicture = (event) => {
        setPicture(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const dataToSend = {
            name: name,
            surname: surname,
            username: username,
            city: city,
            state: state,
            zip: zip,
            picture: picture,
            accept: checked
        }
        console.log(dataToSend )
        setName('Mark');
        setSurname('Otto');
        setUsername('');
        setCity('');
        setState('');
        setZip('');
        setPicture('');
        setChecked('');

    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}className="row g-3 needs-validation" noValidate>
                <div className="col-md-4">
                    <label forhtml="validationCustom01" className="form-label">First name</label>
                    <input type="text" className="form-control" id="validationCustom01" value={name} onChange={handleName} required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label forhtml="validationCustom02" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationCustom02" value={surname} onChange={handleSurname} required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label forhtml="validationCustomUsername" className="form-label">Username</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required
                            value={username} onChange={handleUsername} />
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label forhtml="validationCustom03" className="form-label">City</label>
                    <input type="text" className="form-control" id="validationCustom03" required value={city} onChange={handleCity} />
                    <div className="invalid-feedback">
                        Please provide a valid city.
                    </div>
                </div>
                <div className="col-md-3">
                    <label forhtml="validationCustom04" className="form-label">State</label>
                    <select className="form-select" id="validationCustom04" required value={state} onChange={handleState}>
                        <option defaultValue="">Choose...</option>
                        <option value="1">Gipuzkoa</option>
                        <option value="2">Bizkaia</option>
                        <option value="3">Araba</option>
                    </select>
                    <div className="invalid-feedback">
                        Please select a valid state.
                    </div>
                </div>
                <div className="col-md-3">
                    <label forhtml="validationCustom05" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="validationCustom05" required value={zip} onChange={handleZip} />
                    <div className="invalid-feedback">
                        Please provide a valid zip.
                    </div>
                </div>
                <div className="input-group mb-3">
                    <div className="container">
                    <label forhtml="validationCustom05" className="form-label">Profile Picture</label>
                    </div>
                    <label className="input-group-text" forhtml="inputGroupFile01">Upload</label>
                    <input type="file" className="form-control" id="inputGroupFile01" value={picture} onChange={handlePicture}/>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value={checked} onChange={handleChecked} id="invalidCheck" required />
                        <label className="form-check-label" forhtml="invalidCheck">
                            Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback">
                            You must agree before submitting.
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>
        </div>
    );
};