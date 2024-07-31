
// props are passed to the Student component from the App component. The Student component expects three props: name, age, and isStudent. The PropTypes module is used to define the type of each prop. The name prop is expected to be a string, the age prop is expected to be a number, and the isStudent prop is expected to be a boolean. If the type of any prop does not match the expected type, a warning will be displayed in the console.

import Student from "./Student.jsx"

function App() {
return (
<>
<Student name="John Doe" age={30} isStudent={true} />
<Student name="Jane Doe" age={25} isStudent={false}/>
<Student name="James Prat" age={20} isStudent={true}/>
<Student name="Jill Up" age={35} isStudent={false}/>
<Student />
</>
)
}

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
}

export default App
