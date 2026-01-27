## Mês 1 — Blueprint Operacional (estrutura + rotina + entregáveis)

### Objetivo final do mês (1 frase)
Implementar regressão linear + gradiente numérico e ficar confortável com Python/NumPy/Pandas sem depender de “copiar/colar”. 

### Entregáveis do mês (o que “prova” que fechou o mês)
- [ ] 1 repositório com estrutura padrão (pastas + comandos)
- [ ] 4 mini-projetos (1 por semana) versionados no GitHub
- [ ] 10+ exercícios fáceis (LeetCode Easy ou equivalente)
- [ ] 1 arquivo de cards de revisão (D2/D7/D14) atualizado
- [ ] 1 learning-log preenchido (mínimo 2 linhas por dia útil)

---

# 1) Estrutura de pastas (padrão para o mês)
> Observação: isso encaixa na estrutura geral do seu diretório de jornada. :contentReference[oaicite:2]{index=2}

~/ai-engineer-journey/
└── 01-foundations/
    └── month-01/
        ├── 00-setup/
        │   ├── checklist-setup.md
        │   └── environment-notes.md
        ├── 01-week-01-python/
        ├── 02-week-02-numpy/
        ├── 03-week-03-pandas/
        ├── 04-week-04-math/
        ├── _shared/
        │   ├── templates/
        │   │   ├── README_TEMPLATE.md
        │   │   ├── NOTES_TEMPLATE.md
        │   │   └── RETRIEVAL_TEMPLATE.md
        │   ├── cards-revisao.md
        │   ├── learning-log.md
        │   └── checklists/
        │       ├── daily.md
        │       ├── saturday-project.md
        │       └── debug-ml.md

---

# 2) Estrutura padrão de cada mini-projeto (copiar para cada semana)
> A regra é: “pouco texto, muito executável” (menos leitura, mais feedback).

<week-folder>/
├── README.md
├── notes.md
├── retrieval.md
├── src/
│   ├── __init__.py
│   ├── main.py
│   └── core.py
├── tests/
│   └── test_core.py
├── data/            # opcional (para semana 3)
├── notebooks/       # opcional (se usar Jupyter)
└── outputs/
    ├── figures/
    └── metrics/

---

# 3) Rotina diária (formato curto, sempre igual)
## Bloco de 2 horas (Seg–Qui)
1) INPUT (30 min) — vídeo curto / exemplo mínimo / TTS
   - [ ] 3 perguntas-chave (no notes.md)
2) BUILD (70–80 min) — implementar sem copiar/colar
   - [ ] rodar 1 teste (mesmo simples)
3) RETRIEVAL (10 min) — fechar tudo e escrever de memória:
   - [ ] “Como eu faria isso do zero?”
4) LOG (5 min) — 2 linhas no learning-log.md (pode ditar)

## Sexta (auto-teste + refazer)
- [ ] refazer 1 parte do código sem olhar
- [ ] marcar no cards-revisao.md o que falhou (⚠️)

## Sábado (projeto da semana + README por ditado)
Siga o modelo “brief → implementação → ditado → checklist”. :contentReference[oaicite:3]{index=3}

## Domingo (30 min revisão espaçada)
- [ ] revisar cards (10–20s por card)
- [ ] se errou: agendar revisão em ~3 dias
- [ ] se acertou: empurrar para semana seguinte :contentReference[oaicite:4]{index=4}

---

# 4) Revisão espaçada (D0/D2/D7/D14) aplicada no Mês 1
> Use este padrão em TODOS os tópicos da semana.

D0 (hoje): aprender + implementar
D2: refazer sem olhar + auto-teste (marcar ⚠️)
D7: reimplementar com variação pequena
D14: revisão rápida (checklist + 1 explicação curta)

---

# 5) Semana a semana (projeto + variação + critério de pronto)

## Semana 1 — Python (Calculadora OOP)
Projeto: Calculadora com classe (histórico + operações básicas). :contentReference[oaicite:5]{index=5}
Variação D7: adicionar “memory” (M+, M-, MR, MC)
Critério de pronto:
- [ ] roda via `python src/main.py`
- [ ] 5 testes passam
- [ ] README tem: o que faz / como rodar / exemplo de uso

## Semana 2 — NumPy (Array Ops sem built-in)
Projeto: operações de array (reshape simplificado, slicing, broadcasting explicado com exemplos).
Variação D7: comparar versão com loops vs versão vetorizada
Critério de pronto:
- [ ] 1 notebook opcional mostrando exemplos visuais (antes/depois)
- [ ] testes validam contra NumPy quando fizer sentido

## Semana 3 — Pandas (EDA Titanic)
Projeto: carregar + limpar + EDA + 3 gráficos (preferir visual). :contentReference[oaicite:6]{index=6}
Variação D7: criar um “data cleaning pipeline” em funções pequenas
Critério de pronto:
- [ ] outputs/figures com imagens salvas
- [ ] notes.md tem 5 bullets de achados (pode ser ditado)

## Semana 4 — Matemática (Gradiente Numérico)
Projeto: gradiente numérico + descida do gradiente em função simples.
Variação D7: mudar função (ex.: x² → ax²+bx+c) e observar convergência
Critério de pronto:
- [ ] consegue explicar “gradiente” em 2 frases no retrieval.md
- [ ] 1 gráfico de loss por iteração

---

# 6) Templates “anti-leitura longa” (amigável para dislexia)

## README.md (curto)
- O que faz? (1 parágrafo)
- Como rodar? (3 comandos)
- Resultado (1 screenshot ou métrica)
- Próximos passos (3 bullets)

## notes.md (bullets curtos)
- Perguntas-chave (3–5)
- Respostas curtas (1–2 linhas cada)
- “Erros que eu cometi” (lista)

## retrieval.md (sempre igual)
- Sem olhar: explique o conceito em 2 frases
- Sem olhar: escreva o esqueleto do código (funções principais)
- ⚠️ Lacunas (o que travou)

---

# 7) Métrica semanal (check-in de domingo)
Responda rápido:
1) Fiz 3+ implementações?
2) Refiz algo sem olhar? (meta: 70% ok) :contentReference[oaicite:7]{index=7}
3) Projeto de sábado está funcional?
4) Cards estão atualizados?
5) Ajuste de ritmo para próxima semana?
