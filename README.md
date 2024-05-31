# Boxigo React Assignment

## Project Overview

Welcome to the Boxigo React Assignment! This project demonstrates a robust and efficient React application developed to consume and display data from the Boxigo API. The goal was to create a user-friendly interface that includes inventory details, user moves, and profile management, structured within a maintainable and scalable folder hierarchy.

## Folder Structure

The project adheres to a clean and modular folder structure as outlined below

- **components/**: This directory houses all the reusable React components.
  - **InventoryDetails/**: Displays detailed inventory information.
  - **MyMoves/**: Manages and displays user moves.
  - **Navbar/**: The top navigation bar component.
  - **Sidebar/**: The sidebar component for additional navigation.

- **page/**: This directory contains the main pages of the application.
  - **GetRequest/**: Handles GET requests and data presentation.
  - **Logout/**: Manages user logout functionality.
  - **MyProfile/**: Displays and manages user profile information.

- **styles/**: This directory includes styling files.
  - **InventoryStyle/**: Specific styles for the InventoryDetails component.
  - **responsiveStyle/**: Styles to ensure the application is responsive across devices.

## Setup and Installation

To set up and run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yogeshmasaistudent/Boxigo-Assigment.git
   cd Boxigo

2. **Install dependencies**:
   ```bash
   npm install

## Handling CORS Issues
The provided API had CORS issues which were resolved by setting up a basic server. This server acts as a proxy, fetching data from the Boxigo API and serving it to the React application without CORS errors.



     
   
