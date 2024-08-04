import Image from "next/image";
import ContainerGral from '@/app/components/ContainerGral';

export default function Home() {
  return (
    <>
    <ContainerGral>
    <section className="p-6 ">
          <h1 className="text-4xl font-bold mb-4">Guía Personal de React</h1>
          <p className="text-lg text-gray-700 mb-6">
            ¡Bienvenido a mi guía personal de React! Este recurso ha sido creado para ayudarme a profundizar en mi conocimiento de React y, al mismo tiempo, servir como una guía útil para cualquier persona interesada en aprender esta poderosa biblioteca. Aquí, he recopilado una amplia variedad de conceptos, técnicas y mejores prácticas que he encontrado esenciales para desarrollar aplicaciones web interactivas y efectivas.
          </p>
          
          <h2 className="text-3xl font-semibold mb-4">¿Qué es React?</h2>
          <p className="text-gray-700 mb-6">
            React es una biblioteca de JavaScript desarrollada por Facebook que se utiliza para construir interfaces de usuario. A diferencia de otros enfoques, React se basa en la creación de componentes reutilizables que pueden gestionar su propio estado y renderizarse eficientemente. Con su enfoque de virtual DOM, React asegura un rendimiento óptimo al minimizar las actualizaciones innecesarias del DOM real, lo que resulta en aplicaciones más rápidas y fluidas.
          </p>

          <h2 className="text-3xl font-semibold mb-4">¿Qué encontrarás en esta guía?</h2>
          <p className="text-gray-700 mb-6">
            Esta guía cubre una variedad de temas importantes que te ayudarán a convertirte en un experto en React:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li><strong>Componentes:</strong> Aprende a diseñar y gestionar componentes reutilizables que forman la base de cualquier aplicación React. Explora cómo los componentes pueden ser funcionales o basados en clases, y cómo puedes componer componentes para construir interfaces complejas.</li>
            <li><strong>Hooks:</strong> Descubre los hooks de React, como <code>useState</code>, <code>useEffect</code>, y <code>useContext</code>, que te permiten manejar el estado, los efectos secundarios y el contexto de manera más eficiente en componentes funcionales.</li>
            <li><strong>Enrutamiento:</strong> Aprende a implementar el enrutamiento en tus aplicaciones React usando bibliotecas como React Router. Comprende cómo gestionar múltiples vistas y rutas para crear aplicaciones SPA (Single Page Application) robustas.</li>
            <li><strong>Optimización:</strong> Conoce técnicas avanzadas para optimizar el rendimiento de tus aplicaciones React. Aprende a utilizar herramientas y técnicas para hacer que tus aplicaciones sean más rápidas y eficientes.</li>
            <li><strong>Buenas prácticas:</strong> Revisa las mejores prácticas para escribir código React limpio y mantenible. Explora estrategias para organizar tu código, gestionar el estado global y garantizar una alta calidad en tus aplicaciones.</li>
          </ul>

          <h2 className="text-3xl font-semibold mb-4">Recursos adicionales</h2>
          <p className="text-gray-700 mb-6">
            Además de los temas mencionados, esta guía incluye enlaces a recursos adicionales, documentación oficial, y ejemplos prácticos que te ayudarán a aplicar lo que has aprendido. Aprovecha los recursos externos para obtener una comprensión más profunda y mantenerte actualizado con las últimas novedades de React.
          </p>

          <h2 className="text-3xl font-semibold mb-4">¡Comienza a explorar!</h2>
          <p className="text-gray-700 mb-6">
            Navega por los enlaces en la barra lateral para acceder a cada sección de la guía. Cada página ofrece explicaciones detalladas, ejemplos prácticos y consejos útiles para facilitar tu aprendizaje. ¡Empieza tu viaje con React hoy mismo, mejora tus habilidades y lleva tus proyectos web al siguiente nivel!
          </p>
        </section>
    </ContainerGral>
    
    </>
  );
}
