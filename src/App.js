import { useState } from "react";
import Header from "./components/header/Header";
import { Container, Table } from "./styled";
import TableHeader from "./components/table/tableHeader/TableHeader";
import TableContent from "./components/table/tableContent/TableContent";
import TableFooter from "./components/table/tableFooter/TableFooter";
import Modal from "./components/modal/Modal";
import AddUser from "./components/UI/addUser/Adduser";

const TEST_USERS = [
	{
		id: 0,
		fullName: "Samanta Standford",
		firstName: "Samanta",
		lastName: "Standford",
		email: "samantastandford@gmail.com",
		admin: true,
		status: false,
	},
	{
		id: 1,
		fullName: "John Doe",
		firstName: "John",
		lastName: "Doe",
		email: "JohnDoe@gmail.com",
		admin: true,
		status: true,
	},
	{
		id: 2,
		fullName: "Will Smith",
		firstName: "Will",
		lastName: "Smith",
		email: "WillSmith@gmail.com",
		admin: false,
		status: true,
	},
	{
		id: 3,
		fullName: "Jim Buttler",
		firstName: "Jim",
		lastName: "Buttler",
		email: "JimButtler@gmail.com",
		admin: true,
		status: true,
	},
	{
		id: 4,
		fullName: "Jonny Cole",
		firstName: "Jonny",
		lastName: "Cole",
		email: "JonnyCole@gmail.com",
		admin: true,
		status: true,
	},
]


function App() {
	const [inputValue, setInputValue] = useState("");
	const [users, setUsers] = useState(TEST_USERS);
	const [filteredUsers, setFilteredUsers] = useState(users);
	const [isFiltered, setIsFiltered] = useState(false);
	const [addUserShowModal, setAddUserShowModal] = useState(false);
	const [sortedByAdmin, setSortedByAdmin] = useState(false);

	function inputChangeHandler(e) {
		setInputValue(e.target.value);
		filterUsersHandler(e.target.value, users);
	}

	function statusChangeHandler(id) {
		let nextUsers = [...users].map(user => ({ ...user }));
		let res = nextUsers.find(user => user.id === id);
		res.status = !res.status;
		setUsers(nextUsers);
	}


	function deleteUserHandler(id) {
		let nextUsers = [...users].map(user => ({ ...user }));
		let index = nextUsers.findIndex(user => user.id === id);
		nextUsers.splice(index, 1);
		setUsers(nextUsers);
	}

	function filterUsersHandler(str, users) {
		if (str.length === 0) {
			setUsers(users);
			setIsFiltered(false);
			return;
		};
		let filteredUsers = [...users].map(user => ({ ...user })).filter(user => {
			return user.fullName.toLowerCase().includes(str.toLowerCase());
		})
		setFilteredUsers(filteredUsers);
		setIsFiltered(true);
	};

	function addUserCloseModalHandler() {
		setAddUserShowModal(false);
	}

	function addUserShowModalHandler() {
		setAddUserShowModal(true);
	}

	function AddUserHandler(newUser) {
		let nextUsers = [...users].map(user => ({ ...user }));
		nextUsers.forEach(user => {
			user.id += 1;
		})
		nextUsers.unshift(newUser);
		setUsers(nextUsers)
	}
	function splitUsersByRole() {
		let nextUsers = [...users].map(user => ({ ...user }));
		let adminSlice = nextUsers.filter(user => user.admin);
		let userSlice = nextUsers.filter(user => !user.admin);
		return { adminSlice, userSlice };
	}

	function sortByAdmin() {
		let users = splitUsersByRole();
		setUsers([...users.adminSlice, ...users.userSlice]);
		setSortedByAdmin(true);
	}

	function sortByUser() {
		let users = splitUsersByRole();
		setUsers([...users.userSlice, ...users.adminSlice]);
		setSortedByAdmin(false);
	}

	return (
		<>
			<Container>
				{addUserShowModal &&
					<Modal onClose={addUserCloseModalHandler}>
						<AddUser onAddUser={AddUserHandler} onClose={addUserCloseModalHandler} />
					</Modal>
				}
				<Header
					inputValue={inputValue}
					inputChange={inputChangeHandler}
					title="Project Access"
					withInput={true}
				/>
				<Table>
					<TableHeader
						onAddUserShowModal={addUserShowModalHandler}
						sortByRole={sortedByAdmin ? sortByUser : sortByAdmin}
						sortedByRole={sortedByAdmin}
					/>
					<TableContent
						users={isFiltered ? filteredUsers : users}
						onStatusChange={statusChangeHandler}
						onDelete={deleteUserHandler}
					/>
					{!isFiltered && <TableFooter />}
				</Table>

			</Container>
		</>

	);
}

export default App;
