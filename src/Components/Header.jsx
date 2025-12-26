
const CoursStatus = ['All', 'Active', 'Completed','Uncompleted' ]

function Heder(){
    return (
        <div className="header">
            <h1>my courses</h1>
            <nav className="nav">
                <ul>
                    {CoursStatus.map((course , index) => (
                        <li key={index}>{course}</li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Heder