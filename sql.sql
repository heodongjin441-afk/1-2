CREATE DATABASE my16;
USE PJH;

CREATE TABLE post16(
	id iNT(11) NOT NULL AUTO_INCREMENT,
   title VARCHAR(100) NOT NULL,
   content TEXT NULL,
   created DATETIME NOT NULL,
   writer VARCHAR(100) NULL,
   PRIMARY KEY(id)
   );

DESC post16;

INSERT INTO post16
(title, content, created, writer, email) 
VALUES
('삶은', '계란이다', NOW(), 'lee', 'lee0naver.com');

SELECT * FROM post16;

UPDATE post16 SET content-'성격파탄자' WHERE id=4;
PJh

DELETE FROM post16 WHERE id=2;
