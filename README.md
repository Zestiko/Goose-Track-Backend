# Goose Track (back-end)

### Над розробкою сервера в рамках курсу ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) працювали:

- Team lead [Владислав Алєксєєв](https://github.com/Zestiko)
- Scrum master [Максим Аверкін](https://github.com/Maxoverking)
- Developer [Кошель Іван](https://github.com/Ivan-GoIT)
- Developer [Писаренко Тетяна](https://github.com/TetianaVielkova)
- Developer [Сергій Литвин](https://github.com/Serhii0406)
- Developer [Марина Вишневська](https://github.com/MarynaVyshnevska)
- Developer [Павло Липчанський](https://github.com/Pablo-Lipchanskyi)
- Developer [Олександр Подоляк](https://github.com/BlackyHat)
- Developer [Микола Лях](https://github.com/Nikolaylyah)
- Developer [Игорь Юровский](https://github.com/Mastermind2025)

## Технічна документація як працювати з сервером:

Clone this repository, open Terminal

> Add npm commands :

```
npm i
npm start - production
npm run dev - development
```

### Операції які виконує сервер _***Endpoints***_ :

- реєстрації User в додатку [Goose Track](https://github.com/Zestiko) -
  /auth/register.
- логін User -/auth/login .
- повертатає інформацію про користувача -/user/current.
- видяляє активну сесію користувача на сервері -/user/logout.
- редагування данних про User PATCH -/user/info.
- _Endpoints_ для роботы з завданнями User :
  - Oтримання колекції завданнь GET -/tasks
  - Cтворення завдання POST -/tasks.
  - Редагування завдання PATCH -/tasks/{id}.
  - Видалення завдання DELETE -/tasks/{id} .
- _Endpoints_ для роботи з колекцією колонок :
  - Oтримання колекції GET -/columns .
  - Cтворення елемента колекції POST -/columns .
  - Редагування елемента колекції змінюючи його місцем з попереднім або
    наступним елементом PATCH -/columns/{id} .
  - Видалення елемента колекції DELETE -/columns/{id} .
