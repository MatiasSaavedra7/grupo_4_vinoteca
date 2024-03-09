CREATE DATABASE  IF NOT EXISTS `venner_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `venner_db`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: venner_db
-- ------------------------------------------------------
-- Server version	8.0.30

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
--
-- Table structure for table `countries`
--

DROP TABLE IF EXISTS `countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `countries` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `countries`
--

LOCK TABLES `countries` WRITE;
/*!40000 ALTER TABLE `countries` DISABLE KEYS */;
INSERT INTO `countries` VALUES (1,'Italia'),(2,'Francia'),(3,'España'),(4,'Estados Unidos'),(5,'Argentina'),(6,'Australia'),(7,'Alemania'),(8,'China'),(9,'Rusia'),(10,'Reino Unido'),(11,'Portugal'),(12,'Nueva Zelanda'),(13,'Chile');
/*!40000 ALTER TABLE `countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grapes`
--

DROP TABLE IF EXISTS `grapes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `grapes` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `country_id` int unsigned DEFAULT NULL,
  `grapes_id` int unsigned DEFAULT NULL,
  `price` float NOT NULL,
  `discount` int NOT NULL,
  `description` varchar(400) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `image` varchar(400) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `stock` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `country_id` (`country_id`),
  KEY `grapes_id` (`grapes_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`grapes_id`) REFERENCES `grapes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=170 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Château Margaux',2,5,42571,10,'Un vino tinto francés de renombre mundial, conocido por su elegancia y complejidad.','zuccardi.png',1),(2,'Domaine de la Romanée-Conti Romanée-Conti',2,NULL,39375.1,0,'Uno de los vinos tintos más caros y exclusivos del mundo, producido en Borgoña, Francia.','mantis.png',236),(3,'Sassicaia',1,NULL,18365.9,40,'Un vino tinto italiano de la región de la Toscana, famoso por su estructura y longevidad.','mantis.png',146),(4,'Opus One',4,NULL,4345.5,0,'Un vino tinto icónico de Napa Valley, California, conocido por su armonía y equilibrio.','pulenta-state.png',202),(5,'Penfolds Grange',6,1,45015.9,50,'Un vino tinto australiano de estilo Shiraz, altamente aclamado por su calidad y longevidad.','colome.png',18),(6,'Vega Sicilia Único',3,NULL,23725.8,0,'Un vino tinto español de la región de Ribera del Duero, considerado uno de los mejores vinos de España.','salentein.png',114),(7,'Château d\'Yquem',2,NULL,14475.2,40,'Un vino blanco dulce francés de la región de Sauternes, reconocido por su elegancia y complejidad.','estancia.webp',1),(8,'Cloudy Bay Sauvignon Blanc',12,NULL,30475.2,0,'Un vino blanco neozelandés de Marlborough, conocido por su frescura y notas de frutas tropicales.','whispering.png',198),(9,'Riesling Dr. Loosen',7,NULL,19870.7,35,'Un vino blanco alemán de la región del Mosela, apreciado por su acidez y capacidad de envejecimiento.','zuccardi.png',36),(10,'Gaja Gaia & Rey Chardonnay',1,13,7500.85,0,'Un vino blanco italiano de la región de Piamonte, elaborado con la variedad Chardonnay y conocido por su elegancia y complejidad.','saintfelicien.png',97),(11,'Moët & Chandon Impérial Brut',2,NULL,10045.7,50,'Un champagne francés icónico, reconocido por su frescura, elegancia y notas de frutas.','pulenta-state.png',102),(12,'Veuve Clicquot Yellow Label Brut',2,NULL,47805.2,0,'Otro champagne francés de renombre, apreciado por su equilibrio entre frescura y complejidad.','arcangel.png',13),(13,'Dom Pérignon Vintage',NULL,NULL,26110.9,0,'Un champagne de lujo producido por Moët & Chandon, famoso por su calidad y prestigio.','cuvelier.png',220),(14,'Krug Grande Cuvée',2,NULL,33910.9,0,'Un champagne de alta gama conocido por su riqueza y complejidad, elaborado por la casa Krug en Francia.','arcangel.png',59),(15,'Laurent-Perrier Cuvée Rosé Brut',NULL,NULL,39045.6,30,'Un champagne rosado fresco y afrutado, ideal para celebraciones.','estancia.webp',269),(16,'Taylor Fladgate 20 Year Old Tawny Port',11,NULL,40945.4,0,'Un vino fortificado portugués envejecido durante 20 años en barricas de roble, conocido por su suavidad y complejidad.','salentein.png',231),(17,'Graham’s Six Grapes Reserve Port',11,NULL,9890.35,40,'Un vino fortificado portugués con notas de frutas maduras y especias, ideal para maridar con postres.','salentein.png',94),(18,'Lustau Solera Reserva Sherry',3,NULL,16480.2,0,'Un jerez español de calidad premium, equilibrado y aromático, con notas de nueces y caramelo.','arcangel.png',203),(19,'Warre’s Otima 10 Year Old Tawny Port',11,NULL,5905.9,25,'Otro excelente ejemplo de un vino fortificado portugués, envejecido durante 10 años en barricas de roble, con notas de frutas secas y caramelo.','paraiso.png',31),(20,'Bodegas Tradición Palo Cortado VORS',3,NULL,47615.2,0,'Un jerez español Palo Cortado de calidad excepcional, envejecido durante más de 30 años en barricas de roble, con una complejidad extraordinaria.','yacochuya.png',114),(21,'Antinori Tignanello',2,2,18195.5,5,'Un vino toscano de renombre, elaborado con uvas Sangiovese, Cabernet Sauvignon y Cabernet Franc, conocido por su estructura y elegancia.','linterna.png',206),(22,'Bodegas Vega Sicilia Valbuena 5°',3,NULL,28465.5,0,'Un vino tinto español de la región de Ribera del Duero, elaborado con la variedad Tinto Fino y envejecido durante 5 años en barricas de roble francés y americano.','reservaespecial.png',79),(23,'Catena Zapata Nicolás Catena Zapata',5,7,38530.1,20,'Un vino argentino de alta gama elaborado con uvas Malbec y Cabernet Sauvignon, conocido por su intensidad y complejidad.','estancia.webp',114),(24,'Penfolds Bin 389 Cabernet Shiraz',6,1,49165.6,0,'Un vino australiano emblemático elaborado con una mezcla de Cabernet Sauvignon y Shiraz, equilibrado y potente.','pulenta-state.png',3),(25,'Château Latour',2,NULL,16110,50,'Un vino tinto de Bordeaux de la prestigiosa región de Pauillac, conocido por su estructura y longevidad.','reservaespecial.png',272),(26,'Château Mouton Rothschild',2,NULL,46770.6,0,'Otro vino tinto de Pauillac, Bordeaux, famoso por su elegancia y potencial de envejecimiento.','linterna.png',241),(27,'Almaviva',13,NULL,43865.6,5,'Un vino tinto chileno de alta gama elaborado en colaboración entre Viña Concha y Toro y el famoso Château Mouton Rothschild, conocido por su finura y complejidad.','zuccardi.png',221),(28,'Stag’s Leap Wine Cellars Cabernet Sauvignon',4,2,28960.8,0,'Un vino tinto californiano emblemático, conocido por su potencia y elegancia, especialmente en la variedad Cabernet Sauvignon.','mantis.png',116),(29,'Caymus Vineyards Special Selection Cabernet Sauvig',4,2,42220.4,50,'Un vino tinto de Napa Valley, California, de alta gama y prestigio, elaborado con uvas Cabernet Sauvignon seleccionadas de viñedos específicos.','catena.png',42),(30,'Screaming Eagle Cabernet Sauvignon',4,NULL,45100.3,0,'Uno de los vinos tintos más exclusivos y caros de Napa Valley, California, conocido por su calidad excepcional y producción limitada.','catena.png',285),(31,'Domaine Serene Evenstad Reserve Pinot Noir',4,14,33955.1,0,'Un vino tinto de Oregón, Estados Unidos, de alta gama elaborado con la variedad Pinot Noir, reconocido por su elegancia y finura.','don.png',149),(32,'Opus One Overture',4,NULL,31635.3,0,'Una segunda etiqueta de Opus One, elaborada con una mezcla de uvas tintas seleccionadas de Napa Valley, California, que ofrece una entrada al estilo de Opus One a un precio más accesible.','paraiso.png',199),(33,'Domaine Leflaive Puligny-Montrachet',2,13,7555.15,25,'Un vino blanco de Borgoña, Francia, elaborado con la variedad Chardonnay, conocido por su elegancia y mineralidad.','pulenta-state.png',68),(34,'Leeuwin Estate Art Series Chardonnay',5,13,33460.8,0,'Un vino blanco australiano de renombre, equilibrado y elegante, elaborado con la variedad Chardonnay en la región de Margaret River.','catena.png',219),(35,'Château Smith Haut Lafitte Blanc',2,NULL,28165.3,45,'Un vino blanco de Bordeaux de la región de Pessac-Léognan, elaborado con una mezcla de Sauvignon Blanc y Sémillon, conocido por su frescura y complejidad.','escorihuela.png',121),(36,'Kumeu River Mate\'s Vineyard Chardonnay',12,13,5565.8,0,'Un vino blanco neozelandés de alta gama elaborado con la variedad Chardonnay en la región de Kumeu, conocido por su elegancia y mineralidad.','escorihuela.png',32),(37,'Chablis Grand Cru Les Clos Domaine William Fèvre',NULL,13,21800.2,25,'Un vino blanco de Chablis de calidad excepcional, elaborado con la variedad Chardonnay en la prestigiosa denominación Grand Cru Les Clos.','penon.png',69),(38,'Taittinger Comtes de Champagne Blanc de Blancs',2,13,10485.3,0,'Un champagne francés de lujo elaborado exclusivamente con uvas Chardonnay, conocido por su frescura y elegancia.','escorihuela.png',281),(39,'Perrier-Jouët Belle Epoque',2,NULL,41595.4,30,'Otro champagne francés de alta gama, reconocido por su botella decorada con flores de anémona y por su frescura y delicadeza.','reservaespecial.png',222),(40,'Bollinger La Grande Année',NULL,NULL,11880.8,0,'Un champagne de prestigio elaborado con una selección de uvas de viñedos Grand Cru, conocido por su riqueza y complejidad.','pulenta-state.png',8),(41,'Dom Ruinart Blanc de Blancs',NULL,13,7260.3,45,'Un champagne de la casa Ruinart elaborado exclusivamente con uvas Chardonnay de viñedos Grand Cru, conocido por su frescura y elegancia.','linterna.png',174),(42,'Ruinart Rosé',NULL,14,41130.4,0,'Un champagne rosado fresco y afrutado, elaborado por la casa Ruinart con una mezcla de uvas Chardonnay y Pinot Noir.','penon.png',59),(43,'Niepoort Vintage Port',11,NULL,15256,35,'Un vino fortificado portugués de alta gama, elaborado con uvas de viñedos viejos en la región del Duero, conocido por su intensidad y longevidad.','don.png',10),(44,'Fonseca Vintage Port',11,NULL,43505.6,0,'Otro excelente ejemplo de un vino fortificado portugués, famoso por su riqueza y estructura, con capacidad de envejecimiento durante décadas.','reservaespecial.png',15),(45,'Blandy\'s Malmsey Madeira',11,NULL,3185.05,10,'Un vino fortificado de la isla de Madeira, Portugal, elaborado con la variedad Malmsey, conocido por su dulzura y complejidad.','reservaespecial.png',238),(46,'González Byass Apostoles Palo Cortado',3,NULL,25985.7,0,'Un jerez español excepcional, envejecido mediante el sistema de criaderas y soleras, con una complejidad extraordinaria y notas de frutas secas y especias.','escorihuela.png',131),(47,'Château d\'Arche Sauternes',2,NULL,4615.25,25,'Un vino blanco dulce de la región de Sauternes, Bordeaux, elaborado con uvas Semillon y Sauvignon Blanc, conocido por su elegancia y complejidad.','whispering.png',268),(48,'Taylor Fladgate Vintage Port',11,NULL,46620.5,0,'Un vino fortificado portugués de alta gama, producido en años excepcionales y conocido por su potencial de envejecimiento durante décadas.','saintfelicien.png',276),(49,'Bodegas Hidalgo La Gitana Manzanilla',3,NULL,32015.1,50,'Una manzanilla española seca y fresca, elaborada en Sanlúcar de Barrameda, con una gran pureza y elegancia.','vinacobos.png',32),(50,'Graham\'s 20 Year Old Tawny Port',11,NULL,48945.4,0,'Un vino fortificado portugués envejecido durante 20 años en barricas de roble, con una complejidad extraordinaria y notas de frutas secas y especias.','salentein.png',37),(101,'Catena Zapata Malbec',5,20,8560,0,'Un Malbec argentino emblemático de la bodega Catena Zapata, conocido por su intensidad y estructura.','paraiso.png',201),(102,'Luigi Bosca Malbec Reserva',5,24,5600,15,'Un Malbec argentino de la región de Mendoza, destacado por su elegancia y notas de frutas negras.','arcangel.png',52),(103,'Terrazas de los Andes Torrontés',5,24,8325,5,'Un vino blanco argentino elaborado con la uva Torrontés, conocido por su frescura y aromas florales.','cuvelier.png',150),(104,'Bodega Norton Malbec',5,9,15500,0,'Un Malbec argentino clásico de la bodega Norton, apreciado por su equilibrio y expresión de la variedad.','pulenta-state.png',85),(105,'Trapiche Malbec Oak Cask',5,30,6750,30,'Un Malbec argentino envejecido en barricas de roble, conocido por su suavidad y notas especiadas.','estancia.webp',94),(106,'Zuccardi Q Malbec',5,8,1790.8,0,'Un Malbec argentino de alta gama, elaborado con uvas de viñedos seleccionados en la región de Valle de Uco.','salentein.png',229),(107,'Colomé Malbec',5,13,44270.4,50,'Un Malbec argentino de altitud, producido en los Valles Calchaquíes, caracterizado por su frescura y carácter frutal.','vaquita.png',35),(108,'Altos Las Hormigas Malbec Clásico',5,1,10455.8,0,'Un Malbec argentino fresco y fácil de beber, ideal para maridar con una variedad de platos.','escorihuela.png',254),(109,'BenMarco Malbec',5,12,28845.3,0,'Un Malbec argentino de la bodega Susana Balbo, reconocido por su intensidad y expresión varietal.','don.png',176),(110,'Alamos Malbec',5,9,48475.4,0,'Un Malbec argentino accesible y versátil, elaborado por la bodega Catena Zapata para disfrutar en cualquier ocasión.','colome.png',272),(111,'Kaiken Ultra Malbec',5,2,27370.9,5,'Un Malbec argentino de alta gama, elaborado con uvas de viñedos de altitud en la región de Mendoza.','vaquita.png',89),(112,'Luigi Bosca Malbec Single Vineyard',5,7,14730.9,0,'Un Malbec argentino de viñedo único, elaborado por la bodega Luigi Bosca con uvas seleccionadas.','estancia.webp',243),(113,'Matias Riccitelli Malbec The Apple Doesn’t Fall Fa',5,14,42200.6,25,'Un Malbec argentino joven y frutado, elaborado por Matias Riccitelli con un enfoque fresco y moderno.','vaquita.png',81),(114,'Bodegas Caro Amancaya Gran Reserva',5,18,21700.3,0,'Un vino argentino de alta gama, resultado de la colaboración entre Bodega Caro (Catena Zapata) y Château Lafite Rothschild, destacado por su estructura y elegancia.','salentein.png',152),(115,'Luigi Bosca Cabernet Sauvignon',5,16,45835.1,10,'Un Cabernet Sauvignon argentino de la bodega Luigi Bosca, conocido por su estructura y notas de cassis.','mantis.png',64),(116,'Zuccardi Serie A Malbec',5,17,4680.3,0,'Un Malbec argentino fresco y expresivo, elaborado con uvas de viñedos seleccionados en la región de Valle de Uco.','yacochuya.png',235),(117,'Susana Balbo Signature Malbec',5,2,14935.8,20,'Un Malbec argentino de alta gama, elaborado por Susana Balbo con uvas de viñedos seleccionados en la región de Luján de Cuyo.','vinacobos.png',139),(118,'Luigi Bosca Malbec DOC',5,14,14500.4,0,'Un Malbec argentino que representa la Denominación de Origen Controlada (DOC) de Luján de Cuyo, reconocido por su tipicidad y calidad.','catena.png',209),(119,'Kaiken Terroir Series Malbec',5,26,15835.8,20,'Un Malbec argentino de la serie Terroir de la bodega Kaiken, que destaca la expresión del terruño en la región de Mendoza.','mantis.png',151),(120,'El Enemigo Cabernet Franc',5,15,32825,0,'Un Cabernet Franc argentino de la bodega El Enemigo, conocido por su elegancia y complejidad aromática.','zuccardi.png',72),(121,'Finca Las Moras Malbec Barrel Select',5,20,47490.1,10,'Un Malbec argentino envejecido en barricas de roble, producido por Finca Las Moras, conocido por su suavidad y notas de especias.','arcangel.png',70),(122,'Mendel Malbec',5,18,40380,0,'Un Malbec argentino de la bodega Mendel, destacado por su estructura y potencial de envejecimiento.','linterna.png',194),(123,'Terrazas de los Andes Malbec Reserva',5,14,25635.1,20,'Un Malbec argentino de la bodega Terrazas de los Andes, elaborado con uvas de viñedos seleccionados en la región de Mendoza.','yacochuya.png',77),(124,'Bodega Colomé Auténtico Malbec',5,9,28530.3,0,'Un Malbec argentino auténtico y expresivo, producido por Bodega Colomé en los Valles Calchaquíes, conocido por su carácter frutal y mineral.','vinacobos.png',246),(125,'Luigi Bosca Malbec D.O.C.',5,3,24750.5,30,'Un Malbec argentino que representa la Denominación de Origen Controlada (DOC) de Luján de Cuyo, elaborado por la bodega Luigi Bosca con uvas seleccionadas.','don.png',110),(126,'Nieto Senetiner Malbec',5,26,4115.65,0,'Un Malbec argentino clásico y accesible, elaborado por Bodegas Nieto Senetiner con uvas de viñedos en la región de Mendoza.','colome.png',156),(127,'Catena Zapata Adrianna Vineyard Malbec',5,30,6445.1,50,'Un Malbec argentino de viñedo único, elaborado por la bodega Catena Zapata con uvas del viñedo Adrianna, conocido por su complejidad y elegancia.','vinacobos.png',238),(128,'Viña Cobos Felino Malbec',5,29,14256,0,'Un Malbec argentino fresco y frutado, elaborado por Viña Cobos con uvas de viñedos seleccionados en la región de Mendoza.','colome.png',284),(129,'Bodega Norton Privada',5,1,32340.8,40,'Un vino argentino de alta gama, elaborado por la bodega Norton con una mezcla de Malbec, Merlot y Cabernet Sauvignon, destacado por su complejidad y estructura.','salentein.png',148),(130,'Altos Las Hormigas Malbec Terroir',5,23,2505.8,0,'Un Malbec argentino que destaca la expresión del terruño, elaborado por Altos Las Hormigas con uvas de viñedos seleccionados en la región de Mendoza.','pulenta-state.png',154),(131,'Colomé Lote Especial Tannat',5,6,15595.7,15,'Un Tannat argentino de la bodega Colomé, elaborado con uvas de viñedos en los Valles Calchaquíes, conocido por su intensidad y estructura.','vaquita.png',170),(132,'Kaiken Terroir Series Malbec Rosé',5,26,29390,0,'Un vino rosado argentino de la serie Terroir de la bodega Kaiken, elaborado con uvas Malbec y conocido por su frescura y elegancia.','catena.png',169),(133,'Luigi Bosca Gala 4',5,24,42645.3,5,'Un vino argentino de alta gama, parte de la línea Gala de la bodega Luigi Bosca, elaborado con una mezcla de Malbec, Cabernet Sauvignon y Tannat, destacado por su complejidad y elegancia.','zuccardi.png',214),(134,'Salentein Numina',5,7,36485.4,0,'Un vino argentino de alta gama, elaborado por Bodegas Salentein con una mezcla de Malbec, Cabernet Sauvignon, Merlot, Cabernet Franc y Petit Verdot, destacado por su estructura y equilibrio.','penon.png',21),(135,'Susana Balbo Signature Cabernet Sauvignon',5,23,4830.2,50,'Un Cabernet Sauvignon argentino de alta gama, elaborado por Susana Balbo con uvas de viñedos seleccionados en la región de Luján de Cuyo, conocido por su elegancia y potencia.','penon.png',237),(136,'Finca Las Moras Black Label Cabernet Sauvignon',5,4,1610.7,0,'Un Cabernet Sauvignon argentino de la línea Black Label de Finca Las Moras, conocido por su intensidad y notas de frutas maduras.','penon.png',148),(137,'Terrazas de los Andes Malbec Single Vineyard Los A',5,18,24085.6,50,'Un Malbec argentino de viñedo único, elaborado por la bodega Terrazas de los Andes con uvas del viñedo Los Aromos, destacado por su concentración y elegancia.','escorihuela.png',71),(138,'Zuccardi Q Cabernet Franc',5,18,8055.6,0,'Un Cabernet Franc argentino de alta gama, elaborado por la bodega Zuccardi con uvas de viñedos seleccionados en la región de Valle de Uco, conocido por su frescura y complejidad aromática.','saintfelicien.png',14),(139,'Luigi Bosca Finca Los Nobles Malbec Verdot',5,11,31175.9,20,'Un vino argentino de alta gama, parte de la línea Finca Los Nobles de la bodega Luigi Bosca, elaborado con una mezcla de Malbec y Petit Verdot, destacado por su estructura y elegancia.','zuccardi.png',255),(140,'Colomé Lote Especial Malbec',5,25,24430.6,0,'Un Malbec argentino de la bodega Colomé, elaborado con uvas de viñedos en los Valles Calchaquíes a una altitud extrema, conocido por su concentración y expresión del terruño.','linterna.png',278),(141,'Luigi Bosca Gala 2',5,21,3695.35,40,'Un vino argentino de alta gama, parte de la línea Gala de la bodega Luigi Bosca, elaborado con una mezcla de Malbec, Cabernet Sauvignon y Merlot, destacado por su complejidad y elegancia.','zuccardi.png',96),(142,'Alamos Torrontés',5,2,5185.25,0,'Un vino blanco argentino fresco y aromático, elaborado por la bodega Catena Zapata con uvas de viñedos seleccionados en la región de Salta.','reservaespecial.png',224),(143,'Kaiken Ultra Cabernet Sauvignon',5,1,28280.4,40,'Un Cabernet Sauvignon argentino de alta gama, elaborado por la bodega Kaiken con uvas de viñedos seleccionados en la región de Valle de Uco, conocido por su estructura y finura.','saintfelicien.png',221),(144,'Luigi Bosca Pinot Noir',5,5,18890.8,0,'Un Pinot Noir argentino de la bodega Luigi Bosca, destacado por su elegancia y delicadeza aromática.','colome.png',277),(145,'Mendel Cabernet Sauvignon',5,9,30950.7,30,'Un Cabernet Sauvignon argentino de la bodega Mendel, elaborado con uvas de viñedos seleccionados en la región de Mendoza, conocido por su estructura y equilibrio.','yacochuya.png',15),(146,'Tapiz Black Tears Malbec',5,2,25410.2,0,'Un Malbec argentino de la bodega Tapiz, conocido por su concentración y complejidad, producido en los Valles Calchaquíes.','salentein.png',53),(147,'Zuccardi Q Syrah',5,1,30645.8,0,'Un Syrah argentino de alta gama, elaborado por la bodega Zuccardi con uvas de viñedos seleccionados en la región de Valle de Uco, conocido por su intensidad y carácter especiado.','linterna.png',26),(148,'El Enemigo Bonarda',5,28,26730.9,0,'Un vino argentino elaborado con la uva Bonarda, conocido por su suavidad y notas de frutas rojas.','arcangel.png',256),(149,'Finca Las Moras Gran Syrah',5,1,12295.2,25,'Un Syrah argentino de la bodega Finca Las Moras, destacado por su intensidad y estructura, con notas de frutas negras y especias.','estancia.webp',164),(150,'Luigi Bosca Malbec D.O.C. Single Vineyard Los Mira',5,16,22705.8,0,'Un Malbec argentino de viñedo único, que representa la Denominación de Origen Controlada (DOC) de Luján de Cuyo, elaborado por la bodega Luigi Bosca con uvas seleccionadas y envejecido en barricas de roble.','zuccardi.png',260),(151,'Trapiche Terroir Series Finca Ambrosía Malbec',5,2,34835.6,30,'Un Malbec argentino de la serie Terroir de la bodega Trapiche, elaborado con uvas de viñedos seleccionados en la región de Gualtallary, Valle de Uco, conocido por su concentración y expresión del terruño.','estancia.webp',162),(152,'Zuccardi Q Malbec Rosé',5,15,10830.3,0,'Un vino rosado argentino de alta gama, elaborado por la bodega Zuccardi con uvas Malbec de viñedos seleccionados en la región de Valle de Uco, conocido por su frescura y elegancia.','saintfelicien.png',153),(153,'Clos de los Siete',5,1,25105.2,45,'Un vino argentino de alta gama, resultado de la colaboración entre varios enólogos, elaborado con una mezcla de Malbec, Merlot, Cabernet Sauvignon, Syrah y Petit Verdot, destacado por su complejidad y estructura.','colome.png',267),(154,'Kaiken Terroir Series Torrontés',5,3,16505.4,0,'Un vino blanco argentino de la serie Terroir de la bodega Kaiken, elaborado con la uva Torrontés, conocido por su frescura y aromas florales.','zuccardi.png',101);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_cart`
--

DROP TABLE IF EXISTS `products_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_product` int unsigned DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `subtotal` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_product` (`id_product`),
  CONSTRAINT `products_cart_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_cart`
--

LOCK TABLES `products_cart` WRITE;
/*!40000 ALTER TABLE `products_cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_country`
--

DROP TABLE IF EXISTS `products_country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_country` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_country` int unsigned DEFAULT NULL,
  `id_product` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_country` (`id_country`),
  KEY `id_product` (`id_product`),
  CONSTRAINT `products_country_ibfk_1` FOREIGN KEY (`id_country`) REFERENCES `countries` (`id`),
  CONSTRAINT `products_country_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_country`
--

LOCK TABLES `products_country` WRITE;
/*!40000 ALTER TABLE `products_country` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_grapes`
--

DROP TABLE IF EXISTS `products_grapes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_grapes` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `grapes_id` int unsigned DEFAULT NULL,
  `products_id` int unsigned DEFAULT NULL,
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
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Administrador'),(2,'Cliente');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shopping_carts`
--

DROP TABLE IF EXISTS `shopping_carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shopping_carts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_user` int unsigned DEFAULT NULL,
  `id_products_cart` int DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  KEY `id_products_cart` (`id_products_cart`),
  CONSTRAINT `shopping_carts_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  CONSTRAINT `shopping_carts_ibfk_2` FOREIGN KEY (`id_products_cart`) REFERENCES `products_cart` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopping_carts`
--

LOCK TABLES `shopping_carts` WRITE;
/*!40000 ALTER TABLE `shopping_carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `shopping_carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `lastName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `rol_id` int NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `rol_id` (`rol_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Lucas Alfonso','Leguizamon','lucaslegui@venner.com','$2a$10$FzgdGFsLxsQnnBZKFdM4C.wUNB0FaA.eOC6l4G3rqI3heyIelz1tW',2,'1708291997533-Ferrari-488-GT3-EVO-(4).jpg');
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

-- Dump completed on 2024-03-09 19:47:01
