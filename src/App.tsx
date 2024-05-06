import { Route, Routes } from "react-router-dom"
import UserList from "./page/UserList"
import Registration from "./page/Registration"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="Registration" element={<Registration />} />
      </Routes>
    </>
  )
}

export default App
