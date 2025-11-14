USE centralbanguela;

CREATE TABLE usuario (
idusuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(200),
senha VARCHAR(80)
);

CREATE TABLE quiz(
idquiz INT PRIMARY KEY AUTO_INCREMENT
);

CREATE TABLE resposta (
idresposta INT AUTO_INCREMENT,
fkquiz INT,
	CONSTRAINT fkrespostaquiz
		FOREIGN KEY (fkquiz)
			REFERENCES quiz(idquiz),
fkusuario INT,
	CONSTRAINT fkrespostausuario
		FOREIGN KEY (fkusuario)
			REFERENCES usuario(idusuario),
PRIMARY KEY(idresposta, fkquiz, fkusuario),
soluco INT,
astrid INT,
melequento INT,
pernadepeixe INT,
cabecadura INT,
cabecaquente INT
);

