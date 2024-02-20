# Lead Manager Project

## Description

This project is a Lead Manager for sales, designed to help manage and track sales leads. It was created as a learning project, following a tutorial by Traversy Media on YouTube. The project was never fully deployed, but it serves as a demonstration of my skills in building web applications. It heavily utilizes Redux for state management and npm for package management.

## Features

- Lead management: Add, update, and delete leads.
- Sales tracking: Track the progress of each lead through the sales pipeline.
- User authentication: Secure login and registration system.
- Redux: Extensive use of Redux for state management across the application.

## Technologies Used

- Django: Backend framework for handling server-side logic and database interactions.
- React: Frontend library for building the user interface.
- Redux: State management library used in conjunction with React.
- Django REST Framework: For creating a RESTful API to communicate between the frontend and backend.
- npm: Package manager for managing JavaScript packages.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
git clone https://github.com/yourusername/lead-manager-project.git
2. Navigate to the project directory:
cd lead-manager-project
3. Install backend dependencies:
pip install -r requirements.txt
4. Migrate the database:
python manage.py migrate
5. Install frontend dependencies using npm:
cd frontend
npm install
6. Build the frontend:
npm run build
7. Run the server:
python manage.py runserver

## Usage

Once the server is running, you can access the Lead Manager application at `http://localhost:8000`.

## Contributing

This project is not currently seeking contributions, as it is a personal learning project.

## License

This project is open source and available under the [MIT License](LICENSE).
