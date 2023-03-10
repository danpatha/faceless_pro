import EmployerJobList from "../EmployerJobList/EmployerJobList";
import EmployerForm from "../EmployerForm/EmployerForm";
import { useSelector } from 'react-redux';


function EmployerLandingPage() {
    const user = useSelector((store) => store.user);
    // EmployerProfilePage is a form for Employer to update their profile info.
    // When an Employer logs in they should not see an edit form. 
    // They should only be able to view info. 
    // There should be an edit button that takes employers to EmployerProfilePage to edit info.
    return (
        <>
            {user.user_info != null ? <EmployerJobList /> : <EmployerForm />}
        </>
    );
}

export default EmployerLandingPage