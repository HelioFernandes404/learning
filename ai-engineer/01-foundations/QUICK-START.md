# Quick Start - Mês 1

## Comandos rápidos para cada semana

### Criar nova semana (copiar estrutura)
```bash
# Exemplo: semana 2
cd 02-week-02-numpy
mkdir -p src tests outputs/{figures,metrics}
touch README.md notes.md retrieval.md src/{__init__.py,main.py,core.py} tests/test_core.py

# Copiar templates
cp ../_shared/templates/README_TEMPLATE.md README.md
cp ../_shared/templates/NOTES_TEMPLATE.md notes.md
cp ../_shared/templates/RETRIEVAL_TEMPLATE.md retrieval.md
```

### Rodar projeto
```bash
python src/main.py
```

### Rodar testes
```bash
pytest tests/ -v
```

### Atualizar learning-log (ditado)
```bash
# Use seu app de ditado favorito e cole em:
vim ../_shared/learning-log.md
```

### Atualizar cards de revisão
```bash
vim ../_shared/cards-revisao.md
```

## Rotina diária resumida

**Seg-Qui (2h):**
1. INPUT (30min) → 3 perguntas em `notes.md`
2. BUILD (70min) → implementar + 1 teste
3. RETRIEVAL (10min) → escrever em `retrieval.md`
4. LOG (5min) → atualizar `learning-log.md`

**Sexta:** refazer sem olhar + marcar ⚠️

**Sábado:** projeto da semana (2h)

**Domingo:** revisar cards (30min)

## Checklist semanal (domingo)
- [ ] Fiz 3+ implementações?
- [ ] Refiz algo sem olhar? (meta: 70% ok)
- [ ] Projeto de sábado funcional?
- [ ] Cards atualizados?
- [ ] Ajuste de ritmo para próxima semana?
