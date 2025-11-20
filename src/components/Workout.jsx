import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard';

function Workout(props) {
  const {workout} = props;
  return (
      <SectionWrapper id={'workout'} header={ "Welcome to"} title={["The","DANGER", "zone"]} >
        <div className=' text-slate-400 flex flex-col gap-y-0.5 text-xs sm:text-sm text-justify mx-auto max-w-[700px] px-4 w-fit'>
          <p className=''>
            *<b className='font-semibold'>Note</b> - <span className='text-blue-400 underline'>reps</span> is the number of repetitions, <span className='text-blue-400 underline'>rest</span> is specified in seconds, and <span className='text-blue-400 underline'>tempo</span> is the number of seconds for each movement phase in the order of eccentric - isometric - concentric (or down - pause - up).</p>
            <br />
            <p className='py-2'>For <span className='text-blue-600'>weight selection</span>, choose a weight that allows you to complete the repetitions with minimal sacrifice to form.</p>
            <br />
            <p className='font-bold text-2xl text-lime-600'>💪Happy lifting!<i class="fa-solid fa-dumbbell text-white"></i></p>
          
        </div>
          <div className='flex flex-col gap-4 '>
            {workout.map((exercise, index) => {
               //console.log(exercise)
                return(
                  <ExerciseCard exercise={exercise} 
                  index={index} key={index} 
                  />
                )
            })
            }
          </div>
        </SectionWrapper>
  )
}

export default Workout