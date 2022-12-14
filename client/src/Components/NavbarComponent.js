import {Link, useNavigate} from "react-router-dom"
import { getUser, logout} from "../Services/authorize"

const NavbarComponent = () => {
    const navigate = useNavigate()
    return (
        <nav>
            <ul className="nav nav-tab">
                <li className="nav-item pr-3 pt-3 pb-3">
                    <Link to="/" className="btn btn-outline-primary">หน้าแรก</Link>
                </li>
                &nbsp;
                {
                    getUser() && (
                        <li className="nav-item pr-3 pt-3 pb-3">
                            <Link to="/create" className="btn btn-outline-success">เขียนบทความ</Link>
                        </li>)
                }
                &nbsp;
                {
                    !getUser() && (
                        <li className="nav-item pr-3 pt-3 pb-3">
                            <Link to="/login" className="btn btn-outline-info">เข้าสู่ระบบ</Link>
                        </li>)
                }
                {
                    getUser() && (
                        <li className="nav-item pr-3 pt-3 pb-3">
                            <button to="/" onClick={() => logout(() => navigate("/"))} className="btn btn-outline-danger">ออกจากระบบ</button>
                        </li>)
                }
            </ul>
        </nav>
    )
}

export default NavbarComponent