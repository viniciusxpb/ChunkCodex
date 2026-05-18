# Pending Ideas

Ideias de features que resolvem dores reais da experiência atual de wikis de Minecraft (especialmente em mobile e durante o jogo).

---

## 1. QR Code "manda pro celular" 🔥

No desktop, cada página de item tem um QR code num canto. Aponta o celular, abre a mesma página no telefone. **Zero alt-tab.** Continua jogando, lê no celular.

Implementação trivial (link curto + biblioteca de QR), impacto enorme.

---

## 2. Build Calculator (a feature assassina)

Página da Mass Fabricator com um botão **"Calcular materiais base"**. Sistema recursivamente desce a árvore de receitas até chegar nos itens primitivos (cobble, iron ore, etc.) e mostra:

> Pra fazer 1 Mass Fabricator você precisa de: 142 cobblestone, 87 iron ingots, 34 copper ingots, 21 redstone, 8 diamonds.

Isso **não existe direito em wiki nenhuma**. Tem mod externo (NEI, JEI) que faz isso parcialmente, mas é dentro do jogo. Numa wiki mobile, com checklist marcável, **dominaria**.

---

## 3. Keep screen on / Tela travada no modo "consulta"

Modo "wiki companion" pro celular: tela fica acesa, layout em paisagem, botões grandes, dark mode forçado, navega entre recipes com swipe lateral (próximo/anterior). É tipo "Spotify Connect" das wikis.

---

## 4. Offline-first com Service Worker

Primeiro acesso baixa o pacote do mod (IC2: ~2MB de dados). Daí pra frente funciona **sem internet**. Mod player muitas vezes joga em LAN com colegas, sem WiFi forte. Wiki offline é game changer.

---

## 5. Busca por "o que eu tenho"

Página de busca aceita lista de itens. "Tenho: refined iron, copper, tin, redstone". Sistema retorna **tudo que dá pra craftar com isso ou subset disso**. Brutal. Resolve o problema clássico de "to com lixo de inventory cheio, o que eu faço?".
