import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import './ResumeDownloadModal.scss';

interface ResumeDownloadModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ResumeDownloadModal: React.FC<ResumeDownloadModalProps> = ({ isOpen, onClose }) => {
    const { t, i18n } = useTranslation();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Get the appropriate resume link based on the current language for en, fr and es using case statement

    let resumeLink = '';
    switch (i18n.language) {
        case 'fr':
            resumeLink = process.env.REACT_APP_RESUME_FR!;
            break;
        case 'es':
            resumeLink = process.env.REACT_APP_RESUME_ES!;
            break;
        default:
            resumeLink = process.env.REACT_APP_RESUME_EN!;
    }

    // Compose the full email content by replacing the {{link}} placeholder
    const emailSubject = t('resume.email_subject')
    const emailContent = t('resume.email_body', { link: resumeLink });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .send(
                process.env.REACT_APP_SERVICE_ID!,
                process.env.REACT_APP_TEMPLATE_ID_RESUME!,
                { user_email: email, email_subject: emailSubject, email_content: emailContent },
                process.env.REACT_APP_PUBLIC_KEY!
            )
            .then(
                () => {
                    setMessage(t('resume.sent_successfully'));
                    setIsSubmitting(false);
                    setEmail('');
                    setTimeout(() => {
                        setMessage(null);
                        onClose();
                    }, 5000);
                },
                () => {
                    setMessage(t('resume.error_message'));
                    setIsSubmitting(false);
                }
            );
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{t('resume.request')}</h2>
                <p>{t('resume.explanation')}</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="user_email"
                        placeholder={t('resume.enter_email')}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit" disabled={isSubmitting} className="btn">
                        {isSubmitting ? t('resume.sending') : t('resume.send')}
                    </button>
                </form>
                {message && <p className="message">{message}</p>}
                <button onClick={onClose} className="close-btn">&times;</button>
            </div>
        </div>
    );
};

export default ResumeDownloadModal;
