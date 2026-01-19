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

import Libros from '../assets/ListoLibros/Libros.png'
import BuscarLibro from '../assets/ListoLibros/BuscarLibro.png'
import AgregarLibro from '../assets/ListoLibros/AgregarLibro.png'
import EditarLibro from '../assets/ListoLibros/EditarLibro.png'
import EliminarLibro from '../assets/ListoLibros/EliminarLibro.png'

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

export const portfolioItems = [
    {
        id : "1",
        title : "Logistix - Sistema de Gestión",
        company: "Corporación Beni Electric SAC",
        alt : "Logistix",
        image : [LogistixImagen, LoginLogistix, CategoriasLogistix, ProductosLogistix, ComprasLogistix],
        status : "Proyecto Privado",
        description : "Sistema de Gestión de Inventario desarrollado para la Corporación Beni Electric SAC con el objetivo de mejorar la gestión de su inventario e incrementar sus ganancias a futuro.",
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
        description : "Un carrito de compras desarrollado para la empresa Soluciones Integrales JB",
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
        description : "Mi primer proyecto personal desarrollado con el objetivo de mejorar la gestion de mis finanzas personales.",
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
        description : "Como fan de las MMA decidi desarrollar un proyecto para consumir la API de UFC y cargar dinamicamente la web con la información extraida.",
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
        description : "Fernanditostore.com es un proyecto de ecommerce con el objetivo de mejorar mi manejo de Laravel y React.",
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
        description : "Un generador de PDF desarrollado con React con el objetivo de aprender a utilizar la libreria de React PDF",
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
        description : "InnoVentas es un proyecto que hice para aprender a implementar un agente de IA en una pagina web.",
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
        description : "Fernandito Store es un proyecto hecho con tecnologias nativas con Login, Register, Favoritos, Pagina de inicio e incluye toast para las acciones del programa.",
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
        description : "Una landing page desarrollada para mejorar la visibilidad de la empresa Corporación Beni Electric SAC",
        url : "",
        icon : [ReactIcon, TailwindcssIcon]
    },
    {
        id : "10",
        title : "Lista libros",
        company : "Proyecto Personal",
        alt : "Lista Libros",
        image : [Libros, BuscarLibro, AgregarLibro, EditarLibro, EliminarLibro],
        status : "Ver Proyecto",
        description : "Un proyecto Fullstack para agregar, editar, buscar y eliminar libros de una lista.",
        url : "",
        icon : [ReactIcon, TailwindcssIcon, LaravelIcon, TypescriptIcon]
    }
];