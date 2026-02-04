import LoginLogistix from '../assets/BeniElectric/LoginLogistix.png'
import LogistixImagen from '../assets/BeniElectric/LogistixImagen.png'
import CategoriasLogistix from '../assets/BeniElectric/CategoriasLogistix.png'
import ProductosLogistix from '../assets/BeniElectric/ProductosLogistix.png'
import ComprasLogistix from '../assets/BeniElectric/ComprasLogistix.png'

import ecommerceJB from '../assets/SolucionesJB/ecommerceJB.png'
import ModalProducto1 from '../assets/SolucionesJB/ModalProducto1.png'
import ModalProducto2 from '../assets/SolucionesJB/ModalProducto2.png'

import Dashboard from '../assets/MyWallet/Dashboard.png'
import PantallaCarga from '../assets/MyWallet/PantallaCarga.png'
import LoginMyWallet from '../assets/MyWallet/LoginMyWallet.png'
import TransaccionesMyWallet from '../assets/MyWallet/TransaccionesMyWallet.png'

import Rankings from '../assets/UFC-API/Rankings.png'
import Inicio from '../assets/UFC-API/Inicio.png'
import Peleadores from '../assets/UFC-API/Peleadores.png'

import Categorias1 from '../assets/Fernanditostore.com/Categorias1.png'
import Categorias2 from '../assets/Fernanditostore.com/Categorias2.png'
import Favoritos from '../assets/Fernanditostore.com/Favoritos.png'
import InicioFernanditoStore from '../assets/Fernanditostore.com/Inicio.png'

import Formulario from '../assets/GeneradorEntradas/Formulario.png'
import Entrada from '../assets/GeneradorEntradas/Entrada.png'

import ChatBot1 from '../assets/InnoVentas/Chatbot1.png'
import ChatBot2 from '../assets/InnoVentas/Chatbot2.png'
import ChatBot3 from '../assets/InnoVentas/Chatbot3.png'

import FernanditoStoreV1 from '../assets/FernanditoStoreV1.png'
import LoginFernanditoStore from '../assets/Fernandito Store/LoginFernanditoStore.png'
import Register from '../assets/Fernandito Store/Register.png'
import Toast from '../assets/Fernandito Store/Toast.png'
import FavoritosFernanditoStore from '../assets/Fernandito Store/FavoritosFernanditoStore.png'

import LandingBeniElectric1 from '../assets/Landing Page/LandingBeniElectric1.png'
import LandingBeniElectric2 from '../assets/Landing Page/LandingBeniElectric2.png'
import LandingBeniElectric3 from '../assets/Landing Page/LandingBeniElectric3.png'
import LandingBeniElectric4 from '../assets/Landing Page/LandingBeniElectric4.png'
import Servicio1 from '../assets/Landing Page/Servicio1.png'
import Servicio2 from '../assets/Landing Page/Servicio2.png'
import Servicio3 from '../assets/Landing Page/Servicio3.png'

import LoginAuth from '../assets/node-auth/Login-Auth.png'
import HomeAuth from '../assets/node-auth/Home-Auth.png'
import HomeAuth2 from '../assets/node-auth/Home-Auth2.png'

import Libros from '../assets/ListoLibros/Libros.png'
import BuscarLibro from '../assets/ListoLibros/BuscarLibro.png'
import AgregarLibro from '../assets/ListoLibros/AgregarLibro.png'
import EditarLibro from '../assets/ListoLibros/EditarLibro.png'
import EliminarLibro from '../assets/ListoLibros/EliminarLibro.png'

import CrudTareas1 from '../assets/CrudTareas/CrudTareas1.png'
import CrudTareas2 from '../assets/CrudTareas/CrudTareas2.png'

// Icons
import PhpIcon from '../assets/Icons/PhpIcon.png'
import JavascriptIcon from '../assets/Icons/JavascriptIcon.png'
import MySQLIcon from '../assets/Icons/MySQLIcon.png'
import CssIcon from '../assets/Icons/CssIcon.png'
import ReactIcon from '../assets/Icons/ReactIcon.png'
import LaravelIcon from '../assets/Icons/LaravelIcon.png'
import TailwindcssIcon from '../assets/Icons/TailwindcssIcon.png'
import PythonIcon from '../assets/Icons/PythonIcon.png'
import DockerIcon from '../assets/Icons/DockerIcon.png'
import TypescriptIcon from '../assets/Icons/TypescriptIcon.png'
import VueIcon from '../assets/Icons/VueIcon.png'
import MongodbIcon from '../assets/Icons/MongodbIcon.png'
import NodejsIcon from '../assets/Icons/NodejsIcon.webp'

