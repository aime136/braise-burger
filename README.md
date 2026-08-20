# BRAISE — site vitrine (projet démo)

Site vitrine complet pour un restaurant de smash burgers fictif, "BRAISE", construit pour explorer les skills de webdesign disponibles (blueprint restaurant du skill `website-builder-masterclass`, anti-slop, responsive, accessibilité, SEO de base).

**Tout le contenu (nom, adresse, téléphone, menu, histoire) est inventé.** À remplacer par les vraies infos si ce projet devient réel.

---

## Voir le site

Ouvre `index.html` directement dans un navigateur (double-clic ou glisser dans Chrome/Edge), aucune installation nécessaire. C'est du HTML/CSS/JS pur, pas de build.

## Fichiers

```
braise-burger/
  index.html            page principale (one-page avec ancres)
  404.html               page d'erreur personnalisée
  mentions-legales.html  gabarit, à compléter
  confidentialite.html   gabarit, à compléter
  css/style.css          design system complet (tokens, composants, responsive)
  js/script.js            menu mobile, reveal au scroll, validation du formulaire
```

## Décisions prises

- **Stack :** HTML/CSS/JS pur (pas de framework), adapté à un site vitrine à contenu figé — rapide, sans dépendance, facile à héberger n'importe où (Netlify, GitHub Pages, hébergement mutualisé classique).
- **Identité visuelle :** un seul accent (orange braise `#E8590C`) sur fond charbon (`#181210`), typo Anton (titres, condensée, caractère "grill") + Work Sans (texte, lisible). Choix volontairement différent du rouge/jaune fast-food classique.
- **Images :** photos réelles libres de droits (Wikimedia Commons), pas d'IA générative ni de scraping Google Images. Crédits en pied de page.
- **Positionnement :** technique "smash burger" + cuisson au feu de bois comme différenciateur, un objectif clair (réserver une table / appeler pour commander) répété plusieurs fois.

## Ce qui reste à faire avant une vraie mise en ligne

- [ ] Remplacer nom, adresse, téléphone, menu et prix par les vraies informations
- [ ] Vérifier individuellement la licence de chaque photo Wikimedia utilisée (certaines sont CC BY-SA et demandent une attribution précise du photographe, pas juste le nom du fichier)
- [ ] Compresser les images (elles sont utilisées en résolution originale, potentiellement lourdes) et passer en WebP avec `srcset`
- [ ] Brancher le formulaire de réservation à un vrai système d'envoi (email, Google Sheet, CRM) — actuellement il simule juste un succès, rien n'est envoyé
- [ ] Intégrer une vraie carte (Google Maps ou OpenStreetMap) à la place du placeholder
- [ ] Compléter les mentions légales et la politique de confidentialité avec les vraies infos (SIRET, hébergeur...), faire relire si le site devient réel
- [ ] Générer les favicons complets (favicon.ico, apple-touch-icon) — actuellement un simple emoji en data URI
- [ ] Déployer (Netlify/Vercel/hébergement classique) et brancher un nom de domaine

## Pourquoi pas de vrais avis clients

Volontairement absent : le skill de référence interdit d'inventer de faux témoignages présentés comme réels. Si ce projet devient un vrai restaurant, ajouter une vraie section avis une fois les premiers clients passés.
