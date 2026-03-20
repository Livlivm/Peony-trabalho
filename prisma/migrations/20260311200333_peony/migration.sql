-- CreateTable
CREATE TABLE `ProdutoPersonalizado` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipoPeca` VARCHAR(191) NOT NULL,
    `modelo` VARCHAR(191) NOT NULL,
    `recorte` VARCHAR(191) NOT NULL,
    `cor` VARCHAR(191) NOT NULL,
    `tecido` VARCHAR(191) NOT NULL,
    `tamanho` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
