const name = 'David'
const now = new Date()

const getGreeting = () => {
    return <h1>Good {now.getHours() < 12 ? 'Morning' : 'Afternoon'}, {name}! The time is currently: {now.toLocaleString()}</h1>
}

ReactDOM.render(
  getGreeting(),
  document.getElementById('root')
)

// const element = <div tabIndex="0"></div>

// const element = (
//   <div>
//     <h1>Hello!</h1>
//     <h2>Good to see you here.</h2>
//   </div>
// )

// const element = <div className="overlay" />

const title = "<script>alert('1')</script>"
const element = <h1>{title}</h1>

ReactDOM.render(
  element,
  document.getElementById('root1')
)
