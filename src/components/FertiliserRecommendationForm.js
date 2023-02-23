import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/bootstrap.css'
import '../css/fertiliserform.css'

function FertiliserRecommendationForm() {

    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate('/result')
    }

    return (
        <div className='fertiliser-body'>
            <div className='card'>
            <div className='form-heading'>
                    <center><h3>Fertiliser Recommender<span className='fertiliser_icon'>🧪</span></h3></center>
                </div>
                <div className='card-body'>
                    <form>
                        <div className='mb-4'>
                            <input type="text" className='form-control' placeholder='Temperature (in Celcius)' />
                        </div>
                        <div className='mb-4'>
                            <input type="text" className='form-control' placeholder='Humidity (in %)' />
                        </div>
                        <div className='mb-4'>
                            <input type="text" className='form-control' placeholder='Moisture in Soil' />
                        </div>
                        <div className='mb-4'>
                            <input type="text" className='form-control' placeholder='Amount of Nitrogen in Soil' />
                        </div>
                        <div className='mb-4'>
                            <input type="text" className='form-control' placeholder='Amount of Potassium in Soil' />
                        </div>
                        <div className='mb-4'>
                            <input type="text" className='form-control' placeholder='Amount of Phosphorus in Soil' />
                        </div>
                        <select id="soil_type" name="soil_type" className="form-select form-select-lg mb-4" >
                            <option selected>Select Soil Type</option>
                            <option value="Sandy">Sandy</option>
                            <option value="Loamy">Loamy</option>
                            <option value="Black">Black</option>
                            <option value="Red">Red</option>
                            <option value="Clayey">Clayey</option>
                        </select>
                        <select id="crop_type" name="crop_type" className="form-select form-select-lg mb-4 ">
                            <option selected>Select Crop Type</option>
                            <option value="Maize">Maize</option>
                            <option value="Sugarcane">Sugarcane</option>
                            <option value="Cotton">Cotton</option>
                            <option value="Tobacco">Tobacco</option>
                            <option value="Paddy">Paddy</option>
                            <option value="Barley">Barley</option>
                            <option value="Wheat">Wheat</option>
                            <option value="Millets">Millets</option>
                            <option value="Oil seeds">Oil seeds</option>
                            <option value="Pulses">Pulses</option>
                            <option value="Ground Nuts">Ground Nuts</option>
                        </select>
                        <button type="submit" class="btn custom-btn" onClick={handleSubmit}>Recommend</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default FertiliserRecommendationForm