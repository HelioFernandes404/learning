# Mês 1 — Blueprint Operacional (versão enxuta)

## Objetivo (1 frase)

Implementar **regressão linear + gradiente numérico** e ficar confortável com **Python/NumPy/Pandas** sem depender de copiar/colar.

## Entregáveis do mês (checklist)

* [ ] 1 repositório com estrutura padrão (pastas + comandos)
* [ ] 4 mini-projetos (1/semana) versionados no GitHub
* [ ] 10+ exercícios fáceis (LeetCode Easy ou equivalente)
* [ ] cards de revisão (D2/D7/D14) atualizados
* [ ] learning-log (mín. 2 linhas por dia útil)

---

## Estrutura do mês (pastas)

```
~/ai-engineer-journey/01-foundations/month-01/
├── 00-setup/
├── 01-week-01-python/
├── 02-week-02-numpy/
├── 03-week-03-pandas/
├── 04-week-04-math/
```

## Estrutura padrão de cada mini-projeto

```
<week-folder>/
├── README.md | notes.md | retrieval.md
├── src/ (main.py, core.py)
├── tests/ (test_core.py)
├── data/        # opcional (semana 3)
├── notebooks/   # opcional
└── outputs/
    ├── figures/
    └── metrics/
```

---

## Rotina + revisão (sempre igual)

### Seg–Qui (2h)

1. **INPUT (30m)**: 3 perguntas em `notes.md`
2. **BUILD (70–80m)**: implementar sem copiar/colar + rodar 1 teste
3. **RETRIEVAL (10m)**: “como faço do zero?” em `retrieval.md`
4. **LOG (5m)**: 2 linhas em `_shared/learning-log.md`

### Sex

* [ ] refazer 1 parte sem olhar + marcar falhas (⚠️) nos cards

### Sáb (2h)

* [ ] projeto da semana + README por ditado

### Dom (30m)

* [ ] revisar cards (10–20s por card)
* errou → revisa em ~3 dias; acertou → empurra

### Revisão espaçada (D0/D2/D7/D14)

* **D0**: aprender + implementar
* **D2**: refazer sem olhar + auto-teste (⚠️)
* **D7**: reimplementar com pequena variação
* **D14**: revisão rápida (checklist + explicação curta)

---

## Semana a semana (projeto + pronto)

**Semana 1 — Python (Calculadora OOP)**

* Projeto: classe + histórico + operações básicas
* D7: memory (M+, M-, MR, MC)
* Pronto: `python src/main.py`, 5 testes, README com uso

**Semana 2 — NumPy (Array ops sem “mágica”)**

* Projeto: reshape/slicing/broadcasting com exemplos
* D7: loops vs vetorizado
* Pronto: testes (comparar com NumPy quando fizer sentido), notebook opcional

**Semana 3 — Pandas (EDA Titanic)**

* Projeto: carregar/limpar/EDA + 3 gráficos
* D7: pipeline de limpeza em funções pequenas
* Pronto: `outputs/figures` com imagens + 5 achados em `notes.md`

**Semana 4 — Matemática (Gradiente Numérico)**

* Projeto: gradiente numérico + descida do gradiente (função simples)
* D7: variar função (ex.: ax²+bx+c)
* Pronto: explicar “gradiente” em 2 frases + gráfico de loss/iteração

---

## Templates (anti-leitura longa)

**README.md**

* o que faz (1 parágrafo)
* como rodar (3 comandos)
* resultado (1 métrica/screenshot)
* próximos passos (3 bullets)

**notes.md**

* 3–5 perguntas + respostas curtas
* erros que cometi

**retrieval.md**

* conceito em 2 frases (sem olhar)
* esqueleto do código (funções)
* ⚠️ lacunas

---

## Check-in semanal (domingo)

* [ ] 3+ implementações?
* [ ] refiz sem olhar? (meta 70%)
* [ ] projeto funcional?
* [ ] cards atualizados?
* [ ] ajuste de ritmo p/ semana seguinte?
