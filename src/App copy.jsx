import React from 'react'

const App = () => {

  const name = "Julian"
  const x = 10
  const y = 20
  const names = ["Julian", "Alien", "Beliza", "Floripesa"]

  const loggedIn = false

  // if (loggedIn) {
  //   return <h1>Hello Member</h1>
  // }

  const styles = {
    color: 'red',
    fontSize: '25px'
  }

  return (
    <>
      <div className='text-5xl'>App</div>
      <p style={styles}>Hello {name} </p>
      <p>
        The sum of {x} and {y} is {x+y}
      </p>
      <ul>
        { names.map((name, index) => (
          <li key={index}>{name}</li>
        )) }
      </ul>
      {/* { loggedIn ? <h1 className='text-xl text-blue-700'>Hello Member</h1> : <h1>Hello Guest</h1> } */}
      { loggedIn && <h1 className='text-xl text-blue-700'>Hello Member</h1> }
    </>
  )
}

export default App