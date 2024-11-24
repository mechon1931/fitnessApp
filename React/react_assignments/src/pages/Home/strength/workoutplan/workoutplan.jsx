import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "../../../../assets/homePage/strength/workoutplan.jpeg"

const workoutPlans = [
  { id: 1,
    title: "Push Day",
    description: "Focuses on chest, shoulders, and triceps.",
    image: Image,
    },
  {
    id: 2,
    title: "Pull Day",
    description: "Targets back, biceps, and rear delts.",
    image: Image,
  },
  {
    id: 3, 
    title: "Leg Day",
    description: "Builds strength in quads, hamstrings, and glutes.",
    image: Image,
  },
]
function WorkoutPlan() {
  return(
    <>
      <Carousel>
        {workoutPlans.map((plan) => (
          <Carousel.Item key={plan.id}>
             <img 
                className="w-100"
                src={plan.image}
                alt={plan.title}
             />
             <Carousel.Caption>
              <h3>{plan.title}</h3>
              <p>{plan.description}</p>
             </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  )
}

export default WorkoutPlan;