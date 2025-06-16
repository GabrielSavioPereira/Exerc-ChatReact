import React, { useState } from 'react';  

function Chat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() === '') return;
    setMessages([...messages, input]);
    setInput('');
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[86vh] border-2 border-black h-[80vh] flex flex-col">
        <div className="border-b-2 border-black p-4" >
          <p className=" text-l text-blue-500">Atendimento on-line</p>
        </div>
        <div className="ml-[15px] mt-[10px] ">
            <p className="text-sm font-semibold">Atendente:</p>
              <div className=" border border-gray-700 p-2  rounded w-fit max-w-x">Oi, o que você deseja? </div>
        </div>
        <div className="flex flex-col items-end mr-[15px] ">
            <p className="text-sm font-semibold">Você:</p>
              <div className=" border border-gray-700 p-2  rounded w-fit max-w-x">como se escreve piton?</div>
        </div>
      <div className="ml-[15px] mt-[10px] ">
            <p className="text-sm font-semibold">Atendente:</p>
              <div className=" border border-gray-700 p-2  rounded w-fit max-w-x"> A forma correta de se escrever é python </div>
        </div>
        <div className="flex-1 p-4 overflow-y-auto space-y-6 ">
          {messages.map((text, index) => (
            <div key={index} className="text-right flex flex-col items-end ">
              <p className="text-sm font-semibold">Você:</p>
              <div className="border border-gray-700 p-2  rounded w-fit max-w-x">
                {text}
              </div>
            </div>
          ))}
        </div>

        <div className="flex border-t-2 border-black p-2">
          <input
            type="text"
            className="flex-1 border border-black px-2 py-1"
            placeholder="Digite sua mensagem..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button
            className="ml-2 px-4 py-1 border border-black text-green-600 font-bold hover:bg-green-100"
            onClick={sendMessage}
          >
            ENVIAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
