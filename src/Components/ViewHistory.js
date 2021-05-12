import React from 'react';
import { useParams } from 'react-router';
import { useProp } from './Timer';

const ViewHistory = () => {
    const props =useProp()
   console.log(props)
    return (
        <div>
            <h1>history:{props.setTimeOn}</h1>
        </div>
    );
};

export default ViewHistory;