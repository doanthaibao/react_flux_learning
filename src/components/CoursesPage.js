import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import courseStore from "../stores/CourseStore";
import { loadCourses, deleteCourse } from "../actions/courseAction";
import CourseList from "./CourseList";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());
  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    return () => courseStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} deleteCourse={deleteCourse} />
    </>
  );
}
export default CoursesPage;
