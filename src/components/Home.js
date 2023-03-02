import React from 'react'
import Notes from './Notes'
// import NoteContext from '../context/Notes/NoteContext'


const Home = (props) => {
  // const context=useContext(NoteContext)
  // const {notes,setNotes}=context
  const {showAlert}=props
  return (
    <div>
       <Notes showAlert={showAlert}/>
       </div>
  )
}

export default Home