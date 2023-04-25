import { TableH } from "./styled";

export default function TableFooter() {

    return(
        <TableH>
            <div className="records">
                <div>Records on page</div>
                <select className="select">
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
            </div>
            <div className="pagination">
                <div>previous</div>
                <div className="page">
                    <div>1</div>
                    <div>2</div>
                </div>
                <div>next</div>
            </div>
        </TableH>
    )
}