# PixelPilot.ru — Historical Aerial Survey / Drone Services Website

Historical static website for **PixelPilot.ru**, an aerial photography / drone-services business in Chelyabinsk.

This repository predates the later `PixelPilotDroneMarket` product concept. Despite the shared name, this project is a commercial **aerial-services landing page**, not the newer drone-marketplace / market-intelligence prototype.

## Services presented

The page positions PixelPilot around services such as:

- aerial photography of events and objects;
- aerial inspection;
- 3D digital terrain models;
- orthophoto / cadastral survey concepts;
- 360° spherical panoramas;
- high-rise building photography;
- drone video / photography in Chelyabinsk.

The original page metadata describes:

```text
Инспекция объектов с воздуха
3D цифровая модель местности
Ортофото и кадастровая съемка
Сферическая панорама 360
```

## Repository structure

```text
index.html          generated static website
project.mobirise    Mobirise project file
assets/             Bootstrap / Mobirise / media assets
assets.zip          archived asset bundle
```

There is no Node package, application backend, database, or drone-control software in the repository.

## Technology

The site was generated / maintained through **Mobirise** and uses frontend assets such as:

- HTML5
- Bootstrap
- Mobirise components / icons
- Tether-era Bootstrap dependencies
- static gallery components
- background video / YouTube embeds
- static contact / order form presentation

The primary editable project artifact is:

```text
project.mobirise
```

while `index.html` and the `assets/` tree are generated website output.

## Running locally

The exported site is static and can be served with any simple HTTP server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## Historical business data

The committed HTML contains historical contact information, service descriptions, geographic references, pricing / commercial copy, and media examples.

Before republishing, verify:

- phone numbers;
- service availability;
- legal / cadastral terminology;
- current pricing;
- geographic coverage;
- contact-form destination;
- rights to drone footage / photography;
- YouTube embed availability.

The repository is an archive and should not be used as current business information without review.

## Form / lead-generation boundary

The site includes “Заказать съёмку” conversion flows, but the repository does not establish a modern backend / CRM pipeline.

A current lead-generation deployment should provide:

- secure form handling;
- spam / abuse protection;
- contact-data consent;
- server-side validation;
- success / failure states;
- CRM / email routing;
- privacy / retention policy.

## Aerial-survey claim boundary

Terms such as 3D terrain model, orthophoto, inspection, and cadastral survey can imply professional measurement / geospatial deliverables.

The static website demonstrates the service positioning and design. It does not by itself prove survey accuracy, regulatory authorization, GNSS / photogrammetry methodology, licensed cadastral work, or measurement tolerances.

If used as a professional case study, distinguish visual drone capture from legally / technically certified surveying services.

## Relationship to later PixelPilot project

Two different projects share the PixelPilot name:

- `pixelpilot` — this historical drone / aerial-services landing page.
- `PixelPilotDroneMarket` — later React / AI concept for a digital drone marketplace and market-intelligence product.

For portfolio use, label them clearly so employers do not assume they are versions of the same software product.

## Current status

**Historical commercial website archive.** The Mobirise project and static site output are preserved and are useful as evidence of early web, service positioning, drone-industry, and conversion-page work.

## License

No repository-wide license is assumed by this README. Verify rights to Mobirise assets, Bootstrap-era dependencies, photos, video, logos, icons, fonts, and client / business content before redistribution.