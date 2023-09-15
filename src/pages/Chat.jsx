

import ChatHeader from '../components/chat/ChatHeader'
import ChatContainer from '../components/chat/ChatContainer'
import ChatFooter from '../components/chat/ChatFooter'


function Chat() {
  return (
    <div className='w-full main-bg'>
        <div className='glass h-screen '>
            <div className='container max-w-3xl h-screen flex flex-col justify-between'>
                <ChatHeader />
                <ChatContainer />
                <ChatFooter />
            </div>
        </div>
    </div>
  )
}

export default Chat