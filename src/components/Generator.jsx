import {useState} from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES,WORKOUTS } from '../utils/soldiers';
import Button from './Button';

//this is headr fun at top not main comp fun
function Header(props){
    const {index, title, description} = props;

    return(
        <div className='flex flex-col gap-4 justify-center items-center'>
            <div className='flex gap-4 justify-center items-center'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    )
}

function Generator(props) {
    const {poison ,setPoison, muscles, setMuscles, goal, setGoal, updateWorkout} = props;

    const [isShowModal,setIsShowModal] = useState(false);
    

    function toggleMode(isShowModal){
        setIsShowModal((prev) => !prev)
    }

    function updateMuscles(muscleGroup){
        if(muscles.includes(muscleGroup)){
            setMuscles(muscles.filter(value => value !== muscleGroup))
            return
        }

        if(muscles.length > 2){
            return
        }

        if(poison !== 'individual'){
            setMuscles([muscleGroup])  //strgld 1 hr for forgot this []
            setIsShowModal(false)
            return
        }

        setMuscles([...muscles, muscleGroup])
        if(muscles.length === 2){
            setIsShowModal(false)
        }
        //console.log(muscleGroup)
        
    }
//console.log(Object.keys(WORKOUTS[poison]));
//console.log(muscles)
    return (
       <SectionWrapper id={'generate'} header={ "Generate your workout"} title={["It's","HUGE", "o'clock"]} >

         <Header 
           index={'01'} 
           title={'Pick your poison'}
           description={"Select the workout you wish to endure."}
          />
          {/* buttons */}
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
            {Object.keys(WORKOUTS).map((type, typeIndex) => {
              return(
                  <button 
                     onClick={() => {
                        setMuscles([])
                        setPoison(type)
                     }}
                     className={'bg-slate-950 py-3 border px-4 hover:border-blue-600 duration-200 rounded-lg ' + (type === poison? 'border-blue-600' : 'border-blue-200' )} key={typeIndex}>
                    <p className='capitalize'>{type.replaceAll('_'," ")}</p>
                </button>
            )
            })}
        </div>

        <Header 
           index={'02'} 
           title={'Lock on targets'}
           description={"Select the muscles judged for annihilation."}
        />
        <div className='bg-slate-950 py-3 border border-solid border-blue-400 rounded-lg flex flex-col'>
                <button onClick={toggleMode} className='relative p-3 flex items-center justify-center'>
                    <p className='capitalize'>
                        {muscles.length == 0 ? 'Select muscle groups' : muscles.join(' ')}
                    </p>
                    <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
                </button> 

            {isShowModal && (
                <div className='flex flex-col px-3 pb-3'>
                    {/* always enclose the cond render in {} bec its js and updates regulrly not like html */}
                    {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison]))
                    .map((muscleGroup,index) =>
                        (
                            // enclose all cond rendr and conditions in () important
                            <button key={index} 
                               onClick={() =>{ updateMuscles(muscleGroup)}}
                               className={'duration-200 hover:text-blue-500 ' + (muscles.includes(muscleGroup) ? 'text-blue-500' : '')} > 
                                <p className='cursor-pointer capitalize'>{muscleGroup}</p>
                            </button>
                        )
                    )}
                </div>
            )
               
            }
        </div>

        {/* 3rd new section of juggernaut */}
        <Header 
           index={'03'} 
           title={'Become Juggernaut'}
           description={"Select your ultimate objective."}
        />
         <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
              return(
                  <button 
                     onClick={() => {
                        setGoal(scheme)
                     }}
                     className={'bg-slate-950 px-4 py-3 border hover:border-blue-600 duration-200 rounded-lg ' + (scheme === goal ? 'border-blue-600' : 'border-blue-200' )} key={schemeIndex}>
                    <p className='capitalize '>{scheme.replaceAll('_'," ")}</p>
                </button>
            )
            })}
          </div>
          <Button func={updateWorkout} text={'Formulate'}/>

       </SectionWrapper>
  )
}

export default Generator