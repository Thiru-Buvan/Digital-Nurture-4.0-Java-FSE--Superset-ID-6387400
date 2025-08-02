import React from 'react';

const courses = [
    { id: 1, name: 'Angular', date: '4/5/2021' },
    { id: 2, name: 'React', date: '6/3/20201' }
];

function CourseDetails() {
    return (
        <div className="section">
            <h1>Course Details</h1>
            {courses.map(course => (
                <div key={course.id}>
                    <h1>{course.name}</h1>
                    <h5>{course.date}</h5>
                </div>
            ))}
        </div>
    );
}

export default CourseDetails;
