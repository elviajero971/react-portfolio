import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.scss';
import { useTranslation } from 'react-i18next';
import FlashMessage from '../../FlashMessage/FlashMessage';

interface FormEvent extends React.FormEvent<HTMLFormElement> {
    target: HTMLFormElement & {
        user_name: HTMLInputElement;
        user_email: HTMLInputElement;
        message: HTMLTextAreaElement;
    };
}

const ContactForm: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState<string | null>(null);

    const { t } = useTranslation();

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID!,
                process.env.REACT_APP_TEMPLATE_ID!,
                e.target,
                process.env.REACT_APP_PUBLIC_KEY!
            )
            .then(
                (result) => {
                    setStateMessage('Message sent!');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000); // Hide message after 5 seconds
                },
                (error) => {
                    setStateMessage('Something went wrong, please try again later');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000); // Hide message after 5 seconds
                }
            );

        // Clears the form after sending the email
        e.target.reset();
    };

    return (
        <>
            <FlashMessage message={stateMessage} onClose={() => setStateMessage(null)} />
            <form onSubmit={sendEmail}>
                <div className="form-inputs">
                    <input type="text" name="user_name" placeholder={t('contact.form.name')} required/>
                    <input type="email" name="user_email" placeholder={t('contact.form.email')} required/>
                </div>
                <textarea name="message" placeholder={t('contact.form.message')} required/>
                <input className="btn" type="submit" value={t('contact.form.send')} disabled={isSubmitting}/>
                {stateMessage && <p>{stateMessage}</p>}
            </form>
        </>
    );
};

export default ContactForm;
