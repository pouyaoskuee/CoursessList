
function CourseCard({course}) {
    return (
        <div className="content">
            <img src={course.imageUrl} alt='JavaScript'/>
            <div className="content__description">
                <h2>{course.title}</h2>
                <CourseCartBody description={course.description} tags={course.tags} rate={course.rate}  />
                <CourseCardFooter start={course.start} status={course.status} />
            </div>
        </div>
    )
}


function CourseCartBody(course) {
    return (
        <div className="body">
            <div className="description__paragraph">
                <p>{course.description}</p>
                <span>⭐️{course.rate}</span>
            </div>
            <div className="description__category">
                {course.tags.map((tag ,index) => (<span className='budge' key={index}>{tag}</span>))}
            </div>
        </div>


)
}



function CourseCardFooter(course) {

    const startAt = new Date(course.start).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })

    return (
        <div className="description__footer">
            <span className='date'>{startAt}</span>
            <span className={`budge ${course.status==='Active'? 'budge-primary':course.status==='Completed'? 'budge-secondary': '' }`} >{course.status}</span>
        </div>
    )

}

export default CourseCard;