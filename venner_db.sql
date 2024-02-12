-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: venner_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP DATABASE IF EXISTS venner_db;
CREATE DATABASE venner_db;
USE venner_db;

--
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `country` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country`
--

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` VALUES (1,'Italia'),(2,'Francia'),(3,'España'),(4,'Estados Unidos'),(5,'Argentina'),(6,'Australia'),(7,'Alemania'),(8,'China'),(9,'Rusia'),(10,'Reino Unido');
/*!40000 ALTER TABLE `country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grapes`
--

DROP TABLE IF EXISTS `grapes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `grapes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grapes`
--

LOCK TABLES `grapes` WRITE;
/*!40000 ALTER TABLE `grapes` DISABLE KEYS */;
INSERT INTO `grapes` VALUES (1,'Syrah/Shiraz'),(2,'Cabernet Sauvignon'),(3,'Grüner Veltliner'),(4,'Grenache'),(5,'Semillon'),(6,'Gewurztraminer'),(7,'Malbec'),(8,'Merlot'),(9,'Sauvignon Blanc'),(10,'Viognier'),(11,'Pinot Gris/Grigio'),(12,'Albariño'),(13,'Chardonnay'),(14,'Pinot Noir'),(15,'Riesling'),(16,'Tempranillo'),(17,'Zinfandel'),(18,'Nebbiolo'),(19,'Sangiovese'),(20,'Carménère'),(21,'Petit Verdot'),(22,'Touriga Nacional'),(23,'Mourvèdre'),(24,'Chenin Blanc'),(25,'Vermentino'),(26,'Barbera'),(27,'Viura/Macabeo'),(28,'Muscat/Moscato'),(29,'Tannat'),(30,'Glera');
/*!40000 ALTER TABLE `grapes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `country_id` int(10) unsigned DEFAULT NULL,
  `grapes_id` int(10) unsigned DEFAULT NULL,
  `price` decimal(6,2) NOT NULL,
  `discount` int(11) NOT NULL,
  `description` varchar(400) DEFAULT NULL,
  `stock_id` int(10) unsigned DEFAULT NULL,
  `id_image` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `country_id` (`country_id`),
  KEY `grapes_id` (`grapes_id`),
  KEY `stock_id` (`stock_id`),
  KEY `id_image` (`id_image`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`grapes_id`) REFERENCES `grapes` (`id`),
  CONSTRAINT `products_ibfk_3` FOREIGN KEY (`stock_id`) REFERENCES `stock` (`id`),
  CONSTRAINT `products_ibfk_4` FOREIGN KEY (`id_image`) REFERENCES `images` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Château Margaux',NULL,NULL,0.00,0,'Un vino tinto francés de renombre mundial, conocido por su elegancia y complejidad.',1,NULL),(2,'Domaine de la Romanée-Conti Romanée-Conti',NULL,NULL,0.00,0,'Uno de los vinos tintos más caros y exclusivos del mundo, producido en Borgoña, Francia.',2,NULL),(3,'Sassicaia',NULL,NULL,0.00,0,'Un vino tinto italiano de la región de la Toscana, famoso por su estructura y longevidad.',3,NULL),(4,'Opus One',NULL,NULL,0.00,0,'Un vino tinto icónico de Napa Valley, California, conocido por su armonía y equilibrio.',4,NULL),(5,'Penfolds Grange',NULL,NULL,0.00,0,'Un vino tinto australiano de estilo Shiraz, altamente aclamado por su calidad y longevidad.',5,NULL),(6,'Vega Sicilia Único',NULL,NULL,0.00,0,'Un vino tinto español de la región de Ribera del Duero, considerado uno de los mejores vinos de España.',6,NULL),(7,'Château d\'Yquem',NULL,NULL,0.00,0,'Un vino blanco dulce francés de la región de Sauternes, reconocido por su elegancia y complejidad.',7,NULL),(8,'Cloudy Bay Sauvignon Blanc',NULL,NULL,0.00,0,'Un vino blanco neozelandés de Marlborough, conocido por su frescura y notas de frutas tropicales.',8,NULL),(9,'Riesling Dr. Loosen',NULL,NULL,0.00,0,'Un vino blanco alemán de la región del Mosela, apreciado por su acidez y capacidad de envejecimiento.',9,NULL),(10,'Gaja Gaia & Rey Chardonnay',NULL,NULL,0.00,0,'Un vino blanco italiano de la región de Piamonte, elaborado con la variedad Chardonnay y conocido por su elegancia y complejidad.',10,NULL),(11,'Moët & Chandon Impérial Brut',NULL,NULL,0.00,0,'Un champagne francés icónico, reconocido por su frescura, elegancia y notas de frutas.',11,NULL),(12,'Veuve Clicquot Yellow Label Brut',NULL,NULL,0.00,0,'Otro champagne francés de renombre, apreciado por su equilibrio entre frescura y complejidad.',12,NULL),(13,'Dom Pérignon Vintage',NULL,NULL,0.00,0,'Un champagne de lujo producido por Moët & Chandon, famoso por su calidad y prestigio.',13,NULL),(14,'Krug Grande Cuvée',NULL,NULL,0.00,0,'Un champagne de alta gama conocido por su riqueza y complejidad, elaborado por la casa Krug en Francia.',14,NULL),(15,'Laurent-Perrier Cuvée Rosé Brut',NULL,NULL,0.00,0,'Un champagne rosado fresco y afrutado, ideal para celebraciones.',15,NULL),(16,'Taylor Fladgate 20 Year Old Tawny Port',NULL,NULL,0.00,0,'Un vino fortificado portugués envejecido durante 20 años en barricas de roble, conocido por su suavidad y complejidad.',16,NULL),(17,'Graham’s Six Grapes Reserve Port',NULL,NULL,0.00,0,'Un vino fortificado portugués con notas de frutas maduras y especias, ideal para maridar con postres.',17,NULL),(18,'Lustau Solera Reserva Sherry',NULL,NULL,0.00,0,'Un jerez español de calidad premium, equilibrado y aromático, con notas de nueces y caramelo.',18,NULL),(19,'Warre’s Otima 10 Year Old Tawny Port',NULL,NULL,0.00,0,'Otro excelente ejemplo de un vino fortificado portugués, envejecido durante 10 años en barricas de roble, con notas de frutas secas y caramelo.',19,NULL),(20,'Bodegas Tradición Palo Cortado VORS',NULL,NULL,0.00,0,'Un jerez español Palo Cortado de calidad excepcional, envejecido durante más de 30 años en barricas de roble, con una complejidad extraordinaria.',20,NULL),(21,'Antinori Tignanello',NULL,NULL,0.00,0,'Un vino toscano de renombre, elaborado con uvas Sangiovese, Cabernet Sauvignon y Cabernet Franc, conocido por su estructura y elegancia.',21,NULL),(22,'Bodegas Vega Sicilia Valbuena 5°',NULL,NULL,0.00,0,'Un vino tinto español de la región de Ribera del Duero, elaborado con la variedad Tinto Fino y envejecido durante 5 años en barricas de roble francés y americano.',22,NULL),(23,'Catena Zapata Nicolás Catena Zapata',NULL,NULL,0.00,0,'Un vino argentino de alta gama elaborado con uvas Malbec y Cabernet Sauvignon, conocido por su intensidad y complejidad.',23,NULL),(24,'Penfolds Bin 389 Cabernet Shiraz',NULL,NULL,0.00,0,'Un vino australiano emblemático elaborado con una mezcla de Cabernet Sauvignon y Shiraz, equilibrado y potente.',24,NULL),(25,'Château Latour',NULL,NULL,0.00,0,'Un vino tinto de Bordeaux de la prestigiosa región de Pauillac, conocido por su estructura y longevidad.',25,NULL),(26,'Château Mouton Rothschild',NULL,NULL,0.00,0,'Otro vino tinto de Pauillac, Bordeaux, famoso por su elegancia y potencial de envejecimiento.',NULL,NULL),(27,'Almaviva',NULL,NULL,0.00,0,'Un vino tinto chileno de alta gama elaborado en colaboración entre Viña Concha y Toro y el famoso Château Mouton Rothschild, conocido por su finura y complejidad.',NULL,NULL),(28,'Stag’s Leap Wine Cellars Cabernet Sauvignon',NULL,NULL,0.00,0,'Un vino tinto californiano emblemático, conocido por su potencia y elegancia, especialmente en la variedad Cabernet Sauvignon.',NULL,NULL),(29,'Caymus Vineyards Special Selection Cabernet Sauvig',NULL,NULL,0.00,0,'Un vino tinto de Napa Valley, California, de alta gama y prestigio, elaborado con uvas Cabernet Sauvignon seleccionadas de viñedos específicos.',NULL,NULL),(30,'Screaming Eagle Cabernet Sauvignon',NULL,NULL,0.00,0,'Uno de los vinos tintos más exclusivos y caros de Napa Valley, California, conocido por su calidad excepcional y producción limitada.',NULL,NULL),(31,'Domaine Serene Evenstad Reserve Pinot Noir',NULL,NULL,0.00,0,'Un vino tinto de Oregón, Estados Unidos, de alta gama elaborado con la variedad Pinot Noir, reconocido por su elegancia y finura.',NULL,NULL),(32,'Opus One Overture',NULL,NULL,0.00,0,'Una segunda etiqueta de Opus One, elaborada con una mezcla de uvas tintas seleccionadas de Napa Valley, California, que ofrece una entrada al estilo de Opus One a un precio más accesible.',NULL,NULL),(33,'Domaine Leflaive Puligny-Montrachet',NULL,NULL,0.00,0,'Un vino blanco de Borgoña, Francia, elaborado con la variedad Chardonnay, conocido por su elegancia y mineralidad.',NULL,NULL),(34,'Leeuwin Estate Art Series Chardonnay',NULL,NULL,0.00,0,'Un vino blanco australiano de renombre, equilibrado y elegante, elaborado con la variedad Chardonnay en la región de Margaret River.',NULL,NULL),(35,'Château Smith Haut Lafitte Blanc',NULL,NULL,0.00,0,'Un vino blanco de Bordeaux de la región de Pessac-Léognan, elaborado con una mezcla de Sauvignon Blanc y Sémillon, conocido por su frescura y complejidad.',NULL,NULL),(36,'Kumeu River Mate\'s Vineyard Chardonnay',NULL,NULL,0.00,0,'Un vino blanco neozelandés de alta gama elaborado con la variedad Chardonnay en la región de Kumeu, conocido por su elegancia y mineralidad.',NULL,NULL),(37,'Chablis Grand Cru Les Clos Domaine William Fèvre',NULL,NULL,0.00,0,'Un vino blanco de Chablis de calidad excepcional, elaborado con la variedad Chardonnay en la prestigiosa denominación Grand Cru Les Clos.',NULL,NULL),(38,'Taittinger Comtes de Champagne Blanc de Blancs',NULL,NULL,0.00,0,'Un champagne francés de lujo elaborado exclusivamente con uvas Chardonnay, conocido por su frescura y elegancia.',NULL,NULL),(39,'Perrier-Jouët Belle Epoque',NULL,NULL,0.00,0,'Otro champagne francés de alta gama, reconocido por su botella decorada con flores de anémona y por su frescura y delicadeza.',NULL,NULL),(40,'Bollinger La Grande Année',NULL,NULL,0.00,0,'Un champagne de prestigio elaborado con una selección de uvas de viñedos Grand Cru, conocido por su riqueza y complejidad.',NULL,NULL),(41,'Dom Ruinart Blanc de Blancs',NULL,NULL,0.00,0,'Un champagne de la casa Ruinart elaborado exclusivamente con uvas Chardonnay de viñedos Grand Cru, conocido por su frescura y elegancia.',NULL,NULL),(42,'Ruinart Rosé',NULL,NULL,0.00,0,'Un champagne rosado fresco y afrutado, elaborado por la casa Ruinart con una mezcla de uvas Chardonnay y Pinot Noir.',NULL,NULL),(43,'Niepoort Vintage Port',NULL,NULL,0.00,0,'Un vino fortificado portugués de alta gama, elaborado con uvas de viñedos viejos en la región del Duero, conocido por su intensidad y longevidad.',NULL,NULL),(44,'Fonseca Vintage Port',NULL,NULL,0.00,0,'Otro excelente ejemplo de un vino fortificado portugués, famoso por su riqueza y estructura, con capacidad de envejecimiento durante décadas.',NULL,NULL),(45,'Blandy\'s Malmsey Madeira',NULL,NULL,0.00,0,'Un vino fortificado de la isla de Madeira, Portugal, elaborado con la variedad Malmsey, conocido por su dulzura y complejidad.',NULL,NULL),(46,'González Byass Apostoles Palo Cortado',NULL,NULL,0.00,0,'Un jerez español excepcional, envejecido mediante el sistema de criaderas y soleras, con una complejidad extraordinaria y notas de frutas secas y especias.',NULL,NULL),(47,'Château d\'Arche Sauternes',NULL,NULL,0.00,0,'Un vino blanco dulce de la región de Sauternes, Bordeaux, elaborado con uvas Semillon y Sauvignon Blanc, conocido por su elegancia y complejidad.',NULL,NULL),(48,'Taylor Fladgate Vintage Port',NULL,NULL,0.00,0,'Un vino fortificado portugués de alta gama, producido en años excepcionales y conocido por su potencial de envejecimiento durante décadas.',NULL,NULL),(49,'Bodegas Hidalgo La Gitana Manzanilla',NULL,NULL,0.00,0,'Una manzanilla española seca y fresca, elaborada en Sanlúcar de Barrameda, con una gran pureza y elegancia.',NULL,NULL),(50,'Graham\'s 20 Year Old Tawny Port',NULL,NULL,0.00,0,'Un vino fortificado portugués envejecido durante 20 años en barricas de roble, con una complejidad extraordinaria y notas de frutas secas y especias.',NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_grapes`
--

DROP TABLE IF EXISTS `products_grapes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_grapes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `grapes_id` int(10) unsigned DEFAULT NULL,
  `products_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `grapes_id` (`grapes_id`),
  KEY `products_id` (`products_id`),
  CONSTRAINT `products_grapes_ibfk_1` FOREIGN KEY (`grapes_id`) REFERENCES `grapes` (`id`),
  CONSTRAINT `products_grapes_ibfk_2` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_grapes`
--

LOCK TABLES `products_grapes` WRITE;
/*!40000 ALTER TABLE `products_grapes` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_grapes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rol` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock`
--

DROP TABLE IF EXISTS `stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stock` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `products_id` int(10) unsigned DEFAULT NULL,
  `quantity` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `products_id` (`products_id`),
  CONSTRAINT `stock_ibfk_1` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=277 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
INSERT INTO `stock` VALUES (1,1,56),(2,2,45),(3,3,24),(4,4,58),(5,5,26),(6,6,54),(7,7,98),(8,8,45),(9,9,51),(10,10,87),(11,11,95),(12,12,101),(13,13,51),(14,14,98),(15,15,75),(16,16,84),(17,17,98),(18,18,65),(19,19,24),(20,20,87),(21,21,34),(22,22,45),(23,23,45),(24,24,76),(25,25,19);
/*!40000 ALTER TABLE `stock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `rol_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `rol_id` (`rol_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`rol_id`) REFERENCES `rol` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-12  2:24:51
