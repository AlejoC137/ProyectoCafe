import React, { useEffect, useState } from "react";
import TittleComp from "../tittleComp/TittleComp";
import { getAllNotas, postNota,delnota } from "../../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

function NotasStaff() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [newNote, setNewNote] = useState(false);
  const Notas = useSelector((state) => state.staffNotas);
  const dispatch = useDispatch();

  useEffect(() => {


  }, [Notas , newNote ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNota = {
      type: "Staff",
      category: 'Notas',
      notaTittle: title,
      notaContent: text,
      notaAuthor: author,
      notaTimeStamp: new Date().toISOString(),
    };


    postNota(newNota).then(() => {
      // Clear the form fields
      setTitle('');
      setText('');
      setAuthor('');
      getAllNotas()
      // Trigger a view update
      // dispatch({ type: 'REFRESH_NOTAS' }); // Adjust according to your action
    });
    
    getAllNotas()
    newNote === false  ? newNote === true : newNote === false 

  };

  const handleDelete = async (info) => {
    // const body = {
      // id: props.datos._id,
      // category: props.category,
      // category: props.category,
    // };
  // console.log(info);
    await delnota(info);

  };


  return (
    <div className="bg-ladrillo rounded-2xl border-8 border-black h-custom-height550 relative overflow-auto">
      <TittleComp tittle='Notas Staff' />
      <div className="m-4">
        {Notas.map((nota, index) => (
          <div key={index} className="mb-4 p-4 border-2 border-black rounded-md flex items-center space-x-4">
            <span className="font-bold">{nota.notaTittle}</span>
            <span>{nota.notaContent}</span>
            <span className="italic">Autor: {nota.notaAuthor}</span>
            <span>{new Date(nota.notaTimeStamp).toLocaleTimeString()}</span>
            <button
          onClick={()=>{handleDelete({
            id:nota._id,
            category:nota.category,
            type:nota.type
          })}}
          

            >ELIMINAR NOTA</button>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} 
      // className="p-4 flex flex-wrap items-center space-x-4"
      >
        <input
          type="text"
          placeholder="Título"
          className="border border-gray-300 rounded-md p-2 ml-4 mr-4 mt-2 w-10/12"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Texto"
          className="border border-gray-300 rounded-md p-2 ml-4 mr-4 mt-4 w-10/12"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="text"
          placeholder="Autor"
          className="border border-gray-300 rounded-md p-2 ml-4 mr-4 mt-2 w-10/12"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br></br>
        <button
          type="submit"
          className="bg-green-500 text-white rounded-md mt-2 px-4 py-2"
        >
          Guardar Notas
        </button>
      </form>
    </div>
  );
}

export default NotasStaff;
