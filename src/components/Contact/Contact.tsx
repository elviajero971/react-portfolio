import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.scss';
import ContactForm from './ContactForm/ContactForm';

const Contact: React.FC = () => {
    const { t } = useTranslation();

    // Fetching the projects list and converting it to an array

    const projects_list = Object.values(t('projects.projects_list', {returnObjects: true}))

    console.log('projects_list', projects_list)

    return (
        <section id="contact" className="contact">
            <p className="subtitle">{t('contact.text_1')}</p>
            <h1 className="title">{t('contact.text_2')}</h1>
            <ContactForm />
        </section>
    );
};

export default Contact;
