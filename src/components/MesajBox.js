import React from 'react'
import { useState } from 'react'

function MesajBox({onCreateMessage,comments}) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit =()=>{
    onCreateMessage(name,email,description)

    setName("")
    setEmail("")
    setDescription("")

  }



  return (
    <div className='MessageBox'>
        <div className='User'>
        <input value={name} onChange={(e)=>setName(e.target.value)} className='inputName' placeholder='Adınızı giriniz'/>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} className='inputEmail' placeholder='Email giriniz'/>
        </div>
        <div className='mainDescription'>
        
        <textarea value={description}  rows="5" onChange={(e)=>setDescription(e.target.value)} className='inputDescription' placeholder='Yorumunuzu yazınız'/>
        </div>
      <button onClick={handleSubmit} className='Mjsubmit'>gönder</button>


      <div>
        {comments.map((comment)=>(
          <div key={comment.id}>
            <br />
            <br />
            {comment.name}
            <hr />
            {comment.description}
          </div>
        ))}
      </div>
      

    </div>
  )
}

export default MesajBox
