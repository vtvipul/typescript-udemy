import axios from "axios";

const url:string = "https://jsonplaceholder.typicode.com/todos/1";

interface TODO {
	id: number;
	title: string;
	completed: boolean;
}

axios.get(url).then((res) => {
	// const todo:TODO = res.data;
	const todo = res.data as TODO;
    logTodo(todo.id, todo.title, todo.completed)
});

const logTodo = (id: number, title: string, completed: boolean) => {
	console.log(`
    id: ${id},
    title: ${title},
    completed: ${completed},
        `);
};
