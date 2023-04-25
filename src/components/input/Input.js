import { MainInput, Wrapper } from "./styled";
import searchIcon from "../../icons/svg/search-icon.svg"

export default function Input({placeholder, inputValue, inputChange}) {
    return (
        <Wrapper>
            <MainInput placeholder={placeholder} value={inputValue} onChange={inputChange}/>
            <img src={searchIcon} alt="search-icon"/>
        </Wrapper>
    )
}