
# My Portfolio - React TypeScript Application

## 🚀 Introduction

This repository contains the code for my **personal portfolio** built with **React** and **TypeScript**. The goal of this project is to showcase my skills, projects, and experience as a front-end developer. It is designed to be responsive, user-friendly, and easily maintainable. 

## 🎯 Features
- **Single Page Application (SPA)** using React.
- Built with **TypeScript** for type safety and better development experience.
- Modular and scalable component architecture.
- **Responsive design** that adapts to all screen sizes (mobile, tablet, desktop).
- **Reusable components** and styles using sass and CSS modules.

## 🗂️ Project Structure

Here's an overview of the folder structure of this project:

```bash
.
├── .github                                     # GitHub Actions workflows
│   └── workflows                               # CI/CD workflows
│       └── main.yml                            # Main workflow file
├── public                                      # Static assets (HTML, images, etc.)
│   └── index.html                              # Entry point for the application
├── src                                         # Main application source code
│   ├── components                              # List of React components
│   │   ├── About                               
│   │   ├── App                                 
│   │   ├── Contact                             
│   │   ├── Educations                          
│   │   ├── Experiences                         
│   │   ├── FlashMessage                        
│   │   ├── Footer                              
│   │   ├── LandingPage                         
│   │   ├── NavBar                              
│   │   ├── Projects                            
│   │   │   └── Project                         
│   │   ├── Shared
│   │   │   └── LanguageButton                              
│   │   └── Skills                              
│   │       └── Skill                           
│   ├── scss                                    # Styles for the application
│   │   ├── _animationButtonNavBar.scss         # Animation for button in navbar
│   │   ├── _layout.scss                        # Layout styles
│   │   └── _theme.scss                         # Theme variables
│   ├── translations                            # Language files
│   │   ├── en.json                             # English language translations
│   │   └── fr.json                             # French language translations
│   ├── i18.ts                                  # i18n configuration
│   └── index.tsx                               # Application entry point
├── package.json                                # Project dependencies and scripts
├── tsconfig.json                               # TypeScript configuration
├── README.md                                   # This file
└── .gitignore                                  # Ignored files in Git
```

### Key Folders:
- **`components/`**: Contains all reusable UI components like buttons, cards, modals, etc.
- **`scss/`**: Contains utility functions and styles for the application.
- **`translations/`**: Contains language files for internationalization (i18n) of the application.

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**
- **npm** or **yarn**

### Installation

Clone this repository and install the dependencies:

```bash
# Clone the repository
git clone https://github.com/elviajero971/react-portfolio.git

# Navigate to the project directory
cd portfolio

# Install dependencies using npm or yarn
npm install
# OR
yarn install
```

### Running the Application

After the installation is complete, start the development server:

```bash
npm start
# OR
yarn start
```

This will start the application and you can view it in your browser at `http://localhost:3000`.

### Building for Production

To create a production build of the application:

```bash
npm run build
# OR
yarn build
```

This command runs the test suite defined in the repository, ensuring all components and functionality work as expected.

## 🧩 Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript providing static type definitions.
- **CSS Modules**: For styling components.

## 🤝 Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. All contributions, feedback, and suggestions are welcome!

## 🌐 Live Demo

You can view the live version of this portfolio at: [nomadev.online](https://nomadev.online)

## 📬 Contact

- **Email**: [lucas.illiano@hotmail.com](mailto:your-email@example.com)
- **LinkedIn**: [https://www.linkedin.com/in/lucas-illiano/](https://linkedin.com/in/your-linkedin)
- **GitHub**: [https://github.com/elviajero971/](https://github.com/your-username)

Feel free to reach out if you have any questions or want to collaborate on a project!
