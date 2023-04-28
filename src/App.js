import { useState } from "react";
import Header from "./components/header/Header";
import { Container, Table } from "./styled";
import TableHeader from "./components/table/tableHeader/TableHeader";
import TableContent from "./components/table/tableContent/TableContent";
import TableFooter from "./components/table/tableFooter/TableFooter";
import Modal from "./components/modal/Modal";
import AddUser from "./components/UI/addUser/Adduser";
import UserEditPage from "./components/userEditPage/UserEditPage";

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
		status: false,
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
	{
		id: 5,
		fullName: "Bryan Holt ",
		firstName: "Bryan",
		lastName: "Holt",
		email: "bryanstandford@gmail.com",
		admin: false,
		status: false,
	},
	{
		id: 6,
		fullName: "Michael Bone",
		firstName: "Michael",
		lastName: "Bone",
		email: "MichaelBone@gmail.com",
		admin: true,
		status: false,
	},
	{
		id: 7,
		fullName: "Jim Serrone",
		firstName: "Jim",
		lastName: "Serrone",
		email: "JimSerrone@gmail.com",
		admin: false,
		status: true,
	},
	{
		id: 8,
		fullName: "Billy Williams",
		firstName: "Billy",
		lastName: "Williams",
		email: "BillyWilliams@gmail.com",
		admin: true,
		status: false,
	},
	{
		id: 9,
		fullName: "Barbra Collins",
		firstName: "Barbra",
		lastName: "Collins",
		email: "BarbraColeCollins@gmail.com",
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
	const [setupPage, setSetupPage] = useState(false);
	const [editUser, setEditUser] = useState(null);

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
		let adminUsers = nextUsers.filter(user => user.admin);
		let nonAdminUsers = nextUsers.filter(user => !user.admin);
		return { adminUsers, nonAdminUsers };
	}

	function sortByAdmin() {
		let users = splitUsersByRole();
		setUsers([...users.adminUsers, ...users.nonAdminUsers]);
		setSortedByAdmin(true);
	}

	function sortByUser() {
		let users = splitUsersByRole();
		setUsers([...users.nonAdminUsers, ...users.adminUsers]);
		setSortedByAdmin(false);
	}

	function showSetupPage(id) {
		let editUser = users.find(user => user.id === id);
		console.log(editUser);
		setEditUser(editUser);
		setSetupPage(true);
	}

	function closeSetupPage() {
		setSetupPage(false);
	}


	return (
		<>
			{
				setupPage ? <UserEditPage editUser={editUser} onClose={closeSetupPage}/> :

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
							onSetupPage={showSetupPage}
							closeSetupPage={closeSetupPage}
						/>
						{!isFiltered && <TableFooter />}
					</Table>
				</Container>
			}
		</>
	);
}

export default App;
