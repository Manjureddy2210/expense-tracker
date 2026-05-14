I developed a modern Expense Tracker Dashboard using React and Vite that enables users to add, categorize, manage, and delete expenses dynamically. The application features real-time currency conversion, category-wise spending analytics, responsive dashboard cards, and local storage integration to preserve user data even after refreshing the browser.

For the currency conversion feature, I integrated the Exchange Rate API from open.er-api.com to fetch live exchange rates based on the selected currency. The application currently supports multiple currencies such as INR, EUR, GBP, and JPY, providing users with real-time conversion of their total expenses.

One of the key challenges during development was handling CORS-related issues with the initial API provider. To solve this, I researched and switched to a more frontend-compatible API while also implementing proper loading and error handling states to ensure a smooth and stable user experience.

The project follows a clean component-based architecture using React Hooks for state management and Tailwind CSS for styling. I also added Framer Motion animations and responsive design techniques to create a modern, user-friendly interface that works seamlessly across desktop and mobile devices.

Given more time, I would further enhance the application by adding advanced analytics charts, expense filtering and search functionality, dark mode support, and user authentication for personalized expense management.
