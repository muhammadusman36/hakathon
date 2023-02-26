import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthContext } from "../../../context/AuthContext";
const initialValue = {
    name: "",
    time: "",
    date: "",
    location: "",
    description: '',
    title: ""
};
function ListingBooks() {
    const { addEvents } = useAuthContext();
    const [formData, setFormData] = useState(initialValue);
    const [cover, setCover] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, title, time, date, location, description } = formData;
        if (name.length < 3) {
            toast("Enter your Name Correctly");
            return;
        }
        if (!location) {
            toast("Enter your Location Correctly");
            return;
        }
        if (!title && title.length < 4) {
            toast("Enter your title");
            return;
        } else {
            await addEvents(title, location, date, time, cover, name, description);
            setIsProcessing(true)
            toast("Event Placed");
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        }
    };




    return (
        <>
            <div className="container">
                <div className="row my-5">
                    <div className="col col-md-8 py-5 card shadow  mt-5 ms-auto me-auto">
                        <h4 className="text-center pb-4">Add a Event</h4>
                        <form>
                            <div className="row">
                                <div className="col-8 ms-auto me-auto  col-md-6 col-offset-3  ">
                                    <input type="text" name='title' onChange={handleChange} className='form-control  me-2 ' placeholder='Title' />

                                </div>
                                <div className="col-8 ms-auto me-auto my-2 my-md-0 col-md-6 col-offset-3  ">
                                    <input type="text" name='location' onChange={handleChange} className='form-control  me-2 ' placeholder='Location' />

                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-8 ms-auto me-auto  col-md-6 col-offset-3  ">
                                    <input type="date" name='date' onChange={handleChange} className='form-control  me-2 ' />

                                </div>
                                <div className="col-8 ms-auto me-auto my-2 my-md-0 col-md-6 col-offset-3  ">
                                    <input type="time" name='time' onChange={handleChange} className='form-control  me-2 ' />

                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-8 col-md-6 col-offset-2 ms-auto me-auto">
                                    <label htmlFor="" className='mb-1'>Event Photo</label>
                                    <input type={'file'} name='imgSrc' onChange={(e) => { setCover(e.target.files[0]) }} className='form-control '  ></input>
                                </div>
                                <div className="col-8 col-md-6 col-offset-2 ms-auto me-auto">
                                    <label htmlFor="" className='mb-1'>Your Name</label>
                                    <input type={'text'} name='name' onChange={handleChange} className='form-control ' placeholder="Your name" ></input>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-8 col-md-12 col-offset-2 ms-auto me-auto">
                                    <textarea name='description' onChange={handleChange} className='form-control ' cols="10" rows="5" placeholder='Description...'></textarea>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col text-center">
                                    <button className="btn px-5 py-2 btn-md btn-primary " disabled={isProcessing} onClick={handleSubmit}>{isProcessing ? <div className='spinner-border spinner-border-sm'></div> : <>ADD EVENT</>}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListingBooks;
