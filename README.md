# ReStock — Retail Inventory Management

ReStock is a digital inventory-management product concept designed for small retailers who need a simple way to record stock, monitor sales, identify low-stock products, and create replenishment requests before stockouts occur.

This repository contains the ReStock product portfolio, interactive product prototype, supporting business-model material, AI exploration assets, and academic case-study material for ITM Skills University.

## Project Links

- GitHub Repository: https://github.com/Yashhh710/restock-inventory-management
- Product Portfolio: https://yashhh710.github.io/restock-inventory-management/
- Product Prototype: https://yashhh710.github.io/restock-inventory-management/main-product's-prototype/dashboard.html

---

## Product Portfolio

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/4ca199e7-8eb2-40b4-9738-bfa7149f7218" width="100%"></td>
    <td><img src="https://github.com/user-attachments/assets/3b575988-d8d9-4b82-baa3-96970819b981" width="100%"></td>
  </tr>
</table>

---

## Product Prototype

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/fc48e4c6-fa82-48f5-937a-7dee62d60dbe" width="100%"></td>
    <td><img src="https://github.com/user-attachments/assets/984ee64c-0a11-4e63-95d7-750e3e41c267" width="100%"></td>
  </tr>
</table>
# Case Study

**Case:** Retail Stockout Alert Service  
**Topic:** Digital Transformation — Inventory  
**Product:** ReStock

## Problem Statement

Small retailers often discover stockouts only when customers ask for products. ReStock addresses this problem with a simple digital workflow in which shopkeepers record opening stock and sales for selected fast-moving products. The system identifies products that reach or fall below their reorder levels and provides actionable replenishment information.

The academic pilot scenario is designed around a store tracking **80 products**. The current browser prototype uses a smaller seeded catalogue to demonstrate the workflow.

## Product Vision

ReStock connects four everyday retail activities:

**Stock Recording → Sales Tracking → Low-Stock Detection → Replenishment**

The goal is to make inventory status visible before a product becomes unavailable.

## Objectives

1. Identify common stockout pain points for small retailers.
2. Simplify daily stock recording and sales tracking.
3. Provide clear low-stock and out-of-stock alerts.
4. Connect inventory information with purchasing and replenishment.
5. Provide reorder suggestions using stock level and sales velocity.
6. Give retailers a simple operational dashboard.
7. Create a practical pilot-to-scale business model.

---

# Product Overview

## Target Customers

### Primary Customer

Small retail shopkeepers and store operators managing fast-moving products who currently depend on manual stock checks, notebooks, spreadsheets, or memory.

### Secondary Users

- Store assistants
- Kirana-store operators
- Convenience-store operators
- Mini-market operators
- Small pharmacies
- Inventory and purchasing staff

## Customer Pain Points

- Stockouts are discovered too late.
- Shopkeepers do not have a single view of current stock.
- Low-stock products are difficult to monitor manually.
- Sales information is separated from purchasing decisions.
- Reordering is reactive rather than planned.
- Supplier information is scattered.
- Stock movements are difficult to trace.
- Manual calculations can cause inconsistent reorder decisions.
- Store owners have limited visibility into fast-moving products.

---

# Core Features

## Inventory Management

- Product catalogue
- SKU and category information
- Current stock quantity
- Reorder level
- Daily sales rate
- Purchase price
- Selling price
- Stock status
- Product search and filtering
- Add, edit and delete product workflows in the prototype

## Stock Alerts

ReStock categorizes inventory into operational states:

- In Stock
- Low Stock
- Out of Stock
- Reorder Required

The prototype's alert page separates low-stock products, out-of-stock products, and products requiring replenishment.

## Sales Tracking

The prototype provides:

- Sale recording
- Recent sales history
- Quantity sold
- Selling price
- Total sales value
- Sales-period views
- Sales overview charts
- Product-level sales activity

## Purchases and Replenishment

The prototype supports:

- Purchase records
- Supplier association
- Purchase quantities
- Purchase prices
- Reorder requests
- Pending and ordered statuses
- Suggested reorder quantities

## Supplier Management

Supplier records support:

