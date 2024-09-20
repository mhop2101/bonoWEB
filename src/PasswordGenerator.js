import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

function PasswordGenerator() {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(12);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeSpecial, setIncludeSpecial] = useState(true);

    // Function to generate the password
    const generatePassword = () => {
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const specialChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
        let allChars = '';

        if (includeUppercase) {
            allChars += uppercaseChars;
        }
        if (includeLowercase) {
            allChars += lowercaseChars;
        }
        if (includeSpecial) {
            allChars += specialChars;
        }

        if (allChars.length === 0) {
            setPassword(''); // If no checkbox is selected
            return;
        }

        let newPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            newPassword += allChars[randomIndex];
        }

        setPassword(newPassword);
    };

    // Function to copy the password to clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        alert('Password copied to clipboard');
    };

    return (
        <Container className="mt-4">
            <h3>Password Generator</h3>

            {/* Password Display and Copy Button */}
            <Row className="align-items-center mt-3">
                <Col>
                    <Form.Control type="text" value={password} readOnly />
                </Col>
                <Col xs="auto">
                    <Button onClick={copyToClipboard} variant="secondary">
                        Copy
                    </Button>
                </Col>
            </Row>

            {/* Slider for password length */}
            <Form.Group controlId="formPasswordLength" className="mt-3">
                <Form.Label>Password Length: {length}</Form.Label>
                <Form.Control
                    type="range"
                    min="4"
                    max="30"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                />
            </Form.Group>

            {/* Checkboxes for password options */}
            <Form.Group controlId="formPasswordOptions" className="mt-3">
                <Form.Check
                    type="checkbox"
                    label="Include Uppercase"
                    checked={includeUppercase}
                    onChange={(e) => setIncludeUppercase(e.target.checked)}
                />
                <Form.Check
                    type="checkbox"
                    label="Include Lowercase"
                    checked={includeLowercase}
                    onChange={(e) => setIncludeLowercase(e.target.checked)}
                />
                <Form.Check
                    type="checkbox"
                    label="Include Special Characters"
                    checked={includeSpecial}
                    onChange={(e) => setIncludeSpecial(e.target.checked)}
                />
            </Form.Group>

            {/* Generate Password Button */}
            <Button className="mt-3" variant="primary" onClick={generatePassword}>
                Generate Password
            </Button>
        </Container>
    );
}

export default PasswordGenerator;
