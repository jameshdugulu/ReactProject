
import Style from '../sideBar.module.css';

function SideBar() {
    return (
        <div className={Style.sideBar}>
            <a href="">Register</a>
            <a href="">File Case</a>
            <a href="">History</a>
            <a href="">Process</a>
        </div>
    )
}

export default SideBar;