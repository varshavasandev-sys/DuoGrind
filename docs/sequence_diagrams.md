# 🔁 DUOGRIND — Session Flow (V1)

## 📊 Sequence Diagram: Study Session Lifecycle

```mermaid
sequenceDiagram
    participant U as User
    participant H as HomeScreen
    participant S as SessionScreen
    participant T as TimerSystem
    participant O as OpponentEngine
    participant R as ResultScreen
    participant L as LocalStorage

    U->>H: Open app
    H->>U: Display "Start Grind" options

    U->>H: Select session (10 / 25 min)

    H->>S: Navigate to SessionScreen(duration)

    S->>T: Initialize timer
    S->>O: Initialize opponent simulation

    loop Every second
        T->>S: Update remaining time
        O->>S: Update opponent progress
        S->>U: Render updated UI
    end

    alt User completes session
        T->>S: Timer reaches 0
        S->>R: Navigate to ResultScreen(success)
    else User exits early
        U->>S: Exit session
        S->>R: Navigate to ResultScreen(abandoned)
    end

    R->>L: Save session result
    R->>L: Update streak + total time

    R->>U: Display result (XP, streak)
