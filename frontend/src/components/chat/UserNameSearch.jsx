import { useNavigate } from 'react-router-dom';

export default function UserNameSearch() {
    const navigate = useNavigate();
    const handleLogInLink = () => {
        navigate('/dashboard');
    };

    return (
        <div className="container">
            <div className="user-list">
                <div className="user">
                    <div className="avatar avatar-online">
                        <img src="../../assets/images/smile.jpg" alt="avatar"/>
                    </div>
                    <div className="user-name">Name / Username</div>
                </div>
                <div className="user">
                    <div className="avatar avatar-busy">
                        <img src="../../assets/images/smile.jpg" alt="avatar"/>
                    </div>
                    <div className="user-name">Name / Username</div>
                </div>
                <div className="user">
                    <div className="avatar avatar-offline">
                        <img src="../../assets/images/smile.jpg" alt="avatar"/>
                    </div>
                    <div className="user-name">Name / Username</div>
                </div>
                <div className="user">
                    <div className="avatar avatar-ai-user">
                        <img src="../../assets/images/smile.jpg" alt="avatar"/>
                    </div>
                    <div className="user-name">AI / Virtual-User</div>
                </div>
            </div>

            <button className="add-button">
                <div className="svg-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="5rem"
                        height="5rem"
                        viewBox="0 0 32 32"
                    >
                        <rect width="32" height="32" fill="none"/>
                        <path
                            fill="#fff"
                            d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.087 0 11 4.913 11 11s-4.913 11-11 11S5 22.087 5 16S9.913 5 16 5m-1 5v5h-5v2h5v5h2v-5h5v-2h-5v-5z"
                        />
                    </svg>
                </div>
            </button>
        </div>
    );
}
