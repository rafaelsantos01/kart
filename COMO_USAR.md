# Sistema de Gerenciamento de Corridas de Kart

## 📋 Como Funciona

O sistema agora usa **dois arquivos principais** para facilitar a gestão:

### 1. `src/data/races.json` - Histórico de Corridas
Armazena todas as corridas realizadas. **É aqui que você deve adicionar novas corridas!**

### 2. `src/lib/raceStats.ts` - Calculadora Automática
Processa automaticamente os dados das corridas e calcula:
- ✅ Pontos totais de cada piloto
- ✅ Número de vitórias
- ✅ Número de pódios
- ✅ Melhor posição alcançada
- ✅ Dados da última corrida

---

## 🏁 Como Adicionar uma Nova Corrida

### Passo 1: Abra `src/data/races.json`

### Passo 2: Adicione um novo objeto no array `races`:

```json
{
  "id": 2,
  "raceNumber": "3228",
  "date": "16/11/2025",
  "track": "Kartódromo Internacional",
  "class": "Classe 2",
  "results": [
    {
      "driverId": 1,
      "position": 1,
      "bestLapTime": "00:00:28.50",
      "totalTime": "00:51:00.00",
      "laps": 35
    },
    {
      "driverId": 5,
      "position": 2,
      "bestLapTime": "00:00:29.20",
      "totalTime": "00:51:10.00",
      "laps": 35
    }
    // ... adicione todos os resultados
  ]
}
```

### Passo 3: Salve o arquivo

**Pronto!** Os pontos, estatísticas e rankings serão calculados automaticamente! 🎉

---

## 📊 Sistema de Pontuação Atual

| Posição | Pontos |
|---------|--------|
| 1º      | 25     |
| 2º      | 18     |
| 3º      | 15     |
| 4º      | 12     |
| 5º      | 10     |
| 6º      | 8      |
| 7º      | 6      |
| 8º      | 4      |

Para alterar a pontuação, edite `pointsSystem` em `src/data/races.json`.

---

## 👥 IDs dos Pilotos

| ID | Nome      | Número |
|----|-----------|--------|
| 1  | Leonardo  | 25     |
| 2  | Luiz      | 5      |
| 3  | Matheus   | 9      |
| 4  | Rubens    | 14     |
| 5  | Rafael    | 2      |
| 6  | Samuel    | 7      |
| 7  | Alexander | 15     |
| 8  | William   | 29     |

---

## 🔧 Adicionar Novo Piloto

Edite `src/lib/raceStats.ts` e adicione na array `driversRegistry`:

```typescript
const driversRegistry = [
  // ... pilotos existentes
  { id: 9, name: "Novo Piloto", number: 99 },
];
```

---

## 📝 Exemplo Completo de Corrida

```json
{
  "id": 2,
  "raceNumber": "3228",
  "date": "16/11/2025",
  "track": "Kartódromo Internacional",
  "class": "Classe 2",
  "results": [
    {
      "driverId": 1,
      "position": 1,
      "bestLapTime": "00:00:28.50",
      "totalTime": "00:51:00.00",
      "laps": 35
    },
    {
      "driverId": 2,
      "position": 2,
      "bestLapTime": "00:00:29.00",
      "totalTime": "00:51:15.00",
      "laps": 35
    },
    {
      "driverId": 3,
      "position": 3,
      "bestLapTime": "00:00:29.50",
      "totalTime": "00:51:20.00",
      "laps": 35
    }
  ]
}
```

Adicione isso dentro do array `races` em `src/data/races.json` e salve!
