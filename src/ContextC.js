import React,{useContext} from 'react'
import ContextA from './ContextA'
import { UserContext,ChannelContext,newContext } from './ContextA'


export default function ContextC() {
    const name = useContext(UserContext)
    const lname = useContext(ChannelContext)
  return (
    <div>
     {name} {lname}
     {/*  <UserContext.Consumer>
        {
            user=>{
                return (
                    <ChannelContext.Consumer>
                    {
                        channel=>{return (
                            <newContext.Consumer>
                                {
                                    name=>{
                                        return (<div>hai {user} {channel} {name}</div>)
                                    }
                                }
                            </newContext.Consumer>
                        )}
                    }
                    </ChannelContext.Consumer>
                )
            }
        }
      </UserContext.Consumer> */}
    </div>
  )
}
