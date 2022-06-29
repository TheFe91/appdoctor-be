-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Creato il: Giu 29, 2022 alle 15:13
-- Versione del server: 5.7.34
-- Versione PHP: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `TechLabProject`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `Patientlist`
--

CREATE TABLE `Patientlist` (
  `Patient` varchar(16) NOT NULL,
  `Staff` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struttura della tabella `Patients`
--

CREATE TABLE `Patients` (
  `SSN` varchar(16) NOT NULL,
  `Name` varchar(40) DEFAULT NULL,
  `Surname` varchar(40) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Password` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struttura della tabella `Personnel`
--

CREATE TABLE `Personnel` (
  `StaffId` varchar(16) NOT NULL,
  `Name` varchar(40) DEFAULT NULL,
  `Surname` varchar(40) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Password` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struttura della tabella `Sessions`
--

CREATE TABLE `Sessions` (
  `SessionId` varchar(16) NOT NULL,
  `Patient` varchar(16) NOT NULL,
  `Staff` varchar(16) NOT NULL,
  `Date` date DEFAULT NULL,
  `Level` int(11) DEFAULT NULL,
  `Complete` int(11) DEFAULT NULL,
  `TotalTime` int(11) DEFAULT NULL,
  `trunkCShelfR1` varchar(6) DEFAULT NULL,
  `trunkCShelfR2` varchar(6) DEFAULT NULL,
  `trunkCShelfR3` varchar(6) DEFAULT NULL,
  `trunkCShelfL1` varchar(6) DEFAULT NULL,
  `trunkCShelfL2` varchar(6) DEFAULT NULL,
  `trunkCShelfL3` varchar(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `Patientlist`
--
ALTER TABLE `Patientlist`
  ADD PRIMARY KEY (`Patient`,`Staff`),
  ADD KEY `Staff` (`Staff`);

--
-- Indici per le tabelle `Patients`
--
ALTER TABLE `Patients`
  ADD PRIMARY KEY (`SSN`);

--
-- Indici per le tabelle `Personnel`
--
ALTER TABLE `Personnel`
  ADD PRIMARY KEY (`StaffId`);

--
-- Indici per le tabelle `Sessions`
--
ALTER TABLE `Sessions`
  ADD PRIMARY KEY (`SessionId`,`Patient`,`Staff`),
  ADD KEY `Patient` (`Patient`),
  ADD KEY `Staff` (`Staff`);

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `Patientlist`
--
ALTER TABLE `Patientlist`
  ADD CONSTRAINT `patientlist_ibfk_1` FOREIGN KEY (`Patient`) REFERENCES `Patients` (`SSN`),
  ADD CONSTRAINT `patientlist_ibfk_2` FOREIGN KEY (`Staff`) REFERENCES `Personnel` (`StaffId`);

--
-- Limiti per la tabella `Sessions`
--
ALTER TABLE `Sessions`
  ADD CONSTRAINT `sessions_ibfk_1` FOREIGN KEY (`Patient`) REFERENCES `Patients` (`SSN`),
  ADD CONSTRAINT `sessions_ibfk_2` FOREIGN KEY (`Staff`) REFERENCES `Personnel` (`StaffId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
