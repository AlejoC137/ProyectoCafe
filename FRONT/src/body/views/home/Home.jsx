import React from "react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjects, postProject } from '../../../redux/actions';

function Home() {
    const dispatch = useDispatch();
    
    useEffect( () => {
        // dispatch()
    } , [] );

    const [selectedProjects, setSelectedProjects] = useState([]);

    const Projects = useSelector(state => state.allProjects);

    const onPressHandler = (value) => {
        // Handle press action
     
        setSelectedProjects( dispatch( getAllProjects(value) ) )  
        console.log(Projects);
      };
      
    

    return (
    <div>
      <div>
            <button onClick={() => onPressHandler('arch')}>ARCHITECTURE</button>
            <button onClick={() => onPressHandler('code')}>CODING</button>
            <button onClick={() => onPressHandler('soci')}>SOCIAL</button>
      </div>
      <div>


      </div>
    </div>
    );
}

export default Home;
