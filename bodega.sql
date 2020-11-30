-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 30, 2020 at 03:18 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bodega`
--

-- --------------------------------------------------------

--
-- Table structure for table `carrito`
--

CREATE TABLE `carrito` (
  `usuarios_id` int(11) NOT NULL,
  `productos_id` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `precio` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`id`, `titulo`, `cantidad`, `imagen`, `precio`) VALUES
(1, 'Aguacate', 50, '../assets/aguacate.jpg', 2),
(2, 'Ajo', 26, '../assets/ajo.jpg', 3),
(3, 'Almendras', 28, '../assets/almendras.jpg', 5),
(4, 'Arandanos', 265, '../assets/arandanos.jpg', 5),
(5, 'Brocoli', 38, '../assets/brocoli.png', 1),
(6, 'Calabaza', 16, '../assets/calabaza.jpg', 6),
(7, 'Canela', 58, '../assets/canela.jpg', 10),
(8, 'Cebolla', 75, '../assets/cebolla.jpg', 2),
(9, 'Fresa', 771, '../assets/fresa.jpg', 6),
(10, 'Kiwi', 45, '../assets/kiwi.jpg', 7),
(11, 'Limon', 78, '../assets/limon.jpg', 4),
(12, 'Lychee', 973, '../assets/lychee.jpg', 3),
(13, 'Maiz', 20, '../assets/maiz.jpg', 1),
(14, 'Manzana', 60, '../assets/manzana.jpg', 12),
(15, 'Naranja', 300, '../assets/naranja.jpg', 2),
(16, 'Papa', 747, '../assets/papa.jpg', 2),
(17, 'Pasta', 88, '../assets/pasta.jpg', 6),
(18, 'Pimienta', 63, '../assets/pimienta.jpg', 1),
(19, 'Repollo', 276, '../assets/repollo.jpg', 3),
(20, 'Tomate', 65, '../assets/tomate.jpg', 1),
(21, 'Zanahoria', 79, '../assets/zanahoria.jpg', 3);

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `contrasena`) VALUES
(1, 'f@gmail.com', '$2y$10$JhW1j8HT4aSOoOCcn8jrUueCuK2hGJd.DXDmbk5kXYGHVSHAvaYNS'),
(2, 'p@gmail.com', '$2y$10$LfbrB1f9S/VVkMWwWedFsuU6oVoXksPEyiqWi2LRyvrfPhJbe2lda');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carrito`
--
ALTER TABLE `carrito`
  ADD KEY `fk_usuarios_has_productos_productos1_idx` (`productos_id`),
  ADD KEY `fk_usuarios_has_productos_usuarios_idx` (`usuarios_id`);

--
-- Indexes for table `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `fk_usuarios_has_productos_productos1` FOREIGN KEY (`productos_id`) REFERENCES `productos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_usuarios_has_productos_usuarios` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
