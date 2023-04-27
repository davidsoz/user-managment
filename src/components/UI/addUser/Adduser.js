import { Button, Icon, Message, Role, Wrapper } from "./styled";
import { Email, Fullname } from "./styled";
import face from "../../../icons/svg/face-24px (1).svg";
import emailIcon from "../../../icons/svg/alternate_email-24px.svg";
import adminKey from "../../../icons/svg/vpn_key-24px (1).svg";
import { useCallback, useEffect, useState } from "react";
import { Input } from "./styled";

export default function AddUser({onAddUser, onClose}) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [valid, setValid] = useState(false);

    function firstNameChangeHandler(e) {
        setFirstName(e.target.value);
        validation();
    }
    function lsatNameChangeHandler(e) {
        setLastName(e.target.value);
        validation();
    }
    function emailChangeHandler(e) {
        setEmail(e.target.value);
        validation();
    }
    function roleChangeHandler(e) {
        setRole(e.target.value);
        validation();
    }

    function sendInvitationHandler() {
        if(!valid) return;
        let newUser = {
            id: 0,
            fullName: firstName + " " + lastName,
            firstName,
            lastName,
            email,
            admin: role === "Admin" ? true : false,
            status: true,
        }
        onAddUser(newUser);
        onClose();
    }

    const validation = useCallback(() => {
        if(firstName && lastName && email.includes("@") && role) {
            setValid(true);
        } else {
            setValid(false);
        }
    }, [firstName, lastName, email, role]);

    useEffect(() => {
        validation();
    }, [firstName, lastName, role, email, validation]);

    return (
        <Wrapper>
            <h1>Invite New User</h1>
            <Fullname>
                <Icon src={face} alt="face"/>
                <div>
                    <Input
                        onChange={firstNameChangeHandler}
                        value={firstName}
                        name="firstname"
                        placeholder="* First Name"
                    />
                </div>
                <div>
                    <Input
                        onChange={lsatNameChangeHandler}
                        value={lastName}
                        name="lastname"
                        placeholder="* Last Name"
                    />
                </div>
            </Fullname>
            <Email>
                <Icon valid={valid} src={emailIcon} alt="face"/>
                <Input
                    valid={valid}
                    onChange={emailChangeHandler}
                    value={email}
                    name="email"
                    placeholder="* Email"
                />
            </Email>
            <Role>
                <Icon src={adminKey} alt="face"/>
                <select value={role} onChange={roleChangeHandler}>
                    <option value="" hidden>* Role</option>
                    <option>Admin</option>
                    <option>User</option>
                </select>
            </Role>
            <div>
                <Button active={valid} onClick={sendInvitationHandler}>Send Invitation</Button>
                <Message valid={valid}>{valid ? "Good to go" : "Fill In All The Fields"}</Message>
            </div>
        </Wrapper>
    )
}