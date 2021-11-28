import { ChatEngine } from 'react-chat-engine';
import './App.css'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm';
const App = () => {

  if (!localStorage.getItem('username'))
    return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="828420da-8393-4bbe-89c2-f2c8ad1ce54a"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
