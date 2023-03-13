# :moneybag: Planner Financeiro Pessoal :moneybag:

Este APP ira ajudar as pessoas a ter um melhor entendimento e gerenciamento de suas vidas financeiras, melhorando o bem estar e reduzindo o estresse financeiro.
ira ser permitido ao usuario adicionar e gerenciar sua renda e despesas, criar orçamentos, e ver o seu historico financeiro.

## Funcionalidades :pushpin:

- Adicionar Despesas
- Criar orçamentos em diferentes categorias
- Visualizar historico financeiro
- Visualizar saldo geral das contas
- Criar objetivos financeiros
- Notificar o usuario sobre os limites

## Roadmap :pushpin:

1. Iniciar desenvolvimento

2. Adicionar principais funcionalidades

3. Separar transações baseada nos bancos

## :hammer_and_wrench: Stack utilizada

**Front-end:** React, TailwindCSS

**Back-end:** Node, Express, PostgreSQL

## :man_technologist: Autores

- [@RayHakku](https://github.com/RayHakku)

## :receipt: Mockup/Storyboard

- [Figma](https://www.figma.com/file/afGQmgdNhhrzt15v4TWyqf/Planner-Financeiro?node-id=0%3A1&t=vc4LcWT1ifejr4em-1) In Progress

## Estrutura de Dados

    - Usuario
        Possibilidade de Fazer logins e Cadastros.

```json
    Usuario {
        id_user:
        nome_user:
        sobrenome_user:
        email:
        senha:
        saldo_total:
    }
```

    - Conta
        Adicionar contas bancarias para salvar saldos.

```json
    Conta{
        id_conta:
        nome_banco:
        saldo_banco:
        id_user:
    }
```

    - Despesas
        Adicionar despesas e relacionar elas com contas bancarias criadas.

```json
    Despesas{
        id_despesa:
        nome_despesa:
        tipo_despesa:
        valor_despesa:
        id_conta:
        id_user:
    }
```

    - Renda
        Adicionar renda e relacionar com contas bancarias criadas.

```json
    Renda{
        id_renda:
        nome_renda:
        tipo_renda:
        valor_renda:
        id_conta:
        id_user:
    }
```

    - Orçamentos
        Criar orçamentos com limites especificos e avisar quando estiver perto de esgotar.

```json
    Orçamentos{
        id_orcamento:
        nome_orcamento:
        limite_orcamento:
        valor_orcamento:
        categoria_orcamento:
        id_user:
    }
```

    - Categorias
        Criar Categorias personalizadas para despesas e renda.

```json
    Categorias{
        id_categoria:
        nome_categoria:
        tipo_categoria:
        id_user:
    }
```

    - Obejetivo
        Criar objetivos financeiros, com foco em guardar dinheiro para futuros planejamentos.

```json
    Objetivo{
        id_objetivo:
        nome_objetivo:
        valortotal_objetivo:
        valor_objetivo:
        id_user:
    }
```
