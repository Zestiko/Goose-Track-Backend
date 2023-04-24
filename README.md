# Goose Track (backend)

## Overview

This repository is the backend for the [Goose Track](https://github.com/Zestiko)
application, developed as part of the **_NodeJS_** course.

## Contributors

The following team members worked on the server:

- Team lead: [Vladyslav
  Alieksieiev][Владислав Алєксєєв](https://github.com/Zestiko)
- Scrum master: [Maxim Averkin] [Максим Аверкін](https://github.com/Maxoverking)
- Developers:
  - [Ivan Koshel][Іван Кошель](https://github.com/Ivan-GoIT)
  - [Tetiana Pysarenko] [Тетяна Писаренко](https://github.com/TetianaVielkova)
  - [Serhii Lytvyn] [Сергій Литвин](https://github.com/Serhii0406)
  - [Maryna Vyshnevska] [Марина Вишневська](https://github.com/MarynaVyshnevska)
  - [Pavlo Lipchanskyi]
    [Павло Липчанський](https://github.com/Pablo-Lipchanskyi)
  - [Oleksandr Podoliako][Олександр Подоляко](https://github.com/BlackyHat)
  - [Mykola Liakh] [Микола Лях](https://github.com/Nikolaylyah)
  - [Igor Yurovskyi] [Игорь Юровский](https://github.com/Mastermind2025)

## Installation and Usage

To get started with the server, follow these steps:

1. Clone this repository to your local machine.
2. Open the terminal and navigate to the project directory.
3. Run the following commands:

```
npm i
npm start (for production)
npm run dev (for development)
```

## Endpoints

The server provides the following endpoints:

- /auth/register: Registers a new user in the Goose Track application.
- /auth/login: Logs in an existing user.
- /user/current: Retrieves information about the current user.
- /user/logout: Deletes the current user's active session on the server.
- /user/info: Updates the current user's information.
- /tasks: Provides endpoints for managing a user's tasks:
  - GET /tasks: Retrieves a collection of tasks.
  - POST /tasks: Creates a new task.
  - PATCH /tasks/{id}: Updates an existing task.
  - DELETE /tasks/{id}: Deletes an existing task.
- /columns: Provides endpoints for managing a collection of columns:
  - GET /columns: Retrieves a collection of columns.
  - POST /columns: Creates a new column.
  - PATCH /columns/{id}: Updates an existing column by changing its position
    with the previous or next column.
  - DELETE /columns/{id}: Deletes an existing column.

## Technologies Used

- Node.js
- Express.js
