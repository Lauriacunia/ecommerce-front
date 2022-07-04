import React, { useState, useEffect } from "react";
import io from 'socket.io-client';
import { faker } from '@faker-js/faker';


const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    
    useEffect(() => {
        /** Creo un fake User */
        const currentUser =  {
            id: faker.random.numeric(5),
            nombre: faker.name.firstName(),
            apellido: faker.name.lastName(),
            email: faker.internet.email(),
            alias: faker.internet.userName(),
            avatar: faker.image.avatar()
          }
        setCurrentUser(currentUser);
        console.log('currentUser', currentUser);
        const getNow = () => {
            return new Date().toLocaleTimeString();
        }

        /** Creo conexión con el server websocket */
        const socket = io.connect("http://localhost:8080");
        /** Al iniciar le envio al servidor el usuario que se conecto */
        socket.emit('set-user', currentUser);

        // /** El cliente envia un nuevo mensaje al servidor */
        // // TODO: agregar logica de envio de formulario de mensaje
        // socket.emit('new-message', {
        //     autor: currentUser,
        //    // texto: texto,
        //     timestamp: getNow()
        //  });

        // /** El cliente recibe los mensajes */
        // socket.on('messages', (messages)=>{
        //   console.log('mensajes recibido');
        //      console.log(messages);
        //      setMessages(messages);
        // });      

        return () => {
           // socket.disconnect();
        }
    }, []);

    return <div>Chat</div>;
    }
export default Chat;
