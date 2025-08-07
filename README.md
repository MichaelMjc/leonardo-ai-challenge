# Leonardo AI Challenge

A modern Next.js application built for the Leonardo AI Challenge that demonstrates user profile management and character information display using the Rick and Morty GraphQL API.

## 🚀 Features

- **User Profile Management**: Create and edit user profiles with username and job title
- **Character Information**: Browse and filter characters from the Rick and Morty universe
- **Responsive Design**: Mobile-first design with Chakra UI components
- **GraphQL Integration**: Data fetching using Apollo Client
- **Server Actions**: Form handling with Next.js server actions and Zod validation
- **Cookie-based State**: Persistent user data using HTTP cookies
- **Type Safety**: Full TypeScript support with generated GraphQL types

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.5 (App Router)
- **Language**: TypeScript
- **UI Library**: Chakra UI
- **GraphQL Client**: Apollo Client
- **Form Validation**: Zod
- **Icons**: React Icons
- **Package Manager**: pnpm
- **Code Generation**: GraphQL Code Generator

## 📁 Project Structure

```
src/
├── app/                   # Next.js App Router pages
│   ├── page.tsx           # Home page with user create form
│   ├── info/
│   │   └── page.tsx       # Character information page
│   └── profile/
│       └── page.tsx       # User profile editing page
├── components/            # React components
│   ├── apollo.tsx         # Apollo Client configuration
│   ├── character-card.tsx # Character display component
│   ├── character-grid.tsx # Character grid with filtering
│   ├── filter.tsx         # Search and filter controls
│   ├── header.tsx         # Application header
│   ├── navigation.tsx     # Navigation component
│   ├── user-details.tsx   # User profile form and display
│   └── ui/               # UI utility components
├── __generated__/        # Generated GraphQL types
├── actions.ts            # Server actions
├── middleware.ts         # Middleware for securing pages
└── utils/
    └── save-user.ts      # User data persistence utilities
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone
cd leonardo-ai-challenge
```

2. Install dependencies:

```bash
pnpm install
```

3. Generate GraphQL types:

```bash
pnpm generate
```

4. Start the development server:

```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📖 Usage

### User Profile Setup

1. Navigate to the home page
2. Enter your username and job title
3. Save your information (stored in cookies)

### Character Information

1. Visit the Character Info page (`/info`)
2. Browse characters from the Rick and Morty universe
3. Use filters to search by character name or status
4. Navigate through pages using pagination

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm generate` - Generate GraphQL types (with watch mode)

## 🌐 API Integration

The application integrates with the [Rick and Morty GraphQL API](https://rickandmortyapi.com/graphql) to fetch character data. The GraphQL schema is automatically generated using GraphQL Code Generator.

### GraphQL Query Example

```graphql
query GetCharacters($page: Int, $filter: FilterCharacter) {
	characters(page: $page, filter: $filter) {
		info {
			count
			pages
		}
		results {
			id
			name
			status
			species
			type
			gender
			image
			created
			origin {
				name
			}
			location {
				name
			}
			episode {
				episode
			}
		}
	}
}
```

## 🎨 UI Components

The application uses Chakra UI v3 for a modern, accessible design system:

- **Responsive Layout**: Mobile-first design with responsive breakpoints
- **Theme Support**: Built-in dark/light mode support
- **Accessibility**: ARIA labels and semantic HTML
- **Loading States**: Skeleton components for better UX
- **Form Validation**: Validation with error messages

## 🔒 Data Persistence

User data is persisted using HTTP cookies:

- `leonardo_username`: Stores the user's username
- `leonardo_job_title`: Stores the user's job title

The data is validated using Zod schemas and handled through Next.js server actions.

## 🧪 Development

### Code Generation

The project uses GraphQL Code Generator to automatically generate TypeScript types from the GraphQL schema. Run `pnpm generate` to update types when the schema changes.

### Type Safety

- Full TypeScript support throughout the application
- Generated GraphQL types for type-safe API calls
- Zod schemas for form validation

### File Structure

- **App Router**: Uses Next.js 13+ App Router for file-based routing
- **Server Components**: Leverages React Server Components for better performance
- **Client Components**: Uses "use client" directive where interactivity is needed

## 🚀 Deployment

The application can be deployed to any platform that supports Next.js:

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Deploy automatically on push to main branch

### Other Platforms

1. Build the application: `pnpm build`
2. Start the production server: `pnpm start`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is part of the Leonardo AI Challenge and is for demonstration purposes.

---

Built with ❤️ using Next.js, Chakra UI, and Apollo Client
