import Input from "../input/Input";
import { MainHeader } from "./styled";

export default function Header({ inputValue, inputChange, title, withInput }) {
    return (
        <MainHeader>
            <h2>{title}</h2>
            {
                withInput &&
                <Input
                    placeholder="Type to filter the table"
                    value={inputValue}
                    inputChange={inputChange}
                />
            }
        </MainHeader>
    )
}