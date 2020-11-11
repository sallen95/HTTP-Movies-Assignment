import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initialFormValues = {
    title: '',
    director: '',
    metascore: ''
};

const UpdateForm = () => {
    const [formValues, setFormValues] = useState(initialFormValues);



    return (
        <div>
            <h2>Update Movie</h2>
            <form>
                <input 
                    type='text'
                    name='title'
                    placeholder='title'
                    value={formValues.title}
                />

                <input
                    type='text'
                    name='director'
                    placeholder='director'
                    value={formValues.director}
                />

                <input 
                    type='number'
                    name='metascore'
                    placeholder="metascore"
                    value={formValues.metascore}
                />

                <button>Update</button>
            </form>
        </div>
    )
};

export default UpdateForm;