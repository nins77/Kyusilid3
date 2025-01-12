import React from 'react'
import { useNavigate } from 'react-router-dom'



function Subjects() {
  const navigate = useNavigate()
  return (
    <div className='tertiary borderradius-lg padding12'>
     
     <div className="flex"> 
      <div>
      <h4>Subjects table</h4>
      <p className='smallfont'> last updated : September 2  by Juan dela Cruz</p>
      </div>

      <input type="text" placeholder='Search' className='marginleftauto' />
      </div>

      <div className="persontable margintop12 width100">
      <table className='width100' cellSpacing={0}>
       <thead className='primary'>
        <th>Year</th>
        <th>Subject code</th>
        <th>Subject name</th>
        <th>Classes</th>
        <th></th>
        
       </thead>
       <tbody>
        <tr>
          <td>4</td>
          <td>WEB101</td>
          <td>Web systems and Development</td>
          <td>234</td>
          <td><button className='commonbutton lighttext secondary' onClick={ ()=>{navigate('/kyusilidAdmin/department/sections')}}>View Classes</button></td>
        </tr>
        
       </tbody>
     
      </table>
    </div>
    
      
    
      </div>
  )
}

export default Subjects