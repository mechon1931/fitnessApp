import Card from 'react-bootstrap/Card';
import exerciseGIF from '../../../../assets/homePage/strength/Exercise.jpeg';
import workoutPlan from '../../../../assets/homePage/strength/workoutplan.jpeg';
import "../cards/cardExercise.css";
import { Link } from "react-router-dom";

function ExerciseCard() {
    return(
        <>
            <Card className='card_container'>
                <Card.Img className='card_img' variant='top' src={exerciseGIF} />
                <Card.Body>
                    <Card.Title className='card_title'>Workout Plan</Card.Title>
                    <Card.Text className='card_text'>This is the text Awesome</Card.Text>
                    <Link to="/workoutplan" className='btn_primary' variant='primary' >This is the btn</Link>                    
                </Card.Body>
            </Card>

            <Card className='card_container'>
                <Card.Img className='card_img' variant='top' src={workoutPlan} />
                <Card.Body>
                    <Card.Title className='card_title'>Exercises</Card.Title>
                    <Card.Text className='card_text'>This is the text Awesome</Card.Text>
                    <Link to="/workoutplan" className='btn_primary' variant='primary' >This is the btn</Link>   
                </Card.Body>
            </Card>             
        </>

    )
}

export default ExerciseCard;