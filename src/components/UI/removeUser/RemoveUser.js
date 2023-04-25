import { Button, UserName, Wrapper } from "./styled";
import face from "../../../icons/svg/face-24px (1).svg";

export default function RemoveUser({name, onDelete, id, active, onClose}) {

    function onDeleteHandler() {
        onClose();
        onDelete(id);
    }

    return (
        <Wrapper>
            <h1>Delete User</h1>
            <UserName active={active}>
                <img onClick={onClose} src={face} alt="face"/>
                <div>{name}</div>
                <div>{active ? "Active User" : "Inactive User"}</div>
            </UserName>
            <Button onClick={onDeleteHandler}>delete user</Button>
        </Wrapper>
    )
}