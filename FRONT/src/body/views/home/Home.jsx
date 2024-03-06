import  React                           from "react"
import { useEffect , useState }         from "react"
import { Link }                         from 'react-router-dom'
import { useDispatch, useSelector }     from 'react-redux';
import { getAllProjects, postProject }  from '../../../redux/actions'

function Home(){
    const dispatch = useDispatch()
    
    useEffect( () => {
        dispatch()
    } , [] );

    const [ sampleState , setSampleState ] = useState()

    const sambleSelectionState = useSelector( state => state.allLocations )

    const onPressHandler = (e) => {

        // dispatch(getAllProjects(e.target.value))
        // const sambleSelectionState = useSelector( state => state.allLocations )
        // setSampleState(sambleSelectionState)

        console.log(e.target.value);
    }

    return (
        <div>
          <Button
            onPress={onPressHandler}
            title="ARCHITECTURE"
            color="#841584"
            value="arch"
          />
          <Button
            onPress={onPressHandler}
            title="CODING"
            color="#841584"
            value="code"
          />
          <Button
            onPress={onPressHandler}
            title="SOCIAL"
            color="#841584"
            value="soci"
          />
        </div>
      );


}

export default Home;