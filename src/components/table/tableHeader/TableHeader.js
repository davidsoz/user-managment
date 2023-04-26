import { AddButton, Arrow, TableH } from "./styled";
import polygon from "../../../icons/svg/Polygon 1.svg";

export default function TableHeader({onAddUserShowModal, sortedByRole, sortByRole}) {
    return (
        <>
            <TableH>
                <AddButton onClick={onAddUserShowModal}>&#43;</AddButton>
                <div>
                    <span>USER</span>
                    <Arrow src={polygon} alt="polygon" />
                </div>
                <div>
                    <span>ROLE</span>
                    <Arrow sortedByRole={sortedByRole} onClick={sortByRole} src={polygon} alt="polygon" />
                </div>
                <div>
                    <span>STATUS</span>
                    <Arrow src={polygon} alt="polygon" />
                </div>
                <div>
                    <span>ACTIONS</span>
                </div>
            </TableH>
        </>
    )
}