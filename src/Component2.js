import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function Formulario() {
    const [userData, setUserData] = useState({
        username: '',
        fullname: '',
        age: '',
    });

    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmittedData(userData);
        alert(`Username: ${userData.username}\nFullname: ${userData.fullname}\nAge: ${userData.age}`);
    };
    return (
        <Container className="mt-4">
            <h3>Formulario</h3>
            <Form onSubmit={handleSubmit}>
                {/* Username Input */}
                <Form.Group controlId="formUsername" className="mt-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                        value={userData.username}
                        onChange={handleChange}
                        placeholder="Enter username"
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formFullname" className="mt-3">
                    <Form.Label>Fullname</Form.Label>
                    <Form.Control
                        type="text"
                        name="fullname"
                        value={userData.fullname}
                        onChange={handleChange}
                        placeholder="Enter fullname"
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formAge" className="mt-3">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                        type="number"
                        name="age"
                        value={userData.age}
                        onChange={handleChange}
                        placeholder="Enter age"
                        required
                    />
                </Form.Group>

                {/* Submit Button */}
                <Button variant="primary" type="submit" className="mt-3">
                    Submit
                </Button>
            </Form>

            {/* Display Submitted Data */}
            {submittedData && (
                <div className="mt-4">
                    <h4>Submitted Information:</h4>
                    <ul>
                        <li>Username: {submittedData.username}</li>
                        <li>Fullname: {submittedData.fullname}</li>
                        <li>Age: {submittedData.age}</li>
                    </ul>
                </div>
            )}
        </Container>
    )
}

export default Formulario;