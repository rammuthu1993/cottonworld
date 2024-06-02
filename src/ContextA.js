import React from 'react'
import ContextC from './ContextC'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const newContext = React.createContext()

export default function ContextA() {
  return (
    <div>
      <UserContext.Provider value={"Muthu"}>
        <ChannelContext.Provider value={"kumar"}>
            <newContext.Provider value={"ram"}>
        <ContextC/>
        </newContext.Provider>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )
}