- Supplier name
- Category relationship
- Product relationship
- Order activity
- Supplier status
- Contact information
- Replenishment source tracking

## Stock History

Stock History shows:

- Date
- Product
- Movement type
- Quantity
- Previous stock
- New stock
- Reference

Supported movement types demonstrated by the prototype include:

- Sale
- Purchase
- Adjustment
- Stock Received

## Dashboard

The dashboard acts as the store operator's operational command center and brings together:

- Inventory KPIs
- Low-stock information
- Out-of-stock information
- Stock movement
- Top-selling products
- Sales activity
- Low-stock trends
- Reorder information

## AI Inventory Insights

The prototype includes an AI Insights page for demonstrating how inventory and sales information could be converted into recommendations.

The prototype explicitly treats these recommendations as **demo insights rather than production-grade AI**.

Insight areas include:

- Sales trends
- Product movement
- Stockout risk
- Estimated days of stock remaining
- Reorder suggestions

## Settings

The prototype includes settings for:

- Store profile
- Store type
- Email
- Currency symbol
- Date format
- Low-stock notifications
- Appearance
- Notification preferences

---

# Prototype Pages

The interactive prototype is located in:

```text
main-product's-prototype/
```

| File | Purpose |
|---|---|
| `dashboard.html` | Main inventory overview |
| `products.html` | Product catalogue and stock management |
| `sales.html` | Sales recording and sales overview |
| `purchases.html` | Purchase management |
| `alerts.html` | Low-stock, out-of-stock and reorder alerts |
| `reorder-requests.html` | Replenishment request workflow |
| `suppliers.html` | Supplier directory |
| `stock-history.html` | Inventory movement history |
| `reports.html` | Operational reports |
| `ai-insights.html` | Demo inventory intelligence |
| `settings.html` | Store and notification settings |
| `help.html` | Help and support |

Shared prototype files:

```text
main-product's-prototype/
├── app.js
├── style.css
├── dashboard.html
├── products.html
├── sales.html
├── purchases.html
├── alerts.html
├── reorder-requests.html
├── suppliers.html
├── stock-history.html
├── reports.html
├── ai-insights.html
├── settings.html
└── help.html
```

---

# Demo Product Catalogue

The current prototype uses a seeded demonstration dataset for fast-moving retail products.

| Product | Category | Current Stock | Reorder Level | Daily Sales |
|---|---|---:|---:|---:|
| Maggi 70g | Food | 8 | 10 | 4 |
| Coca-Cola 750ml | Beverages | 6 | 12 | 5 |
| Aashirvaad Atta 5kg | Groceries | 0 | 8 | 3 |
| Parle-G Biscuits | Snacks | 7 | 10 | 2 |
| Tata Salt 1kg | Groceries | 15 | 10 | 1 |
| Amul Milk 1L | Beverages | 34 | 20 | 6 |
| Lays Classic 52g | Snacks | 22 | 12 | 3 |
| Dettol Soap 75g | Personal Care | 41 | 15 | 1 |
| Crocin Advance | Pharmacy | 28 | 10 | 2 |
| Surf Excel 1kg | Household | 19 | 8 | 1 |

The **80-product figure belongs to the academic pilot scenario**. The prototype intentionally uses a smaller seed dataset for demonstration.

---

# Customer Profile

## Primary Persona: Small Retail Shopkeeper

### Customer Job

The shopkeeper needs to keep fast-moving products available while avoiding unnecessary inventory buildup.

### Current Workflow

1. Receive stock from suppliers.
2. Place products on shelves.
3. Record or remember sales.
4. Check stock manually.
5. Notice low stock during routine inspection.
6. Contact a supplier.
7. Reorder products.

### Core Problem

The operational gap occurs between **sales happening** and **the shopkeeper noticing that inventory has become low**.

### Desired Outcome

The retailer should be able to open ReStock and quickly answer:

- What is in stock?
- What is low?
- What is out of stock?
- What sold today?
- What should I reorder?
- Which supplier should receive the order?

---

# Value Proposition Canvas

## Customer Jobs

