# Multi Step Form

Live Link: <a href="https://deluxe-squirrel-651eb4.netlify.app/" alt="live-link">Live Link</a><br>
This is a Frontend Mentor challenge: <a href="https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ" alt="challenge-link">Multi-step form
</a><br>
This project is a frontend application for a multi-step form. It allows users to fill out personal information, select a subscription plan, choose add-ons, and view a summary of their selections.

## Sections

1. Personal Info: Basic form for entering personal information.
2. Select Plan: Choose a subscription plan (arcade, advanced, pro) and select between monthly or yearly billing.
3. AddOns: Select additional features such as online service, larger storage, or customizable profile. Users can choose multiple add-ons, with billing options based on the selected subscription plan and billing cycle.
4. Summary: Displays a summary of the selected plan, add-ons, and the corresponding costs.

## Technologies Used

- <b>React</b>: JavaScript library for building user interfaces.
- <b>Tailwind CSS</b>: Utility-first CSS framework for designing responsive web applications.
- <b>Redux</b>: State management library for managing global state, used for handling subscription plans, selected add-ons, and billing options.

## Features

- <b>Responsive Design</b>: Utilizes Tailwind CSS for creating a responsive layout that adapts to different screen sizes.
- <b>Global State Management</b>: Redux is employed to manage global state, ensuring consistent data handling across different sections of the form.
- <b>Dynamic Billing Options</b>: The billing options in section 3 adjust based on the selected subscription plan and billing cycle from section 2.
- <b>Interactive Summary</b>: The summary section dynamically updates to reflect the user's selections and calculates the total cost accordingly.

## Getting Started

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server with `npm start`.
5. Access the application in your web browser at http://localhost:3000.
