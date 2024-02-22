import React from 'react'

const book = () => {
  return (
    <div>
       <div className='vid'>
        <video src='assets/img/video1.mp4' autoPlay loop muted />
        <div className='a'>
            <h1 className='b'> BOOK YOUR TABLE</h1>
        <label>  Enter  Your Name &nbsp;&nbsp; &nbsp;&nbsp;
        <input type='text' required placeholder='Enter Your Name'/></label>
        <label>  Enter Your Email &nbsp;&nbsp; &nbsp;&nbsp;
        <input type='email' required placeholder='Enter Your Email'/></label>
        <label>Enter Date &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        <input type='date' required placeholder='Enter date'/></label>
        <label>Contact Number &nbsp;&nbsp; &nbsp;&nbsp;
        <input type='text' required placeholder='Contact Number'/> </label>
        <form required >No. of Seats &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
            <select name='person'>
                 <option value='1'>One</option>
                 <option value='2'>Two</option>
                 <option value='3'>Three</option>
                 <option value='4'>More Then 4</option>
            </select>
        </form>
        <label>Anything Special &nbsp;&nbsp; &nbsp;&nbsp;
        <input type='Address' placeholder='Special Request'/></label>
        <div className='btn'>
        <button type='submit'>Submit</button>
        </div>
        </div>
        </div> 
        <div className='ln'></div>
    </div>
  )
}

export default book