- Maintain product availability.
- Record sales.
- Monitor stock.
- Reorder products.
- Communicate with suppliers.
- Avoid unnecessary inventory buildup.
- Understand which products move quickly.

## Customer Pains

- Unexpected stockouts.
- Manual stock counting.
- Missed reorder points.
- Poor visibility into sales velocity.
- Time spent checking multiple records.
- Difficulty identifying urgent replenishment needs.
- No simple operational dashboard.

## Customer Gains

- Earlier stockout visibility.
- Faster reorder decisions.
- Centralized product information.
- Better supplier coordination.
- Visibility into sales movement.
- Reduced manual monitoring effort.
- More consistent replenishment decisions.

## Pain Relievers

- Low-stock alerts surface products requiring attention.
- Out-of-stock lists identify unavailable products.
- Reorder suggestions reduce manual calculation.
- Stock history provides movement visibility.
- Supplier records connect products with replenishment sources.

## Gain Creators

- Dashboard provides a consolidated operational view.
- Sales and inventory information can be viewed together.
- Reorder workflows create a clear next action.
- Reports support basic performance monitoring.

---

# Customer Journey

| Stage | Customer Action | Need | ReStock Touchpoint |
|---|---|---|---|
| Discover | Learns about inventory problems | Understand value | Product Portfolio |
| Evaluate | Explores workflow | Confirm suitability | Demo / Prototype |
| Onboard | Adds store information | Start quickly | Settings |
| Setup | Adds products and reorder levels | Establish catalogue | Products |
| Operate | Records sales | Keep inventory current | Sales |
| Monitor | Checks stock | Detect risk | Dashboard |
| Alert | Receives low-stock information | Know what needs action | Alerts |
| Reorder | Creates replenishment request | Restore stock | Reorder Requests |
| Purchase | Records supplier purchase | Track incoming inventory | Purchases |
| Review | Checks performance | Understand operations | Reports |
| Improve | Reviews recommendations | Improve replenishment | AI Insights |

---

# End-to-End Operating Flow

```text
Supplier
   |
   v
Stock Received
   |
   v
Product Inventory
   |
   +----------------------+
   |                      |
   v                      v
Sales Recorded        Stock Adjustment
   |                      |
   +----------+-----------+
              |
              v
        Current Stock
              |
              v
       Reorder Level Check
              |
       +------+------+
       |             |
       v             v
    Above Level   At/Below Level
                     |
                     v
                Stock Alert
                     |
                     v
              Reorder Suggestion
                     |
                     v
              Supplier Selection
                     |
                     v
              Reorder Request
                     |
                     v
                  Purchase
                     |
                     v
               Stock Received
                     |
                     v
              Inventory Updated
```

---

# Supply Chain

## Participants

1. Manufacturers
2. Distributors / wholesalers
3. Retailers
4. Store operators
5. End customers

## Physical Flow

```text
Manufacturer
     |
     v
Distributor / Wholesaler
     |
     v
Retail Store
     |
     v
Customer
```

## Information Flow

```text
Customer Demand
       |
       v
Sales Information
       |
       v
ReStock Inventory Data
       |
       v
Low-Stock / Reorder Signal
       |
       v
Purchase Decision
       |
       v
Supplier Order
       |
       v
Stock Replenishment
```

## Responsibilities

| Participant | Responsibility |
|---|---|
| Manufacturer | Produce goods |
| Distributor | Supply products to retailers |
| Retailer | Maintain inventory and serve customers |
| Shopkeeper | Record sales and stock movements |
| Supplier | Fulfil replenishment orders |
| ReStock | Organize inventory information and operational alerts |
| Customer | Purchase products |

---

# Reorder Logic

## Basic Rule

```text
If Current Stock <= Reorder Level
        |
        v
Generate Low-Stock Alert
        |
        v
Estimate Reorder Quantity
        |
        v
Create Reorder Request
```

## Stock Cover

A basic operational metric is:

```text
Stock Cover Days = Current Stock / Average Daily Sales
```

Example:

```text
Current Stock = 8 units
Average Daily Sales = 4 units/day

Stock Cover = 8 / 4
            = 2 days
```

This is an estimate under the simplified assumption that the daily sales rate remains constant.

