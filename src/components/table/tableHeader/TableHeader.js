import { AddButton, TableH } from "./styled";
import polygon from "../../../icons/svg/Polygon 1.svg";

export default function TableHeader({onAddUserShowModal}) {
    return (
        <>
            <TableH>
                <AddButton onClick={onAddUserShowModal}>&#43;</AddButton>
                <div>
                    <span>USER</span>
                    <img src={polygon} alt="polygon" />
                </div>
                <div>
                    <span>ROLE</span>
                    <img src={polygon} alt="polygon" />
                </div>
                <div>
                    <span>STATUS</span>
                    <img src={polygon} alt="polygon" />
                </div>
                <div>
                    <span>ACTIONS</span>
                </div>
            </TableH>
        </>
    )
}