-- MySQL dump 10.13  Distrib 5.7.25, for Linux (x86_64)
--
-- Host: localhost    Database: hawkdb
-- ------------------------------------------------------
-- Server version	5.7.25-0ubuntu0.18.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `attempts`
--

DROP TABLE IF EXISTS `attempts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `attempts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` int(11) NOT NULL,
  `question` int(11) NOT NULL,
  `answer` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attempts`
--

LOCK TABLES `attempts` WRITE;
/*!40000 ALTER TABLE `attempts` DISABLE KEYS */;
INSERT INTO `attempts` VALUES (3,13,6,'yes',1,'2019-03-28 21:40:01'),(17,13,7,'justinrandalltimberlake',1,'2019-03-28 22:27:34'),(18,15,6,'yes',1,'2019-03-28 22:47:16'),(19,15,7,'justinrandalltimberlake',1,'2019-03-28 22:47:34'),(23,15,8,'vjefk',3,'2019-03-28 23:35:08'),(24,15,8,'vfjeekbekld',3,'2019-03-28 23:35:20'),(25,15,8,'fjebdvjefkvek',3,'2019-03-28 23:35:37'),(26,15,8,'bfee',3,'2019-03-28 23:36:05'),(27,16,6,'yes',1,'2019-03-29 00:55:17');
/*!40000 ALTER TABLE `attempts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forgot_pass_reqs`
--

DROP TABLE IF EXISTS `forgot_pass_reqs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `forgot_pass_reqs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `timestamp` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forgot_pass_reqs`
--

LOCK TABLES `forgot_pass_reqs` WRITE;
/*!40000 ALTER TABLE `forgot_pass_reqs` DISABLE KEYS */;
/*!40000 ALTER TABLE `forgot_pass_reqs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `helps`
--

DROP TABLE IF EXISTS `helps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `helps` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `message` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `helps`
--

LOCK TABLES `helps` WRITE;
/*!40000 ALTER TABLE `helps` DISABLE KEYS */;
/*!40000 ALTER TABLE `helps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hints`
--

DROP TABLE IF EXISTS `hints`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hints` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question` int(11) NOT NULL,
  `active` int(11) NOT NULL,
  `hint` varchar(255) DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `added_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hints`
--

LOCK TABLES `hints` WRITE;
/*!40000 ALTER TABLE `hints` DISABLE KEYS */;
/*!40000 ALTER TABLE `hints` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `questions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `level` int(11) NOT NULL,
  `region` int(11) NOT NULL,
  `question` varchar(255) NOT NULL,
  `answer` varchar(255) NOT NULL,
  `add_info` varchar(255) DEFAULT NULL,
  `added_by` varchar(255) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (6,1,1,'Shall we begin?','yes','','user3','2019-03-28 18:33:27'),(7,2,1,'https://imgur.com/a/aac4Cgl','justinrandalltimberlake','','user3','2019-03-28 18:37:18'),(8,3,1,'king of gods has a body guard.','odinborson','','user3','2019-03-28 18:38:05'),(9,4,1,'This question is art. Frame it.','fourchan','','user3','2019-03-28 18:39:39'),(10,1,2,'It is a ladder.','chaos','','user3','2019-03-28 18:40:13'),(11,2,2,'Doe you even travel through time?','ethangreenhawke','','user3','2019-03-28 18:41:02'),(12,3,2,'Ninth Night at The Opera.','maryaustin','','user3','2019-03-28 18:41:42'),(13,1,3,'Let me be frank, I was deeply intoxicated.','anthonydeanerapp','','user3','2019-03-28 18:42:20'),(14,2,3,'No. I can take rejection.','grandtheftautosanandreas','','user3','2019-03-28 18:50:16'),(15,3,3,'Roger thinks it’s 12, others know it’s 14.','thedivisionbell','','user3','2019-03-28 18:43:38'),(16,1,4,'He should have bought a Fiat instead of a Ferarri.','zlatanibrahimovic','','user3','2019-03-28 18:44:30'),(17,1,0,'Last Week I Review','felixarvidulfkjellberg','','user3','2019-03-28 18:46:06'),(18,2,0,'Peapod','robertnormanross','','user3','2019-03-28 18:46:36'),(19,3,0,'Jerry’s friend is a major','davidrobertjones','','user3','2019-03-28 18:47:03');
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `access` int(11) DEFAULT NULL,
  `banned` int(11) DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `email` varchar(255) NOT NULL,
  `tel` varchar(255) NOT NULL,
  `college` varchar(255) NOT NULL,
  `country` varchar(255) DEFAULT NULL,
  `is_mahe` int(11) DEFAULT NULL,
  `is_verified` int(11) NOT NULL,
  `first_login` int(11) NOT NULL,
  `region0` int(11) DEFAULT NULL,
  `region1` int(11) DEFAULT NULL,
  `region2` int(11) DEFAULT NULL,
  `region3` int(11) DEFAULT NULL,
  `region4` int(11) DEFAULT NULL,
  `region5` int(11) DEFAULT NULL,
  `points` int(11) DEFAULT NULL,
  `sidequest_order` varchar(255) DEFAULT NULL,
  `unlock_order` varchar(255) DEFAULT NULL,
  `side_quest_points` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (10,'Hawk','hawk','$2a$14$xAgyRgp27eLfUZlw5kuQl.cuIBbay49u0AfeA0//gh1VBeHqhFbCG',0,0,'2019-03-28 20:07:58','hawk@iecsemanipal.com','9873430184','MIT Manipal','',0,1,1,1,0,0,0,0,100,1,'0,3,2,4,5','0',1),(11,'Ekam','ekam','$2a$14$6YegBlW6IZJ0crCMvOZvVO5ERCR/OxcHlareUlNPAoR4ykoUl5bAG',0,0,'2019-03-28 21:14:07','ekam@iecsemanipal.com','8050030184','MIT Manipal','',0,1,0,1,0,0,0,0,0,1,'0,3,4,2,5','0',0),(12,'Ekam Two','ekam2','$2a$14$Yet/Cfk7BJBQ6Ga4IWKPW.yvQJcjL6I63S5zuGGnvWXZg8pL6GOay',0,0,'2019-03-28 20:07:58','ekamwalia@gmail.com','9876543210','MIT Manipal','',0,1,1,1,0,0,0,0,0,1,'0,4,2,3,5','0',0),(13,'user five','user5','$2a$14$kwJ79lcngViioORyMzgiwORSbwE2hvmovtLgPHmjbc5l32t1IP62.',0,0,'2019-03-28 22:27:34','user5@gmail.com','7890456734','mit manial','',0,1,0,1,3,0,0,0,0,2,'1,4,5,2,3,6','',0),(14,'Pranav Tharoor','AppallingApple','$2a$14$/RkF9HHtySatQz2Crb1Fk.zeaAcxf6hLpeLoVg2Urdw4Q.H.eVyk6',0,0,'2019-03-28 22:23:20','pranav.tharoor@gmail.com','09480160349','MIT','',0,1,0,1,1,0,0,0,0,0,'1,2,6,4,3,5','',0),(15,'User six','user6','$2a$14$4KBJzGZrKvWINtiJT9fageaIFoBzC4UbgHDVjWh7MnLD8ZMD6SVNC',0,0,'2019-03-28 22:47:33','user6@email.com','56789012345','mit manipal','',0,1,0,1,3,0,0,0,0,2,'1,2,3,6,5,4','0,2,3,4,5',0),(16,'Pranav Tharoor','asdasdasd','$2a$14$HlMB4stAr3PZ6KmEWWtmXO.hsaZDGYYP7ZRQYpjdRzEdnfRH1Fh0G',0,0,'2019-03-29 00:55:17','pranavtharoor@gmail.com','09480160349','asdasdasd','',0,1,0,1,2,0,0,0,0,1,'1,3,6,4,5,2','0,3,2,4,5',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `verifications`
--

DROP TABLE IF EXISTS `verifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `verifications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `verifications`
--

LOCK TABLES `verifications` WRITE;
/*!40000 ALTER TABLE `verifications` DISABLE KEYS */;
INSERT INTO `verifications` VALUES (1,'user5@gmail.com','x4xTIilA4oxVMyWoxFn2oNhAqDoVjglwHZeCRB38ZO7N5a2j6wzYnfqtTXA0X'),(2,'pranav.tharoor@gmail.com','l2K1Jcg2PHrBjkoymvJ7IXupHSZ4uVCdLcuHmKYXAiYkPVTgYnaxlgR38Rcr5'),(3,'user6@email.com','PpNr9KB4Wg6aUucEUvwFLbbjnatUZ9E1e1JcZqA1629ES1gEZ7EyC28Mr46vU'),(4,'pranavtharoor@gmail.com','zUNUg6lDNffUsxs0t6gRrmxr6QuzpPOL0nPrMC1xBaYnRMWOyUTI0qkCQgJMV');
/*!40000 ALTER TABLE `verifications` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-29  0:56:45
