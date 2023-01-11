-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 11 Jan 2023 pada 21.11
-- Versi server: 10.4.27-MariaDB
-- Versi PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_covid`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `patients`
--

CREATE TABLE `patients` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `address` text NOT NULL,
  `status` varchar(50) NOT NULL,
  `in_date_at` date NOT NULL,
  `out_date_at` date NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `patients`
--

INSERT INTO `patients` (`id`, `name`, `phone`, `address`, `status`, `in_date_at`, `out_date_at`, `timestamp`) VALUES
(1, 'Rudin', '32456', 'Bogor', 'Recovered', '2022-01-21', '2022-02-22', '2023-01-11 19:16:10'),
(2, 'Aldi', '123456', 'Bogor', 'Positif', '2022-01-21', '2022-02-22', '2023-01-11 18:04:42'),
(3, 'Sari', '32456', 'Bogor', 'positive', '2022-01-20', '0000-00-00', '2023-01-11 19:18:31'),
(8, 'Galih', '0239743', 'Sukabumi', 'Positive', '2022-12-10', '0000-00-00', '2023-01-11 19:39:30'),
(9, 'Deri', '35325', 'Semarang', 'dead', '2022-10-01', '2022-11-19', '2023-01-11 19:52:16'),
(10, 'Hari', '92347', 'Tanggerang', 'Positive', '2022-10-01', '0000-00-00', '2023-01-11 19:53:10'),
(11, 'Susi', '532532', 'Tanggerang', 'recovered', '2022-10-01', '2022-11-19', '2023-01-11 19:54:15'),
(12, 'fina', '432534', 'Bekasi', 'dead', '2022-01-01', '2022-01-11', '2023-01-11 19:50:40'),
(13, 'fina', '432534', 'Bekasi', '', '0000-00-00', '0000-00-00', '2023-01-11 20:05:40');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `patients`
--
ALTER TABLE `patients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
