# Environment Notes

## Sistema operacional
- OS: [seu sistema]
- Python version: [versão]

## Dependências instaladas
```bash
pip list | grep -E "numpy|pandas|matplotlib|pytest"
```

## Comandos úteis

### Ativar ambiente virtual
```bash
source venv/bin/activate
```

### Instalar todas as dependências
```bash
pip install numpy pandas matplotlib pytest
```

### Criar requirements.txt
```bash
pip freeze > requirements.txt
```

### Rodar testes
```bash
pytest tests/ -v
```

## Problemas conhecidos
- [Liste aqui qualquer problema que encontrou e como resolveu]
