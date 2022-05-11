import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import Button from './Button';

import './TaskDetails.css';

const TaskDetails = () => {

    const params = useParams();
    const navigate = useNavigate();

    return ( 
        <>
            <div className="back-button-container">
                <Button onClick={() => navigate(-1)}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>
                    {params.taskTitle}
                </h2>
                
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Modi, magni eius porro architecto ratione dolore error exercitationem iure nostrum quibusdam. Sint fugiat et delectus totam. Iste eaque veniam sunt eos.
                </p>
            </div>
        </>
     );
}
 
export default TaskDetails;