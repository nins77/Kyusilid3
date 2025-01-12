import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userInfoContext , sourceMaterialContext} from '../Globalcontext'
import {AiFillFile} from 'react-icons/ai'
import {FiLink} from 'react-icons/fi'
import ArrowSelector from '../1general/formcomponents/ArrowSelector'

function Createnew() {
  const {userinfo} = useContext(userInfoContext)
  const {sourcematerial} = useContext(sourceMaterialContext)
  const navigate = useNavigate()

  useEffect(()=>{
    if(userinfo.usertype!== 'prof'){
      navigate('/');
    }
 
  },[])

  
  const [postscheduletype, setpostscheduletype] = useState('fixed');
  var tzoffset = (new Date()).getTimezoneOffset() * 60000;
  const [postdate, setpostdate] = useState(new Date(Date.now() -tzoffset).toISOString().slice(0, -8));
  const [currentdate  , setcurrentdate] = useState(new Date(Date.now() -tzoffset).toISOString().slice(0, -8));


  const [posttitle, setposttitle] = useState(sourcematerial!==undefined ? sourcematerial.activityname : '');
  const [category, setcategory] = useState(sourcematerial !== undefined ? sourcematerial.category : '')
  const [module, setmodulename] = useState(sourcematerial !== undefined ? sourcematerial.topicname :'')
  const [activitytype, setactivitytype] = useState(sourcematerial !==undefined ? sourcematerial.activitytype : "Material");
  const [duedate, setduedate] = useState();
  const [posttimer, setposttimer] = useState(0);
  const [duescheduletype, setduescheduletype] = useState('fixed');
  const [duetimer, setduetimer] = useState(0);
  const [availability, setavailability] = useState();



  const Postoptions = [ {
    'text': "1 hr before the start of class",
    'value' : -60
},
{
    'text': "30 mins before the start of class",
    'value' : -30
},
{
    'text': "10 mins before the start of class",
    'value' : -10
},
{
    'text': "5 mins before the start of class",
    'value' : -5
},
{
    'text': "at the start of class",
    'value' : 0
},
{
    'text': "5 mins after the start of class",
    'value' : 5
},
{
    'text': "10 mins after the start of class",
    'value' : 10
},
{
    'text': "30 mins after the start of class",
    'value' : 30
},
{
    'text': "1 hr after the start of class",
    'value' :60
} ]
  

const Dueoptions =[ 
{
  'text' : 'no due date',
  'value' : 999
},
{
  'text': "30 mins after posted",
  'value' : 30
},
{
  'text': "45 mins after posted",
  'value' : 45
},
{
  'text': "1 hour after posted",
  'value' : 60
},
{
  'text': "2 hours after posted",
  'value' : 120
},
{
  'text': "3 hours after posted",
  'value' : 180
},
{
  'text': 'today',
  'value' : 999
},
{
  'text' : 'before the next discussion',
  'value' : 999
}
 ]





  return (
    <div>
                <div className='row margintop12'>
                        <div className="col-lg-7 createactivitytitle">
                          <div>
                                   
                          <label htmlFor="">Title</label> <br /><input type="text"  disabled={sourcematerial!==undefined} className='primaryborder' placeholder='title' defaultValue={posttitle} /> <br />
                          <br />
                          <label htmlFor="">Description</label> <br /> <textarea name="" id="" cols="30" rows="6" className='primaryborder' placeholder='description'></textarea><br />
                          <br />
                          


                          {!(activitytype==='Questionnaire' || activitytype==='Attendance') &&
                              (  (sourcematerial !== undefined )?
                             
                              
                                <div className='uploadedfile flex primary borderradius-md'>
                                    <AiFillFile/>
                                    <h5>sample uploaded file</h5>

                                </div>
                               :
                                <>
                               <label htmlFor="">Upload</label>
                                <div className="flex">
                                <div className='primary uploadpanel borderradius-md'>
                              
                                  <h4>File</h4>
                                </div>                    
                                </div> 
                                
                               </> )                               
                        }
                         
                             {activitytype==='Questionnaire' &&
                             <label htmlFor="" className='primary'>Questionaire( pag questionaire ung type)</label>}
                          </div>                  
                        </div>

                        <div className="col-lg-5 createactivitytitle">
                          <div>
                            <div>
                              <label htmlFor="activitytype">Activity type</label> <br />
                              <select name="activitytype" disabled={sourcematerial!==undefined} className='primary primaryborder' id="activitytype" onChange={(e)=>{setactivitytype(e.target.value)}} defaultValue={activitytype} >
                
                               <option value="Material" >Material</option>
                               <option value="Assignment" >Assignment</option>
                               <option value="Activity">Activity</option>
                               <option value="Questionnaire">Questionnaire</option>
                               <option value="Attendance">Attendance</option>
                              </select>
                            </div>
                            <br />

                            <div>
                              <label htmlFor="category">Category</label> <br />
                              <select name="category" id="category" className='primary primaryborder' disabled={sourcematerial!==undefined} defaultValue={category}>
                                <option value="Lab">Laboratory</option>
                                <option value="Lecture">Lecture</option>
                              </select>
                            </div>
                            <br />

                            <div>
                              <label htmlFor="module">Module</label><br />
                              <select name="module" id="module" className='primary primaryborder' disabled={sourcematerial!== undefined } defaultValue={''}>
                                <option value="Week1">Week 1</option>
                                <option value="Week2">Week 2</option>
                                <option value="Week3">Week 3</option>
                              </select>
                            </div>
               
                            {activitytype!== 'Attendance' &&
                            <>
                            <br />
                             
                                 <label htmlFor="schedule">Schedule</label> <br />
                                 <select name="schedule" id="schedule" className='primaryborder' onChange={(e)=>{setpostscheduletype(e.target.value)}}>
                                    <option value="fixed">fixed</option>
                                    <option value="timed">timed</option>           
                                  </select>                        
                            
                          
                            <div>
                            {postscheduletype==='fixed' &&
                             <input type="datetime-local" name="" className='primaryborder' id="postdate" defaultValue={postdate}  min={currentdate} /> 
                       
                                                 
                            }
                            {postscheduletype==='timed' &&                           
                                <ArrowSelector options={Postoptions} startingvalue={4} />
                            }
                  
                            </div>
                            </>
                                                  
                            }
            
                            
                            {(activitytype==='Assignment' || activitytype ==='Activity' || activitytype==='Questionnaire') &&
                              <>
                              <br />
                              <div>
                                <input type="checkbox" name="" id="allowedit" /> <label htmlFor="allowedit">Allow Students to edit once submitted</label> <br />
                                <input type="checkbox" name='' id='allowlate'/> <label htmlFor="allowlate">Allow late submissions</label> <br />
                               <br />
                               <label htmlFor="limitavailability">Limit availability</label>  
                                <select name="" id="" className=' primaryborder'>
                                    <option value="none">All Selected</option>
                                    <option value="present">Only present</option>
                                </select>
                                <br />

                              </div>
                 

                      
                        
                             <br />
                             <label htmlFor="">Due Date</label> 
                             <br />
                               <ArrowSelector  options={Dueoptions} startingvalue={0}/>
                            

                              </>

                            
                            
                            }

                              
                         </div>
                        </div>

                </div> 
                <br />
                <hr />
                <div className="createactivityfooter">
                  
                   
                <button className='primary createactivityconfirm'>Confirm</button>
                

                </div>
              
             
    
    </div>
  )
}

export default Createnew