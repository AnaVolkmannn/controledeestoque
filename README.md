# O Estoka. é um sistema web desenvolvido para ajudar pequenos empreendedores a realizarem o seu controle de estoque. As principais funcionalidades incluem: 

Salvar os dados registrados por meio de um usuário logado com e-mail
Cadastrar novos produtos por fornecedor
Realizar um novo inventário (entradas)
Pesquisar e fazer consultas - Filtrar por mês, ano, produto...
Gerar relatórios com estatísticas (por ex: produtos constantemente em falta)
Exportar esses inventários em PDF~, somando todos os valores dos produtos em estoque, incluindo calculo de frete e IPI de produtos específicos (Necessidade do cliente)

1. Tela de Login
Campos: e-mail/usuário, senha
(login com google)
Botão: entrar
(Opcional) Esqueci minha senha
Validação e mensagens de erro

2. Dashboard / Tela Inicial
Resumo geral do estoque:
Total de produtos
Produtos em falta ou abaixo do mínimo
Atalhos para ações rápidas: “Cadastrar Produto”, “Registrar Inventário”, etc.

3. Tela de Cadastro de Produtos - Produtos são relacionados a fornecedores
Nome do produto
Código (SKU/código de barras)
Categoria
Fornecedor
Unidade de medida
Quantidade mínima
Preço de custo/venda
Campo de imagem (opcional)
Botões: ver todos os produtos, salvar, limpar
*salvar antes de sair

4. Tela de Listagem de Produtos
Tabela com:
Nome, código, fornecedor, estoque atual, categoria, preço (frete, IPI)
Ações: editar, excluir, ver detalhes
Filtro/pesquisa por nome, categoria, SKU, mês entrada
Indicador de estoque baixo (ex: em vermelho)
Botão: exportar um relatório

6. Tela para gerar Relatório
Filtro por data/mês, categoria, produto
Gera um relatório calculando o valor em estoque somando todas as quantidades de produtos
Exportar como PDF/Excel

----------------------------------------------------------
10. Popup de Notificações/Alertas
Lista de alertas (ex: produtos com estoque abaixo do mínimo)
Marcar como lido, configurar notificações por e-mail

11. Menu de Configurações
Definir estoque mínimo padrão
Ativar/desativar notificações
Sair da conta