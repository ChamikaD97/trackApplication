-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 28, 2021 at 07:51 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `expencetracker`
--

-- --------------------------------------------------------

--
-- Table structure for table `expences`
--

CREATE TABLE `expences` (
  `id` int(11) NOT NULL,
  `date` varchar(15) NOT NULL,
  `description` varchar(50) NOT NULL,
  `Amount` int(11) NOT NULL,
  `type` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `expences`
--

INSERT INTO `expences` (`id`, `date`, `description`, `Amount`, `type`) VALUES
(2, '2021-10-20', 'Buy Clothes', 2000, 'Shopping'),
(7, '2021-10-15', 'Pay My Internet Bill', 1500, 'Telephone'),
(8, '2021-10-15', 'Pay My Internet Bill', 1500, 'Travelling'),
(9, '2021-10-12', 'Buy a Pizza', 1400, 'Food'),
(11, '2021-10-14', 'Cricket Tickets', 1500, 'Other'),
(13, '2021-10-04', 'Internet BIll payment', 150, 'Internet'),
(14, '2021-10-12', 'Mobitel-Internet Card', 150, 'Internet'),
(15, '2021-10-12', 'Buy Some Foods', 500, 'Shopping'),
(18, '2021-10-13', 'Bill Payment', 1400, 'Other'),
(26, '2021-10-27', 'Nasi', 1500, 'Food'),
(27, '2021-10-20', 'Went to KFC', 2500, 'Food'),
(28, '2021-10-27', 'Bill Payment', 2500, 'Internet'),
(29, '2021-10-20', 'Bill Payment', 2000, 'Telephone'),
(30, '2021-10-20', 'Bill Payment', 1500, 'Internet');

-- --------------------------------------------------------

--
-- Table structure for table `maxexpence`
--

CREATE TABLE `maxexpence` (
  `id` int(11) NOT NULL,
  `updatedOn` varchar(20) NOT NULL,
  `oldValue` int(11) NOT NULL,
  `newValue` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `maxexpence`
--

INSERT INTO `maxexpence` (`id`, `updatedOn`, `oldValue`, `newValue`) VALUES
(1, '2021-10-19', 10000, 5000),
(2, '2021-10-26', 150000, 7500),
(3, '2021-10-26', 150000, 8000),
(4, '2021-10-26', 29, 10000),
(5, '2021-10-26', 150000, 12000),
(6, '2021-10-26', 159480, 15000),
(7, '2021-10-26', 23, 20000),
(8, '2021-10-26', 44, 26000),
(9, '2021-10-26', 50000, 30000),
(10, '2021-10-26', 2, 32500),
(11, '2021-10-26', 25000, 40000),
(55, '2021-10-27', 40000, 50000),
(56, '2021-10-27', 50000, 45000),
(57, '2021-10-27', 45000, 44000),
(58, '2021-10-27', 44000, 40000),
(59, '2021-10-27', 40000, 45000),
(60, '2021-10-27', 45000, 60000),
(61, '2021-10-27', 60000, 65000),
(62, '2021-10-27', 65000, 70000),
(63, '2021-10-27', 70000, 72000),
(64, '2021-10-27', 72000, 75000),
(65, '2021-10-27', 75000, 78000),
(66, '2021-10-27', 78000, 50000),
(67, '2021-10-27', 50000, 65000),
(68, '2021-10-27', 65000, 70000),
(69, '2021-10-28', 70000, 500),
(70, '2021-10-28', 500, 80000),
(71, '2021-10-28', 80000, 50000),
(72, '2021-10-28', 50000, 150000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `expences`
--
ALTER TABLE `expences`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `maxexpence`
--
ALTER TABLE `maxexpence`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `expences`
--
ALTER TABLE `expences`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `maxexpence`
--
ALTER TABLE `maxexpence`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
