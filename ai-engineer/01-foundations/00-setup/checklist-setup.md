# Checklist de Setup - Mês 1

## Ambiente Python
- [ ] Python 3.8+ instalado (`python --version`)
- [ ] pip atualizado (`pip install --upgrade pip`)
- [ ] virtualenv criado (`python -m venv venv`)
- [ ] virtualenv ativado (`source venv/bin/activate`)

## Bibliotecas básicas
- [ ] NumPy (`pip install numpy`)
- [ ] Pandas (`pip install pandas`)
- [ ] Matplotlib (`pip install matplotlib`)
- [ ] pytest (`pip install pytest`)

## Ferramentas
- [ ] Editor configurado (VS Code, PyCharm, etc.)
- [ ] Git configurado (`git config --list`)
- [ ] GitHub SSH configurado (ou HTTPS)

## Estrutura do projeto
- [ ] Pastas criadas (01-foundations/...)
- [ ] Templates copiados (_shared/templates/)
- [ ] Checklists prontos (_shared/checklists/)

## Teste rápido
```bash
python -c "import numpy as np; print(np.__version__)"
python -c "import pandas as pd; print(pd.__version__)"
```

✅ Se tudo funcionou, você está pronto para começar!
