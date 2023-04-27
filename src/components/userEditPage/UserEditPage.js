import Header from "../header/Header";
import {Button, Container, Details, Input, UserInfo, UserStatus, Wrapper, Form, Permission } from "./styled";
import avatar from "../../icons/svg/Group 2.svg"
import statusOn from "../../icons/svg/statusOn.svg"
import arrowDown from "../../icons/svg/keyboard_arrow_down-24px (2).svg";

export default function UserEditPage({user, onClose}) {
    return (
        <Wrapper>
            <Header title="Setup User"/>
            <Container>
                    <UserInfo>
                        <div>
                            <img src={avatar} alt="avatar"/>
                            <span>UPLOAD A PHOTO</span>
                        </div>
                        <div>
                            <h1>Danniel Blichman</h1>
                            <span>email@email.com</span>
                        </div>
                        <div>
                            <Button>Resend the invite</Button>
                        </div>
                    </UserInfo>
                    <Details>
                        <div>
                            <h1>Details</h1>
                        </div>
                        <Form>
                            <UserStatus>
                                <img src={statusOn} alt="status"/>
                                <div>The user is Active</div>
                            </UserStatus>
                            <label htmlFor="firstname">* Name</label>
                            <Input name="firtname"/>
                            <label htmlFor="lastname">* LastName</label>
                            <Input name="lastname"/>
                            <label htmlFor="email">* Email</label>
                            <Input name="email"/>
                        </Form>
                        <div>
                            <Button onClick={onClose}>Save changes</Button>
                        </div>
                    </Details>
                    <Permission>
                        <div className="flex">
                            <h1>Permissions</h1>
                            <div>Admin</div>
                        </div>
                        <div className="flex super-admin">
                            <h3>Super Admin</h3>
                            <img src={statusOn} alt="status"/>
                        </div>
                        <div>
                            <div>
                                <div className="flex group">
                                    <div className="flex">
                                        <img src={arrowDown} alt="arrow-down"/>
                                        <h5>Permission Group 1</h5>
                                    </div>
                                    <img src={statusOn} alt="status"/>
                                </div>
                            </div>
                            <div>
                                <div className="flex group">
                                    <div className="flex">
                                        <img src={arrowDown} alt="arrow-down"/>
                                        <h5>Permission Group 1</h5>
                                    </div>
                                    <img src={statusOn} alt="status"/>
                                </div>
                            </div>
                            <div>
                                <div className="flex group">
                                    <div className="flex">
                                        <img src={arrowDown} alt="arrow-down"/>
                                        <h5>Permission Group 1</h5>
                                    </div>
                                    <img src={statusOn} alt="status"/>
                                </div>
                            </div>
                        </div>
                    </Permission>
            </Container>
        </Wrapper>
    )
}