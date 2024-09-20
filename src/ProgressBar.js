import React, { useState } from 'react';
import { ProgressBar, Container, Form } from 'react-bootstrap';

function ProgressBarWithInput() {
    const [progress, setProgress] = useState(0);

    // Handle input change
    const handleInputChange = (event) => {
        const value = event.target.value;
        // Ensure value is between 0 and 100
        const progressValue = Math.max(0, Math.min(100, Number(value)));
        setProgress(progressValue);
    };

    return (
        <Container className="mt-4">
            {/* Progress Bar */}
            <ProgressBar now={progress} label={`${progress}%`} />

            {/* Input Box */}
            <Form.Group controlId="formProgressInput" className="mt-3">
                <Form.Label>Set Progress</Form.Label>
                <Form.Control

                    value={progress}
                    onChange={handleInputChange}
                    placeholder="Enter a number between 0 and 100"
                />
            </Form.Group>
        </Container>
    );
}

export default ProgressBarWithInput;
