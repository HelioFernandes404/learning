# Checklist de Debug ML

> Use quando algo não funcionar como esperado

## 1. SHAPES (Dimensões)
- [ ] Imprimir `.shape` de TODOS os arrays/tensors
- [ ] Verificar se batch_size está correto
- [ ] Checar se input/output têm dimensões compatíveis

## 2. VALUES (Valores)
- [ ] Imprimir `.min()`, `.max()`, `.mean()` dos dados
- [ ] Verificar se tem NaN ou Inf
- [ ] Checar se normalização foi aplicada

## 3. TYPES (Tipos)
- [ ] Confirmar dtype (float32, int64, etc.)
- [ ] Verificar se device está correto (CPU/GPU)
- [ ] Checar se conversões estão corretas

## 4. LOGS (Registro)
- [ ] Imprimir loss a cada iteração
- [ ] Salvar checkpoints
- [ ] Plotar métricas (loss, accuracy)

## 5. SANITY CHECKS
- [ ] Rodar com 1 batch pequeno
- [ ] Verificar se overfitting funciona (treino = teste)
- [ ] Testar com dados sintéticos simples

---

## Frase útil
"Se não está funcionando, provavelmente é shape, normalização ou learning rate"
