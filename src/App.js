import { useState } from "react";
import Header from "./components/header/Header";
import { Container } from "./styled";
import Table from "./components/table/Table";
// import Table from "./components/table/table";

const TEST_USERS = [
	{
		user: "Samanta Standford",
		email: "samantastandford@gmail.com",
		role: "Admin",
		status: true,

	}
]


function App() {
	const [inputValue, setInputValue] = useState("");

	function inputChangeHandler(e) {
		setInputValue(e.target.value);
	}

	return (
		<Container>
			<Header inputValue={inputValue} inputChange={inputChangeHandler}/>
			<Table />
		</Container>
	);
}

export default App;
