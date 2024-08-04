import React from 'react';

const UseState = () => {
  return (
    <>
      <div className="absolute px-20 top-0 mx-auto w-full text-center">
        <section className="p-6 ">
          <h1 className="text-4xl font-bold mb-4">¿Qué es el Hook useState?</h1>
          
          
          <p className="text-gray-700 mb-6">
            El Hook <code>useState</code> es una función de React que permite gestionar el estado en componentes funcionales. Aquí están los componentes y detalles clave del <code>useState</code>:
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Componentes del useState</h2>
          <p className="text-gray-700 mb-6">
            <strong>Estado Actual:</strong> Es el valor actual del estado dentro del componente. Se establece inicialmente con un valor que defines al llamar a <code>useState</code>. Este valor puede ser de cualquier tipo, como números, cadenas, objetos o arreglos.
          </p>
          <p className="text-gray-700 mb-6">
            <strong>Función de Actualización:</strong> Es una función proporcionada por <code>useState</code> que se utiliza para cambiar el valor del estado. Esta función puede recibir un nuevo valor directamente o una función que recibe el estado anterior y devuelve el nuevo estado. Cada vez que el estado se actualiza, el componente se vuelve a renderizar con el nuevo valor del estado.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Detalles Adicionales</h2>
          <p className="text-gray-700 mb-6">
            <strong>Inicialización del Estado:</strong> El estado se inicializa con un valor definido cuando se llama a <code>useState</code>. Este valor puede ser un número, una cadena, un objeto o incluso una función que calcula el valor inicial.
          </p>
          <p className="text-gray-700 mb-6">
            <strong>Actualización Basada en el Estado Anterior:</strong> Cuando actualizas el estado en función del estado anterior, es recomendable usar una función en lugar de un valor directo para asegurar que estás trabajando con el estado más reciente.
          </p>
          <p className="text-gray-700 mb-6">
            <strong>Múltiples Estados:</strong> En un mismo componente, puedes llamar a <code>useState</code> varias veces para gestionar diferentes valores de estado.
          </p>
          <p className="text-gray-700 mb-6">
            <strong>Renderizado Condicional y Efectos:</strong> El componente se vuelve a renderizar cada vez que se actualiza el estado. Puedes usar el estado para controlar el renderizado condicional o para ejecutar efectos con base en cambios de estado.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Ejemplo Conceptual</h2>
          <p className="text-gray-700 mb-6">
            Imagina un contador en el que <code>useState</code> te permite mantener el valor del conteo y actualizarlo cada vez que el usuario haga clic en un botón. El estado se inicializa en 0 y se actualiza cuando el usuario incrementa o decrementa el conteo.
          </p>
          
          <p className="text-gray-700 mb-6">
            Este Hook es fundamental para manejar el estado en componentes funcionales y proporciona una forma sencilla y efectiva de gestionar datos que cambian a lo largo del tiempo en una interfaz de usuario.
          </p>
        </section>
      </div> 
    </>
  );
}

export default UseState;
