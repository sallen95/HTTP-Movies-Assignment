import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const initialFormValues = {
    title: '',
    director: '',
    metascore: ''
};

const UpdateForm = (props) => {
    const [formValues, setFormValues] = useState(initialFormValues);

    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        axios   
            .get(`http://localhost:5000/api/movies/${id}`)
            .then(res => {
                setFormValues(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const handleChange = e => {
        e.persist();
        if (e.target.name === 'metascore') {
            e.target.value = parseInt(e.target.value, 10);
        }

        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .put(`http://localhost:5000/api/movies/${id}`, formValues)
            .then(res => {
                props.setMovieList(res.data);
                history.push("/");
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div>
            <h2>Update Movie</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    name='title'
                    placeholder='title'
                    value={formValues.title}
                    onChange={handleChange}
                />

                <input
                    type='text'
                    name='director'
                    placeholder='director'
                    value={formValues.director}
                    onChange={handleChange}
                />

                <input 
                    type='number'
                    name='metascore'
                    placeholder="metascore"
                    value={formValues.metascore}
                    onChange={handleChange}
                />

                <button>Update</button>
            </form>
        </div>
    )
};

export default UpdateForm;