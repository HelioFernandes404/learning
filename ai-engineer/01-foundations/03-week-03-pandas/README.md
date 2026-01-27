# Semana 3 - EDA Titanic (Pandas)

## O que faz?
Análise exploratória do dataset Titanic: carregar + limpar + EDA + 3 gráficos.

## Como rodar?
```bash
# 1. Baixar dataset (se necessário)
# Dataset: https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv

# 2. Rodar análise
python src/main.py

# 3. Ver resultados
ls outputs/figures/  # Ver gráficos gerados

# 4. Rodar testes
pytest tests/test_core.py -v
```

## Critérios de pronto
- [ ] Carregar e limpar dados (tratar missing values)
- [ ] EDA com estatísticas descritivas
- [ ] Gerar 3 gráficos (salvos em outputs/figures/)
- [ ] notes.md tem 5 bullets de achados (pode ditar)
- [ ] Pipeline de limpeza em funções pequenas

## Variação D7
Criar um "data cleaning pipeline" modular com funções reutilizáveis

## Gráficos sugeridos
1. Distribuição de sobrevivência por classe
2. Idade vs Sobrevivência
3. Correlação entre features numéricas
