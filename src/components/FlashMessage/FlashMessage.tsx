import React, { useEffect } from 'react';
import './FlashMessage.scss';

interface FlashMessageProps {
    message: string | null;
    onClose: () => void;
}

const FlashMessage: React.FC<FlashMessageProps> = ({ message, onClose }) => {
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                onClose();
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [message, onClose]);

    if (!message) return null;

    return (
        <div className="flash-message">
            <p>{message}</p>
        </div>
    );
};

export default FlashMessage;
