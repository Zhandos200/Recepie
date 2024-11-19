function Sidebar() {
    return (
        <aside id="sidebar">
            <div className="d-flex">
                <button className="toggle-btn" type="button">
                    <i className="lni lni-menu"></i>
                </button>
                <div className="sidebar-logo">
                    <a href="#"><i className="lni lni-chef-hat" style={{ marginTop: '1rem', marginLeft: '1.3rem' }}>Recepie</i></a>
                </div>
            </div>
            <ul className="sidebar-nav">
                <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                        <i className="lni lni-user"></i>
                        <span>Profile</span>
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                        <i className="lni lni-agenda"></i>
                        <span>Recepies</span>
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="#" className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
                        data-bs-target="#auth" aria-expanded="false" aria-controls="auth">
                        <i className="lni lni-protection"></i>
                        <span>Auth</span>
                    </a>
                    <ul id="auth" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li className="sidebar-item">
                            <a href="#" className="sidebar-link">Login</a>
                        </li>
                        <li className="sidebar-item">
                            <a href="#" className="sidebar-link">Register</a>
                        </li>
                    </ul>
                </li>
                <li className="sidebar-item">
                    <a href="#" className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
                        data-bs-target="#multi" aria-expanded="false" aria-controls="multi">
                        <i className="lni lni-layout"></i>
                        <span>More</span>
                    </a>
                    <ul id="multi" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li className="sidebar-item">
                            <a href="#" className="sidebar-link collapsed" data-bs-toggle="collapse"
                                data-bs-target="#multi-two" aria-expanded="false" aria-controls="multi-two">
                                Two Links
                            </a>
                            <ul id="multi-two" className="sidebar-dropdown list-unstyled collapse">
                                <li className="sidebar-item">
                                    <a href="#" className="sidebar-link">Guide</a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="#" className="sidebar-link">About</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                        <i className="lni lni-popup"></i>
                        <span>Notification</span>
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                        <i className="lni lni-cog"></i>
                        <span>Setting</span>
                    </a>
                </li>
            </ul>
            <div className="sidebar-footer">
                <a href="#" className="sidebar-link">
                    <i className="lni lni-exit"></i>
                    <span>Logout</span>
                </a>
            </div>
        </aside>
    );
}

export default Sidebar;
