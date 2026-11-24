import './App.css'

function Header() {
  return (
    <div>
      <h1>My Profile</h1>
    </div>
  )
}

function PersonDetails() {
  const name = "Arjun"
  const age = 28
  const city = "Pune"
  const food = "Pav Bhaji"
  return (
    <>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <p>Favourite food: {food}</p>
    </>
  )
}

function HelloWorld() {
  return (
    <>
      <h1>Hello World</h1>
    </>
  )
}

function Footer() {
  return (
    <>
      <h1>Thanks for visiting</h1>
    </>
  )
}

function App() {
  return (
    <>
      <Header />
      <hr />
      <PersonDetails />
      <hr />
      <HelloWorld />
      <hr />
      <Footer />
    </>
  )
}

export default App