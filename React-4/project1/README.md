# React Routing Documentation (Hinglish)

Yeh documentation `React-4/project1` ke routing setup ko explain karta hai. Humne `react-router-dom` library ka use kiya hai single-page application (SPA) bananle ke liye.

## 1. Setup (Routing Shuru Karna)

**File Reference:** [📂 Open App.jsx](./src/App.jsx)

Sabse pehle, humne `App.jsx` mein routing configure ki hai.

### `BrowserRouter`
`BrowserRouter` poore app ko wrap karta hai taaki routing features har jagah available hon.

```jsx
// App.jsx
<BrowserRouter>
  <Headers>...</Headers>
  <Routes>...</Routes>
</BrowserRouter>
```

**Matlab:** Iske bina `Link`, `Route`, ya `useNavigate` kaam nahi karenge.

---

## 2. Routes Define Karna (`Routes` aur `Route`)

**File Reference:** [📂 Open App.jsx](./src/App.jsx)

`Routes` container hai jiske andar hum individual pages (`Route`) define karte hain.

```jsx
// App.jsx
<Routes>
  {/* Simple Routes */}
  <Route path='/' element={<CardList />} />
  <Route path='/contact' element={<h1>Contact</h1>} />

  {/* Dynamic Route */}
  <Route path='/about/:userFname/:userLname' element={<About/>} />

  {/* Nested Routes */}
  <Route path='/card' element={<DisplayCard />}>
    <Route index element={<h1>hi</h1>} />
    <Route path='view1' element={<h1>hi</h1>} />
  </Route>

  {/* Catch-all Route (404) */}
  <Route path='*' element={<h1>Oops!</h1>} />
</Routes>
```

- **`path`**: URL ka address (jaise `/about`).
- **`element`**: Jo component screen par dikhana hai.
- **`*`**: Agar koi aisa path ho jo exist nahi karta, toh yeh "Oops!" dikhayega.

---

## 3. Navigation (Link Component)

**File Reference:** [📂 Open App.jsx](./src/App.jsx)

React mein hum `<a>` tag nahi use karte kyunki woh page ko refresh kar deta hai. Uske badle hum `<Link>` use karte hain taaki page bina reload huye change ho jaye (SPA behavior).

```jsx
// App.jsx (inside Headers)
<Link to="/">Home</Link>
<Link to="/about/Amil/Ali">About</Link>
```

- **`to`**: Woh URL jahan jana hai.

---

## 4. Dynamic Routing (Parameters)

**File Reference:** [📂 Open About.jsx](./src/components/About.jsx)

Jab humein URL mein variable data bhejna hota hai (jaise user ka naam), hum **Dynamic Routing** use karte hain.

**Code:**
```jsx
// App.jsx
<Route path='/about/:userFname/:userLname' element={<About/>} />
```
Yahan `:userFname` aur `:userLname` variables hain.

**URL Example:** `/about/Amil/Ali`
- `userFname` = "Amil"
- `userLname` = "Ali"

**Data Access Karna (`useParams` hook):**
`About.jsx` mein hum in values ko access karte hain.

```jsx
// About.jsx
import { useParams } from 'react-router-dom';

const About = () => {
    // URL se parameters nikalna
    const { userFname, userLname } = useParams(); 
    return (
        <div>
            <h1>About {userFname} {userLname}</h1>
        </div>
    )
}
```

---

## 5. Nested Routing (Routes ke andar Routes)

**File Reference:** [📂 Open DisplayCard.jsx](./src/components/DisplayCard.jsx)

Jab humein ek page ke andar hi chota section change karna ho, hum **Nested Routing** use karte hain.

**Parent Route (`App.jsx`):**
```jsx
<Route path='/card' element={<DisplayCard />}>
  {/* Child Routes */}
  <Route index element={<h1>Default Hi</h1>} />
  <Route path='view1' element={<h1>View 1 Hi</h1>} />
</Route>
```

**Layout Component (`DisplayCard.jsx`):**
Parent component mein `<Outlet />` lagana zaroori hai. Jahan `<Outlet />` hoga, wahan child route render hoga.

```jsx
// DisplayCard.jsx
import { Outlet } from 'react-router-dom';

const DisplayCard = () => {
  return (
    <div>
      {/* ...Parent content... */}
      
      {/* Yahan child route ka content dikhega */}
      <Outlet />
    </div>
  )
}
```

---

## 6. Data Passing & Programmatic Navigation

**File Reference:** [📂 Open DisplayCard.jsx](./src/components/DisplayCard.jsx)

### Data Pass Karna via `Link`
Hum state ko `Link` ke through bhi bhej sakte hain bina URL change kiye.

```jsx
// DisplayCard.jsx - Link with State
<Link to='view1' state={state}>view</Link>
```
Isse agle page par `state` object mil jayega.

### `useLocation` Hook
Current URL aur pass kiya hua state access karne ke liye.

```jsx
// DisplayCard.jsx
const location = useLocation();
const { state } = location; // Link se bheja hua data yahan milega
```

### `useNavigate` Hook
Button click ya logic ke throgh page change karne ke liye.

```jsx
// DisplayCard.jsx
const navigate = useNavigate();

useEffect(() => {
  // Agar koi data nahi hai to Home page par bhej do
  if (!state?.title) {
    navigate('/', { replace: true });
  }
}, ...);
```
- **`replace: true`**: Isse history mein naya entry nahi banta, toh 'Back' button dabane par user wapas galat page par nahi aata.

---

## 7. Important Interview Topics (Jo Abhi Code Mein Nahi Hain)

Yeh topics interview mein bohot puche jaate hain, par abhi tak tumhare project mein use nahi huye hain.

### A. Protected Routes (Private Routes)
**Concept:**
Kuch pages (jaise Dashboard) sirf login kiye huye users ko dikhne chahiye. Agar user login nahi hai, to usse Login page par redirect kar dena.

**Example Code:**
```jsx
// ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, isLoggedIn }) => {
  if (!isLoggedIn) {
     // Agar login nahi hai, to Login page par bhej do
     return <Navigate to="/login" replace />;
  }
  return children; // Agar login hai, to page dikhao
};

// Usage in App.jsx
<Route path="/dashboard" element={
  <ProtectedRoute isLoggedIn={user.loggedIn}>
     <Dashboard />
  </ProtectedRoute>
} />
```

### B. `NavLink` vs `Link`
**Concept:**
`Link` normal navigation ke liye hota hai. 
`NavLink` tab use karte hain jab menu bars bana rahe hote hain, kyunki yeh automatically `active` class add kar deta hai jab user us page par hota hai. Isse hum active link ko highlight (CSS style) kar sakte hain.

**Example Code:**
```jsx
import { NavLink } from 'react-router-dom';

<NavLink 
  to="/about" 
  style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
>
  About
</NavLink>
```

### C. `useSearchParams` (Query Strings)
**Concept:**
Jab URL mein filters hote hain (e.g. `?search=react&sort=latest`). Isse hum query parameters ko read aur update karte hain.

**Example Code:**
```jsx
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('filter'); // URL se 'filter' ki value milegi

  return (
    <button onClick={() => setSearchParams({ filter: 'top' })}>
      Top Filter Lagao
    </button>
  );
}
```

### D. Lazy Loading (Code Splitting)
**Concept:**
Badi applications mein saara code ek saath load karne ke bajaye, hum pages ko tabhi load karte hain jab user wahan jaata hai. Isse app fast hoti hai.

**Example Code:**
```jsx
import React, { Suspense } from 'react';
// Normal import nahi, lazy use karte hain
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

<Routes>
  <Route path="/heavy" element={
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  } />
</Routes>
```
