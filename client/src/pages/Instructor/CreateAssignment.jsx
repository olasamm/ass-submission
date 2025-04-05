import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const CreateAssignment = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        deadline: '',
        fileTypes: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add API call to create assignment
    };

    return (
        <div>
            <Navbar role="lecturer" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar role="lecturer" />
                    </div>
                    <div className="col-md-9">
                        <h1 className="mt-4">Create Assignment</h1>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="title"
                                placeholder="Assignment Title"
                                onChange={handleChange}
                                className="form-control my-2"
                            />
                            <textarea
                                name="description"
                                placeholder="Assignment Description"
                                onChange={handleChange}
                                className="form-control my-2"
                            />
                            <input
                                type="date"
                                name="deadline"
                                onChange={handleChange}
                                className="form-control my-2"
                            />
                            <input
                                type="text"
                                name="fileTypes"
                                placeholder="Allowed File Types (e.g., PDF, DOCX)"
                                onChange={handleChange}
                                className="form-control my-2"
                            />
                            <button type="submit" className="btn btn-primary mt-3">Create Assignment</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAssignment;
