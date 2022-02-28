// In standard ES6 / Babel toolchains, we typically import React + hooks directly:
// import React, { useEffect, useState } from 'react'
// However, because we're in a browser environment, we have to import hooks like so:
const { useEffect, useState } = React

const Clock = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => clearInterval(timerID)
  }, [])

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  )
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root2')
)

const UseEffectTest = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  useEffect(() => {
    const timerA = setInterval(() => {
      setA(a => a + 1)
    }, 1000)

    const timerB = setInterval(() => {
      setB(b => b + 1)
    }, 1500)

    // prevents memory leaks by clearing both intervals when our component disappears from the DOM
    return () => {
      clearInterval(timerA)
      clearInterval(timerB)
    }
  }, [])

  // Add another effect ... ?

  useEffect(() => {
    console.log(a, b)
  }, [a])

  return null
}
ReactDOM.render(
  <UseEffectTest />,
  document.getElementById('root4')
)


const ButtonExample = () => {
  const handleClick = () => {
    console.log('Hello World!')
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  )
}
// or
// const ButtonExample = () => {
//   return (
//     <div>
//       <button onClick={() => console.log('Hello World!')}>
//         Click Me!
//       </button>
//     </div>
//   )
// }

ReactDOM.render(
  <ButtonExample />,
  document.getElementById('root4')
)

const ButtonExample2 = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <p>Counter is currently: {counter}</p>
      <button onClick={() => setCounter(x => x - 1)}>DEC</button>
      <button onClick={() => setCounter(x => x + 1)}>INC</button>
    </div>
  )
}

ReactDOM.render(
  <ButtonExample2 />,
  document.getElementById('root4')
)