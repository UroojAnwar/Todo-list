import inquirer from "inquirer"

let todos = []
let condition = true;

while (condition)
{
let todoList = await inquirer.prompt(
[
    {
        name: "Todo",
        type: "input",
        message: "What you want to add in your todos?"
    },
    {
        name: "MoreTodo",
        type: "confirm",
        message: "Do you want to add more task?",
        default: "false"
    }
]);
todos.push(todoList.Todo);
condition = todoList.MoreTodo
console.log(todos)
};