## Suggested Reorder Quantity

A basic pilot formula can be:

```text
Suggested Order =
Target Stock Level - Current Stock
```

A more advanced production formula can include safety stock:

```text
Suggested Order =
(Target Daily Sales × Target Cover Days + Safety Stock)
- Current Stock
```

Production logic should eventually account for supplier lead time, seasonality, demand variation, and minimum order quantities.

---

# Basic Financial and Performance Measures

## Key Metrics

| Metric | Formula |
|---|---|
| Stockout Rate | Stockout events / tracked product-periods |
| Alert Response Rate | Alerts acted upon / alerts generated |
| Reorder Completion Rate | Completed reorders / created reorders |
| Average Stock Cover | Current stock / average daily sales |
| Inventory Availability | Available product-days / total product-days |
| Active Retailers | Retailers using the product during the period |

## Example Pilot Calculation

Assume:

```text
Tracked products = 80
Products below reorder level = 12
```

Then:

```text
Low-stock percentage =
12 / 80 × 100
= 15%
```

This is a snapshot of products below their reorder levels, not a stockout-rate calculation.

---

# Business Model

## Revenue Streams

### SaaS Subscription

Monthly subscription plans for retailers based on features and usage.

Potential tiers:

- Starter
- Business
- Multi-store

### Premium Analytics

Advanced reporting and inventory intelligence can be provided as an additional subscription feature.

### Multi-Store Plans

Larger retailers can pay for:

- Multiple stores
- Centralized reporting
- User management
- Advanced analytics
- Central inventory visibility

### Future Supplier Partnerships

A future version could support supplier discovery, order routing, or commercial partnerships subject to appropriate agreements.

## Cost Structure

Main costs may include:

- Product development
- Hosting
- Database infrastructure
- Maintenance
- Customer support
- Analytics infrastructure
- Notification infrastructure
- Marketing
- Retailer acquisition
- Sales and onboarding

---

# Go-to-Market Strategy

## Pilot Segment

The initial pilot can focus on:

- Small kirana stores
- Convenience stores
- Mini markets
- Small pharmacies
- Independent retailers with fast-moving products

## Acquisition Method 1: Local Retailer Pilot

```text
Identify Retailers
       |
       v
Demonstrate Prototype
       |
       v
Configure Product Catalogue
       |
       v
Train Shopkeeper
       |
       v
Run 30-Day Pilot
       |
       v
Collect Usage Data
       |
       v
Improve Product
```

## Acquisition Method 2: Distributor Partnerships

Work with distributors who already interact with multiple small retailers.

Potential approach:

- Demonstrate ReStock to distributors.
- Offer retailers a simple onboarding process.
- Provide a referral mechanism.
- Use pilot results to communicate operational outcomes.

---

# 90-Day Pilot-to-Scale Plan

## Days 1–30: Pilot Setup

### Objectives

- Recruit pilot retailers.
- Configure product catalogues.
- Define reorder levels.
- Train store operators.
- Establish baseline inventory metrics.

### Success Criteria

- Pilot stores onboarded.
- Product catalogues configured.
- Store operators trained.
- Daily stock and sales workflow understood.
- Baseline stockout and reorder metrics captured.

## Days 31–60: Usage and Optimization

### Objectives

- Monitor actual usage.
- Identify workflow friction.
- Improve alerts.
- Improve reorder recommendations.
- Collect retailer feedback.

### Success Criteria

- Consistent weekly usage.
- Alerts reviewed regularly.
- Reorder workflow used by pilot stores.
- User feedback documented.
- Product improvements prioritized.

## Days 61–90: Scale Preparation

### Objectives

- Standardize onboarding.
- Package pricing.
- Prepare sales materials.
- Document support workflows.
- Expand the pilot to additional stores.

### Success Criteria

- Repeatable onboarding process.
- Defined product plans.
- Measurable pilot outcomes.
- Documented customer feedback.
- Scale-ready operating process.

---

# SWOT Analysis

## Strengths

