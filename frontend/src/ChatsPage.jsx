import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

import "./ChatsPage.css";

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'd00b15d8-699b-4210-a469-8d4da48dadbd', // PROJECT ID
         props.user.username, 
         props.user.secret
    );
    return (
        <div style={{ height: '100vh'}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%'}}/>
        </div>
    )
}

export default ChatsPage

// import { ChatEngine } from 'react-chat-engine';

// const ChatsPage = (props) => {
// 	return (
//         <div style = {{height: '100vh'}}>
//             <ChatEngine
//                 projectID='d00b15d8-699b-4210-a469-8d4da48dadbd'
//                 userName={props.user.username}
//                 userSecret={props.user.secret}
//                 // Render Custom Components
//                 height='100vh'
//                 renderChatList={(props) => {}}
//             />
//         </div>
// 	);
// }

// export default ChatsPage;