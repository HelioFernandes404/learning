# Semana 4 - Gradiente Numérico & Descida do Gradiente

## O que faz?
Implementação de gradiente numérico e descida do gradiente em função simples (ex: f(x) = x²).

## Como rodar?
```bash
# 1. Rodar o projeto
python src/main.py

# 2. Ver gráfico de convergência
ls outputs/figures/gradient_descent.png

# 3. Rodar testes
pytest tests/test_core.py -v
```

## Critérios de pronto
- [ ] Implementar cálculo de gradiente numérico
- [ ] Implementar descida do gradiente
- [ ] Gerar gráfico de loss por iteração
- [ ] Conseguir explicar "gradiente" em 2 frases (retrieval.md)
- [ ] Testar convergência em função simples

## Variação D7
Mudar função (ex: x² → ax²+bx+c) e observar como learning rate afeta convergência

## Conceitos-chave
- Gradiente (derivada)
- Learning rate
- Convergência
- Loss function
- Descida do gradiente (otimização)

## Exemplo de função
```python
# Função simples: f(x) = x²
# Objetivo: encontrar x que minimiza f(x)
# Resposta esperada: x = 0
```