- Simple inventory workflow.
- Clear focus on stockout prevention.
- Reorder-level concept is easy to understand.
- Dashboard centralizes operational information.
- Prototype demonstrates multiple inventory workflows.
- Designed around small-retailer requirements.

## Weaknesses

- Current prototype uses seeded demo data.
- Prototype data is browser-local.
- No production database is included.
- AI Insights are demonstrative.
- Supplier integrations are not live integrations.
- Inventory accuracy depends on consistent data entry.

## Opportunities

- Multi-store inventory.
- Supplier and distributor integrations.
- Barcode scanning.
- Mobile-first workflows.
- Automated notifications.
- Demand forecasting.
- Purchase-order automation.
- POS integration.
- Retail analytics.

## Threats

- Existing inventory-management applications.
- Retailer resistance to changing manual processes.
- Poor data-entry discipline.
- Connectivity limitations.
- Incorrect reorder thresholds.
- Supplier delays.
- Product price fluctuations.
- Customer acquisition costs.

---

# Risk Analysis and Mitigation

| Risk | Potential Effect | Mitigation |
|---|---|---|
| Incorrect stock data | Wrong alerts | Validation and stock-history records |
| Missed sales entries | Inventory becomes inaccurate | Simple sales-entry workflow and reminders |
| Incorrect reorder level | Too early or too late ordering | Configurable reorder levels |
| Supplier delay | Stock remains unavailable | Track supplier lead time and maintain safety stock |
| User adoption issues | Low product usage | Simple onboarding and short training |
| Poor connectivity | Workflow interruptions | Local persistence and resilient web/mobile architecture in production |
| Excessive alerts | Alert fatigue | Prioritize urgent products and allow configurable notifications |
| Incorrect AI recommendation | Poor reorder decision | Explain recommendations and allow manual override |
| Data security issue | Loss of trust | Authentication, authorization and secure storage in production |
| Scaling infrastructure | Performance degradation | Monitoring and scalable hosting architecture |

---

# Business Model Canvas

| Block | ReStock |
|---|---|
| Customer Segments | Small retailers, kirana stores, convenience stores, small pharmacies |
| Value Proposition | Simple stock monitoring, low-stock alerts and replenishment workflow |
| Channels | Direct sales, retailer pilots, distributor partnerships, digital marketing |
| Customer Relationships | Guided onboarding, support, self-service dashboard |
| Revenue Streams | SaaS subscriptions, premium analytics, multi-store plans, future supplier partnerships |
| Key Resources | Product software, inventory logic, customer data, hosting infrastructure |
| Key Activities | Product development, onboarding, support, analytics, retailer acquisition |
| Key Partners | Distributors, wholesalers, retail associations, technology providers |
| Cost Structure | Development, hosting, support, marketing, infrastructure and operations |

---

# Product Architecture

The repository is primarily a **static portfolio and front-end product prototype**.

```text
ReStock
│
├── Product Portfolio
│   ├── Landing Page
│   ├── Product Information
│   ├── Features
│   ├── Services
│   ├── Blog
│   └── Contact
│
├── Product Prototype
│   ├── Dashboard
│   ├── Products
│   ├── Sales
│   ├── Purchases
│   ├── Alerts
│   ├── Reorder Requests
│   ├── Suppliers
│   ├── Stock History
│   ├── Reports
│   ├── AI Insights
│   ├── Settings
│   └── Help
│
├── Models
│   └── Product / workflow / interface references
│
└── AI Exploration
    └── AI tool and prompt references
```

---

# Technology Stack

## Portfolio

- HTML
- CSS
- JavaScript
- Astro-generated static assets
- Responsive web design

## Product Prototype

- HTML5
- CSS3
- Vanilla JavaScript
- Browser Local Storage
- SVG interface graphics
- Responsive layout

## Deployment

The portfolio and prototype are deployed as static pages through GitHub Pages.

---

# Data Model

A future production implementation can use the following logical entities:

```text
Store
 |
 +---- Product
 |       |
 |       +---- Category
 |       |
 |       +---- Supplier
 |
 +---- Sale
 |
 +---- Purchase
 |
 +---- Reorder Request
 |
 +---- Stock Movement
 |
 +---- User
```

## Product

