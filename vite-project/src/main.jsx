import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp()
{
    const username ="Build using React and Vite!!!!!!!!"
    return (
        <div>
            <h1> Custom APP! {username}</h1>
            <p>Cool Right!</p>
        </div>
    )
}

const reactElement = React.createElement
(
    'a',
    {
        href: 'https://www.google.com',
        target: '_blank'
    },
    'Click me to Visit Google'
)

ReactDOM.createRoot(document.getElementById('root')).
render(
  <Myapp />
    
  
)
