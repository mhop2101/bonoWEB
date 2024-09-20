import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';

function MyCustomTimer() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    // Convert seconds into minutes and seconds format
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        } else if (!isRunning && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, seconds]);

    // Start Timer
    const startTimer = () => {
        setIsRunning(true);
    };

    // Stop Timer
    const stopTimer = () => {
        setIsRunning(false);
    };

    // Reset Timer
    const resetTimer = () => {
        setIsRunning(false);
        setSeconds(0);
    };

    return (
        <Container className="mt-4 text-center">
            <h3>Timer</h3>
            <h4>
                {minutes} mins {remainingSeconds} secs
            </h4>

            <div className="mt-3">
                {/* Start Button (Green) */}
                <Button variant="success" onClick={startTimer} className="me-2">
                    Start
                </Button>

                {/* Stop Button (Red) */}
                <Button variant="danger" onClick={stopTimer} className="me-2">
                    Stop
                </Button>

                {/* Reset Button (Yellow) */}
                <Button variant="warning" onClick={resetTimer}>
                    Reset
                </Button>
            </div>
        </Container>
    );
}

export default MyCustomTimer;