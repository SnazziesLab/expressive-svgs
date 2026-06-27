# expressive-svgs

Animated line-art SVG components for React. Themed via CSS custom properties, zero runtime dependencies beyond React.

**9 faces** · **5 scene illustrations** · CSS keyframe animations · tree-shakeable

---

## Install

```bash
npm install expressive-svgs
# or
bun add expressive-svgs
```

## Setup

Import the stylesheet once at your app root:

```ts
import "expressive-svgs/styles.css";
```

---

## Faces

Circular animated characters. Default size 120×120.

```tsx
import { Blink, Scan, Pulse, Wink, Sleepy, Spark, Robo, Joy, Shiver } from "expressive-svgs";

<Blink />
<Scan />
<Pulse />
<Wink />
<Sleepy />
<Spark />
<Robo />
<Joy />
<Shiver />
```

### Face props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `accent` | `string` | `#c6f432` | Stroke / fill color |
| `size` | `number \| string` | `120` | `width` and `height` of the SVG |
| `glow` | `boolean` | `true` | Drop-shadow glow matching accent |

```tsx
<Blink accent="#ff6b6b" size={80} />
<Joy accent="white" glow={false} />
<Shiver size="100%" />
```

### Face reference

| Component | Animation |
|-----------|-----------|
| `<Blink>` | Eyes blink on a 4 s loop, whole face floats |
| `<Scan>` | Pupils dart side to side, outer ring spins |
| `<Pulse>` | Face breathes in/out, ripple ring expands |
| `<Wink>` | Left eye winks, face tilts slowly |
| `<Sleepy>` | Half-lid eyes droop, zzz floats up |
| `<Spark>` | Mouth talks, dashed orbit ring spins |
| `<Robo>` | Square head, antenna pulses, eyes flicker |
| `<Joy>` | Big smile, face hops with squash-and-stretch |
| `<Shiver>` | Rapid full-body tremor, teeth chatter |

---

## Scenes

Landscape (240×170) process-step illustrations.

```tsx
import { Touch, Call, Deposit, Mockups, Estimate } from "expressive-svgs";

<Touch />
<Call />
<Deposit />
<Mockups />
<Estimate />
```

### Scene props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `accent` | `string` | `#c6f432` | Stroke / fill color |
| `width` | `number \| string` | `240` | SVG width |
| `height` | `number \| string` | `170` | SVG height |
| `glow` | `boolean` | `true` | Drop-shadow glow |

### Scene reference

| Component | Visual |
|-----------|--------|
| `<Touch>` | Paper plane flies across, @ symbol pings |
| `<Call>` | Phone shakes, sound waves pulse outward |
| `<Deposit>` | Coin drops into padlock, shackle clicks, spark fires |
| `<Mockups>` | Browser frame, content blocks draw in, cursor moves |
| `<Estimate>` | Document, signature draws, stamp slams down |

---

## Theming

All components read `--ef-accent` from CSS. Set it globally to theme the whole set:

```css
:root {
  --ef-accent: #c6f432;   /* default lime */
}

[data-theme="dark"] {
  --ef-accent: #7dd3fc;   /* sky blue */
}
```

Or pass `accent` per component to override inline:

```tsx
<Robo accent="var(--brand-color)" />
```

---

## Scatter pattern (background decoration)

```tsx
const FACES = [Blink, Scan, Pulse, Wink, Robo, Joy];

export function FaceField() {
  return (
    <div style={{ position: "relative" }}>
      {FACES.map((Face, i) => (
        <Face
          key={i}
          size={80}
          glow={false}
          style={{
            position: "absolute",
            opacity: 0.12,
            top: `${(i * 17) % 100}%`,
            left: `${(i * 31) % 100}%`,
          }}
        />
      ))}
    </div>
  );
}
```

---

## Process section pattern

```tsx
const STEPS = [
  { Scene: Touch, label: "Get in touch" },
  { Scene: Call,  label: "Discovery call" },
  { Scene: Deposit, label: "Deposit" },
  { Scene: Mockups, label: "Mock-ups" },
  { Scene: Estimate, label: "Estimate & fee" },
];

export function Process({ activeStep = 0 }) {
  const { Scene } = STEPS[activeStep];
  return <Scene width={320} height={226} />;
}
```

---

## Animation speed

Animations run via CSS keyframes. Override duration with a CSS variable (or target the class directly):

```css
/* slow everything down */
.ef-blink .ef-eye { animation-duration: 8s; }

/* kill all motion (prefers-reduced-motion) */
@media (prefers-reduced-motion: reduce) {
  [class*="ef-"], [class*="es-"] {
    animation: none !important;
  }
}
```

---

## License

MIT
