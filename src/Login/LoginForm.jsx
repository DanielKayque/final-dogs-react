import React, { useState } from 'react'
import Input from '../Components/Input'
import Button from '../Components/Button'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <form className="md:w-1/2 w-full items-center md:items-start h-[auto] px-20 flex flex-col justify-center">
          <div className="flex flex-col py-20 md:py-0 items-start gap-6">
            <h1 className="after:content-[''] after:w-[30px] after:h-[30px] after:bg-[#FABD01] after:absolute after:left-0 after:bottom-0 relative after:z-[-1] after:rounded-lg text-6xl text-[#333]">Login</h1>
            <Input
              label="Usuário"
              type="text"
              id="usuario"
              value={username}
              setValue={setUsername}
            />

            <Input
              label="Password"
              type="password"
              id="password"
              value={password}
              setValue={setPassword}
            />
            <Button label="Enviar" />
            </div>
            </form>
  )
}

export default LoginForm