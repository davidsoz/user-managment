import { Action, Avatar, Role, Row, SetupWrapper, Status, TableC, User } from "./styled";
import statusOn from "../../../icons/svg/statusOn.svg";
import statusOff from "../../../icons/svg/statusOff.svg";
import trash from "../../../icons/svg/trash.svg";
import vpnKeyOn from "../../../icons/svg/vpn_keyOn.svg";
import vpnKeyOff from "../../../icons/svg/vpn_keyOff.svg";
import avatarOn from "../../../icons/svg/avatarOn.svg";
import setup from "../../../icons/svg/setup.svg";
import Modal from "../../modal/Modal";
import RemoveUser from "../../UI/removeUser/RemoveUser";
import { useState } from "react";
import Header from "../../header/Header";
import UserEditForm from "../../userEditForm/UserEditForm";
import { Container } from "../../../styled";


export default function TableContent({ users, onStatusChange, onDelete }) {

    const [showRemoveModal, setShowRemoveModal] = useState(false);
    const [id, setId] = useState(null);
    const [name, setName] = useState("");
    const [active, setActive] = useState(null);
    const [setupPage, setSetupPage] = useState(false);


    function removeHandler(id, name, active) {
        setShowRemoveModal(true);
        setId(id);
        setName(name);
        setActive(active);
    }

    function closeModalHandler() {
        setShowRemoveModal(false)
    }

    function showSetupPageHandler() {
		setSetupPage(true);
	}
	function hideSetupPageHandler() {
		setSetupPage(false);
	}

    return (
        <>
        {setupPage &&
            <SetupWrapper>
                <Container>
                    <Header title="User Setup" />
                    <UserEditForm user={users[0]} onClose={hideSetupPageHandler} />
                </Container>
            </SetupWrapper>
        }
        <TableC>
            {showRemoveModal &&
                <Modal onClose={closeModalHandler}>
                    <RemoveUser onDelete={onDelete}
                        id={id}
                        onClose={closeModalHandler}
                        name={name}
                        active={active}
                    />
                </Modal>
            }
            {
                users.map(user => (
                    <Row key={user.id} status={user.status}>
                        <User>
                            <Avatar>
                                <img src={avatarOn} alt="avatar" />
                            </Avatar>
                            <div>{user.fullName}</div>
                            <div>{user.email}</div>
                        </User>
                        <Role>
                            {user.admin ?
                                <div>
                                    {user.status ? <img src={vpnKeyOn} className="vpn" alt="vpn" /> : <img src={vpnKeyOff} alt="vpn" />}
                                </div>
                                : null}
                            <div>{user.admin ? "Admin" : "User"}</div>
                        </Role>
                        <Status>
                            <img onClick={() => onStatusChange(user.id)} src={user.status ? statusOn : statusOff} alt="status" />
                        </Status>
                        <Action>
                            {
                                user.status ? <img onClick={showSetupPageHandler} className="setup" src={setup} alt="setup" /> : null
                            }
                            <img onClick={() => removeHandler(user.id, user.fullName, user.status)} src={trash} alt="trash" />
                        </Action>
                    </Row>
                ))
            }
        </TableC>
        </>
    )
}