```text
Product ID
Product Name
SKU
Category
Current Stock
Reorder Level
Daily Sales
Purchase Price
Selling Price
Supplier ID
```

## Sale

```text
Sale ID
Product ID
Quantity
Selling Price
Total
Date
User ID
```

## Purchase

```text
Purchase ID
Product ID
Supplier ID
Quantity
Purchase Price
Date
Status
```

## Reorder Request

```text
Request ID
Product ID
Supplier ID
Suggested Quantity
Requested Quantity
Status
Created Date
```

## Stock Movement

```text
Movement ID
Product ID
Movement Type
Quantity
Previous Stock
New Stock
Reference
Timestamp
```

---

# Prototype Data Persistence

The prototype uses browser-side storage for its demonstration workflow.

Storage keys used by the prototype include:

```text
restock_v2
restock-settings
restock-theme
```

This makes the prototype suitable for:

- UI demonstration
- Workflow demonstration
- Academic presentation
- Product validation
- Interaction testing

It should not be treated as a production multi-user inventory database.

---

# Run Locally

## Option 1: Python Static Server

```bash
cd main-product's-prototype
python3 -m http.server 8000
```

Open:

```text
http://localhost:8000/dashboard.html
```

## Option 2: VS Code Live Server

Open the repository in Visual Studio Code and launch:

```text
main-product's-prototype/dashboard.html
```

with a local Live Server extension.

## Option 3: Browser

Individual HTML pages can be opened directly, although a local HTTP server is recommended for consistent browser behaviour.

---

# Repository Structure

```text
restock-inventory-management/
├── index.html
├── blog/
├── contact/
├── products/
├── services/
├── video/
├── main-product's-prototype/
│   ├── app.js
│   ├── style.css
│   ├── dashboard.html
│   ├── products.html
│   ├── sales.html
│   ├── purchases.html
│   ├── alerts.html
│   ├── reorder-requests.html
│   ├── suppliers.html
│   ├── stock-history.html
│   ├── reports.html
│   ├── ai-insights.html
│   ├── settings.html
│   └── help.html
├── models/
├── Ai-rewive/
├── _astro/
├── banner-pattern.svg
├── favicon.ico
└── report.pdf
```

---

# Academic Deliverables

The repository includes supporting material for the case-study presentation and product development process.

### `models/`

Contains product models, workflow references, interface references and visual assets.

### `Ai-rewive/`

Contains AI-related exploration material and prompt/tool references.

### `report.pdf`

Contains supporting report material for the case-study project.

### `main-product's-prototype/`

Contains the interactive product demonstration.

---

# User Flow

## Daily Retailer Flow

```text
Open ReStock
    |
    v
Dashboard
    |
    v
Check Low Stock
    |
    +---------------------+
    |                     |
    v                     v
No Critical Alert     Reorder Required
    |                     |
    v                     v
Record Sales          Review Supplier
    |                     |
    v                     v
Update Inventory      Create Reorder
                          |
                          v
                     Record Purchase
                          |
                          v
                    Stock Updated
```

## Example

```text
Product: Maggi 70g
Current Stock: 8
Reorder Level: 10
Daily Sales: 4
```

Since:

```text
8 <= 10
```

the product should be treated as low stock.

Estimated stock cover:

```text
8 / 4 = 2 days
```

The retailer can review the alert and create a replenishment request.

---

# Product Design Principles

1. **Simple** — Important information should be understandable quickly.
2. **Action-oriented** — Alerts should lead to a clear next action.
3. **Inventory-first** — Stock availability is the central operational concern.
4. **Data-connected** — Sales, stock and purchasing should be related.
5. **Scalable** — The workflow can evolve from a small pilot to a larger retail system.
6. **Transparent** — Recommendations should expose the information behind the decision.
7. **Retail-focused** — The interface should prioritize everyday store operations.

---

# Future Roadmap

## Phase 1 — Prototype

- Product portfolio
- Dashboard
- Product management
- Sales
- Purchases
- Alerts
- Reorder requests
- Suppliers
- Stock history
- Reports
- AI Insights
- Settings

## Phase 2 — Production Backend

