# Portfolio — Rayan CHERRAD

Portfolio personnel one-page développé from scratch en HTML, CSS et JavaScript vanilla. Design premium dark, entièrement responsive, avec animations au scroll et modal CV intégré.

---

## Aperçu

- **URL de production :** [rayanjsp.github.io/portfolio_enc](https://github.com/rayanjsp) *(à compléter)*
- **Auteur :** Rayan CHERRAD
- **Formation :** BTS SIO SLAM — ENC Bessières, Paris (2024–2026)

---

## Structure du projet

```
portfolio_enc/
├── index.html                    # Page unique (one-page)
├── assets/
│   ├── css/
│   │   └── style.css             # Feuille de style principale
│   ├── js/
│   │   └── main.js               # Scripts (modal, menu, scroll reveal, formulaire)
│   ├── images/
│   │   └── logos/                # Icônes SVG & PNG des technologies
│   └── documents/
│       ├── CV_Rayan_Cherrad.pdf  # CV téléchargeable (PDF)
│       └── CV_Rayan_Cherrad.docx # CV téléchargeable (Word)
└── README.md
```

---

## Sections

| # | Ancre | Contenu |
|---|-------|---------|
| 01 | `#profil` | Présentation personnelle |
| 02 | `#competences` | Stack technique, outils & compétences fonctionnelles |
| 03 | `#projets` | AIQuizMaker, EchoBoard, Portfolio |
| 04 | `#experiences` | Expériences professionnelles (timeline) |
| 05 | `#parcours` | Formation académique & certifications |
| 06 | *(veille)* | Articles de veille technologique sur l'IA |
| 07 | `#contact` | Formulaire de contact + liens sociaux |

---

## Stack technique

**Langages :**
- HTML5
- CSS3 (variables CSS, Grid, Flexbox, animations)
- JavaScript ES6+ (vanilla, aucune dépendance)

**Fonts (Google Fonts) :**
- Inter — texte courant
- Outfit — titres
- Space Mono — terminal hero

**Aucun framework front-end, aucune dépendance npm.**

---

## Fonctionnalités

- **Navigation fixe** avec effet de fond au scroll et menu hamburger responsive
- **Hero terminal animé** avec curseur clignotant
- **Ambient glow background** — blobs de lumière animés en CSS
- **Scroll reveal** — animation fade-up déclenchée par IntersectionObserver
- **Modal CV** — aperçu PDF intégré (iframe) avec téléchargement PDF et Word
- **Formulaire de contact** — ouverture du client mail via `mailto:`
- **Design system cohérent** — palette sombre, typographie scalée, composants réutilisables
- **Responsive** — adapté mobile, tablette et desktop

---

## Projets présentés

### AIQuizMaker
Plateforme d'évaluation et de formation. Génération automatique de QCM par IA, tableau de bord de suivi des scores, export PDF.
- **Stack :** Vue 3, Node.js, Prisma, API multi-IA

### EchoBoard
Réseau social d'entreprise. Gestion des rôles et permissions, partage de contenu, interactions entre collaborateurs.
- **Stack :** Vue.js 3, Node.js, Express, MySQL, JWT

### Portfolio
Ce site — conçu et développé from scratch.
- **Stack :** HTML, CSS, JavaScript

---

## Lancer le projet en local

Aucune installation requise. Il suffit d'ouvrir `index.html` dans un navigateur, ou d'utiliser un serveur local (recommandé pour l'aperçu du CV en iframe) :

```bash
# Avec l'extension Live Server (VS Code)
# Clic droit sur index.html → "Open with Live Server"

# Ou avec Python
python -m http.server 8080
```

---

## Configuration requise

Avant de déployer, remplacer le placeholder de l'adresse email dans [assets/js/main.js](assets/js/main.js) (ligne 64) :

```js
const CONTACT_EMAIL = 'TON_EMAIL@exemple.com'; // ← à remplacer
```

---

## Certifications

| Certification | Organisme | Domaine |
|---|---|---|
| SecNumAcadémie | ANSSI | Cybersécurité |
| Responsive Web Design | freeCodeCamp | HTML / CSS |
| Python Certification | freeCodeCamp | Algorithmique |
| PIX | PIX | Compétences numériques |

---

## Liens

- [GitHub](https://github.com/rayanjsp)
- [LinkedIn](https://www.linkedin.com/in/rayan-cherrad-b378452a3/)

---

© 2026 Rayan CHERRAD
