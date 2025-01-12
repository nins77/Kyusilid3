import React, { useContext,  useState } from 'react'
import kyusilidlogo from '../assets/images/Kyusilid.jpg'
import {MdSpaceDashboard , MdBrightness1} from 'react-icons/md'
import { themeContext , departmentsContext } from '../Globalcontext'
import {BiChevronsLeft ,BiChevronsRight} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'


function Adminsidebar() {
    const {theme} = useContext(themeContext);
    const {departments} = useContext(departmentsContext)
    const [sidebar, setsidebar] = useState(true);
    const shorten = (text)=>{
      return text.length>20 ? text.slice(0,18)+ "..." : text
  }



    const togglesidebar=()=>{
        setsidebar(!sidebar)
    }


   const navigate = useNavigate();

  return (

    <div >
          <div className='relative'>

<div className={theme} >
    {!sidebar &&

        <div className="togglebuttonbody">
               <div className='sidebarclosed primary' onClick={togglesidebar}>
            <div className='dimmer'>
                    <BiChevronsRight/>

            </div>

        </div>

        </div>
     
    }
    <div className= {`sidebarbody borderradius-lg  primary ${theme==='default' ? 'darktext lightinset' :'lighttext'}   ${!sidebar ? ' sidebarnotactive' : 'sidebaractive'}` }>
<div className='sidebardesign'></div>
<img src={kyusilidlogo} alt=""  className='rounded'/>
{sidebar && <h4>Kyusilid</h4>}
{sidebar && <h6>Online Classroom Application</h6>   }
{sidebar && <div className='sidebarcontent'>
    <ul>
        <li className='sidebarmenu' onClick={()=>{navigate('/kyusilidAdmin')}}> <div className="highlight"></div> <MdSpaceDashboard />  Dashboard</li>
        {departments.map((item)=>(
             <li key={item.departmentId} className='sidebarmenu' onClick={()=>{navigate('department')}}> <div className="highlight"></div> <MdBrightness1 className='clear'/> {shorten(item.departmentname)}</li>
        ))}
        <li className='sidebarmenu' onClick={()=>{navigate('adminlog')}}> <div className="highlight"></div> <MdSpaceDashboard /> Admin log</li>

    </ul>              
</div>}
<div className='sidebarfooter'>
<BiChevronsLeft className='sidebarfootertoggle' onClick={togglesidebar}/>

</div>




    </div>
    </div>
</div>
        </div>


 
  
  )
}

export default Adminsidebar