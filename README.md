![blue-one-piece-logo-gd0tssc8imqdtmwt](https://github.com/g4lius/OnePieceAPI/assets/96180380/c53d03ff-69d4-4d9a-8d86-e91839e43bd1)

Welcome to the OnePieceAPI project! This project provides a set of APIs related to the popular anime and manga series "One Piece".

## Introduction

The OnePieceAPI project aims to provide a convenient way to access information about characters, fruits, and more (in the future) from the One Piece Universe. It is built using Node.js, Express.js, and MongoDB.

## Features

- Retrieve information about characters and fruits.
- Explore details about each character, including their role, origins, bounty, affiliation and more.

## Usage

To get started with the OnePieceAPI, you can use the following endpoints.

### Characters

Get information about all characters.

| Endpoint                               | Description                                      |
|----------------------------------------|--------------------------------------------------|
| `/characters`                          | Retrieve a list of all characters.              |
| `/characters/name/:name`               | Search a character by name.                     |
| `/characters/role/:role`               | Retrieve a list of all characters with the selected role.                     |
| `/characters/currentaffiliation/:affiliation` | Retrieve a list of all characters with the selected current affiliation.     |
| `/characters/previousaffiliation/:affiliation`| Retrieve a list of all characters with the selected previous affiliation.   |
| `/characters/origin/:origin`           | Retrieve a list of all characters with the selected origin.                   |
| `/characters/provenance/:provenance`   | Retrieve a list of all characters with the selected provenance.               |
| `/characters/fruit/:fruit`             | Search for the character with the selected Devil Fruit.   |


### Single Characters

Get informations about a single character.

| Endpoint                                             | Description                                                |
|------------------------------------------------------|------------------------------------------------------------|
| `/singlecharacters/:name/role`                       | Retrieve the role of a specific character.                |
| `/singlecharacters/:name/fruit`                      | Retrieve the Devil Fruit of a specific character. |
| `/singlecharacters/:name/currentaffiliation`         | Retrieve the current affiliation of a specific character. |
| `/singlecharacters/:name/previousaffiliation`        | Retrieve the previous affiliation of a specific character.|
| `/singlecharacters/:name/origin`                     | Retrieve the origin of a specific character.              |
| `/singlecharacters/:name/provenance`                 | Retrieve the provenance of a specific character.          |
| `/singlecharacters/:name/currentbounty`              | Retrieve the current bounty of a specific character.      |
| `/singlecharacters/:name/previousbounty`             | Retrieve the previous bounty of a specific character.     |


### Devil Fruits

Get informations about Devil Fruits.

| Endpoint                                       | Description                                                 |
|------------------------------------------------|-------------------------------------------------------------|
| `/fruits`                                      | Retrieve a list of all Devil Fruits.                       |
| `/fruits/:name`                                | Get detailed information about a specific Devil Fruit.     |
| `/fruits/:name/type`                           | Get the type of a specific Devil Fruit.                   |
| `/fruits/:name/name-owner`                     | Get the name owner of a specific Devil Fruit.             |
| `/fruits/:name/owner`                          | Get detailed information about the owner of a specific Devil Fruit. |
| `/fruits/type/:type`                           | Get a list of Devil Fruits by type.                       |


## Getting Started

You can get started with the OnePieceAPI in two ways: by cloning the repository and setting it up yourself, or by directly using the deployed version.

### Option 1: Cloning the Repository

1. **Clone the Repository**: Clone this repository to your local machine using the following command:
    ```bash
    git clone https://github.com/g4lius/OnePieceAPI.git
    ```

2. **Navigate to the Project Directory**: Navigate to the project directory:
    ```bash
    cd OnePieceAPI
    ```

3. **Install Dependencies**: Install the required dependencies using npm:
    ```bash
    npm install
    ```

4. **Configure MongoDB Connection**: Configure your MongoDB connection in the `.env` file.

5. **Run the Server**: Run the server using the command:
    ```bash
    npm start
    ```

### Option 2: Using the Deployed Version (No more available)

You can directly make API requests to the deployed version of OnePieceAPI without setting up anything. Simply use the following base URL for making requests:

    https://onepieceapi-f910ec92e358.herokuapp.com/

You can start making requests to the available endpoints by appending the desired paths to the base URL. You can use Postman, a browser, or whichever method you prefer.

## Contributing

Contributions to the OnePieceAPI project are welcome! If you find any issues or would like to add new features, feel free to open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
