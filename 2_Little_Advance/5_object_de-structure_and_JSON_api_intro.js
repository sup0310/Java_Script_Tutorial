// DE-STRUCTURE OBJECT

const course ={
    course_name: "JavaScript Tutorial",
    course_price: 1000,
    course_instructor: "YouTube"
}

// course.course_name
// course.course_price
// course.course_instructor
// instead of this every time use the below method
const {course_name, course_price, course_instructor} = course
console.log(`
Course Name : ${course_name},
Course Price : ${course_price},
Course Instructor : ${course_instructor}
`);

const {course_name: name, course_price: price, course_instructor: instructor} = course
console.log(`
Course Name : ${name},
Course Price : ${price},
Course Instructor : ${instructor}
`);
console.log();





// API 
// json
 