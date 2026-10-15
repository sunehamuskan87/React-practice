import React from 'react'
import { useParams } from 'react-router'

const CourseDetails = () => {
  const {courseId} = useParams();
  return (
    <div>
      CourseDetails
      <p>Course Id: {courseId}</p>
    </div>
  )
}

export default CourseDetails
