import "./accordion.css"

const User = ({ title, body, isActive, setIsActive, toggle }) => {
    console.log(isActive)

    return (
        <div >
            <div className="accordion-item" onClick={toggle}>
                <div className="accordion-content">
                    <div>{isActive ? "-" : "+"}</div>
                    <h2>{title}</h2>
                    {isActive && <div className="accordion-content">{body}</div>}
                </div>
            </div>
        </div>
    )
}

export default User
