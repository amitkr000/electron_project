#include "crow.h"
#include <string>

// Hard-coded credentials
const std::string valid_username = "user";
const std::string valid_password = "password";

// Function to validate user credentials
bool validateUser(const std::string& username, const std::string& password) {
    return username == valid_username && password == valid_password;
}

int main() {
    crow::SimpleApp app;

    CROW_ROUTE(app, "/login").methods(crow::HTTPMethod::POST)
        ([](const crow::request& req) {
        auto body = crow::json::load(req.body);
        if (!body) {
            return crow::response(400, "Invalid JSON");
            std::cout << 400 << "Invalid JSON" << std::endl;
        }

        std::string username = body["username"].s();
        std::string password = body["password"].s();

        if (validateUser(username, password)) {
            return crow::response(200, "Login successful");
            std::cout << 200 << "Login Successful" << std::endl;
        }
        else {
            return crow::response(401, "Invalid credentials");
            std::cout << 401 << "Invalid credentials" << std::endl;
        }
            });

    app.port(8080).multithreaded().run();
}
