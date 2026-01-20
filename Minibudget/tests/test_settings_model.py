import pytest
import sys
import os

# Add project root to path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

import db

def test_get_set_budget_setting(test_app):
    """Testa se conseguimos ler e gravar o orçamento no banco."""
    with test_app.app_context():
        # 1. Tenta pegar o orçamento (deve retornar o padrão se não existir)
        initial_budget = db.get_setting('monthly_budget', default='3500.00')
        assert float(initial_budget) == 3500.00

        # 2. Atualiza o orçamento
        db.set_setting('monthly_budget', '5000.50')

        # 3. Verifica se atualizou
        new_budget = db.get_setting('monthly_budget')
        assert float(new_budget) == 5000.50
