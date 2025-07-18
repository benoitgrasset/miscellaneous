## Sentry, Datadog et Google Analytics

Sentry, Datadog et Google Analytics sont des outils logiciels utilisés pour des tâches différentes.

- **Sentry** est un outil de surveillance des erreurs qui aide les développeurs à détecter et à résoudre les erreurs dans leur code. Il surveille les erreurs et
  les exceptions qui se produisent dans une application en temps réel, puis envoie des alertes aux développeurs pour qu'ils puissent résoudre les problèmes rapidement.

- **Datadog** est un outil de surveillance des performances qui aide les équipes informatiques à surveiller et à analyser la santé de leur infrastructure informatique.
  Il surveille les métriques de performance, les logs et les traces de différentes sources, puis fournit des tableaux de bord et des alertes pour aider les équipes
  à identifier les problèmes et à améliorer les performances.

- **Google Analytics** est un outil d'analyse web qui aide les propriétaires de sites web à comprendre le comportement de leurs utilisateurs. Il collecte des données
  sur les visiteurs du site web, telles que leur emplacement géographique, les pages visitées et le temps passé sur le site. Les propriétaires de sites web peuvent
  ensuite utiliser ces informations pour améliorer leur site web et leur contenu.
  -> Alternative free: **matomo**

 - **Plausible** - **Mixpanel** - **Amplitude** - **Posthog**

En résumé, Sentry est utilisé pour surveiller les erreurs dans le code, Datadog pour surveiller les performances de l'infrastructure informatique,
tandis que Google Analytics est utilisé pour surveiller et analyser le comportement des utilisateurs sur un site web.

Alternative to Google Analytics: [Plausible](https://plausible.io/)

### How to Integrate Plausible Analytics in a Next.js App (Without Getting Blocked)

[How to Integrate Plausible Analytics in a Next.js App (Without Getting Blocked)](https://mxd.codes/articles/how-to-integrate-plausible-analytics-in-a-next-js-app-without-getting-blocked?ck_subscriber_id=2397963523&utm_source=convertkit&utm_medium=email&utm_campaign=%E2%9A%9B%EF%B8%8F%20This%20Week%20In%20React%20#proxy-the-plausible-script-and-api)

## Visualisation des données d'une base de données

### Metabase

https://www.metabase.com/

### Secoda (SEarchable COmpany DAta)

Secoda is a universal data discovery and documentation tool that makes finding metadata, queries, charts and documentation as easy as a google search.

https://www.secoda.co/

Secoda est conçu pour les utilisateurs techniques et les analystes de données qui ont besoin de plus de flexibilité et de contrôle sur les données. Metabase, quant à lui, est plus adapté aux utilisateurs non techniques, tels que les responsables marketing ou les chefs de projet, qui cherchent à accéder rapidement aux données et à générer des rapports visuels pour prendre des décisions.

### Apache Superset

https://superset.apache.org/

## Monitoring: Grafana et Kibana

**Grafana** et **Kibana** sont deux outils populaires d'analyse et de visualisation de données utilisés dans les environnements de production pour surveiller et analyser les données de l'infrastructure.

Voici les principales différences entre Grafana et Kibana :

Objectifs et utilisations:

- **Grafana** est principalement utilisé pour surveiller les données d'infrastructures et afficher des tableaux de bord, avec des sources de données telles que Prometheus, Graphite, Elasticsearch, InfluxDB et d'autres. Il peut également être utilisé pour la surveillance des applications.

- **Kibana** est conçu pour travailler avec Elasticsearch, il est utilisé pour l'analyse des logs, la surveillance des performances et la sécurité des données. Il offre également des fonctionnalités de visualisation, de recherche et de traitement de données pour les utilisateurs d'Elastic Stack.


# 📝 Logging & Observabilité

## 1. 🔧 Côté Machine / Infrastructure

### a. Reverse Proxies / Serveurs d'applications
- **Traefik**
- **Nginx**
- **Caddy**

### b. Hébergement
- **PAAS** :  
  - Heroku  
  - Render  
  - Coolify *(PAAS self-hosté)*
- **VPS / Instances** :  
  - Vercel

---

## 2. 💻 Frontend / Backend

### a. Outils d’erreurs
- **Sentry**  
  - Erreurs serveurs  
  - Erreurs clients  
  - Erreurs browser

---

## 3. 📦 Logs applicatifs

### a. Log des payloads
- Kafka  
- Stream  
- *Utilisé pour gros volumes de données*

### b. Logs côté base de données
- **Write Ahead Log**
- **Postgres**

---

## 4. 📊 Observabilité & Monitoring

### a. Solutions tout-en-un
- **Datadog**  
  - SAAS clé en main  
  - Monitoring complet  
  - ⚠️ Trop cher
- **New Relic**

### b. Solutions open source
- **Grafana**  
  - Flexible et open source  
  - Souvent utilisé avec Prometheus  
  - Peut afficher les données time series  
  - Projet auto-hébergé
- **Prometheus**  
- **Loki** *(stack de logs compatible Grafana)*

### c. Stack ELK
- **Elasticsearch** : moteur de recherche / base indexée
- **Logstash** : pipeline de transformation des logs
- **Kibana** : visualisation

---

## 5. 🔐 Logs d'authentification
- Grafana *(via base de données optimisée avec time series)*

---

## 6. 🧪 Web Analytics / Post Logs

- **PostHog**  
  - Web analytics  
  - A/B Testing  
  - Session replay
- **Mixpanel**
- **Amplitude**

---

## 7. 🧩 Autres alternatives

- **Axiom**  
  - Alternative à Datadog  
  - Moins coûteuse
```
