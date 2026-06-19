# 🏗️ DUOGRIND — System Architecture Diagram (V1)

## 📊 High-Level Architecture

```mermaid
flowchart TD

    A[User (Mobile App)] --> B[React Native App]

    subgraph Client Layer
        B --> C[Screens Layer]
        B --> D[Components Layer]
        B --> E[Hooks (Business Logic)]
        B --> F[Theme System]
    end

    C --> E
    D --> E

    E --> G[State Management (React State)]
    G --> H[Local Storage (AsyncStorage)]

    H --> G

