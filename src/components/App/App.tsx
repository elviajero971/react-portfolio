import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SectionScrollWrapper from '../SectionScrollWrapper/SectionScrollWrapper'; // Import the wrapper
import './App.scss';
const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* Define routes with language parameter and specific section paths */}
                <Route path="/:lang/landingPage" element={<SectionScrollWrapper sectionId="landingPage" />} />
                <Route path="/:lang/about" element={<SectionScrollWrapper sectionId="about" />} />
                <Route path="/:lang/skills" element={<SectionScrollWrapper sectionId="skills" />} />
                <Route path="/:lang/experiences" element={<SectionScrollWrapper sectionId="experiences" />} />
                <Route path="/:lang/projects" element={<SectionScrollWrapper sectionId="projects" />} />
                <Route path="/:lang/educations" element={<SectionScrollWrapper sectionId="educations" />} />
                <Route path="/:lang/contact" element={<SectionScrollWrapper sectionId="contact" />} />

                {/* Redirect to default language and section if no language is specified */}
                <Route path="*" element={<Navigate to="/en/landingPage" replace />} />
            </Routes>
        </Router>
    );
};

export default App;
