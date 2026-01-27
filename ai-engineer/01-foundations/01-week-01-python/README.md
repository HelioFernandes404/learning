# Semana 1 - Calculadora OOP (Python)

## O que faz?
Calculadora orientada a objetos com histórico de operações e operações básicas (+, -, *, /).

## Como rodar?
```bash
# 1. Rodar o projeto
python src/main.py

# 2. Rodar testes
pytest tests/test_core.py -v
```

## Critérios de pronto
- [ ] Roda via `python src/main.py`
- [ ] 5 testes passam
- [ ] README tem: o que faz / como rodar / exemplo de uso

## Variação D7
Adicionar funcionalidade de "memory" (M+, M-, MR, MC)

## Exemplo de uso
```python
from src.core import Calculator

calc = Calculator()
result = calc.add(5, 3)
print(result)  # 8
print(calc.history)  # ['5 + 3 = 8']
```
