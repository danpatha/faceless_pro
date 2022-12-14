import { useParams, useHistory } from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';




function EmployerJobDetails(){
    const params = useParams();
    const dispatch = useDispatch();
    const job = useSelector(store=>store.currentJob);
    console.log('current job details: ', job);

    //FETCH CURRENT JOB WITH PARAMS ID
    useEffect(()=>{
        dispatch({
            type: 'FETCH_CURRENT_JOB_POST',
            payload: `${params.id}`
        })
        console.log('params', params.id);

    })

    return<>
    
    <h1>Details</h1>
    
    
</>}


export default EmployerJobDetails;