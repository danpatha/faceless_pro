import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';

function Education() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState([
    { School: '', Major: '' , Dates:'',Notes: ''},
  ])

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }

  const submit = (e) => {
    e.preventDefault();
    console.log('Formfield info is here', formFields);

    formFields.forEach((form) => {
      dispatch({
        type: 'ADD_EDUCATION',
        payload: {
          School: form.School,
          Major: form.Major,
          Dates: form.Dates,
          Notes: form.Notes,
        },
      });
      history.push('/experience');
    });
  };

  const addFields = () => {
    let object = {
      School: '',
      Major: '',
      Dates: '',
      Notes: ''
    }

    setFormFields([...formFields, object])
  }

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }

  return (
    <div className="Education">
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <FormControl>
                <InputLabel htmlFor="school-name">School Name</InputLabel>
                <Input
id="school-name"
name='School'
onChange={event => handleFormChange(event, index)}
value={form.School}
/>
</FormControl>
<FormControl>
<InputLabel htmlFor="major">Major</InputLabel>
<Input
id="major"
name='Major'
onChange={event => handleFormChange(event, index)}
value={form.Major}
/>
</FormControl>
<FormControl>
<InputLabel htmlFor="dates">Dates Attended</InputLabel>
<Input
id="dates"
name='Dates'
onChange={event => handleFormChange(event, index)}
value={form.Dates}
/>
</FormControl>
<FormControl>
<InputLabel htmlFor="notes">Notes</InputLabel>
<Input
id="notes"
name='Notes'
onChange={event => handleFormChange(event, index)}
value={form.Notes}
/>
</FormControl>
<Button onClick={() => removeFields(index)}>Remove</Button>
</div>
)
})}
</form>
<Button onClick={addFields}>Add More..</Button>
<br />
<Button variant="contained" color="primary" onClick={submit}>Submit</Button>
</div>
);
}

export default Education;




