import React from 'react'
import userEvent from '@testing-library/user-event'
import {fireEvent,render , waitFor} from '@testing-library/react'
import Todo from './Todo'
import {screen} from '@testing-library/dom'

describe('Testing for Todo component' , ()=> {
  it('should add new task when form has been submitted' , async  ()=> {
    //renderizar o component
    const {getAllByTestId , getByPlaceholderText}  = render(<Todo/>)

    //buscar o input 
    const filedNode = screen.getByTestId('form-field')

    //digitar no input

    const newTask = 'testing'

    fireEvent.change(filedNode , {
      target:{
        value: newTask
      }
    })

    expect(filedNode.value).toEqual(newTask)

    //buscar o botao 
    const btnNode = screen.getAllByTestId('form-btn')

    //clicar no butao 
    fireEvent.click(btnNode , {
      
    })

    //buscar a tabela 
    //verificar se a tarefa foi adicionada na tabela 
  })
})