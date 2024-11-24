import Carousel from 'react-bootstrap/Carousel';
import  Dropdown  from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "../../../../assets/homePage/strength/workoutplan.jpeg"
import { useState } from 'react';

const workoutPlans = [
  { id: 1,
    title: "Push, Pull, and Leg",
    description: "There are ways around not having a gym membership. Essenetial moves are push, pull, and leg; some basic equipment will get you there.",
    image: Image,
    workouts: [
      { name: "Push-Ups", sets: "4-6", reps: "To Failure" }, 
      { name: "Inverted Rows", sets: "4-6", reps: "To Failure" },
      { name: "Reverse Lunges or Step-ups", sets: "4-6", reps: "6-8" }
    ],
    },
  {
    id: 2,
    title: "Dumbbell Push, Pull, and Legs",
    description: "Dumbbell only full body circuit",
    image: Image,
    workouts: [
      { name: "Flat-Bench Dumbbell Press", sets: "4-6", reps: "10-12" },
      { name: "One-Arm Dumbbell Row", sets: "4-6", reps: "10-12" },
      { name: "Dumbbell Squat(or Lunge)", sets: "4-6", reps: "10-12" },
    ],
  },
]
function WorkoutPlan() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleCarouselClick = () => {
    setShowDropdown(!showDropdown); // Toggle dropdown visibility
  };

  return(
    <>
      <Carousel onClick={handleCarouselClick}>
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

      {showDropdown && (
        <Dropdown show>
          <Dropdown.Menu className="workout_dropdown">
            {workoutPlans.map((plan, index) => (
              <Dropdown.Item key={index}>
                <strong>{plan.title}</strong>
                <ul>
                  {plan.workouts.map((workout, i) => (
                    <li key={i}>
                      {workout.name} {workout.sets} sets {workout.reps} reps
                    </li>
                  ))}
                </ul>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      )}
    </>
  )
}

export default WorkoutPlan;