# UI Components Guide for Your Portfolio

## 🎨 shadcn/ui Components (Already Configured)

Your project is already set up with **shadcn/ui**. You can add components using the CLI:

### Installation Command:
```bash
npx shadcn@latest add [component-name]
```

### Popular Components You Can Add:

#### Layout & Navigation
- `card` - For project cards, blog posts
- `separator` - Dividers between sections
- `tabs` - For organizing content (Projects, Skills, etc.)
- `accordion` - For FAQ or collapsible sections
- `navigation-menu` - Advanced navigation
- `breadcrumb` - Page navigation

#### Forms & Inputs
- `input` - Text inputs
- `textarea` - Multi-line text
- `select` - Dropdown selections
- `checkbox` - Checkboxes
- `radio-group` - Radio buttons
- `switch` - Toggle switches
- `slider` - Range sliders
- `form` - Form wrapper with validation

#### Feedback & Display
- `alert` - Alert messages
- `badge` - Tags/labels (great for tech stacks)
- `avatar` - Profile pictures
- `avatar-group` - Multiple avatars
- `skeleton` - Loading placeholders
- `progress` - Progress bars
- `toast` - Notification toasts
- `dialog` - Modal dialogs
- `sheet` - Slide-out panels
- `popover` - Popover menus
- `tooltip` - Hover tooltips
- `hover-card` - Rich hover cards

#### Data Display
- `table` - Data tables
- `pagination` - Page navigation
- `calendar` - Date picker
- `chart` - Data visualization (with recharts)

#### Media
- `aspect-ratio` - Responsive media containers
- `carousel` - Image carousels

### Example Usage:

```bash
# Add a card component
npx shadcn@latest add card

# Add multiple at once
npx shadcn@latest add card badge avatar tooltip

# Add with specific style
npx shadcn@latest add card --style new-york
```

---

## 🚀 Other Popular UI Libraries

### 1. **Radix UI** (shadcn/ui is built on this)
- Already installed via shadcn/ui
- Accessible, unstyled components
- Components: Dialog, Dropdown, Popover, Tooltip, etc.

### 2. **Lucide React** (Already Installed ✅)
- Icon library - you already have this!
- Usage: `import { Github, Mail, Phone } from 'lucide-react'`

### 3. **Framer Motion**
```bash
npm install framer-motion
```
- Animation library
- Great for page transitions, hover effects, scroll animations

### 4. **React Icons**
```bash
npm install react-icons
```
- Large collection of icon libraries
- Includes: Font Awesome, Material Design, Bootstrap Icons, etc.

### 5. **Recharts** (for charts)
```bash
npm install recharts
```
- Beautiful charts and graphs
- Perfect for showing skills, project stats, etc.

### 6. **React Hot Toast**
```bash
npm install react-hot-toast
```
- Lightweight toast notifications
- Alternative to shadcn/ui toast

### 7. **React Typewriter Effect**
```bash
npm install typewriter-effect
```
- Typing animation effects
- Great for hero sections

### 8. **React Particles**
```bash
npm install react-particles @tsparticles/engine @tsparticles/react
```
- Animated particle backgrounds
- Eye-catching visual effects

---

## 💡 Recommended Components for Your Portfolio

Based on your portfolio needs, here are the most useful components:

### High Priority:
1. **Card** - For projects display
   ```bash
   npx shadcn@latest add card
   ```

2. **Badge** - For tech stack tags
   ```bash
   npx shadcn@latest add badge
   ```

3. **Separator** - For section dividers
   ```bash
   npx shadcn@latest add separator
   ```

4. **Tabs** - Organize content
   ```bash
   npx shadcn@latest add tabs
   ```

5. **Tooltip** - Hover information
   ```bash
   npx shadcn@latest add tooltip
   ```

6. **Avatar** - Profile picture
   ```bash
   npx shadcn@latest add avatar
   ```

### Medium Priority:
- `dialog` - Project details modals
- `accordion` - FAQ or skills breakdown
- `progress` - Skill level indicators
- `skeleton` - Loading states

### Nice to Have:
- `carousel` - Project showcase
- `chart` - Skills visualization
- `calendar` - Timeline view

---

## 📝 Example: Using shadcn/ui Card Component

After installing: `npx shadcn@latest add card`

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ProjectCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AI-Powered Mock Interview Platform</CardTitle>
        <CardDescription>Next.js & Gemini AI</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Full-stack AI interview platform...</p>
        <div className="flex gap-2 mt-4">
          <Badge>Next.js</Badge>
          <Badge>Gemini AI</Badge>
          <Badge>PostgreSQL</Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Button>View Project</Button>
      </CardFooter>
    </Card>
  )
}
```

---

## 🔗 Useful Links

- **shadcn/ui Docs**: https://ui.shadcn.com
- **shadcn/ui Components**: https://ui.shadcn.com/docs/components
- **Lucide Icons**: https://lucide.dev/icons/
- **Radix UI**: https://www.radix-ui.com
- **Framer Motion**: https://www.framer.com/motion/

---

## 🎯 Quick Start Commands

```bash
# Add essential components for portfolio
npx shadcn@latest add card badge separator avatar tooltip tabs

# Add form components (if needed)
npx shadcn@latest add input textarea select button

# Add feedback components
npx shadcn@latest add alert toast dialog progress

# Install animation library
npm install framer-motion

# Install icon library (if you want more icons)
npm install react-icons
```

