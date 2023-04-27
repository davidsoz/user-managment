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


export default function TableContent({ users, onStatusChange, onDelete, onSetupPage }) {

    const [showRemoveModal, setShowRemoveModal] = useState(false);
    const [id, setId] = useState(null);
    const [name, setName] = useState("");
    const [active, setActive] = useState(null);


    function removeHandler(id, name, active) {
        setShowRemoveModal(true);
        setId(id);
        setName(name);
        setActive(active);
    }

    function closeModalHandler() {
        setShowRemoveModal(false)
    }

    return (
        <>
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
                                    user.status ? <img onClick={onSetupPage} className="setup" src={setup} alt="setup" /> : null
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