Potential additions:

- REST API
- Authentication
- User accounts
- Store accounts
- Database
- Product CRUD
- Sales transactions
- Purchase transactions
- Supplier management
- Reorder workflows

## Phase 3 — Retail Integrations

Potential additions:

- Barcode scanning
- POS integration
- Invoice import
- Supplier APIs
- WhatsApp notifications
- Email notifications
- Mobile application

## Phase 4 — Intelligence

Potential additions:

- Demand forecasting
- Stockout prediction
- Supplier lead-time analysis
- Automatic reorder recommendations
- Seasonal demand analysis
- Product movement classification

## Phase 5 — Scale

Potential additions:

- Multi-store support
- Role-based access
- Centralized inventory
- Organization accounts
- Advanced analytics
- Subscription billing
- Enterprise reporting

---

# Pilot Success Criteria

A pilot can measure:

- Active retailers per week.
- Percentage of products with current stock information.
- Number of low-stock alerts reviewed.
- Percentage of alerts converted into replenishment actions.
- Change in unplanned stockout events.
- Average time from alert to reorder.
- Reorder completion rate.
- Retailer satisfaction feedback.
- Number of products successfully managed through the workflow.

Targets should be established from the pilot baseline rather than assumed in advance.

---

# Limitations

The current repository is an academic product prototype and portfolio rather than a production inventory SaaS.

Important limitations:

- Prototype data is seeded.
- Data persistence is browser-local.
- There is no production database.
- There is no production multi-user authentication system.
- Supplier contacts shown in the prototype are demonstration data.
- AI Insights are demonstrative.
- Reorder calculations are simplified.
- No live supplier integration is included.
- No payment or subscription infrastructure is included.

These limitations are appropriate for an MVP demonstration and can be addressed in production development.

---

# Case Study Requirement Mapping

| Case Requirement | ReStock Deliverable |
|---|---|
| Core customer problem | Stockout discovery and manual inventory monitoring |
| Problem and opportunity statement | Problem Statement and Product Vision |
| Target customer segments | Small retailers, kirana stores, convenience stores and small pharmacies |
| Customer profile | Small Retail Shopkeeper persona |
| Value Proposition Canvas | Customer Jobs, Pains, Gains and Product/Service |
| End-to-end customer journey | Customer Journey section |
| Operational touchpoints | Dashboard, Products, Sales, Alerts, Reorders, Purchases, Suppliers |
| Supply-chain flow | Supplier → Retailer → Customer flow |
| Responsibilities | Supply-chain responsibility table |
| Revenue streams | SaaS, analytics, multi-store and future partnerships |
| Cost structure | Development, infrastructure, support and acquisition |
| Financial/performance measure | Stockout, alert, reorder and inventory metrics |
| SWOT | Strengths, Weaknesses, Opportunities and Threats |
| Five or more risks | Risk Analysis and Mitigation |
| Business model | Business Model Canvas |
| Go-to-market | Pilot retailers and distributor partnerships |
| 90-day plan | 30/60/90-day pilot-to-scale plan |
| Demo | GitHub Pages interactive prototype |

---

# Project Status

**Project Type:** Academic Product / MVP Prototype  
**Domain:** Retail Inventory Management  
**Case Study:** Retail Stockout Alert Service  
**Institution:** ITM Skills University  
**Program:** B.Tech Computer Science Engineering  
**Course:** Go-to-Market & Customer Operations  
**Sprint:** Semester III — Sprint I

---

# Conclusion

ReStock is designed around a simple operational idea:

> Help a retailer know what is running low before the customer discovers the stockout.

The prototype connects inventory, sales, alerts, suppliers and replenishment into one workflow. The broader product concept can extend this foundation toward production inventory management, automated notifications, forecasting, supplier integration and multi-store operations.

---

# License

This repository is an academic project and prototype. Unless a separate license is added to the repository, the source and design assets should be treated as project-owned material and should not be redistributed or commercially reused without permission.

---

# Author

**Yash Tambade**

Project: **ReStock — Retail Inventory Management**

GitHub: https://github.com/Yashhh710/restock-inventory-management
