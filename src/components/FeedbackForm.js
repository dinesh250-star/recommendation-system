import React, { useState } from 'react'
import '../css/feedback.css'

function FeedbackForm() {

    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("");

    function handleFeedback(e){
        e.preventDefault()
        console.log(email+" "+feedback);
    }

    return (
        <div className='form-body'>
            <div className='card'>
                <div className='form-heading'>
                    <center><h3>Feedback<span className='crop_icon'>✍🏻</span></h3></center>
                </div>
                <div className='card-body'>
                    <form>
                        <div className='mb-4'>
                            <input type="email" className='form-control' placeholder='Enter your email' onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className='form-floating mb-4'>
                            <textarea className='form-control' onChange={e => setFeedback(e.target.value)} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label htmlFor='floatingTextarea' className='feedback-area'>Feedback</label>
                        </div>
                        <button className='btn custom-btn' onClick={e => handleFeedback(e)}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FeedbackForm