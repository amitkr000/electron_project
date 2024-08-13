# Electron Authentication & Calculator App

## Overview

This project is a desktop application built using Electron for the frontend and C++ for the backend. The app includes an authentication screen and a simple calculator. The authentication screen verifies user credentials against a backend server written in C++ and, upon successful login, transitions to a calculator interface.

<img src="https://github.com/user-attachments/assets/79e0dc70-cd87-4486-b37c-00f98ebc57d5" alt="description" width="900" height="700"/>

<img src="https://github.com/user-attachments/assets/cafe2858-343e-4bc9-beb8-cdb99c70eef4" alt="description" width="900" height="700"/>



## Technologies Used

- **Electron**: A framework for building cross-platform desktop apps with JavaScript, HTML, and CSS.
- **C++**: Used for backend authentication functionality.
- **Crow**: A C++ microframework used for the backend REST API server.
- **HTML/CSS/JavaScript**: Used for building the frontend user interfaces.

## Features

1. **Login Screen**:
   - Includes fields for selecting a user, entering a username and password, and agreeing to terms and conditions.
   - The login button sends a request to the C++ backend to validate user credentials.

2. **Calculator Screen**:
   - Accessible after successful login.
   - Simple calculator with basic arithmetic and trigonometric functions.
   - Features a user dashboard with the company logo, a calculator button, and user information.

## Installation

### Prerequisites

- **Node.js**: Install Node.js from [here](https://nodejs.org/).
- **npm**: Comes with Node.js, used to install dependencies.
- **g++** or **Visual Studio**: A C++ compiler to build the backend.
- **Boost Libraries**: Install Boost via `vcpkg`, `apt-get`, or download from [Boost's website](https://www.boost.org/).
- **Crow**: Download the Crow header or use `vcpkg` to install.

### Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/amitkr000/electron_project
   cd electron_project
   ```

2. **Install Frontend Dependencies**:
   ```bash
   npm install
   ```

3. **Build the Backend**:
   - If using `g++`:
     ```bash
     g++ -std=c++14 -I/path/to/boost -I/path/to/crow -o login backend/main.cpp -lboost_system
     ```
   - If using Visual Studio, ensure you have configured the include paths and library paths correctly for the crow and boost Libraries.

4. **Run the FrontEnd App**:
   ```bash
   npm start
   ```
4. **Run the BackEnd App**:
   ```bash
   ./login.exe
   ```

## Building the Project into a Desktop App

To package the application as a desktop app:

1. **Install Electron Packager**:
   ```bash
   npm install -g electron-packager
   ```

2. **Package the App**:
   ```bash
   electron-packager . electron-app --platform=win32 --arch=x64 --out=release-builds --overwrite
   ```
   This command will create a packaged version of the app in the `release-builds` directory.

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**: Create your fork of the repository.
2. **Create a Branch**: Create a new branch for your feature or bugfix.
   ```bash
   git checkout -b feature-name
   ```
3. **Make Changes**: Implement your feature or fix.
4. **Commit and Push**: Commit your changes and push them to your fork.
   ```bash
   git commit -m "Add new feature"
   git push origin feature-name
   ```
5. **Create a Pull Request**: Open a pull request against the main branch of the original repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize the content based on the specifics of your project and your preferred practices.
