import { useState } from "react";
import Header from "./components/header/Header";
import { Container, Table } from "./styled";
import TableHeader from "./components/table/tableHeader/TableHeader";
import TableContent from "./components/table/tableContent/TableContent";
import TableFooter from "./components/table/tableFooter/TableFooter";

const TEST_USERS = [
	{
		id: 0,
		user: "Samanta Standford",
		firstName: "Samanta",
		LastName: "Standford",
		email: "samantastandford@gmail.com",
		admin: true,
		status: false,
	},
	{
		id: 1,
		user: "John Doe",
		firstName: "John",
		LastName: "Doe",
		email: "JohnDoe@gmail.com",
		admin: true,
		status: true,
	},
	{
		id: 2,
		user: "Will Smith",
		firstName: "Will",
		LastName: "Smith",
		email: "WillSmith@gmail.com",
		admin: false,
		status: true,
	},
	{
		id: 3,
		user: "Jim Buttler",
		firstName: "Jim",
		LastName: "Buttler",
		email: "JimButtler@gmail.com",
		admin: true,
		status: true,
	},
	{
		id: 4,
		user: "Jonny Cole",
		firstName: "Jonny",
		LastName: "Cole",
		email: "JonnyCole@gmail.com",
		admin: true,
		status: true,
	},
]


function App() {
	const [inputValue, setInputValue] = useState("");
	const [users, setUsers] = useState(TEST_USERS);

	function inputChangeHandler(e) {
		setInputValue(e.target.value);
	}

	function statusChangeHandler(id) {
		let nextUsers = [...users];
		let res = nextUsers.find(user => user.id === id);
		res.status = !res.status;
		setUsers(nextUsers);
	}

	function deleteUserHandler(id) {
		let nextUsers = [...users];
		let index  = nextUsers.findIndex(user => user.id === id);
		console.log(id);
		nextUsers.splice(index, 1);
		setUsers(nextUsers);
	}


	return (
		<Container>
			<Header inputValue={inputValue} inputChange={inputChangeHandler}/>
			<Table>
				<TableHeader />
				<TableContent
					users={users}
					onStatusChange={statusChangeHandler}
					onDelete={deleteUserHandler}
				/>
				<TableFooter />
			</Table>

		</Container>
	);
}

export default App;
