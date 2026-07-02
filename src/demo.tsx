import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { Blink, Scan, Pulse, Wink, Sleepy, Spark, Robo, Joy, Shiver, Cry, Think, Cool, Dizzy, Angry, Laugh, Shy, Love, Surprised, Smirk, Nervous, Dead, Hype, Unamused, Sigh, Confused, Nerd, Sick, Asleep, Star, Devil, Angel, Pout, Grumpy, Zen } from "./index";
import { Touch, Call, Deposit, Mockups, Estimate, Search, Upload, Lock, Chart } from "./index";

const faces = [
  { name: "Blink", C: Blink },
  { name: "Scan", C: Scan },
  { name: "Pulse", C: Pulse },
  { name: "Wink", C: Wink },
  { name: "Sleepy", C: Sleepy },
  { name: "Spark", C: Spark },
  { name: "Robo", C: Robo },
  { name: "Joy", C: Joy },
  { name: "Shiver", C: Shiver },
  { name: "Cry", C: Cry },
  { name: "Think", C: Think },
  { name: "Cool", C: Cool },
  { name: "Dizzy", C: Dizzy },
  { name: "Angry", C: Angry },
  { name: "Laugh", C: Laugh },
  { name: "Shy", C: Shy },
  { name: "Love", C: Love },
  { name: "Surprised", C: Surprised },
  { name: "Smirk", C: Smirk },
  { name: "Nervous", C: Nervous },
  { name: "Dead", C: Dead },
  { name: "Hype", C: Hype },
  { name: "Unamused", C: Unamused },
  { name: "Sigh", C: Sigh },
  { name: "Confused", C: Confused },
  { name: "Nerd", C: Nerd },
  { name: "Sick", C: Sick },
  { name: "Asleep", C: Asleep },
  { name: "Star", C: Star },
  { name: "Devil", C: Devil },
  { name: "Angel", C: Angel },
  { name: "Pout", C: Pout },
  { name: "Grumpy", C: Grumpy },
  { name: "Zen", C: Zen },
] as const;

const scenes = [
  { name: "Touch", C: Touch },
  { name: "Call", C: Call },
  { name: "Deposit", C: Deposit },
  { name: "Mockups", C: Mockups },
  { name: "Estimate", C: Estimate },
  { name: "Search", C: Search },
  { name: "Upload", C: Upload },
  { name: "Lock", C: Lock },
  { name: "Chart", C: Chart },
] as const;

function Demo() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: "2rem", background: "#0f0f0f", minHeight: "100vh", color: "#fff" }}>
      <h1 style={{ marginBottom: "0.25rem" }}>expressive-svgs</h1>
      <p style={{ color: "#888", marginBottom: "2.5rem" }}>Animated line-art SVG components for React</p>

      <h2 style={{ color: "#aaa", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>Faces</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", marginBottom: "3rem" }}>
        {faces.map(({ name, C }) => (
          <div key={name} style={{ textAlign: "center" }}>
            <C />
            <div style={{ marginTop: "0.5rem", fontSize: "0.75rem", color: "#666" }}>{name}</div>
          </div>
        ))}
      </div>

      <h2 style={{ color: "#aaa", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>Scenes</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
        {scenes.map(({ name, C }) => (
          <div key={name} style={{ textAlign: "center" }}>
            <C />
            <div style={{ marginTop: "0.5rem", fontSize: "0.75rem", color: "#666" }}>{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Demo />
  </StrictMode>
);
