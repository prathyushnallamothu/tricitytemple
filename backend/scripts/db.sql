CREATE SCHEMA `tricity_temple` ;

CREATE TABLE `admins` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(65) NOT NULL,
  `firstname` VARCHAR(60) NOT NULL,
  `lastname` VARCHAR(60) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `mobile` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `admins` 
ADD COLUMN `role` INT NOT NULL AFTER `mobile`;

CREATE TABLE `tricity_temple`.`events` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `description` LONGTEXT NOT NULL,
  `img_url` LONGTEXT NULL,
  `start_time` DATETIME NOT NULL,
  `end_time` DATETIME NOT NULL,
  `location` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));
