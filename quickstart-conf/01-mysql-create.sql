-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 17, 2017 at 10:04 AM
-- Server version: 5.7.18-0ubuntu0.16.04.1
-- PHP Version: 7.0.18-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `monitor`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `alarm_reading`
--

CREATE TABLE `alarm_reading` (
  `id` bigint(20) NOT NULL,
  `date_recorded` datetime NOT NULL,
  `rule_fk` bigint(20) DEFAULT NULL,
  `device_fk` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `alarm_rule`
--

CREATE TABLE `alarm_rule` (
  `id` bigint(20) NOT NULL,
  `alarm_type` int(11) DEFAULT NULL,
  `email_to_alert` varchar(255) DEFAULT NULL,
  `high` float DEFAULT NULL,
  `low` float DEFAULT NULL,
  `account_fk` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `device`
--

CREATE TABLE `device` (
  `id` bigint(20) NOT NULL,
  `description` varchar(40) NOT NULL,
  `height_above_sea_level` float DEFAULT NULL,
  `lat` float DEFAULT NULL,
  `longitue` float DEFAULT NULL,
  `name` varchar(15) NOT NULL,
  `account_fk` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `temp_reading`
--

CREATE TABLE `temp_reading` (
  `id` bigint(20) NOT NULL,
  `date_recorded` datetime DEFAULT NULL,
  `reading` float NOT NULL,
  `temp_type` varchar(255) DEFAULT NULL,
  `device_fk` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_q0uja26qgu1atulenwup9rxyr` (`email`);

--
-- Indexes for table `alarm_reading`
--
ALTER TABLE `alarm_reading`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKh96bscqk6im01irng0wj3qsoq` (`rule_fk`),
  ADD KEY `FK6mfg0kaoog4fx0p94e81wuuhx` (`device_fk`);

--
-- Indexes for table `alarm_rule`
--
ALTER TABLE `alarm_rule`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK90whqmd681ys0matkq0tnge34` (`account_fk`);

--
-- Indexes for table `device`
--
ALTER TABLE `device`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKf880yd6pu34310uhf4hg07c5v` (`account_fk`);

--
-- Indexes for table `temp_reading`
--
ALTER TABLE `temp_reading`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKtllo4ffyelrcigta0jhxx58bb` (`device_fk`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `alarm_reading`
--
ALTER TABLE `alarm_reading`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `alarm_rule`
--
ALTER TABLE `alarm_rule`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `device`
--
ALTER TABLE `device`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `temp_reading`
--
ALTER TABLE `temp_reading`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `alarm_reading`
--
ALTER TABLE `alarm_reading`
  ADD CONSTRAINT `FK6mfg0kaoog4fx0p94e81wuuhx` FOREIGN KEY (`device_fk`) REFERENCES `device` (`id`),
  ADD CONSTRAINT `FKh96bscqk6im01irng0wj3qsoq` FOREIGN KEY (`rule_fk`) REFERENCES `alarm_rule` (`id`);

--
-- Constraints for table `alarm_rule`
--
ALTER TABLE `alarm_rule`
  ADD CONSTRAINT `FK90whqmd681ys0matkq0tnge34` FOREIGN KEY (`account_fk`) REFERENCES `account` (`id`);

--
-- Constraints for table `device`
--
ALTER TABLE `device`
  ADD CONSTRAINT `FKf880yd6pu34310uhf4hg07c5v` FOREIGN KEY (`account_fk`) REFERENCES `account` (`id`);

--
-- Constraints for table `temp_reading`
--
ALTER TABLE `temp_reading`
  ADD CONSTRAINT `FKtllo4ffyelrcigta0jhxx58bb` FOREIGN KEY (`device_fk`) REFERENCES `device` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

insert into monitor.account(id,email,password,first_name,last_name) values(1,'polinchw@netscape.net','password','William','Polinchak');
insert into monitor.account(id,email,password,first_name,last_name) values(2,'admin','admin','William','Polinchak');