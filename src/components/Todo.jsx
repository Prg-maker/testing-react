import {useState } from 'react'

function Todo(){

  const [task , setUpdateTask] = useState('')
  
  const [tasks , setUpdateTasks] = useState([])

  const handleInputChange = event => setUpdateTask(event.target.value)

  function handleFormSubmit(event){
    event.preventDefault()

    if(task.trim()){
      setUpdateTasks([...tasks , task])
      return setUpdateTask('')
    }


    return alert('campo invalido')

  }

  return(

    <>
    
      <form  onSubmit={handleFormSubmit}>
        <input data-testid="form-field" onChange={handleInputChange} type="text" placeholder='new task here' value={task}/>
        <button data-testid="form-btn" >Add new task</button>
        </form>
      <table>
            <thead>
              <tr>
                <th>Task</th>
              </tr>
            </thead>

            <tbody>
              {
                tasks.map((t , index) => (
                  <tr key={index}>
                    <td>{t}</td>
                  </tr>
                ))
              }
            </tbody>
        </table>
    </>
    
  )
}

export default Todo