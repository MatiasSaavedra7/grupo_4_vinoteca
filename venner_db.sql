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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country`
--

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` VALUES (1,'Italia'),(2,'Francia'),(3,'España'),(4,'Estados Unidos'),(5,'Argentina'),(6,'Australia'),(7,'Alemania'),(8,'China'),(9,'Rusia'),(10,'Reino Unido'),(11,'Portugal'),(12,'Nueva Zelanda'),(13,'Chile');
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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'arcangel.png'),(2,'catena.png'),(3,'colome.png'),(4,'don.png'),(5,'estancia.webp'),(6,'linterna.png'),(7,'paraiso.png'),(8,'raza-argentina.png'),(9,'raza-argentina-blanco.png'),(10,'yacochuya.png'),(11,'zuccardi.png'),(12,'saintfelicien.png'),(13,'mantis.png'),(14,'vaquita.png'),(15,'escorihuela.png'),(16,'whispering.png'),(17,'vinacobos.png'),(18,'cuvelier.png'),(19,'reservaespecial.png'),(20,'penon.png');
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
  `price` float NOT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=155 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Château Margaux',2,5,42571,10,'Un vino tinto francés de renombre mundial, conocido por su elegancia y complejidad.',1,1),(2,'Domaine de la Romanée-Conti Romanée-Conti',2,NULL,39375.1,0,'Uno de los vinos tintos más caros y exclusivos del mundo, producido en Borgoña, Francia.',2,3),(3,'Sassicaia',1,NULL,18365.9,40,'Un vino tinto italiano de la región de la Toscana, famoso por su estructura y longevidad.',3,20),(4,'Opus One',4,NULL,4345.5,0,'Un vino tinto icónico de Napa Valley, California, conocido por su armonía y equilibrio.',4,17),(5,'Penfolds Grange',6,1,45015.9,50,'Un vino tinto australiano de estilo Shiraz, altamente aclamado por su calidad y longevidad.',5,18),(6,'Vega Sicilia Único',3,NULL,23725.8,0,'Un vino tinto español de la región de Ribera del Duero, considerado uno de los mejores vinos de España.',6,7),(7,'Château d\'Yquem',2,NULL,14475.2,40,'Un vino blanco dulce francés de la región de Sauternes, reconocido por su elegancia y complejidad.',7,15),(8,'Cloudy Bay Sauvignon Blanc',12,NULL,30475.2,0,'Un vino blanco neozelandés de Marlborough, conocido por su frescura y notas de frutas tropicales.',8,3),(9,'Riesling Dr. Loosen',7,NULL,19870.7,35,'Un vino blanco alemán de la región del Mosela, apreciado por su acidez y capacidad de envejecimiento.',9,6),(10,'Gaja Gaia & Rey Chardonnay',1,13,7500.85,0,'Un vino blanco italiano de la región de Piamonte, elaborado con la variedad Chardonnay y conocido por su elegancia y complejidad.',10,9),(11,'Moët & Chandon Impérial Brut',2,NULL,10045.7,50,'Un champagne francés icónico, reconocido por su frescura, elegancia y notas de frutas.',11,11),(12,'Veuve Clicquot Yellow Label Brut',2,NULL,47805.2,0,'Otro champagne francés de renombre, apreciado por su equilibrio entre frescura y complejidad.',12,10),(13,'Dom Pérignon Vintage',NULL,NULL,26110.9,0,'Un champagne de lujo producido por Moët & Chandon, famoso por su calidad y prestigio.',13,17),(14,'Krug Grande Cuvée',2,NULL,33910.9,0,'Un champagne de alta gama conocido por su riqueza y complejidad, elaborado por la casa Krug en Francia.',14,16),(15,'Laurent-Perrier Cuvée Rosé Brut',NULL,NULL,39045.6,30,'Un champagne rosado fresco y afrutado, ideal para celebraciones.',15,5),(16,'Taylor Fladgate 20 Year Old Tawny Port',11,NULL,40945.4,0,'Un vino fortificado portugués envejecido durante 20 años en barricas de roble, conocido por su suavidad y complejidad.',16,14),(17,'Graham’s Six Grapes Reserve Port',11,NULL,9890.35,40,'Un vino fortificado portugués con notas de frutas maduras y especias, ideal para maridar con postres.',17,12),(18,'Lustau Solera Reserva Sherry',3,NULL,16480.2,0,'Un jerez español de calidad premium, equilibrado y aromático, con notas de nueces y caramelo.',18,3),(19,'Warre’s Otima 10 Year Old Tawny Port',11,NULL,5905.9,25,'Otro excelente ejemplo de un vino fortificado portugués, envejecido durante 10 años en barricas de roble, con notas de frutas secas y caramelo.',19,3),(20,'Bodegas Tradición Palo Cortado VORS',3,NULL,47615.2,0,'Un jerez español Palo Cortado de calidad excepcional, envejecido durante más de 30 años en barricas de roble, con una complejidad extraordinaria.',20,4),(21,'Antinori Tignanello',2,2,18195.5,5,'Un vino toscano de renombre, elaborado con uvas Sangiovese, Cabernet Sauvignon y Cabernet Franc, conocido por su estructura y elegancia.',21,13),(22,'Bodegas Vega Sicilia Valbuena 5°',3,NULL,28465.5,0,'Un vino tinto español de la región de Ribera del Duero, elaborado con la variedad Tinto Fino y envejecido durante 5 años en barricas de roble francés y americano.',22,10),(23,'Catena Zapata Nicolás Catena Zapata',5,7,38530.1,20,'Un vino argentino de alta gama elaborado con uvas Malbec y Cabernet Sauvignon, conocido por su intensidad y complejidad.',23,10),(24,'Penfolds Bin 389 Cabernet Shiraz',6,1,49165.6,0,'Un vino australiano emblemático elaborado con una mezcla de Cabernet Sauvignon y Shiraz, equilibrado y potente.',24,12),(25,'Château Latour',2,NULL,16110,50,'Un vino tinto de Bordeaux de la prestigiosa región de Pauillac, conocido por su estructura y longevidad.',25,14),(26,'Château Mouton Rothschild',2,NULL,46770.6,0,'Otro vino tinto de Pauillac, Bordeaux, famoso por su elegancia y potencial de envejecimiento.',26,9),(27,'Almaviva',13,NULL,43865.6,5,'Un vino tinto chileno de alta gama elaborado en colaboración entre Viña Concha y Toro y el famoso Château Mouton Rothschild, conocido por su finura y complejidad.',27,10),(28,'Stag’s Leap Wine Cellars Cabernet Sauvignon',4,2,28960.8,0,'Un vino tinto californiano emblemático, conocido por su potencia y elegancia, especialmente en la variedad Cabernet Sauvignon.',28,13),(29,'Caymus Vineyards Special Selection Cabernet Sauvig',4,2,42220.4,50,'Un vino tinto de Napa Valley, California, de alta gama y prestigio, elaborado con uvas Cabernet Sauvignon seleccionadas de viñedos específicos.',29,20),(30,'Screaming Eagle Cabernet Sauvignon',4,NULL,45100.3,0,'Uno de los vinos tintos más exclusivos y caros de Napa Valley, California, conocido por su calidad excepcional y producción limitada.',30,10),(31,'Domaine Serene Evenstad Reserve Pinot Noir',4,14,33955.1,0,'Un vino tinto de Oregón, Estados Unidos, de alta gama elaborado con la variedad Pinot Noir, reconocido por su elegancia y finura.',31,17),(32,'Opus One Overture',4,NULL,31635.3,0,'Una segunda etiqueta de Opus One, elaborada con una mezcla de uvas tintas seleccionadas de Napa Valley, California, que ofrece una entrada al estilo de Opus One a un precio más accesible.',32,20),(33,'Domaine Leflaive Puligny-Montrachet',2,13,7555.15,25,'Un vino blanco de Borgoña, Francia, elaborado con la variedad Chardonnay, conocido por su elegancia y mineralidad.',33,3),(34,'Leeuwin Estate Art Series Chardonnay',5,13,33460.8,0,'Un vino blanco australiano de renombre, equilibrado y elegante, elaborado con la variedad Chardonnay en la región de Margaret River.',34,5),(35,'Château Smith Haut Lafitte Blanc',2,NULL,28165.3,45,'Un vino blanco de Bordeaux de la región de Pessac-Léognan, elaborado con una mezcla de Sauvignon Blanc y Sémillon, conocido por su frescura y complejidad.',35,4),(36,'Kumeu River Mate\'s Vineyard Chardonnay',12,13,5565.8,0,'Un vino blanco neozelandés de alta gama elaborado con la variedad Chardonnay en la región de Kumeu, conocido por su elegancia y mineralidad.',36,4),(37,'Chablis Grand Cru Les Clos Domaine William Fèvre',NULL,13,21800.2,25,'Un vino blanco de Chablis de calidad excepcional, elaborado con la variedad Chardonnay en la prestigiosa denominación Grand Cru Les Clos.',37,13),(38,'Taittinger Comtes de Champagne Blanc de Blancs',2,13,10485.3,0,'Un champagne francés de lujo elaborado exclusivamente con uvas Chardonnay, conocido por su frescura y elegancia.',38,1),(39,'Perrier-Jouët Belle Epoque',2,NULL,41595.4,30,'Otro champagne francés de alta gama, reconocido por su botella decorada con flores de anémona y por su frescura y delicadeza.',39,11),(40,'Bollinger La Grande Année',NULL,NULL,11880.8,0,'Un champagne de prestigio elaborado con una selección de uvas de viñedos Grand Cru, conocido por su riqueza y complejidad.',40,6),(41,'Dom Ruinart Blanc de Blancs',NULL,13,7260.3,45,'Un champagne de la casa Ruinart elaborado exclusivamente con uvas Chardonnay de viñedos Grand Cru, conocido por su frescura y elegancia.',41,12),(42,'Ruinart Rosé',NULL,14,41130.4,0,'Un champagne rosado fresco y afrutado, elaborado por la casa Ruinart con una mezcla de uvas Chardonnay y Pinot Noir.',42,5),(43,'Niepoort Vintage Port',11,NULL,15256,35,'Un vino fortificado portugués de alta gama, elaborado con uvas de viñedos viejos en la región del Duero, conocido por su intensidad y longevidad.',43,19),(44,'Fonseca Vintage Port',11,NULL,43505.6,0,'Otro excelente ejemplo de un vino fortificado portugués, famoso por su riqueza y estructura, con capacidad de envejecimiento durante décadas.',44,18),(45,'Blandy\'s Malmsey Madeira',11,NULL,3185.05,10,'Un vino fortificado de la isla de Madeira, Portugal, elaborado con la variedad Malmsey, conocido por su dulzura y complejidad.',45,2),(46,'González Byass Apostoles Palo Cortado',3,NULL,25985.7,0,'Un jerez español excepcional, envejecido mediante el sistema de criaderas y soleras, con una complejidad extraordinaria y notas de frutas secas y especias.',46,2),(47,'Château d\'Arche Sauternes',2,NULL,4615.25,25,'Un vino blanco dulce de la región de Sauternes, Bordeaux, elaborado con uvas Semillon y Sauvignon Blanc, conocido por su elegancia y complejidad.',47,8),(48,'Taylor Fladgate Vintage Port',11,NULL,46620.5,0,'Un vino fortificado portugués de alta gama, producido en años excepcionales y conocido por su potencial de envejecimiento durante décadas.',48,12),(49,'Bodegas Hidalgo La Gitana Manzanilla',3,NULL,32015.1,50,'Una manzanilla española seca y fresca, elaborada en Sanlúcar de Barrameda, con una gran pureza y elegancia.',49,3),(50,'Graham\'s 20 Year Old Tawny Port',11,NULL,48945.4,0,'Un vino fortificado portugués envejecido durante 20 años en barricas de roble, con una complejidad extraordinaria y notas de frutas secas y especias.',50,3),(101,'Catena Zapata Malbec',5,20,8560,0,'Un Malbec argentino emblemático de la bodega Catena Zapata, conocido por su intensidad y estructura.',101,20),(102,'Luigi Bosca Malbec Reserva',5,24,5600,15,'Un Malbec argentino de la región de Mendoza, destacado por su elegancia y notas de frutas negras.',102,19),(103,'Terrazas de los Andes Torrontés',5,24,8325,5,'Un vino blanco argentino elaborado con la uva Torrontés, conocido por su frescura y aromas florales.',103,2),(104,'Bodega Norton Malbec',5,9,15500,0,'Un Malbec argentino clásico de la bodega Norton, apreciado por su equilibrio y expresión de la variedad.',104,14),(105,'Trapiche Malbec Oak Cask',5,30,6750,30,'Un Malbec argentino envejecido en barricas de roble, conocido por su suavidad y notas especiadas.',105,1),(106,'Zuccardi Q Malbec',5,8,1790.8,0,'Un Malbec argentino de alta gama, elaborado con uvas de viñedos seleccionados en la región de Valle de Uco.',106,5),(107,'Colomé Malbec',5,13,44270.4,50,'Un Malbec argentino de altitud, producido en los Valles Calchaquíes, caracterizado por su frescura y carácter frutal.',107,14),(108,'Altos Las Hormigas Malbec Clásico',5,1,10455.8,0,'Un Malbec argentino fresco y fácil de beber, ideal para maridar con una variedad de platos.',108,9),(109,'BenMarco Malbec',5,12,28845.3,0,'Un Malbec argentino de la bodega Susana Balbo, reconocido por su intensidad y expresión varietal.',109,14),(110,'Alamos Malbec',5,9,48475.4,0,'Un Malbec argentino accesible y versátil, elaborado por la bodega Catena Zapata para disfrutar en cualquier ocasión.',110,16),(111,'Kaiken Ultra Malbec',5,2,27370.9,5,'Un Malbec argentino de alta gama, elaborado con uvas de viñedos de altitud en la región de Mendoza.',111,17),(112,'Luigi Bosca Malbec Single Vineyard',5,7,14730.9,0,'Un Malbec argentino de viñedo único, elaborado por la bodega Luigi Bosca con uvas seleccionadas.',112,16),(113,'Matias Riccitelli Malbec The Apple Doesn’t Fall Fa',5,14,42200.6,25,'Un Malbec argentino joven y frutado, elaborado por Matias Riccitelli con un enfoque fresco y moderno.',113,15),(114,'Bodegas Caro Amancaya Gran Reserva',5,18,21700.3,0,'Un vino argentino de alta gama, resultado de la colaboración entre Bodega Caro (Catena Zapata) y Château Lafite Rothschild, destacado por su estructura y elegancia.',114,15),(115,'Luigi Bosca Cabernet Sauvignon',5,16,45835.1,10,'Un Cabernet Sauvignon argentino de la bodega Luigi Bosca, conocido por su estructura y notas de cassis.',115,6),(116,'Zuccardi Serie A Malbec',5,17,4680.3,0,'Un Malbec argentino fresco y expresivo, elaborado con uvas de viñedos seleccionados en la región de Valle de Uco.',116,5),(117,'Susana Balbo Signature Malbec',5,2,14935.8,20,'Un Malbec argentino de alta gama, elaborado por Susana Balbo con uvas de viñedos seleccionados en la región de Luján de Cuyo.',117,12),(118,'Luigi Bosca Malbec DOC',5,14,14500.4,0,'Un Malbec argentino que representa la Denominación de Origen Controlada (DOC) de Luján de Cuyo, reconocido por su tipicidad y calidad.',118,9),(119,'Kaiken Terroir Series Malbec',5,26,15835.8,20,'Un Malbec argentino de la serie Terroir de la bodega Kaiken, que destaca la expresión del terruño en la región de Mendoza.',119,12),(120,'El Enemigo Cabernet Franc',5,15,32825,0,'Un Cabernet Franc argentino de la bodega El Enemigo, conocido por su elegancia y complejidad aromática.',120,4),(121,'Finca Las Moras Malbec Barrel Select',5,20,47490.1,10,'Un Malbec argentino envejecido en barricas de roble, producido por Finca Las Moras, conocido por su suavidad y notas de especias.',121,1),(122,'Mendel Malbec',5,18,40380,0,'Un Malbec argentino de la bodega Mendel, destacado por su estructura y potencial de envejecimiento.',122,15),(123,'Terrazas de los Andes Malbec Reserva',5,14,25635.1,20,'Un Malbec argentino de la bodega Terrazas de los Andes, elaborado con uvas de viñedos seleccionados en la región de Mendoza.',123,12),(124,'Bodega Colomé Auténtico Malbec',5,9,28530.3,0,'Un Malbec argentino auténtico y expresivo, producido por Bodega Colomé en los Valles Calchaquíes, conocido por su carácter frutal y mineral.',124,13),(125,'Luigi Bosca Malbec D.O.C.',5,3,24750.5,30,'Un Malbec argentino que representa la Denominación de Origen Controlada (DOC) de Luján de Cuyo, elaborado por la bodega Luigi Bosca con uvas seleccionadas.',125,4),(126,'Nieto Senetiner Malbec',5,26,4115.65,0,'Un Malbec argentino clásico y accesible, elaborado por Bodegas Nieto Senetiner con uvas de viñedos en la región de Mendoza.',126,4),(127,'Catena Zapata Adrianna Vineyard Malbec',5,30,6445.1,50,'Un Malbec argentino de viñedo único, elaborado por la bodega Catena Zapata con uvas del viñedo Adrianna, conocido por su complejidad y elegancia.',127,1),(128,'Viña Cobos Felino Malbec',5,29,14256,0,'Un Malbec argentino fresco y frutado, elaborado por Viña Cobos con uvas de viñedos seleccionados en la región de Mendoza.',128,12),(129,'Bodega Norton Privada',5,1,32340.8,40,'Un vino argentino de alta gama, elaborado por la bodega Norton con una mezcla de Malbec, Merlot y Cabernet Sauvignon, destacado por su complejidad y estructura.',129,18),(130,'Altos Las Hormigas Malbec Terroir',5,23,2505.8,0,'Un Malbec argentino que destaca la expresión del terruño, elaborado por Altos Las Hormigas con uvas de viñedos seleccionados en la región de Mendoza.',130,2),(131,'Colomé Lote Especial Tannat',5,6,15595.7,15,'Un Tannat argentino de la bodega Colomé, elaborado con uvas de viñedos en los Valles Calchaquíes, conocido por su intensidad y estructura.',131,12),(132,'Kaiken Terroir Series Malbec Rosé',5,26,29390,0,'Un vino rosado argentino de la serie Terroir de la bodega Kaiken, elaborado con uvas Malbec y conocido por su frescura y elegancia.',132,9),(133,'Luigi Bosca Gala 4',5,24,42645.3,5,'Un vino argentino de alta gama, parte de la línea Gala de la bodega Luigi Bosca, elaborado con una mezcla de Malbec, Cabernet Sauvignon y Tannat, destacado por su complejidad y elegancia.',133,15),(134,'Salentein Numina',5,7,36485.4,0,'Un vino argentino de alta gama, elaborado por Bodegas Salentein con una mezcla de Malbec, Cabernet Sauvignon, Merlot, Cabernet Franc y Petit Verdot, destacado por su estructura y equilibrio.',134,1),(135,'Susana Balbo Signature Cabernet Sauvignon',5,23,4830.2,50,'Un Cabernet Sauvignon argentino de alta gama, elaborado por Susana Balbo con uvas de viñedos seleccionados en la región de Luján de Cuyo, conocido por su elegancia y potencia.',135,3),(136,'Finca Las Moras Black Label Cabernet Sauvignon',5,4,1610.7,0,'Un Cabernet Sauvignon argentino de la línea Black Label de Finca Las Moras, conocido por su intensidad y notas de frutas maduras.',136,2),(137,'Terrazas de los Andes Malbec Single Vineyard Los A',5,18,24085.6,50,'Un Malbec argentino de viñedo único, elaborado por la bodega Terrazas de los Andes con uvas del viñedo Los Aromos, destacado por su concentración y elegancia.',137,1),(138,'Zuccardi Q Cabernet Franc',5,18,8055.6,0,'Un Cabernet Franc argentino de alta gama, elaborado por la bodega Zuccardi con uvas de viñedos seleccionados en la región de Valle de Uco, conocido por su frescura y complejidad aromática.',138,9),(139,'Luigi Bosca Finca Los Nobles Malbec Verdot',5,11,31175.9,20,'Un vino argentino de alta gama, parte de la línea Finca Los Nobles de la bodega Luigi Bosca, elaborado con una mezcla de Malbec y Petit Verdot, destacado por su estructura y elegancia.',139,17),(140,'Colomé Lote Especial Malbec',5,25,24430.6,0,'Un Malbec argentino de la bodega Colomé, elaborado con uvas de viñedos en los Valles Calchaquíes a una altitud extrema, conocido por su concentración y expresión del terruño.',140,9),(141,'Luigi Bosca Gala 2',5,21,3695.35,40,'Un vino argentino de alta gama, parte de la línea Gala de la bodega Luigi Bosca, elaborado con una mezcla de Malbec, Cabernet Sauvignon y Merlot, destacado por su complejidad y elegancia.',141,7),(142,'Alamos Torrontés',5,2,5185.25,0,'Un vino blanco argentino fresco y aromático, elaborado por la bodega Catena Zapata con uvas de viñedos seleccionados en la región de Salta.',142,5),(143,'Kaiken Ultra Cabernet Sauvignon',5,1,28280.4,40,'Un Cabernet Sauvignon argentino de alta gama, elaborado por la bodega Kaiken con uvas de viñedos seleccionados en la región de Valle de Uco, conocido por su estructura y finura.',143,4),(144,'Luigi Bosca Pinot Noir',5,5,18890.8,0,'Un Pinot Noir argentino de la bodega Luigi Bosca, destacado por su elegancia y delicadeza aromática.',144,14),(145,'Mendel Cabernet Sauvignon',5,9,30950.7,30,'Un Cabernet Sauvignon argentino de la bodega Mendel, elaborado con uvas de viñedos seleccionados en la región de Mendoza, conocido por su estructura y equilibrio.',145,2),(146,'Tapiz Black Tears Malbec',5,2,25410.2,0,'Un Malbec argentino de la bodega Tapiz, conocido por su concentración y complejidad, producido en los Valles Calchaquíes.',146,8),(147,'Zuccardi Q Syrah',5,1,30645.8,0,'Un Syrah argentino de alta gama, elaborado por la bodega Zuccardi con uvas de viñedos seleccionados en la región de Valle de Uco, conocido por su intensidad y carácter especiado.',147,17),(148,'El Enemigo Bonarda',5,28,26730.9,0,'Un vino argentino elaborado con la uva Bonarda, conocido por su suavidad y notas de frutas rojas.',148,3),(149,'Finca Las Moras Gran Syrah',5,1,12295.2,25,'Un Syrah argentino de la bodega Finca Las Moras, destacado por su intensidad y estructura, con notas de frutas negras y especias.',149,7),(150,'Luigi Bosca Malbec D.O.C. Single Vineyard Los Mira',5,16,22705.8,0,'Un Malbec argentino de viñedo único, que representa la Denominación de Origen Controlada (DOC) de Luján de Cuyo, elaborado por la bodega Luigi Bosca con uvas seleccionadas y envejecido en barricas de roble.',150,14),(151,'Trapiche Terroir Series Finca Ambrosía Malbec',5,2,34835.6,30,'Un Malbec argentino de la serie Terroir de la bodega Trapiche, elaborado con uvas de viñedos seleccionados en la región de Gualtallary, Valle de Uco, conocido por su concentración y expresión del terruño.',151,15),(152,'Zuccardi Q Malbec Rosé',5,15,10830.3,0,'Un vino rosado argentino de alta gama, elaborado por la bodega Zuccardi con uvas Malbec de viñedos seleccionados en la región de Valle de Uco, conocido por su frescura y elegancia.',152,2),(153,'Clos de los Siete',5,1,25105.2,45,'Un vino argentino de alta gama, resultado de la colaboración entre varios enólogos, elaborado con una mezcla de Malbec, Merlot, Cabernet Sauvignon, Syrah y Petit Verdot, destacado por su complejidad y estructura.',153,13),(154,'Kaiken Terroir Series Torrontés',5,3,16505.4,0,'Un vino blanco argentino de la serie Terroir de la bodega Kaiken, elaborado con la uva Torrontés, conocido por su frescura y aromas florales.',154,16);
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (1,'Administrador'),(2,'Cliente');
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
) ENGINE=InnoDB AUTO_INCREMENT=278 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
INSERT INTO `stock` VALUES (1,1,56),(2,2,45),(3,3,24),(4,4,58),(5,5,26),(6,6,54),(7,7,98),(8,8,45),(9,9,51),(10,10,87),(11,11,95),(12,12,101),(13,13,51),(14,14,98),(15,15,75),(16,16,84),(17,17,98),(18,18,65),(19,19,24),(20,20,87),(21,21,34),(22,22,45),(23,23,45),(24,24,76),(25,25,19),(26,26,15),(27,27,92),(28,28,491),(29,29,310),(30,30,331),(31,31,64),(32,32,332),(33,33,429),(34,34,368),(35,35,362),(36,36,496),(37,37,201),(38,38,249),(39,39,44),(40,40,368),(41,41,129),(42,42,25),(43,43,47),(44,44,345),(45,45,435),(46,46,493),(47,47,453),(48,48,76),(49,49,469),(50,50,485),(101,101,403),(102,102,20),(103,103,154),(104,104,361),(105,105,390),(106,106,139),(107,107,459),(108,108,78),(109,109,240),(110,110,130),(111,111,133),(112,112,474),(113,113,103),(114,114,442),(115,115,286),(116,116,306),(117,117,467),(118,118,347),(119,119,402),(120,120,230),(121,121,500),(122,122,162),(123,123,191),(124,124,395),(125,125,287),(126,126,398),(127,127,496),(128,128,279),(129,129,271),(130,130,31),(131,131,340),(132,132,188),(133,133,376),(134,134,212),(135,135,307),(136,136,271),(137,137,80),(138,138,327),(139,139,361),(140,140,351),(141,141,286),(142,142,58),(143,143,497),(144,144,482),(145,145,324),(146,146,422),(147,147,323),(148,148,349),(149,149,476),(150,150,350),(151,151,349),(152,152,30),(153,153,91),(154,154,433);
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

-- Dump completed on 2024-02-12 22:54:05
