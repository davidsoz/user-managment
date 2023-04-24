import Input from "../input/Input";
import { MainHeader } from "./styled";

export default function Header({ inputValue, inputChange }) {
    return (
        <MainHeader>
            <h2>Project Access</h2>
            <Input
                placeholder="Type to filter the table"
                value={inputValue}
                inputChange={inputChange}
            />
        </MainHeader>
    )
}