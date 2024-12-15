-- MySQL dump 10.13  Distrib 8.0.40, for Linux (x86_64)
--
-- Host: localhost    Database: novelweb
-- ------------------------------------------------------
-- Server version	8.0.40-0ubuntu0.24.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `chapter`
--

DROP TABLE IF EXISTS `chapter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chapter` (
  `id` bigint NOT NULL,
  `chapter_number` int DEFAULT NULL,
  `content` varchar(4000) DEFAULT NULL,
  `public_id` binary(16) DEFAULT NULL,
  `published_date` date DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `novel_publicid` binary(16) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKd8k0a61t1n98qo4ecqyj2uvgh` (`public_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chapter`
--

LOCK TABLES `chapter` WRITE;
/*!40000 ALTER TABLE `chapter` DISABLE KEYS */;
INSERT INTO `chapter` VALUES (18,1,'The soft rustle of leaves whispered around him, accompanied by the distant chirping of birds. Caelan Adrien de Forneaux stirred, his body sluggish as though he were surfacing from the depths of a dreamless sleep. The cool scent of earth and flowers filled his nostrils, far removed from the damp, briny air he’d drawn in his final moments. His eyelids fluttered open.\n\nAbove him stretched an endless canopy of blue sky, framed by the gentle sway of verdant tree branches. For a moment, he lay still, his mind caught in a haze. Memories flashed through him—chaotic, sharp, and painful. The cold bedchamber in St. Helena. The suffocating weight of mortality. And then... this.\n\nA jolt of panic lanced through him. He sat up abruptly, his breath catching as he took in the sight of his surroundings. He was lying on a lush patch of grass, surrounded by manicured hedges and vibrant flowerbeds. The garden was impossibly beautiful, its design meticulous and purposeful, as if sculpted to rival nature itself.\n\n“What is this place?” he murmured. His voice felt foreign to him, younger, smoother. He glanced down at his hands—calloused hands, once worn by the toil of war, now unblemished. His fingers trembled slightly as he ran them over his face, feeling skin untouched by age or hardship.\n\nA shout startled him from his reverie. “Lord Caelan! My lord!”\n\nHe turned toward the source of the voice. A young woman, clad in a simple but well-kept maid’s uniform, was rushing toward him, her expression stricken with worry. Her auburn hair gleamed in the sunlight, and her pale hands clutched the sides of her skirts as she hurried across the garden path.\n\nCaelan froze, his mind racing. She had called him a name he did not recognize, yet she looked at him with familiarity, as though he were someone she had known her entire life.\n\nThe maid dropped to her knees beside him, her hands hovering uncertainly. “You’ve been lying here for hours, my lord! Are you hurt? Should I fetch the physician?”\n\nPhysician? Caelan frowned. “I… No. There’s no need for that,” he said, his voice steady despite the tumult of thoughts within him. He glanced at the maid, noting the worry etched in her delicate features. Whoever this \"Caelan\" was, he was clearly someone important. Someone this woman served without question.\n\nHe rose to his feet, brushing the dirt and grass from his finely tailored clothing. His body moved fluidly, almost unnervingly so, as if it remembered motions he had yet to learn. The clothing itself—a dark, embroidered doublet with gold accents—was unfamiliar but rich in quality. He glanced at his reflection in the still waters of a nearby fountain and stopped cold.\n\nStaring back at him was not the gaunt, timeworn face of Napoleon Bonaparte but that of a young man, perhaps no older than twenty. His features were sharp and aristocratic—high cheekbones, a straight nose, and piercing blue eyes. His dark hair fell neatly to his shoulders, framing a face that radiated authority.\n\nThe reflection was that of someone who had never known failure. Someone untouched by the trials that had broken him in his past life.\n\n“Lord Caelan?” the maid asked tentatively, rising to her feet and dusting her knees. “You seem... distant. Is everything all right?”\n\nCaelan turned to her, forcing a calm expression. “I’m fine,” he said, though the words felt hollow. He needed time to think, to understand where—or who—he was.\n\nThe maid gave him a small bow. “If you’re certain, my lord. The Duke asked that I inform you to join him in the study as soon as you awoke. He was most insistent.”\n\nThe Duke. Another unfamiliar name to add to his growing list of questions. “Very well,” Caelan replied after a pause. “Lead the way.”\n\nThe Forneaux estate was a testament to opulence and tradition. As the maid led him through the sprawling gardens and into the grand halls of the manor, Caelan took in \n',_binary 'R_\0�\�\�Nk�Wg����','2024-11-29','Hello world',_binary '8	��%Eԥ(�\�\�.\�\�'),(22,2,'Alaric stifled a powerful yawn. He was drop-dead tired. Around him, his army was hard at work constructing the nightly fortified camp. The rhythmic sound of shovels mingled with the steady thuds of axes biting into wood as the forest was being cut back. The sun had already begun to set, working its way toward the horizon, casting long shadows across the budding camp.\n\nHaving traveled through the night to reach the army and then marched the entire following day, they had reached and crossed the border of Kanar and Urburn. Knowing the enemy was active nearby, Alaric was leaving nothing to chance. He could not afford to. Each evening, they would construct a fortified encampment, one with significant defenses designed to discourage a surprise assault, a wall, complete with a barricade and fighting platform, all surrounded by an outer trench filled with sharpened wooden stakes.\n\nAs he gazed around at the rapidly developing camp, his attention was involuntarily pulled toward Duncan, who was engaged in what appeared to be a serious discussion with Jaxen about a hundred yards away. From his position, Alaric could not catch their words, but the distance did little to mask the intensity of the exchange.\n\nAlaric’s brow furrowed into a scowl as he observed Duncan’s animated gestures, his hand pointing emphatically toward a group of men nearby and then touching the side of his temple as if to communicate to his son “to think.”\n\nAlaric supposed these were Jaxen’s troops that Duncan was indicating, digging into the ground, doing their part to help build the camp’s defensive trench and berm. The soldiers, coated in dust from the road, dirt, and sweat from their toil, were clearly doing their best to ignore the exchange as they worked.\n\nAlaric’s scowl deepened. It was clear from Jaxen’s rigid posture and the tight set of his shoulders he was not pleased with whatever Duncan was communicating. The scene hinted at a clash of strategies, a valid critique not well received, or more likely, Alaric thought, a displeased father who had unreasonable expectations of his son. Alaric had personal experience with that.\n\nThe conversation seemed to reach its climax as Jourgan and Keever arrived, joining Duncan and Jaxen. Their arrival did little to defuse the situation. After a brief, intense exchange between father and son, Jaxen responded with a sharp, heated retort and abruptly strode away from the group toward his men and the work they were doing, leaving Duncan shaking his head.\n\nAlaric watched as Jaxen stalked off, his mind racing with the potential implications of the dispute. Was it a simple disagreement? Or was it symptomatic of a deeper issue within the ranks, one he’d have to get personally involved in? The cohesion of his commanders was crucial to success. He could not allow division.\n\n“Tea?”\n\nAlaric turned and found Rikka offering him a steaming mug. With a nod of appreciation, he accepted it. The aroma of the black tea wafted up, and with his first sip, he felt a wave of rejuvenation wash over him. It was not only tasty, but surprisingly refreshing, and especially welcome, as the setting sun brought with it an unseasonal chill that had begun to sweep through the camp, likely bringing in the cooler air from the surrounding forest.\n\n“Thank you,” he said, taking another sip and savoring it for a long moment. “You make some of the best tea I have ever had. I swear, it’s almost as if you are using your magic.”\n\n“How do you know I’m not?” Rikka smirked at him and returned to the campfire they shared, where a pot hung over the low-burning and dancing flames. Picking up a ladle, she gave the contents a stir. Smoke from the fire curled and swirled up into the evening sky, merging with the twilight. Their tent had been erected just to the side of the fire and it was beckoning powerfully to Alaric, calling to him for some sleep.\n\n',_binary '��\�yrK���Iw�\�','2024-11-30','Super power ',_binary '8	��%Eԥ(�\�\�.\�\�');
/*!40000 ALTER TABLE `chapter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chapter_generator`
--

DROP TABLE IF EXISTS `chapter_generator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chapter_generator` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chapter_generator`
--

LOCK TABLES `chapter_generator` WRITE;
/*!40000 ALTER TABLE `chapter_generator` DISABLE KEYS */;
INSERT INTO `chapter_generator` VALUES (23);
/*!40000 ALTER TABLE `chapter_generator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chat_message`
--

DROP TABLE IF EXISTS `chat_message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chat_message` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL,
  `sender` varchar(255) DEFAULT NULL,
  `timestamp` bigint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chat_message`
--

LOCK TABLES `chat_message` WRITE;
/*!40000 ALTER TABLE `chat_message` DISABLE KEYS */;
/*!40000 ALTER TABLE `chat_message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `latest_novels`
--

DROP TABLE IF EXISTS `latest_novels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `latest_novels` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `chapter_number` int DEFAULT NULL,
  `cover` varchar(255) DEFAULT NULL,
  `public_id` binary(16) NOT NULL,
  `published_date` date DEFAULT NULL,
  `rating` double DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `views` int DEFAULT NULL,
  `ranking` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKhmg5owuakaekwat7g0f29u18r` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=823 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `latest_novels`
--

LOCK TABLES `latest_novels` WRITE;
/*!40000 ALTER TABLE `latest_novels` DISABLE KEYS */;
INSERT INTO `latest_novels` VALUES (811,139,'nhân-vật-phản-diện-muốn-sống.jpg',_binary '�\�S�\�kB���v�b\�\�','2024-12-04',4.6,'Nhân vật phản diện muốn sống',NULL,12),(812,361,'nhân-vật-phụ-của-tiểu-thuyết.jpg',_binary 'BH\�\�EuG\"�G\�\�\�s\�','2024-12-04',4.7,'Nhân vật phụ của tiểu thuyết',NULL,9),(813,588,'solo-leveling.jpg',_binary '5\����M��(�A\�\�s','2024-12-04',4.7,'Solo leveling',NULL,3),(814,314,'cuộc-đời-người-lính.jpg',_binary '\'f8��)M\�`.\�Zz','2024-12-04',4.5,'Cuộc đời người lính',NULL,11),(815,489,'quỷ-bí-chi-chủ.jpg',_binary 'y\�L\�B��*O,ۣ�','2024-12-04',4.3,'Quỷ bí chi chủ',NULL,8),(816,377,'đạo-quỷ-dị-tiên.jpg',_binary '㹧:o�I�\�\�\�+\�u\�','2024-12-04',4.6,'Đạo quỷ dị tiên',NULL,10),(817,555,'thợ-máy-huyền-thoại.jpg',_binary '�N�\��@ר\�E֠�\�,','2024-12-02',4.6,'Thợ máy huyền thoại',NULL,4),(818,65,'góc-nhìn-của-độc-giả-toàn-chi.jpg',_binary '�<�\�\� M@�o%\�p�','2024-12-01',4.5,'Góc nhìn của độc giả toàn chi',NULL,5),(819,243,'ánh-sáng-cuối-con-đường.jpg',_binary '�t��e@�\�V��xx�','2024-12-01',4.8,'Ánh sáng cuối con đường',NULL,7),(820,377,'pov-của-tác-giả.jpg',_binary '֤R\�:Kz�ī�ؚ','2024-12-01',4.5,'Pov của tác giả',NULL,2),(821,593,'cổ-chân-nhân.jpg',_binary '8	��%Eԥ(�\�\�.\�\�','2024-11-28',4.8,'Cổ chân nhân',NULL,1),(822,404,'nô-lệ-bóng-tối.jpg',_binary '%����O�8P�\�|N\�','2024-11-28',4.7,'Nô lệ bóng tối',NULL,6);
/*!40000 ALTER TABLE `latest_novels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `novel`
--

DROP TABLE IF EXISTS `novel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `novel` (
  `id` bigint NOT NULL,
  `auth_name` varchar(255) DEFAULT NULL,
  `description` varchar(5000) DEFAULT NULL,
  `public_id` binary(16) NOT NULL,
  `ranking` int DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `views` int DEFAULT NULL,
  `chapter_number` int DEFAULT NULL,
  `star` double DEFAULT NULL,
  `subtitle` varchar(255) DEFAULT NULL,
  `published_date` date DEFAULT NULL,
  `cover` varchar(255) DEFAULT NULL,
  `summary` varchar(255) DEFAULT NULL,
  `rating` double DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `novel`
--

LOCK TABLES `novel` WRITE;
/*!40000 ALTER TABLE `novel` DISABLE KEYS */;
INSERT INTO `novel` VALUES (96,'Gu Zhen Ren','Con người thông minh theo hàng vạn cách, Gu là tinh hoa tinh túy thực sự của Trời và Đất.\n\nTam Điện là bất chính, con quỷ được tái sinh.\n\nNhững ngày xưa chỉ là một giấc mơ cũ, một cái tên giống hệt được tạo ra mới.\n\nMột câu chuyện về một người du hành thời gian liên tục được tái sinh.\n\nMột thế giới độc đáo phát triển, nuôi dưỡng và sử dụng Gu.\n\nXuân Thu Ve Sầu, Nguyệt Quang Độc Gu, Rượu Trùng, Kim Quang Trùng Toàn Diện, Tóc Đen Gu, Hy Vọng Gu…\n\nVà một con quỷ vĩ đại của thế giới làm chính xác theo ý muốn của trái tim mình',_binary '8	��%Eԥ(�\�\�.\�\�',1,'Cổ chân nhân',14930,586,NULL,NULL,'2024-11-28','cổ-chân-nhân.jpg',NULL,4.8,'Đang tiến hành'),(97,' Guiltythree ','Lớn lên trong cảnh nghèo đói, Sunny chưa bao giờ mong đợi điều gì tốt đẹp từ cuộc sống. Tuy nhiên, ngay cả anh cũng không ngờ mình được chọn bởi Bùa chú Ác mộng và trở thành một trong những Người thức tỉnh - một nhóm người ưu tú được ban tặng sức mạnh siêu nhiên. Bị đưa đến một thế giới ma thuật bị hủy hoại, anh thấy mình phải đối mặt với những con quái vật khủng khiếp - và những Người thức tỉnh khác - trong một trận chiến sinh tồn chết chóc.\nTệ hơn nữa, sức mạnh thần thánh mà anh nhận được tình cờ sở hữu một tác dụng phụ nhỏ nhưng có khả năng gây tử vong...',_binary '%����O�8P�\�|N\�',6,'Nô lệ bóng tối',3403,74,NULL,NULL,'2024-11-28','nô-lệ-bóng-tối.jpg',NULL,4.7,'Đang tiến hành'),(98,' Sing-Shong','Chỉ có tôi biết kết thúc của thế giới này.\n\nMột ngày nọ, nhân vật chính của chúng ta thấy mình bị mắc kẹt trong thế giới tiểu thuyết web yêu thích của mình. Anh ấy làm gì để sống sót? Đó là một thế giới bị tấn công bởi thảm họa và nguy hiểm khắp nơi.\n\nGiới hạn của anh ấy? Anh ấy biết cốt truyện của câu chuyện sẽ kết thúc như thế nào. Bởi vì anh ấy là độc giả duy nhất gắn bó với nó. Hãy đọc câu chuyện của anh ấy để xem anh ấy sống sót như thế nào!',_binary '�<�\�\� M@�o%\�p�',5,'Góc nhìn của độc giả toàn chi',4233,338,NULL,NULL,'2024-12-01','góc-nhìn-của-độc-giả-toàn-chi.jpg',NULL,4.5,'Đang tiến hành'),(99,' TurtleMe ','Vua Grey có sức mạnh, sự giàu có và uy tín vô song trong một thế giới được cai trị bởi khả năng võ thuật. Tuy nhiên, sự cô đơn luôn rình rập những người có sức mạnh to lớn. Bên dưới vẻ ngoài quyến rũ của một vị vua quyền lực ẩn chứa lớp vỏ của con người, không có mục đích và ý chí.\n\nĐược tái sinh vào một thế giới mới đầy phép thuật và quái vật, vị vua có cơ hội thứ hai để sống lại cuộc đời mình. Tuy nhiên, sửa chữa những sai lầm trong quá khứ sẽ không phải là thách thức duy nhất của ông. Bên dưới sự bình yên và thịnh vượng của thế giới mới là một dòng chảy ngầm đe dọa phá hủy mọi thứ mà ông đã nỗ lực, đặt câu hỏi về vai trò và lý do ông được tái sinh.',_binary '�t��e@�\�V��xx�',7,'Ánh sáng cuối con đường',1769,260,NULL,NULL,'2024-12-01','ánh-sáng-cuối-con-đường.jpg',NULL,4.8,'Đang tiến hành'),(100,' Entrail_JI ','Người mà thế giới xoay quanh.\n\nNgười đánh bại tất cả đối thủ của mình và cuối cùng có được cô gái xinh đẹp.\n\nSự tồn tại duy nhất mà tất cả những kẻ phản diện đều sợ.\n\nĐó là nhân vật chính.\n\nCòn tôi thì sao?',_binary '֤R\�:Kz�ī�ؚ',2,'Pov của tác giả',6182,586,NULL,NULL,'2024-12-01','pov-của-tác-giả.jpg',NULL,4.5,'Đang tiến hành'),(101,' Chocolion ','Bạn làm gì khi thức dậy và thấy mình đang ở trong chính trò chơi mà bạn yêu thích?\n\nBạn sẽ làm gì khi nhận ra rằng mình không chỉ trở thành NPC - bạn thậm chí còn bị quay ngược thời gian về trước khi trò chơi ra mắt!\n\nĐiều gì sẽ xảy ra khi hai thực tại của nhân vật chính của chúng ta trùng khớp nhau?\n\nHan Xiao là một người thăng cấp sức mạnh chuyên nghiệp trước khi xuyên qua. Sử dụng kiến ​​thức từ kiếp trước, Han Xiao quét khắp vũ trụ để chuẩn bị cho sự xuất hiện của những người chơi. Đây chắc chắn không phải là cuốn tiểu thuyết chuyển sinh điển hình của bạn.',_binary '�N�\��@ר\�E֠�\�,',4,'Thợ máy huyền thoại',5159,130,NULL,NULL,'2024-12-02','thợ-máy-huyền-thoại.jpg',NULL,4.6,'Đang tiến hành'),(103,' Jee Gab Song ','Ông chủ cấp trung trong trò chơi AAA của công ty tôi.\n\nDeculein, một nhân vật phản diện chết ở 999 trên 1000 lượt chơi.\n\nBây giờ tôi đã chuyển sinh trong cơ thể anh ấy.',_binary '�\�S�\�kB���v�b\�\�',12,'Nhân vật phản diện muốn sống',522,209,NULL,NULL,'2024-12-04','nhân-vật-phản-diện-muốn-sống.jpg',NULL,4.6,'Đang tiến hành'),(104,' Jee Gab Song ','Tỉnh dậy, Kim Hajin thấy mình đang ở một thế giới quen thuộc nhưng lại là một cơ thể xa lạ.\n\nMột thế giới do chính anh tạo ra và một câu chuyện do anh viết nhưng chưa bao giờ kết thúc.\n\nAnh ta đã trở thành nhân vật phụ trong cuốn tiểu thuyết của mình, một nhân vật phụ không có tầm quan trọng gì đối với câu chuyện.\n\nManh mối duy nhất để trốn thoát là bám sát cốt truyện chính.\n\nTuy nhiên, anh sớm phát hiện ra thế giới không hoàn toàn giống với sự sáng tạo của anh.\nHiển thị thêm.',_binary 'BH\�\�EuG\"�G\�\�\�s\�',9,'Nhân vật phụ của tiểu thuyết',931,86,NULL,NULL,'2024-12-04','nhân-vật-phụ-của-tiểu-thuyết.jpg',NULL,4.7,'Đang tiến hành'),(105,'Chugong','10 năm trước, sau khi “Cánh cổng” kết nối thế giới thực với thế giới quái vật được mở ra, một số người bình thường hàng ngày đã nhận được sức mạnh để săn quái vật trong Cánh cổng. Họ được mệnh danh là “Thợ săn”. Tuy nhiên, không phải Thợ săn nào cũng mạnh mẽ. Tên tôi là Sung Jin-Woo, một Thợ săn hạng E. Tôi là người phải mạo hiểm mạng sống của mình trong ngục tối thấp nhất, “Yếu nhất thế giới”. Không có bất kỳ kỹ năng nào để thể hiện, tôi hầu như không kiếm được số tiền cần thiết bằng cách chiến đấu trong các ngục tối cấp thấp… ít nhất là cho đến khi tôi tìm thấy một ngục tối ẩn có độ khó cao nhất trong các ngục tối hạng D! Cuối cùng, khi tôi đang chấp nhận cái chết, tôi đột nhiên nhận được một sức mạnh kỳ lạ, một nhật ký nhiệm vụ mà chỉ tôi mới có thể nhìn thấy, một bí mật để tăng cấp mà chỉ tôi mới biết! Nếu tôi luyện tập theo nhiệm vụ và săn quái vật, cấp độ của tôi sẽ tăng lên. Thay đổi từ Thợ săn yếu nhất thành Thợ săn hạng S mạnh nhất!',_binary '5\����M��(�A\�\�s',3,'Solo leveling',5982,463,NULL,NULL,'2024-12-04','solo-leveling.jpg',NULL,4.7,'Đang tiến hành'),(106,' Alwaysrollsaone ','Câu chuyện chung về việc được chuyển đến một thế giới khác.\n\nMC bị buộc phải nhập ngũ trong bối cảnh giả tưởng và thăng cấp trong khi vẫn giữ bí mật về khả năng thực sự của mình.\n\nĐây là nỗ lực của tôi để thêm chút hài hước vào bài viết của mình. Hy vọng bạn thích nó.',_binary '\'f8��)M\�`.\�Zz',11,'Cuộc đời người lính',749,641,NULL,NULL,'2024-12-04','cuộc-đời-người-lính.jpg',NULL,4.5,'Đang tiến hành'),(107,'Cá kho dưa','Trong làn sóng hơi nước và máy móc, ai có thể đạt được thành tựu phi thường? Trong sương mù của lịch sử và bóng tối, ai đang thì thầm? Tôi thức dậy từ cõi bí ẩn và mở rộng tầm mắt nhìn ra thế giới.\n\nSúng, đại bác, tàu chiến, khí cầu và các loại máy khác nhau. Độc dược, bói toán, lời nguyền, người treo cổ và các hiện vật bị phong ấn… Ánh sáng tỏa sáng rực rỡ, nhưng những bí mật của thế giới vẫn chưa bao giờ xa vời. Đây là truyền thuyết về “Kẻ ngốc”',_binary 'y\�L\�B��*O,ۣ�',8,'Quỷ bí chi chủ',1426,505,NULL,NULL,'2024-12-04','quỷ-bí-chi-chủ.jpg',NULL,4.3,'Đang tiến hành'),(108,'Ba chỉ cháy cạnh','Quỷ dị thiên đạo, dị thường Tiên Phật, là thực? Là giả? Sa vào mê võng Lý Hỏa Vượng không cách nào phân biệt. Có thể để hắn không cách nào phân biệt không chỉ chỉ là những thứ này. Còn có chính hắn, hắn bệnh, bệnh rất nặng. ',_binary '㹧:o�I�\�\�\�+\�u\�',10,'Đạo quỷ dị tiên',865,442,NULL,NULL,'2024-12-04','đạo-quỷ-dị-tiên.jpg',NULL,4.6,'Đang tiến hành');
/*!40000 ALTER TABLE `novel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `novel_chapters`
--

DROP TABLE IF EXISTS `novel_chapters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `novel_chapters` (
  `novel_id` bigint NOT NULL,
  `chapters_id` bigint NOT NULL,
  PRIMARY KEY (`novel_id`,`chapters_id`),
  UNIQUE KEY `UKqti1bp8pii9cqbo8ewfkdsd78` (`chapters_id`),
  CONSTRAINT `FKbnyngmvf2yk44f9n8v496rkoo` FOREIGN KEY (`novel_id`) REFERENCES `novel` (`id`),
  CONSTRAINT `FKtavr1ewchgq3te34r8det2ihx` FOREIGN KEY (`chapters_id`) REFERENCES `chapter` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `novel_chapters`
--

LOCK TABLES `novel_chapters` WRITE;
/*!40000 ALTER TABLE `novel_chapters` DISABLE KEYS */;
/*!40000 ALTER TABLE `novel_chapters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `novel_generator`
--

DROP TABLE IF EXISTS `novel_generator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `novel_generator` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `novel_generator`
--

LOCK TABLES `novel_generator` WRITE;
/*!40000 ALTER TABLE `novel_generator` DISABLE KEYS */;
INSERT INTO `novel_generator` VALUES (109);
/*!40000 ALTER TABLE `novel_generator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `novel_genre`
--

DROP TABLE IF EXISTS `novel_genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `novel_genre` (
  `id` bigint NOT NULL,
  `name` varchar(255) NOT NULL,
  `public_id` binary(16) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK31jjx405scu2skim369p5vc9i` (`public_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `novel_genre`
--

LOCK TABLES `novel_genre` WRITE;
/*!40000 ALTER TABLE `novel_genre` DISABLE KEYS */;
INSERT INTO `novel_genre` VALUES (44,'Action',_binary '\�+\�\�Ep���O2Y3'),(45,'Drama',_binary '#\�ٽ%\�C��\�jUD\0\�'),(62,'Comedy',_binary 'n~@v\�(Az�\�\�:��\�'),(65,'Fantasy',_binary '\�\�O�DkH��%z;ɷ�'),(67,'Romance',_binary '\��\���Nը�ʗ��}�'),(81,'Tu luyện',_binary '�D��kL\�}ZB�H/s'),(82,'Chuyển sinh',_binary '�聬I튊a9\���'),(83,'test',_binary '�\�3/\�N��\��7e'),(84,'Horror',_binary '�\�Y2\�B˳;[�Q�I�');
/*!40000 ALTER TABLE `novel_genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `novel_genre_mapping`
--

DROP TABLE IF EXISTS `novel_genre_mapping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `novel_genre_mapping` (
  `novel_id` bigint NOT NULL,
  `genre_id` bigint NOT NULL,
  PRIMARY KEY (`novel_id`,`genre_id`),
  KEY `FK63fofq9ff1x3i5a20sxvj1eq5` (`genre_id`),
  CONSTRAINT `FK63fofq9ff1x3i5a20sxvj1eq5` FOREIGN KEY (`genre_id`) REFERENCES `novel_genre` (`id`),
  CONSTRAINT `FK_novel_genre` FOREIGN KEY (`novel_id`) REFERENCES `novel` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FKi0hu3hjh0llbj7yr6yrylbcd4` FOREIGN KEY (`novel_id`) REFERENCES `novel` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `novel_genre_mapping`
--

LOCK TABLES `novel_genre_mapping` WRITE;
/*!40000 ALTER TABLE `novel_genre_mapping` DISABLE KEYS */;
INSERT INTO `novel_genre_mapping` VALUES (96,44),(97,44),(98,44),(99,44),(100,44),(101,44),(103,44),(104,44),(105,44),(106,44),(107,44),(108,44),(96,45),(99,45),(103,45),(104,45),(97,62),(98,62),(99,62),(104,62),(96,65),(97,65),(98,65),(99,65),(100,65),(101,65),(103,65),(105,65),(106,65),(107,65),(108,65),(97,67),(98,67),(99,67),(101,67),(103,67),(104,67),(105,67),(99,81),(107,81),(108,81),(99,82),(100,82),(103,82),(104,82),(107,82),(108,82),(107,84),(108,84);
/*!40000 ALTER TABLE `novel_genre_mapping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `novel_genre_sequence`
--

DROP TABLE IF EXISTS `novel_genre_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `novel_genre_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `novel_genre_sequence`
--

LOCK TABLES `novel_genre_sequence` WRITE;
/*!40000 ALTER TABLE `novel_genre_sequence` DISABLE KEYS */;
INSERT INTO `novel_genre_sequence` VALUES (85);
/*!40000 ALTER TABLE `novel_genre_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `novel_picture`
--

DROP TABLE IF EXISTS `novel_picture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `novel_picture` (
  `id` bigint NOT NULL,
  `file` tinyblob NOT NULL,
  `file_content_type` varchar(255) DEFAULT NULL,
  `novel_fk` bigint DEFAULT NULL,
  `type_of_file` tinytext NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKja1vnx4f5edsf611ne2p4dfnf` (`novel_fk`),
  CONSTRAINT `FKja1vnx4f5edsf611ne2p4dfnf` FOREIGN KEY (`novel_fk`) REFERENCES `novel` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `novel_picture`
--

LOCK TABLES `novel_picture` WRITE;
/*!40000 ALTER TABLE `novel_picture` DISABLE KEYS */;
/*!40000 ALTER TABLE `novel_picture` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `novel_picture_generator`
--

DROP TABLE IF EXISTS `novel_picture_generator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `novel_picture_generator` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `novel_picture_generator`
--

LOCK TABLES `novel_picture_generator` WRITE;
/*!40000 ALTER TABLE `novel_picture_generator` DISABLE KEYS */;
INSERT INTO `novel_picture_generator` VALUES (1);
/*!40000 ALTER TABLE `novel_picture_generator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` varchar(255) NOT NULL,
  `created_date` datetime(6) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `last_modified_date` datetime(6) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('07677b8a-e5e0-41dd-a897-77b22c56ce86','2024-11-11 05:59:19.218306',NULL,'admin@gmail.com',NULL,NULL,'$2a$07$JQkBBHu.ORBWKeQyqTDLiulRarovh0MclstMjtJrgiTCN8Glot2nW',NULL,'user#'),('248a6c21-3e2d-4e52-acd1-1b2ef27572ee',NULL,NULL,'adminw@gmail.com',NULL,NULL,'$2a$07$Pho25h3zwc5.q2WqLr27reexosajIQLL/9rKxrQ772IcxgAQIxHZW',NULL,'ADMIN'),('4f37156d-773d-4ba7-a8cd-f669164cf308','2024-11-15 13:24:59.968775',NULL,'nguyenhatuanthanh1901@gmail.com',NULL,NULL,'$2a$07$xPJKKdTaMY2qtbHDip8AG.hfGlYAB9w5ZN9xND4YVQYbXDB0VUPba',NULL,NULL),('7cd61753-9ee8-46de-aeaa-945f6609ec27','2024-11-15 13:27:03.365688',NULL,'1111@gmail.com',NULL,NULL,'$2a$07$RRgJDLji5/C6lnCYoqPHJOcuL40bU0VBBib3UqG7kGg04I08apZM6',NULL,'user#2aa8366f-a448-4162-af3e-31c4adf40878');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_roles` (
  `user_id` varchar(255) NOT NULL,
  `role` varchar(255) DEFAULT NULL,
  KEY `FK55itppkw3i07do3h7qoclqd4k` (`user_id`),
  CONSTRAINT `FK55itppkw3i07do3h7qoclqd4k` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES ('07677b8a-e5e0-41dd-a897-77b22c56ce86','USER'),('4f37156d-773d-4ba7-a8cd-f669164cf308','USER'),('7cd61753-9ee8-46de-aeaa-945f6609ec27','USER'),('248a6c21-3e2d-4e52-acd1-1b2ef27572ee','ADMIN');
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-15 17:47:39
