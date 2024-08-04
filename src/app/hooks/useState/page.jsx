"use client";
import { useState, useEffect } from "react";
import Counter from "./Counter";

const StateExamples = () => {


  // Ejemplo 2: Estado de una cadena de texto
  // const [text, setText] = useState("Hello, world!");

  // // Ejemplo 3: Estado de un arreglo
  // const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);

  // // Ejemplo 4: Estado de un objeto
  // const [user, setUser] = useState({ name: "John", age: 30 });

  // // Ejemplo 5: Estado booleano
  // const [isVisible, setIsVisible] = useState(true);

  // // Ejemplo 6: Estado para un formulario con múltiples campos
  // const [formData, setFormData] = useState({ name: "", email: "" });

  // Ejemplo 7: Estado para la selección de un archivo
  // const [file, setFile] = useState(null);

  // Ejemplo 8: Estado para una lista de elementos editables
  // const [editableItems, setEditableItems] = useState([
  //   "Item 1",
  //   "Item 2",
  //   "Item 3",
  // ]);
  // const [editIndex, setEditIndex] = useState(null);
  // const [newValue, setNewValue] = useState("");

  // Ejemplo 9: Estado para mostrar/ocultar un componente basado en un intervalo
  // const [intervalVisibility, setIntervalVisibility] = useState(true);

  // Ejemplo 10: Estado para un temporizador
  // const [seconds, setSeconds] = useState(0);

  // Manejadores de eventos para cada estado
  // const incrementCount = () => setCount(count + 1);
  // const updateText = () => setText(text);
  // const addItem = () => setItems([...items, "New Item"]);
  // const updateUser = () => setUser({ ...user, age: user.age + 1 });
  // const toggleVisibility = () => setIsVisible(!isVisible);

  // const handleFormChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  // };

  // const handleFileChange = (e) => {
  //   setFile(e.target.files[0]);
  // };

  // const handleEdit = (index) => {
  //   setEditIndex(index);
  //   setNewValue(editableItems[index]);
  // };

  // const handleSave = () => {
  //   const updatedItems = editableItems.map((item, index) =>
  //     index === editIndex ? newValue : item
  //   );
  //   setEditableItems(updatedItems);
  //   setEditIndex(null);
  // };

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setIntervalVisibility((prev) => !prev);
  //   }, 5000); // Alterna la visibilidad cada segundo

  //   return () => clearInterval(intervalId); // Limpieza del intervalo al desmontar
  // }, []);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setSeconds((prev) => prev + 1);
  //   }, 5000); // Incrementa los segundos cada segundo

  //   return () => clearInterval(intervalId); // Limpieza del intervalo al desmontar
  // }, []);

  return (
    <div className="max-w-screen-lg mx-auto text-center">
      <h2 className=" mx-auto mt-4 text-3xl font-bold mb-4">useState() Examples</h2>

      {/* Ejemplo 1 */}
    <Counter/>
</div>
  );
};

export default StateExamples;
