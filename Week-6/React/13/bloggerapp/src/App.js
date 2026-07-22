import React from 'react';
import './index.css';

export const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11 ', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 },
];

const courses = [
  { id: 1, name: 'Angular', date: '4/5/2021' },
  { id: 2, name: 'React', date: '6/3/20201' }
];

const blogs = [
  { id: 1, title: 'React Learning', author: 'Stephen Biz', desc: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', author: 'Schewzdenier', desc: 'You can install React from npm.' }
];

function BookDetails(props) {
  return (
    <ul>
      {props.books.map((book) => (
        <div key={book.id}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </ul>
  );
}

function CourseDetails(props) {
  return (
    <ul>
      {props.courses.map((course) => (
        <div key={course.id}>
          <h3>{course.name}</h3>
          <h4>{course.date}</h4>
        </div>
      ))}
    </ul>
  );
}

function BlogDetails(props) {
  return (
    <ul>
      {props.blogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <h4>{blog.author}</h4>
          <p>{blog.desc}</p>
        </div>
      ))}
    </ul>
  );
}

function App() {
  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  // Technique 1: if/else
  let coursedet = null;
  if (showCourses) {
    coursedet = <CourseDetails courses={courses} />;
  }

  // Technique 2: ternary operator (used for bookdet below)
  // Technique 3: logical && (used for blogs below)

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <div className="container">
        {/* Book Details - rendered using ternary operator */}
        <div className="st2">
          <h1>Book Details</h1>
          {showBooks ? <BookDetails books={books} /> : <h3>No Books Available</h3>}
        </div>
        
        {/* Blog Details - rendered using logical && */}
        <div className="v1">
          <h1>Blog Details</h1>
          {showBlogs && <BlogDetails blogs={blogs} />}
        </div>
        
        {/* Course Details - rendered using if-else variable */}
        <div className="mystyle1">
          <h1>Course Details</h1>
          {coursedet}
        </div>
      </div>
    </div>
  );
}

export default App;