export const portfolioItems = [
    {
        id : "1",
        title : "Logistix - Sistema de Gestión",
        company: "Corporación Beni Electric SAC",
        alt : "Logistix",
        image : [LogistixImagen, LoginLogistix, CategoriasLogistix, ProductosLogistix, ComprasLogistix],
        status : "Proyecto Privado",
        description : "Solución personalizada para la gestión logística que automatiza el registro de entradas y salidas de mercancía. Desarrollado para reducir errores manuales y garantizar un control preciso del stock, facilitando la escalabilidad del negocio.",
        url : "",
        icon : [PhpIcon, JavascriptIcon, CssIcon, MySQLIcon]
    },
    {
        id : "2",
        title : "E-commerce JB",
        company: "Soluciones Integrales JB",
        alt : "E-commerce JB",
        image : [ecommerceJB, ModalProducto1, ModalProducto2],
        status : "Proyecto Privado",
        description : "Como parte del equipo de desarrollo, colaboré en la creación de esta plataforma de comercio electrónico, enfocándome en la implementación del carrito de compras y la integración con la base de datos. Trabajamos bajo un enfoque de desarrollo ágil para entregar una solución robusta y escalable para la empresa.",
        url : "",
        icon : [PhpIcon, JavascriptIcon, CssIcon, MySQLIcon]
    },
    {
        id : "3",
        title : "MyWallet - Finanzas Personales",
        company : "Proyecto Personal",
        alt : "MyWallet",
        image : [Dashboard, PantallaCarga, LoginMyWallet, TransaccionesMyWallet],
        status : "Proyecto Privado",
        description : "Software de finanzas personales con capacidades de monitoreo en tiempo real. Incluye un panel de control (dashboard) para la visualización de datos, gestión de transacciones y un sistema organizado de categorías y perfiles de usuario.",
        url : "",
        icon : [PhpIcon, JavascriptIcon, CssIcon, MySQLIcon]
    },
    {
        id : "4",
        title : "API UFC",
        company : "Proyecto Personal",
        alt : "API UFC",
        image : [Rankings, Inicio, Peleadores],
        status : "Ver Proyecto",
        description : "Como fan de las MMA cree esta web que utiliza React y Tailwind CSS para procesar y mostrar datos complejos extraídos de una API externa. Implementé lógica de filtrado y mapeo dinámico para organizar la información de peleadores y posiciones globales, priorizando la velocidad de carga y una interfaz de usuario moderna.",
        url : "https://github.com/CarlosDaniel-GCH/api-ufc",
        icon : [ReactIcon, TailwindcssIcon, JavascriptIcon]
    },
    {
        id : "5",
        title : "fernanditostore.com",
        company : "Proyecto Personal",
        alt : "Fernanditostore.com",
        image : [Categorias1, Categorias2, Favoritos, InicioFernanditoStore],
        status : "Ver Proyecto",
        description : "E-commerce robusto enfocado en la experiencia de usuario y la gestión de inventario. El sistema permite la visualización dinámica de artículos, administración de estados del carrito y una sección personalizada de favoritos. Construido con una arquitectura desacoplada utilizando Laravel como API y React para el Frontend.",
        url : "https://github.com/CarlosDaniel-GCH/fernandito-store",
        icon : [ReactIcon, TailwindcssIcon, LaravelIcon, JavascriptIcon]
    },
    {
        id : "6",
        title : "Generador de Tickets PDF",
        company : "Proyecto Personal",
        alt : "Generador de Tickets",
        image : [Formulario, Entrada],
        status : "Ver Proyecto",
        description : "Aplicación desarrollada con React para la gestión y exportación de datos en formato PDF. Implementé la librería @react-pdf/renderer para transformar entradas de usuario en documentos estructurados, aplicando técnicas de maquetación precisas para replicar fielmente el diseño de un ticket físico.",
        url : "https://github.com/CarlosDaniel-GCH/Generador-tickets",
        icon : [ReactIcon, TailwindcssIcon, JavascriptIcon]
    },
    {
        id : "7",
        title : "InnoVentas - Chatbot",
        company : "Proyecto Personal",
        alt : "InnoVentas - Chatbot",
        image : [ChatBot1, ChatBot2, ChatBot3],
        status : "Ver Proyecto",
        description : "Plataforma interactiva centrada en la integración de un agente de inteligencia artificial para la optimización de ventas y atención al cliente. Desarrollé la lógica del chatbot utilizando Python para el procesamiento de lenguaje, integrándolo en una interfaz moderna y desplegando el entorno completo mediante Docker para asegurar portabilidad y escalabilidad.",
        url : "https://github.com/CarlosDaniel-GCH/InnovVentas_chatbot",
        icon : [ReactIcon, TailwindcssIcon, JavascriptIcon, DockerIcon, PythonIcon]
    },
    {
        id : "8",
        title : "Fernandito Store",
        company : "Proyecto Personal",
        alt : "Fernandito Store",
        image : [FernanditoStoreV1, LoginFernanditoStore, Register, Toast, FavoritosFernanditoStore],
        status : "Ver Proyecto",
        description : "Plataforma de comercio electrónico Full Stack desarrollada con tecnologías nativas para garantizar un control total sobre la lógica del servidor y la base de datos. Implementé un sistema robusto de autenticación (Login/Registro), gestión de sesiones y una funcionalidad de favoritos, integrando notificaciones tipo 'toast' para mejorar la respuesta al usuario ante cada acción.",
        url : "https://github.com/CarlosDaniel-GCH/FernanditoStore-ProyectoFullStack",
        icon : [PhpIcon, CssIcon, JavascriptIcon, MySQLIcon]
    },
    {
        id : "9",
        title : "Beni Electric - Landing Page",
        company : "Corporación Beni Electric SAC",
        alt : "Landing Page Beni Electric",
        image : [LandingBeniElectric1, LandingBeniElectric2, LandingBeniElectric3, LandingBeniElectric4, Servicio1, Servicio2, Servicio3],
        status : "Proyecto Privado",
        description : "Desarrollo frontend de una Landing Page corporativa utilizando React y Tailwind CSS para garantizar un rendimiento óptimo y tiempos de carga mínimos. Implementé una arquitectura de componentes modulares y un diseño totalmente responsivo, asegurando que la identidad visual de la empresa se mantenga consistente en cualquier dispositivo.",
        url : "",
        icon : [ReactIcon, TailwindcssIcon]
    },
    {
        id : "11",
        title : "Autenticacion NodeJs + VueJs",
        company : "Proyecto Personal",
        alt : "Auth Nodejs",
        image : [LoginAuth, HomeAuth, HomeAuth2],
        status : "Ver Proyecto",
        description : "Proyecto hecho con VueJs y NodeJs con el objetivo de poner en practica la auntenticacion con JWT y usando una base de datos no relacional como MongoDB para guardar la información.",
        url : "https://github.com/CarlosDaniel-GCH/auth-node.git",
        icon : [VueIcon, JavascriptIcon, NodejsIcon, MongodbIcon]
    },
    {
        id : "12",
        title : "Lista libros",
        company : "Proyecto Personal",
        alt : "Lista Libros",
        image : [Libros, BuscarLibro, AgregarLibro, EditarLibro, EliminarLibro],
        status : "Ver Proyecto",
        description : "Aplicación Full Stack robusta para la gestión de catálogos bibliográficos, desarrollada con un enfoque en la integridad de datos. Implementé un sistema CRUD completo con relaciones entre tablas de libros y categorías, utilizando TypeScript para garantizar un código mantenible y escalable, junto a un backend sólido en Laravel.",
        url : "https://github.com/CarlosDaniel-GCH/lista-libros",
        icon : [ReactIcon, TailwindcssIcon, LaravelIcon, TypescriptIcon, MySQLIcon]
    },
    {
        id : "13",
        title : "Crud Tareas",
        company : "Proyecto Personal",
        alt : "Crud Tareas",
        image : [CrudTareas1, CrudTareas2],
        status : "Ver Proyecto",
        description : "Aplicación Full Stack desarrollada con Vue.Js y Laravel. Implementé una base de datos para almacenar tareas, el sistema permite agregar, eliminar y marcar tareas como completadas.",
        url : "https://github.com/CarlosDaniel-GCH/crud-tareas",
        icon : [VueIcon, LaravelIcon, JavascriptIcon, MySQLIcon]
    }
];