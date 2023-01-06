-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-12-2022 a las 22:08:54
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `viajeros`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `destiny`
--

CREATE TABLE `destiny` (
  `ID` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `date` date NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `detail` text NOT NULL,
  `destiny_category_id` int(10) NOT NULL,
  `img` text NOT NULL,
  `status_id` int(10) NOT NULL,
  `extras` int(10) NOT NULL,
  `transport_id` int(10) NOT NULL,
  `group_id` int(10) NOT NULL,
  `meals_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `destiny`
--

INSERT INTO `destiny` (`ID`, `name`, `date`, `price`, `detail`, `destiny_category_id`, `img`, `status_id`, `extras`, `transport_id`, `group_id`, `meals_id`) VALUES
(1, 'Brasil', '2023-05-20', '3000', 'varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi', 2, 'brasil1.jpg', 2, 3, 3, 2, 3),
(2, 'Sweden', '0000-00-00', '3169', 'varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi', 2, '1663087181395_img_.jpg', 1, 1, 2, 1, 3),
(3, 'Brasil', '2023-02-17', '1968', 'magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet', 2, 'brasil-carnaval.jpg', 1, 3, 1, 2, 1),
(4, 'Francia', '2023-12-02', '5001', 'et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae', 2, 'francia1.jpg', 1, 1, 1, 2, 1),
(5, 'Uganda', '2023-03-20', '4948', 'erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis', 2, 'uganda.jpg', 1, 3, 3, 1, 2),
(6, 'China', '2023-05-20', '2332', 'id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in', 2, 'china6.jpg', 1, 1, 1, 2, 2),
(7, 'Haiti', '2023-12-15', '2307', 'montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim', 2, 'haiti.jpg', 1, 4, 3, 2, 2),
(8, 'Cordoba', '0000-00-00', '4500', 'ububuvbubrquburdvbdbdjsvjvddjk', 1, 'img-1669670461808.jpg', 1, 1, 2, 2, 4),
(9, 'Rusia', '2023-03-20', '4779', 'in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem', 2, 'rusia1.jpeg', 1, 1, 3, 1, 1),
(10, 'Filipinas', '2023-11-20', '131', 'condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue', 2, 'filipinas1.jpeg', 2, 2, 1, 1, 4),
(11, 'Indonesia', '0000-00-00', '9702', 'ububuvbubrquburdvbdbdjsvjvddjk', 1, 'indonesia.jpeg', 2, 1, 3, 2, 4),
(13, 'Polonia', '0000-00-00', '3425', 'biubvuibbivvbviubwepiuvbiubv', 1, 'polonia.jpeg', 1, 4, 2, 2, 2),
(14, 'Filipinas', '2023-02-12', '5078', 'mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in', 2, 'filipinas2.jpeg', 2, 3, 3, 1, 3),
(15, 'China', '2023-05-20', '4809', 'rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio', 2, 'china1.jpg', 2, 3, 1, 2, 3),
(16, 'Indonesia', '2023-06-12', '7242', 'magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis', 1, 'indonesia1.jpeg', 2, 4, 3, 2, 3),
(17, 'Indonesia', '2022-11-18', '6372', 'nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in', 1, 'indonesia2.jpeg', 3, 3, 3, 1, 2),
(18, 'Mexico', '2022-12-10', '9326', 'cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae', 1, 'mexico.jpeg', 2, 2, 2, 2, 3),
(19, 'Indonesia', '2024-12-05', '6903', 'fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget', 2, 'indonesia3.jpg', 1, 1, 1, 1, 1),
(20, 'China', '2023-08-10', '610', 'velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus', 1, 'china2.jpg', 2, 2, 3, 1, 4),
(21, 'Mongolia', '2023-05-12', '1564', 'laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus', 1, 'mongolia.jpeg', 2, 2, 2, 1, 2),
(22, 'China', '2023-01-22', '6198', 'platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed', 1, 'china4.jpg', 1, 2, 1, 2, 2),
(23, 'Argentina', '2022-12-05', '7201', 'nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus', 2, 'argentina-turismo-rural.jpg', 2, 4, 3, 1, 4),
(24, 'Grecia', '2024-05-16', '7642', 'pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate', 2, 'grecia1.jpg', 2, 2, 2, 2, 3),
(25, 'Portugal', '2023-03-15', '2975', 'est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus', 2, 'portugal.jpeg', 2, 4, 2, 1, 1),
(26, 'Grecia', '2023-10-20', '6875', 'non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros', 2, 'grecia2.jpg', 1, 2, 3, 2, 2),
(27, 'Burkina Faso', '2023-06-20', '990', 'a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien', 2, 'burkina-faso.jpeg', 1, 2, 1, 1, 4),
(28, 'España', '2022-12-28', '339', 'eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor', 2, 'españa.jpeg', 1, 3, 2, 1, 3),
(29, 'Irlanda', '2022-08-19', '9538', 'quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi', 2, 'irlanda.jpeg', 2, 4, 2, 2, 2),
(30, 'China', '2024-02-23', '9954', 'amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer', 1, 'china3.webp', 1, 2, 1, 1, 4),
(31, 'Macedonia', '2023-04-12', '7673', 'lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam', 1, 'macedonia.jpeg', 2, 4, 3, 2, 1),
(32, 'Indonesia', '2022-12-14', '577', 'praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor', 1, 'indonesia4.jpg', 1, 2, 1, 1, 4),
(33, 'Canada', '2023-07-21', '5819', 'pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui', 1, 'canada.jpg', 1, 1, 1, 1, 1),
(34, 'Noruega', '2023-01-20', '1321', 'sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem', 2, 'noruega.jpeg', 2, 2, 3, 2, 1),
(36, 'Portugal', '2023-03-14', '5878', 'aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea', 1, 'portugal2.jpeg', 1, 4, 1, 1, 3),
(37, 'Uganda', '2023-02-15', '8796', 'congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel', 2, 'kampala-uganda.jpg', 2, 4, 2, 2, 3),
(38, 'Peru', '2023-01-23', '2332', 'quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum', 2, 'peru.jpeg', 2, 4, 3, 2, 3),
(39, 'Japon', '2022-11-25', '5767', 'ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien', 2, 'japon.jpeg', 2, 2, 3, 2, 4),
(40, 'China', '2023-01-23', '5627', 'posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris', 1, 'china5.jpg', 2, 4, 2, 2, 2),
(41, 'Francia', '2024-02-17', '3520', 'amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at', 2, 'francia2.jpg', 2, 2, 3, 2, 3),
(42, 'China', '2023-05-05', '3146', 'nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien', 1, 'china7.jpg', 1, 1, 3, 1, 1),
(43, 'Filipinas', '2022-12-25', '9572', 'tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac', 2, 'filipinas3.jpeg', 2, 2, 1, 1, 2),
(44, 'Rusia', '2024-02-15', '1502', 'vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit', 1, 'rusia2.jpeg', 1, 3, 1, 2, 4),
(45, 'Serbia', '2023-02-20', '7275', 'et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec', 2, 'serbia.jpeg', 2, 2, 2, 1, 1),
(46, 'Albania', '2024-04-18', '571', 'luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed', 2, 'albania.jpg', 2, 1, 1, 2, 1),
(47, 'Argentina', '2022-12-28', '934', 'lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in', 2, 'argentina-cordillera.jpg', 2, 1, 1, 2, 4),
(48, 'Tailandia', '2023-04-17', '840', 'est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed', 2, 'tailandia.jpeg', 1, 1, 3, 1, 3),
(49, 'Filipinas', '2023-02-15', '7953', 'lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas', 1, 'filipinas4.webp', 2, 4, 1, 1, 2),
(50, 'China', '2023-05-25', '4134', 'tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat', 2, 'china8.jpg', 2, 3, 3, 1, 4),
(51, 'Estados Unidos', '2022-12-03', '8521', 'et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien', 1, 'estados\'unidos.jpeg', 2, 4, 3, 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `destiny_categories`
--

CREATE TABLE `destiny_categories` (
  `ID` int(10) NOT NULL,
  `categoria` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `destiny_categories`
--

INSERT INTO `destiny_categories` (`ID`, `categoria`) VALUES
(1, 'Nacional'),
(2, 'Internacional');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `destiny_user`
--

CREATE TABLE `destiny_user` (
  `ID` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `destiny_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `groups`
--

CREATE TABLE `groups` (
  `ID` int(10) NOT NULL,
  `group` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `groups`
--

INSERT INTO `groups` (`ID`, `group`) VALUES
(1, 'Individual'),
(2, 'Grupal');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `meals_ids`
--

CREATE TABLE `meals_ids` (
  `ID` int(10) NOT NULL,
  `meals` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `meals_ids`
--

INSERT INTO `meals_ids` (`ID`, `meals`) VALUES
(1, 'Todo incluido'),
(2, 'Media pensión '),
(3, 'Pensión completa'),
(4, 'No incluye comidas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `statuses`
--

CREATE TABLE `statuses` (
  `ID` int(10) NOT NULL,
  `status` varchar(23) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `statuses`
--

INSERT INTO `statuses` (`ID`, `status`) VALUES
(1, 'Destacado'),
(2, 'Oferta'),
(3, 'Simple');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `transport_ids`
--

CREATE TABLE `transport_ids` (
  `ID` int(10) NOT NULL,
  `transport` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `transport_ids`
--

INSERT INTO `transport_ids` (`ID`, `transport`) VALUES
(1, 'Avion'),
(2, 'Colectivo'),
(3, 'Barco');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `ID` int(10) NOT NULL,
  `first_name` varchar(200) NOT NULL,
  `last_name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `user` varchar(200) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_category_id` int(10) NOT NULL,
  `img` text NOT NULL,
  `phone_number` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`ID`, `first_name`, `last_name`, `email`, `user`, `password`, `user_category_id`, `img`, `phone_number`) VALUES
(1, 'Jaquenette', 'Viollet', 'jviollet0@time.com', 'jviollet0', 'GVkPJ3eR', 2, 'img-1668730606495.jpeg', 519),
(2, 'Myles', 'Bloor', 'mbloor1@themeforest.net', 'mbloor1', 'zaa4X6aOzk', 2, 'usuario5.jpeg', 476),
(3, 'Vite', 'Jorry', 'vjorry2@amazon.co.jp', 'vjorry2', 'ONzZyadNb1X', 1, 'usuario1.jpeg', 917),
(4, 'Mirabel', 'Lindwasser', 'mlindwasser3@mail.ru', 'mlindwasser3', 'ZxdmTxDmE', 1, 'usuario4.jpeg', 527),
(5, 'Helenelizabeth', 'Kennaway', 'hkennaway4@dailymotion.com', 'hkennaway4', 'OuLXCUM12aGw', 1, 'usuario2.jpeg', 913),
(6, 'Jennie', 'Brownbill', 'jbrownbill5@1und1.de', 'jbrownbill5', '2c34V94vX', 2, 'usuario6.jpeg', 168),
(7, 'Deni', 'Broxton', 'dbroxton6@ifeng.com', 'dbroxton6', 'WmnzIoYJ', 1, 'usuario7.jpeg', 486),
(8, 'Ode', 'Gowan', 'ogowan7@altervista.org', 'ogowan7', 'qdVWZnWUtu7t', 1, 'usuario8.jpeg', 374),
(9, 'Rouvin', 'Coster', 'rcoster8@harvard.edu', 'rcoster8', 'pxHhqlUw', 2, 'usuario9.jpeg', 976),
(10, 'Orv', 'Axby', 'oaxby9@sakura.ne.jp', 'oaxby9', 'KS4SfqoQZxN', 1, 'usuario10.jpeg', 110),
(11, 'Darya', 'Lyddy', 'dlyddya@imageshack.us', 'dlyddya', 'PXx6aPLsLn', 2, 'usuario11.jpeg', 119),
(12, 'Lin', 'Kos', 'lkosb@facebook.com', 'lkosb', '74j9PMJI4cN2', 1, 'usuario12.jpeg', 792),
(13, 'Geraldine', 'Tabbitt', 'gtabbittc@symantec.com', 'gtabbittc', 'e9RYGyLXXmE', 1, 'usuario13.jpeg', 191),
(14, 'Karl', 'Ridd', 'kriddd@usda.gov', 'kriddd', 'ktoydnXs7K', 1, 'usuario14.jpeg', 374),
(15, 'Isidor', 'Chalk', 'ichalke@netscape.com', 'ichalke', 'PkSj5AuoYkS', 2, 'usuario15.jpeg', 118),
(16, 'Doris', 'Beacon', 'dbeaconf@fema.gov', 'dbeaconf', '9h9ds3jjq', 1, 'usuario1.jpeg', 518),
(17, 'Anallise', 'McParland', 'amcparlandg@i2i.jp', 'amcparlandg', 'CziuQ35', 1, 'usuario16.jpeg', 678),
(18, 'Ardyce', 'Samuel', 'asamuelh@msu.edu', 'asamuelh', '4HsauEBCA', 1, 'usuario17.jpeg', 946),
(19, 'Inesita', 'Bettison', 'ibettisoni@ezinearticles.com', 'ibettisoni', 'YSc1dzmdQUs', 2, 'usuario4.jpeg', 859),
(20, 'Tani', 'Curnnok', 'tcurnnokj@macromedia.com', 'tcurnnokj', 'C3nGxaz0', 2, 'usuario8.jpeg', 626),
(24, 'Bot', 'DePrueba', 'botdeprueba@mail.com', 'botdeprueba', '$2a$10$B6vdrlPCYmODNqxBZFhider83vqH3DIAKfsD8iHGYCj4ZZCNX2RcW', 2, '1672347513993_img.jpg', 23568947);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_categorys`
--

CREATE TABLE `user_categorys` (
  `ID` int(10) NOT NULL,
  `category` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user_categorys`
--

INSERT INTO `user_categorys` (`ID`, `category`) VALUES
(1, 'user'),
(2, 'admin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `destiny`
--
ALTER TABLE `destiny`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `destiny_categories`
--
ALTER TABLE `destiny_categories`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `destiny_user`
--
ALTER TABLE `destiny_user`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `destiny_user_user_id_foreignkey` (`user_id`),
  ADD KEY `destiny_user_destiny_id_foreignkey` (`destiny_id`);

--
-- Indices de la tabla `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `meals_ids`
--
ALTER TABLE `meals_ids`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `statuses`
--
ALTER TABLE `statuses`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `transport_ids`
--
ALTER TABLE `transport_ids`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `user_categorys`
--
ALTER TABLE `user_categorys`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `destiny`
--
ALTER TABLE `destiny`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT de la tabla `destiny_categories`
--
ALTER TABLE `destiny_categories`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `destiny_user`
--
ALTER TABLE `destiny_user`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `groups`
--
ALTER TABLE `groups`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `meals_ids`
--
ALTER TABLE `meals_ids`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `statuses`
--
ALTER TABLE `statuses`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `transport_ids`
--
ALTER TABLE `transport_ids`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `user_categorys`
--
ALTER TABLE `user_categorys`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
