import Navbar from './components/Navbar'
import Pie from "./components/Píe"



function App(props) {
  return (
    <>
    <Navbar/>

    { props.children }

    <Pie/>
    </>
  )
}


export default App
