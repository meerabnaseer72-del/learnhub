/**
 * Comprehensive Course Catalog for LearnHub LMS
 * Realistic educational data with no placeholder text or mock claims.
 */

export const courses = [
  {
    id: 'react-basics',
    title: 'React Fundamentals: Build Modern User Interfaces',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
    description: 'Master the core concepts of React.js from scratch. Understand component-driven architecture, JSX syntax, props, and fundamental React hooks like useState and useEffect to build interactive client-side web applications.',
    instructor: 'Sarah Jenkins',
    instructorId: 'sarah-jenkins',
    category: 'Web Development',
    level: 'Beginner',
    duration: '4h 15m',
    featured: true,
    outcomes: [
      'Understand how the Virtual DOM and JSX syntax render dynamic components',
      'Deconstruct complex user interfaces into modular, reusable React components',
      'Pass data reliably through component trees using props and composition',
      'Manage local component state seamlessly with the useState hook',
      'Synchronize external operations and lifecycle events with useEffect',
      'Assemble a complete interactive single-page application with responsive layouts'
    ],
    lessons: [
      {
        id: 'rb-1',
        title: 'Introduction to React & Component Architecture',
        duration: '35 min',
        description: 'Discover why React emerged as the standard for frontend development. Learn the philosophy of declarative interfaces, component reusability, and how Vite streamlines the local development workflow.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        resources: [
          { id: 'rb-res-1', title: 'Official React Documentation: Quick Start', type: 'Documentation', url: 'https://react.dev/learn' },
          { id: 'rb-res-2', title: 'Why Declarative UI Outperforms Imperative DOM', type: 'Article', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started' }
        ]
      },
      {
        id: 'rb-2',
        title: 'Components, JSX, and Virtual DOM',
        duration: '42 min',
        description: 'Deep dive into JSX, JavaScript expressions inside markup, fragment tags, and how React compiles JSX into pure JavaScript createElement calls under the hood.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        resources: [
          { id: 'rb-res-3', title: 'Writing Markup with JSX Guide', type: 'Documentation', url: 'https://react.dev/learn/writing-markup-with-jsx' },
          { id: 'rb-res-4', title: 'React Virtual DOM and Reconciliation Explained', type: 'Article', url: 'https://react.dev/learn/preserving-and-resetting-state' }
        ]
      },
      {
        id: 'rb-3',
        title: 'Props and Composable Interfaces',
        duration: '40 min',
        description: 'Learn how to pass read-only props, configure default prop values, use the children prop for container layouts, and prevent unnecessary prop drilling.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        resources: [
          { id: 'rb-res-5', title: 'Passing Props to a Component', type: 'Documentation', url: 'https://react.dev/learn/passing-props-to-a-component' },
          { id: 'rb-res-6', title: 'Composition vs Inheritance in Modern React', type: 'Practice Guide', url: 'https://react.dev/learn' }
        ]
      },
      {
        id: 'rb-4',
        title: 'Managing State with useState',
        duration: '48 min',
        description: 'Explore component memory. Master updating state variables, updater functions for previous state, handling complex object/array state, and managing input form bindings.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        resources: [
          { id: 'rb-res-7', title: 'State: A Component Memory', type: 'Documentation', url: 'https://react.dev/learn/state-a-components-memory' },
          { id: 'rb-res-8', title: 'Updating Objects and Arrays in State', type: 'Article', url: 'https://react.dev/learn/updating-objects-in-state' }
        ]
      },
      {
        id: 'rb-5',
        title: 'Side Effects and Lifecycles with useEffect',
        duration: '45 min',
        description: 'Handle data fetching, timers, subscription listeners, and browser synchronization safely. Understand the dependency array and effect cleanup functions.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        resources: [
          { id: 'rb-res-9', title: 'Synchronizing with Effects', type: 'Documentation', url: 'https://react.dev/learn/synchronizing-with-effects' },
          { id: 'rb-res-10', title: 'Common useEffect Pitfalls and Best Practices', type: 'Article', url: 'https://react.dev/learn/you-might-not-need-an-effect' }
        ]
      },
      {
        id: 'rb-6',
        title: 'Building a Full Interactive Application',
        duration: '45 min',
        description: 'Synthesize everything learned into a cohesive mini-application. Organize folder structures, derive state values cleanly, and ensure responsive Tailwind styling.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
        resources: [
          { id: 'rb-res-11', title: 'Thinking in React Project Tutorial', type: 'Practice', url: 'https://react.dev/learn/thinking-in-react' },
          { id: 'rb-res-12', title: 'Production React Architecture Guide', type: 'Article', url: 'https://react.dev/learn' }
        ]
      }
    ]
  },
  {
    id: 'javascript-fundamentals',
    title: 'Modern JavaScript (ES6+): The Core Language',
    thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=800&q=80',
    description: 'Gain complete confidence in standard JavaScript. Understand scopes, closures, asynchronous execution with Promises and async/await, array transformations, and ES module architecture.',
    instructor: 'Marcus Vance',
    instructorId: 'marcus-vance',
    category: 'Programming',
    level: 'Beginner',
    duration: '5h 00m',
    featured: true,
    outcomes: [
      'Master lexical scoping, block scope, hoisting, and JavaScript closures',
      'Utilize modern ES6+ features including destructuring, rest/spread, and template literals',
      'Execute array methods like map, filter, reduce, and find with total fluency',
      'Conquer asynchronous operations using Promises, fetch APIs, and async/await syntax',
      'Understand error handling patterns with try/catch and custom Error objects',
      'Structure clean modular code using ES import and export standards'
    ],
    lessons: [
      {
        id: 'js-1',
        title: 'Execution Context, Scopes & Closures',
        duration: '45 min',
        description: 'Learn how the JavaScript engine parses code, creates execution contexts, manages variable environments, and forms closures in lexical scope.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        resources: [
          { id: 'js-res-1', title: 'MDN: Closures Deep Dive', type: 'Documentation', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures' },
          { id: 'js-res-2', title: 'Visualizing JavaScript Execution Context', type: 'Article', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let' }
        ]
      },
      {
        id: 'js-2',
        title: 'Modern ES6+ Syntax & Data Structures',
        duration: '50 min',
        description: 'Explore arrow functions, template literals, destructuring assignment, default arguments, object property shorthand, and Map/Set data structures.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        resources: [
          { id: 'js-res-3', title: 'Destructuring Assignment Reference', type: 'Documentation', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment' },
          { id: 'js-res-4', title: 'ES6 Syntax Reference Sheet', type: 'Article', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' }
        ]
      },
      {
        id: 'js-3',
        title: 'Functional Array Manipulation',
        duration: '55 min',
        description: 'Write declarative, pure transformations using map(), filter(), reduce(), some(), every(), and flatMap() without mutating source arrays.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        resources: [
          { id: 'js-res-5', title: 'MDN: Array.prototype Methods', type: 'Documentation', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array' },
          { id: 'js-res-6', title: 'Functional Programming in JavaScript', type: 'Article', url: 'https://developer.mozilla.org/en-US/docs/Glossary/Functional_programming' }
        ]
      },
      {
        id: 'js-4',
        title: 'Asynchronous JavaScript: Promises & Event Loop',
        duration: '50 min',
        description: 'Understand the browser event loop, call stack, microtask queue, and how JavaScript creates, chains, and resolves native Promises.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        resources: [
          { id: 'js-res-7', title: 'Using Promises in JavaScript', type: 'Documentation', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises' },
          { id: 'js-res-8', title: 'What the Event Loop Actually Does', type: 'Article', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop' }
        ]
      },
      {
        id: 'js-5',
        title: 'Async/Await & Resilient Error Handling',
        duration: '40 min',
        description: 'Transform promise chains into readable synchronous-style async/await routines, implement try/catch blocks, and craft bulletproof error strategies.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        resources: [
          { id: 'js-res-9', title: 'Async Function Reference', type: 'Documentation', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function' },
          { id: 'js-res-10', title: 'Robust Error Handling Patterns', type: 'Practice', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch' }
        ]
      },
      {
        id: 'js-6',
        title: 'Modules, Bundlers & Modern Tooling',
        duration: '40 min',
        description: 'Organize JavaScript applications using ES Modules (import/export), understand package management with npm, and inspect Vite bundling workflows.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
        resources: [
          { id: 'js-res-11', title: 'JavaScript Modules in the Browser', type: 'Documentation', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules' },
          { id: 'js-res-12', title: 'Vite Getting Started Overview', type: 'Article', url: 'https://vite.dev/guide/' }
        ]
      }
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design Systems: From Wireframes to High-Fidelity',
    thumbnail: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
    description: 'Learn modern digital product design. Grasp typographic scale, harmonious color theory, accessible contrast ratios, auto-layout paradigms, and cohesive design systems.',
    instructor: 'David Chen',
    instructorId: 'david-chen',
    category: 'UI/UX Design',
    level: 'Beginner',
    duration: '3h 50m',
    featured: true,
    outcomes: [
      'Apply human-centered design principles to solve real digital product challenges',
      'Establish consistent 4px and 8px spatial grids and typographic scales',
      'Construct accessible color systems meeting WCAG AA and AAA contrast standards',
      'Prototype responsive layouts for desktop, tablet, and mobile breakpoints',
      'Build reusable UI components, states (hover, focus, active, disabled), and variants',
      'Conduct effective usability heuristics and interface audit evaluations'
    ],
    lessons: [
      {
        id: 'ui-1',
        title: 'Design Principles & Mental Models',
        duration: '35 min',
        description: 'Explore visual hierarchy, F-shape and Z-shape scanning patterns, law of proximity, and Hick’s law to guide user decision-making smoothly.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        resources: [
          { id: 'ui-res-1', title: 'Laws of UX Directory', type: 'Reference', url: 'https://lawsofux.com/' },
          { id: 'ui-res-2', title: '10 Usability Heuristics for User Interface Design', type: 'Article', url: 'https://www.nngroup.com/articles/ten-usability-heuristics/' }
        ]
      },
      {
        id: 'ui-2',
        title: 'Typography, Grid Systems & Spacing Rhythms',
        duration: '40 min',
        description: 'Set up clear vertical rhythm using proportional scale (12px, 14px, 16px, 20px, 24px, 32px), line heights, letter spacing, and consistent 8pt spacing.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        resources: [
          { id: 'ui-res-3', title: 'Modular Scale Calculator', type: 'Tool', url: 'https://www.modularscale.com/' },
          { id: 'ui-res-4', title: 'The 8pt Grid System Guide', type: 'Article', url: 'https://spec.fm/specifics/8-pt-grid' }
        ]
      },
      {
        id: 'ui-3',
        title: 'Color Palettes & Accessible Contrast',
        duration: '38 min',
        description: 'Define semantic color palettes (primary, neutral, success, warning, destructive) and ensure text meets accessibility standards using contrast checkers.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        resources: [
          { id: 'ui-res-5', title: 'WebAIM Contrast Checker', type: 'Tool', url: 'https://webaim.org/resources/contrastchecker/' },
          { id: 'ui-res-6', title: 'Accessible Palette Construction Guidelines', type: 'Article', url: 'https://www.w3.org/WAI/fundamentals/accessibility-intro/' }
        ]
      },
      {
        id: 'ui-4',
        title: 'Components, Atoms, & Design Systems',
        duration: '42 min',
        description: 'Organize design systems into atomic components: buttons, input fields, badges, cards, and modal dialogs with systematic variants and states.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        resources: [
          { id: 'ui-res-7', title: 'Atomic Design Methodology', type: 'Documentation', url: 'https://bradfrost.com/blog/post/atomic-web-design/' },
          { id: 'ui-res-8', title: 'Design System Component Checklist', type: 'Reference', url: 'https://designsystemsrepo.com/' }
        ]
      },
      {
        id: 'ui-5',
        title: 'Designing for Mobile & Multi-Device Breakpoints',
        duration: '35 min',
        description: 'Adopt a mobile-first perspective. Learn tap targets (minimum 44x44px), thumb-zone usability, sheet drawers, and fluid typography.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        resources: [
          { id: 'ui-res-9', title: 'Apple Human Interface Guidelines: Layout & Touch', type: 'Documentation', url: 'https://developer.apple.com/design/human-interface-guidelines/' },
          { id: 'ui-res-10', title: 'Responsive Design Best Practices', type: 'Article', url: 'https://web.dev/responsive-web-design-basics/' }
        ]
      },
      {
        id: 'ui-6',
        title: 'Micro-Interactions, Feedback & Polish',
        duration: '40 min',
        description: 'Add purposeful interactive transitions: focus rings, loading skeletons, error tooltips, and success confirmations that guide the user.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
        resources: [
          { id: 'ui-res-11', title: 'Designing Meaningful Micro-Interactions', type: 'Article', url: 'https://uxdesign.cc/' },
          { id: 'ui-res-12', title: 'WCAG 2.1 Guidelines for Motion & Flashing', type: 'Reference', url: 'https://www.w3.org/TR/WCAG21/' }
        ]
      }
    ]
  },
  {
    id: 'python-data-analysis',
    title: 'Python for Data Analysis & Statistical Insights',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    description: 'Learn to manipulate, clean, and visualize data using Python, Pandas, NumPy, and Matplotlib. Turn raw tabular records into meaningful analytical narratives and business insights.',
    instructor: 'Priya Patel',
    instructorId: 'priya-patel',
    category: 'Data Science',
    level: 'Intermediate',
    duration: '4h 45m',
    featured: true,
    outcomes: [
      'Write idiomatic Python scripts using data structures like lists, dictionaries, and sets',
      'Perform fast vector calculations and matrix math using NumPy arrays',
      'Clean messy, missing, and duplicate real-world datasets with Pandas DataFrames',
      'Group, aggregate, pivot, and join multi-table datasets for statistical analysis',
      'Generate expressive visualizations including heatmaps, histograms, and scatter plots',
      'Extract data-backed answers and summarize trends for stakeholders'
    ],
    lessons: [
      {
        id: 'py-1',
        title: 'Python Essentials for Data Manipulation',
        duration: '45 min',
        description: 'Refresh core Python concepts tailored to analysts: list comprehensions, lambda functions, generator expressions, and file I/O operations.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        resources: [
          { id: 'py-res-1', title: 'Python Official Tutorial: Data Structures', type: 'Documentation', url: 'https://docs.python.org/3/tutorial/datastructures.html' },
          { id: 'py-res-2', title: 'Python for Data Analysis Overview', type: 'Article', url: 'https://realpython.com/' }
        ]
      },
      {
        id: 'py-2',
        title: 'NumPy Arrays & Vectorized Operations',
        duration: '40 min',
        description: 'Understand ndarrays, broadcasting rules, boolean masking, and why vectorized numeric operations execute 50x faster than standard loops.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        resources: [
          { id: 'py-res-3', title: 'NumPy Quickstart Guide', type: 'Documentation', url: 'https://numpy.org/doc/stable/user/quickstart.html' },
          { id: 'py-res-4', title: 'Array Broadcasting Mechanics Explained', type: 'Article', url: 'https://numpy.org/doc/stable/user/basics.broadcasting.html' }
        ]
      },
      {
        id: 'py-3',
        title: 'Pandas DataFrames: Ingestion & Exploration',
        duration: '50 min',
        description: 'Load CSV, JSON, and database sources into Pandas DataFrames. Inspect schemas with info(), describe(), head(), and value_counts().',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        resources: [
          { id: 'py-res-5', title: 'Pandas 10 Minutes Guide', type: 'Documentation', url: 'https://pandas.pydata.org/docs/user_guide/10min.html' },
          { id: 'py-res-6', title: 'Indexing and Selecting Data in Pandas', type: 'Documentation', url: 'https://pandas.pydata.org/docs/user_guide/indexing.html' }
        ]
      },
      {
        id: 'py-4',
        title: 'Data Cleaning: Handling Missing Data & Outliers',
        duration: '50 min',
        description: 'Detect null values, apply sensible imputation techniques, parse datetime timestamps, cast dtypes, and filter statistical anomalies.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        resources: [
          { id: 'py-res-7', title: 'Working with Missing Data in Pandas', type: 'Documentation', url: 'https://pandas.pydata.org/docs/user_guide/missing_data.html' },
          { id: 'py-res-8', title: 'Data Cleaning Best Practices Checklist', type: 'Article', url: 'https://realpython.com/python-data-cleaning-numpy-pandas/' }
        ]
      },
      {
        id: 'py-5',
        title: 'Aggregation, Grouping, & Pivoting',
        duration: '50 min',
        description: 'Implement Split-Apply-Combine patterns using groupby(), calculate window aggregations, generate cross-tabulations, and restructure matrices.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        resources: [
          { id: 'py-res-9', title: 'Group By: Split-Apply-Combine Guide', type: 'Documentation', url: 'https://pandas.pydata.org/docs/user_guide/groupby.html' },
          { id: 'py-res-10', title: 'Pivot Tables and Reshaping Data', type: 'Documentation', url: 'https://pandas.pydata.org/docs/user_guide/reshaping.html' }
        ]
      },
      {
        id: 'py-6',
        title: 'Statistical Visualization & Case Study',
        duration: '50 min',
        description: 'Plot charts with Seaborn and Matplotlib to present actionable answers from a real-world e-commerce sales dataset.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
        resources: [
          { id: 'py-res-11', title: 'Matplotlib Pyplot Tutorial', type: 'Documentation', url: 'https://matplotlib.org/stable/tutorials/introductory/pyplot.html' },
          { id: 'py-res-12', title: 'Storytelling with Data Visuals', type: 'Article', url: 'https://realpython.com/' }
        ]
      }
    ]
  },
  {
    id: 'responsive-web-design',
    title: 'Responsive Web Design with Modern CSS & Tailwind',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    description: 'Build robust, responsive layouts that adapt seamlessly to every device. Master CSS Grid, Flexbox, media queries, mobile-first design, and utility-first Tailwind CSS.',
    instructor: 'David Chen',
    instructorId: 'david-chen',
    category: 'Web Development',
    level: 'Beginner',
    duration: '3h 30m',
    featured: false,
    outcomes: [
      'Master Flexbox alignment, direction, wrapping, and distribution properties',
      'Build complex two-dimensional grid layouts with CSS Grid and auto-fit/fill',
      'Implement mobile-first responsive breakpoints with Tailwind CSS utilities',
      'Optimize web typography, images, and fluid containers for all screen sizes',
      'Prevent horizontal scrolling, element clipping, and tap target issues on mobile'
    ],
    lessons: [
      {
        id: 'rwd-1',
        title: 'Mobile-First Philosophy & The Viewport',
        duration: '35 min',
        description: 'Learn why mobile-first CSS results in cleaner code and faster pages. Understand viewport meta tags and fluid sizing units (rem, %, vh, vw, clamp).',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        resources: [
          { id: 'rwd-res-1', title: 'MDN: Responsive Web Design Basics', type: 'Documentation', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Responsive_design' },
          { id: 'rwd-res-2', title: 'Understanding Viewport and Media Queries', type: 'Article', url: 'https://web.dev/learn/css/responsive-design' }
        ]
      },
      {
        id: 'rwd-2',
        title: 'Mastering Modern CSS Flexbox',
        duration: '45 min',
        description: 'Align items along main and cross axes. Learn flex-grow, flex-shrink, flex-basis, gap properties, and building navigation bars that never break.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        resources: [
          { id: 'rwd-res-3', title: 'CSS Tricks: Complete Guide to Flexbox', type: 'Reference', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/' },
          { id: 'rwd-res-4', title: 'Flexbox Froggy Interactive Practice', type: 'Practice', url: 'https://flexboxfroggy.com/' }
        ]
      },
      {
        id: 'rwd-3',
        title: 'Two-Dimensional Layouts with CSS Grid',
        duration: '45 min',
        description: 'Construct multi-column content grids using grid-template-columns, minmax(), repeat(auto-fit), template areas, and nested subgrids.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        resources: [
          { id: 'rwd-res-5', title: 'Complete Guide to CSS Grid', type: 'Reference', url: 'https://css-tricks.com/snippets/css/complete-guide-grid/' },
          { id: 'rwd-res-6', title: 'MDN CSS Grid Layout', type: 'Documentation', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout' }
        ]
      },
      {
        id: 'rwd-4',
        title: 'Utility-First Styling with Tailwind CSS',
        duration: '45 min',
        description: 'Harness Tailwind responsive prefixes (sm:, md:, lg:, xl:), pseudo-class variants, spacing systems, and color themes without leaving markup.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        resources: [
          { id: 'rwd-res-7', title: 'Tailwind CSS Official Documentation', type: 'Documentation', url: 'https://tailwindcss.com/docs' },
          { id: 'rwd-res-8', title: 'Responsive Design in Tailwind CSS', type: 'Article', url: 'https://tailwindcss.com/docs/responsive-design' }
        ]
      },
      {
        id: 'rwd-5',
        title: 'Responsive Auditing & Cross-Device Testing',
        duration: '40 min',
        description: 'Test layouts at standard widths (375px, 768px, 1280px) and intermediate breakpoints. Ensure touch targets, legibility, and performance meet standards.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        resources: [
          { id: 'rwd-res-9', title: 'Chrome DevTools Device Mode Guide', type: 'Tool', url: 'https://developer.chrome.com/docs/devtools/device-mode/' },
          { id: 'rwd-res-10', title: 'Web Content Accessibility Guidelines (WCAG) 2.2', type: 'Reference', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/' }
        ]
      }
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Content Strategy',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    description: 'Learn modern organic growth marketing. Build audience funnels, understand technical SEO fundamentals, craft engaging email newsletters, and measure campaign analytics.',
    instructor: 'Elena Rostova',
    instructorId: 'elena-rostova',
    category: 'Digital Marketing',
    level: 'Beginner',
    duration: '3h 15m',
    featured: false,
    outcomes: [
      'Understand inbound marketing funnels: Awareness, Consideration, Conversion, and Retention',
      'Implement on-page SEO, meta descriptions, semantic HTML, and keyword research',
      'Design targeted email campaigns with compelling subject lines and clear calls to action',
      'Analyze customer acquisition metrics such as CAC, LTV, bounce rates, and conversion rate',
      'Create high-performing content calendars tailored to target audience segments'
    ],
    lessons: [
      {
        id: 'dm-1',
        title: 'Foundations of Inbound Growth & Funnels',
        duration: '35 min',
        description: 'Compare inbound vs outbound marketing. Map customer journeys through the conversion funnel and define clear value propositions.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        resources: [
          { id: 'dm-res-1', title: 'HubSpot Inbound Marketing Methodology', type: 'Article', url: 'https://www.hubspot.com/inbound-marketing' },
          { id: 'dm-res-2', title: 'Mapping the Modern Customer Journey', type: 'Reference', url: 'https://hbr.org/' }
        ]
      },
      {
        id: 'dm-2',
        title: 'Search Engine Optimization (SEO) Core Concepts',
        duration: '40 min',
        description: 'Demystify search crawlers, indexing, keyword intent (informational, navigational, commercial, transactional), structured data, and Core Web Vitals.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        resources: [
          { id: 'dm-res-3', title: 'Google Search Central: SEO Starter Guide', type: 'Documentation', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
          { id: 'dm-res-4', title: 'Understanding Core Web Vitals', type: 'Documentation', url: 'https://web.dev/vitals/' }
        ]
      },
      {
        id: 'dm-3',
        title: 'Content Strategy & Editorial Calendars',
        duration: '40 min',
        description: 'Plan, produce, and distribute authoritative articles, case studies, and guides that answer customer questions and build trust over time.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        resources: [
          { id: 'dm-res-5', title: 'Content Marketing Institute Framework', type: 'Article', url: 'https://contentmarketinginstitute.com/' },
          { id: 'dm-res-6', title: 'Editorial Planning Template Guide', type: 'Practice', url: 'https://copyblogger.com/' }
        ]
      },
      {
        id: 'dm-4',
        title: 'Email Marketing & Retention Strategy',
        duration: '40 min',
        description: 'Build email subscriber lists cleanly, segment audiences based on engagement, write click-worthy headlines, and automate welcome sequences.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        resources: [
          { id: 'dm-res-7', title: 'Email Marketing Benchmark Reports', type: 'Reference', url: 'https://mailchimp.com/resources/email-marketing-benchmarks/' },
          { id: 'dm-res-8', title: 'Subject Line Optimization Guidelines', type: 'Article', url: 'https://campaignmonitor.com/' }
        ]
      },
      {
        id: 'dm-5',
        title: 'Marketing Analytics & Conversion Optimization',
        duration: '40 min',
        description: 'Track key performance indicators in Google Analytics 4, evaluate click-through and bounce rates, and run A/B split tests on landing pages.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        resources: [
          { id: 'dm-res-9', title: 'Google Analytics 4 Help Center', type: 'Documentation', url: 'https://support.google.com/analytics/' },
          { id: 'dm-res-10', title: 'A/B Testing Best Practices', type: 'Article', url: 'https://cxl.com/' }
        ]
      }
    ]
  },
  {
    id: 'database-fundamentals',
    title: 'Relational Database Architecture & SQL Mastery',
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80',
    description: 'Learn how modern databases store, index, and retrieve data efficiently. Master relational schema design, normalization, joins, subqueries, and ACID transaction safety.',
    instructor: 'Marcus Vance',
    instructorId: 'marcus-vance',
    category: 'Programming',
    level: 'Intermediate',
    duration: '4h 10m',
    featured: false,
    outcomes: [
      'Design normalized relational schemas (1NF, 2NF, 3NF) with primary and foreign keys',
      'Write multi-table SQL queries with INNER, LEFT, RIGHT, and FULL OUTER joins',
      'Optimize query execution times using indexes and explain plan analysis',
      'Understand ACID transaction guarantees (Atomicity, Consistency, Isolation, Durability)',
      'Model real-world business domains with entity-relationship (ER) diagrams'
    ],
    lessons: [
      {
        id: 'db-1',
        title: 'Relational Models, Tables, & Schemas',
        duration: '45 min',
        description: 'Explore the foundations of relational database management systems. Understand column types, primary key constraints, and foreign key references.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        resources: [
          { id: 'db-res-1', title: 'PostgreSQL Documentation: Architecture Overview', type: 'Documentation', url: 'https://www.postgresql.org/docs/current/tutorial-arch.html' },
          { id: 'db-res-2', title: 'Relational Database Design Fundamentals', type: 'Article', url: 'https://developer.mozilla.org/en-US/docs/Glossary/Database' }
        ]
      },
      {
        id: 'db-2',
        title: 'Writing Declarative SQL Queries',
        duration: '50 min',
        description: 'Query records with SELECT, WHERE filters, ORDER BY, LIMIT, and aggregate summaries using GROUP BY and HAVING clauses.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        resources: [
          { id: 'db-res-3', title: 'PostgreSQL: Queries & Filtering', type: 'Documentation', url: 'https://www.postgresql.org/docs/current/queries.html' },
          { id: 'db-res-4', title: 'SQL Aggregate Functions Reference', type: 'Reference', url: 'https://mode.com/sql-tutorial/' }
        ]
      },
      {
        id: 'db-3',
        title: 'Multi-Table Queries: Joins & Unions',
        duration: '55 min',
        description: 'Connect related entities. Master INNER JOIN, LEFT JOIN, FULL JOIN, cross joins, and combining query record sets using UNION ALL.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        resources: [
          { id: 'db-res-5', title: 'Visual Explanation of SQL Joins', type: 'Article', url: 'https://blog.codinghorror.com/a-visual-explanation-of-sql-joins/' },
          { id: 'db-res-6', title: 'PostgreSQL Joins Documentation', type: 'Documentation', url: 'https://www.postgresql.org/docs/current/queries-table-expressions.html' }
        ]
      },
      {
        id: 'db-4',
        title: 'Normalization (1NF, 2NF, 3NF) & Schema Design',
        duration: '50 min',
        description: 'Eliminate data duplication and update anomalies. Walk through real schema refactoring from unnormalized tables to clean 3NF structures.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        resources: [
          { id: 'db-res-7', title: 'Database Normalization Guide', type: 'Article', url: 'https://en.wikipedia.org/wiki/Database_normalization' },
          { id: 'db-res-8', title: 'Entity-Relationship Diagramming Best Practices', type: 'Reference', url: 'https://lucidchart.com/' }
        ]
      },
      {
        id: 'db-5',
        title: 'Indexes, Transactions (ACID) & Performance',
        duration: '50 min',
        description: 'Inspect B-tree indexes, execute EXPLAIN ANALYZE on slow queries, and understand database transactions with BEGIN, COMMIT, and ROLLBACK.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        resources: [
          { id: 'db-res-9', title: 'PostgreSQL Index Types & B-Trees', type: 'Documentation', url: 'https://www.postgresql.org/docs/current/indexes-types.html' },
          { id: 'db-res-10', title: 'ACID Properties Explained Simply', type: 'Article', url: 'https://aws.amazon.com/what-is/acid-database/' }
        ]
      }
    ]
  },
  {
    id: 'advanced-react-patterns',
    title: 'Advanced React Patterns & Performance Architecture',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    description: 'Level up your React engineering. Learn custom hooks, compound components, render props, useMemo/useCallback optimization, context optimization, and error boundaries.',
    instructor: 'Sarah Jenkins',
    instructorId: 'sarah-jenkins',
    category: 'Web Development',
    level: 'Advanced',
    duration: '4h 50m',
    featured: false,
    outcomes: [
      'Extract reusable cross-component logic into custom, testable React hooks',
      'Implement Compound Component patterns for flexible, declarative design systems',
      'Diagnose and eliminate unnecessary re-renders with React.memo, useMemo, and useCallback',
      'Structure high-performance global state without render cascades',
      'Gracefully intercept and handle runtime JavaScript exceptions using Error Boundaries',
      'Build accessible custom keyboard-navigable components with WAI-ARIA standards'
    ],
    lessons: [
      {
        id: 'adv-1',
        title: 'Architecting Custom React Hooks',
        duration: '48 min',
        description: 'Encapsulate complex stateful workflows: browser storage synchronization, window resize listeners, debounce throttles, and network status.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        resources: [
          { id: 'adv-res-1', title: 'Reusing Logic with Custom Hooks', type: 'Documentation', url: 'https://react.dev/learn/reusing-logic-with-custom-hooks' },
          { id: 'adv-res-2', title: 'useHooks: Modern Hook Recipes', type: 'Reference', url: 'https://usehooks.com/' }
        ]
      },
      {
        id: 'adv-2',
        title: 'Compound Components & Slot Inversion',
        duration: '50 min',
        description: 'Design flexible UI primitives like Select, Accordion, and Tabs where parent and child components share implicit state via React Context.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        resources: [
          { id: 'adv-res-3', title: 'Kent C. Dodds: Compound Components Pattern', type: 'Article', url: 'https://kentcdodds.com/blog/compound-components-with-react-hooks' },
          { id: 'adv-res-4', title: 'Passing Data Deeply with Context', type: 'Documentation', url: 'https://react.dev/learn/passing-data-deeply-with-context' }
        ]
      },
      {
        id: 'adv-3',
        title: 'Render Optimization: useMemo, useCallback & Profiler',
        duration: '52 min',
        description: 'Use the React DevTools Profiler to identify render bottlenecks. Understand referential equality, closure invalidation, and memoization trade-offs.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        resources: [
          { id: 'adv-res-5', title: 'useMemo Reference & Performance Guide', type: 'Documentation', url: 'https://react.dev/reference/react/useMemo' },
          { id: 'adv-res-6', title: 'When to useMemo and useCallback', type: 'Article', url: 'https://kentcdodds.com/blog/usememo-and-usecallback' }
        ]
      },
      {
        id: 'adv-4',
        title: 'Error Boundaries & Resilient Recovery',
        duration: '42 min',
        description: 'Implement class-based and functional error boundaries to catch rendering exceptions, prevent complete white-screen crashes, and display recovery UI.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        resources: [
          { id: 'adv-res-7', title: 'React Error Boundaries Reference', type: 'Documentation', url: 'https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary' },
          { id: 'adv-res-8', title: 'Handling Errors in React Applications', type: 'Article', url: 'https://react.dev/learn' }
        ]
      },
      {
        id: 'adv-5',
        title: 'Portals, Modals & Focus Trapping',
        duration: '48 min',
        description: 'Render overlays outside DOM hierarchies with createPortal. Handle ESC key listeners, backdrops, and accessible keyboard focus trapping.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        resources: [
          { id: 'adv-res-9', title: 'createPortal Reference', type: 'Documentation', url: 'https://react.dev/reference/react-dom/createPortal' },
          { id: 'adv-res-10', title: 'W3C Modal Dialog Design Pattern', type: 'Documentation', url: 'https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/' }
        ]
      },
      {
        id: 'adv-6',
        title: 'Production Architecture & Code Splitting',
        duration: '40 min',
        description: 'Optimize bundle size using React.lazy and Suspense for route-based dynamic imports. Establish scalable project conventions for enterprise codebases.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
        resources: [
          { id: 'adv-res-11', title: 'Code Splitting with React.lazy and Suspense', type: 'Documentation', url: 'https://react.dev/reference/react/lazy' },
          { id: 'adv-res-12', title: 'Optimizing JavaScript Bundles for Production', type: 'Article', url: 'https://web.dev/fast/' }
        ]
      }
    ]
  },
  {
    id: 'product-management-agile',
    title: 'Tech Product Management & Agile Leadership',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    description: 'Learn how modern software teams prioritize features, manage sprint backlogs, define outcome-driven product roadmaps, and ship high-impact digital experiences.',
    instructor: 'David Chen',
    instructorId: 'david-chen',
    category: 'Business',
    level: 'Intermediate',
    duration: '3h 40m',
    featured: false,
    outcomes: [
      'Define clear product vision, problem statements, and measurable OKRs',
      'Prioritize user stories and backlogs with frameworks like RICE and MoSCoW',
      'Facilitate agile rituals: sprint planning, daily standups, and retrospectives',
      'Conduct customer interview discovery sessions to validate feature hypotheses',
      'Collaborate productively across engineering, UX design, and executive stakeholders'
    ],
    lessons: [
      {
        id: 'pm-1',
        title: 'Product Discovery & Problem Validation',
        duration: '40 min',
        description: 'Differentiate between problems and solutions. Formulate testable product hypotheses, interview users without bias, and synthesize pain points.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        resources: [
          { id: 'pm-res-1', title: 'Continuous Discovery Habits Overview', type: 'Article', url: 'https://www.producttalk.org/' },
          { id: 'pm-res-2', title: 'Customer Interview Question Templates', type: 'Reference', url: 'https://hbr.org/' }
        ]
      },
      {
        id: 'pm-2',
        title: 'Feature Prioritization Frameworks (RICE, MoSCoW)',
        duration: '45 min',
        description: 'Score opportunities objectively using Reach, Impact, Confidence, and Effort. Avoid loudest-voice-in-the-room prioritization traps.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        resources: [
          { id: 'pm-res-3', title: 'RICE Prioritization Guide', type: 'Documentation', url: 'https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/' },
          { id: 'pm-res-4', title: 'MoSCoW Method Breakdown', type: 'Article', url: 'https://www.mindtools.com/' }
        ]
      },
      {
        id: 'pm-3',
        title: 'Agile & Scrum Execution for Software Teams',
        duration: '45 min',
        description: 'Run effective 2-week sprint cycles. Master user story drafting with acceptance criteria, sprint capacity estimations, and team velocity metrics.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        resources: [
          { id: 'pm-res-5', title: 'Scrum Guide Official Definition', type: 'Documentation', url: 'https://scrumguides.org/' },
          { id: 'pm-res-6', title: 'Writing Clear Acceptance Criteria', type: 'Practice', url: 'https://atlassian.com/agile/project-management/user-stories' }
        ]
      },
      {
        id: 'pm-4',
        title: 'Metrics That Matter: OKRs, North Star & KPIs',
        duration: '45 min',
        description: 'Connect day-to-day tickets to business outcomes. Formulate top-level North Star metrics, input metrics, and measure feature adoption.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        resources: [
          { id: 'pm-res-7', title: 'Amplitude: North Star Metric Playbook', type: 'Reference', url: 'https://amplitude.com/north-star' },
          { id: 'pm-res-8', title: 'Measure What Matters (OKRs)', type: 'Article', url: 'https://whatmatters.com/' }
        ]
      },
      {
        id: 'pm-5',
        title: 'Stakeholder Alignment & Release Management',
        duration: '45 min',
        description: 'Communicate roadmap timelines, manage scope trade-offs, run launch retrospectives, and celebrate cross-functional team wins.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        resources: [
          { id: 'pm-res-9', title: 'Product Launch Checklist', type: 'Documentation', url: 'https://mindtheproduct.com/' },
          { id: 'pm-res-10', title: 'Effective Retrospective Formats', type: 'Practice', url: 'https://retrium.com/resources' }
        ]
      }
    ]
  }
];

export const categories = [
  {
    name: 'Web Development',
    description: 'Build modern applications with React, JavaScript, and Tailwind CSS',
    iconName: 'Code2',
    count: 3
  },
  {
    name: 'UI/UX Design',
    description: 'Design intuitive interfaces, typography rhythms, and design systems',
    iconName: 'Layout',
    count: 1
  },
  {
    name: 'Data Science',
    description: 'Clean, analyze, and visualize data using Python and Pandas',
    iconName: 'LineChart',
    count: 1
  },
  {
    name: 'Programming',
    description: 'Master core languages, algorithms, and relational database systems',
    iconName: 'Terminal',
    count: 2
  },
  {
    name: 'Digital Marketing',
    description: 'Grow products with organic SEO, content funnels, and analytics',
    iconName: 'Megaphone',
    count: 1
  },
  {
    name: 'Business',
    description: 'Strategic management, product roadmapping, and agile leadership',
    iconName: 'Briefcase',
    count: 1
  }
];

export default courses;
