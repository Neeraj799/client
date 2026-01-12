📱 React Native Posts App
A High-Quality Expo + TypeScript Application

This project is a clean, production-ready React Native application built using Expo, following industry-standard architecture and best practices.

It demonstrates:

API integration using Axios

Real-time search with debouncing

Persistent storage using AsyncStorage

Offline detection & robust error handling

Pull-to-refresh

Modular and scalable component architecture

Full TypeScript type-safety

✨ Features Overview
🔍 1. Fetch & Display Posts

Data fetched from: https://jsonplaceholder.typicode.com/posts

Clean UI using NativeWind (TailwindCSS)

Rendered with FlatList

⚡ 2. Instant Search (Debounced)

Case-insensitive search

Runs with 300ms debounce

Smooth performance even with large data

💾 3. Persistent Search Storage

Search text stored using AsyncStorage

Automatically restored on app restart

Filter applied instantly after reload

📶 4. Full Offline Handling

Uses NetInfo to detect connectivity & handles:

offline → No internet

server → API returned error

network → DNS/device network issue

Includes:

Dedicated error UI

Retry button

Toast notifications

🔄 5. Pull-to-Refresh Support

Native pull gesture

Works both online/offline

Proper loading indicators

♻️ 6. Reusable, Modular Components

PostCard – displays a single post

ErrorState – unified error UI

Loading – full-screen loader

Easy to scale and maintain.

🧱 7. Scalable Architecture

Organized by screens, components, services, and types

Consistent TypeScript usage

Industry-standard folder structure

📂 Project Structure

app/
│
├── screens/
│   └── PostsScreen.tsx         # Main screen
│
├── components/
│   ├── PostCard.tsx            # Renders single post
│   ├── ErrorState.tsx          # Offline / server / network error UI
│   └── Loading.tsx             # Loader
│
├── services/
│   ├── axiosInstance.ts        # Axios client
│   └── api.ts                  # fetchPostsAPI()
│
└── types/
    └── post.ts                 # Post type definition


🚀 Getting Started

🔽 Clone Repository
git clone <repository-url>

Navigate into the project folder:
cd <project-folder>

1. Install dependencies
npm install

2. Start development server (Expo)
npx expo start

🌐 API Used
Endpoint
GET /posts
https://jsonplaceholder.typicode.com/posts

Response Type
export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

🧪 Test Cases (Assessment Ready)
✅ 1. API Fetch Test

App loads posts successfully

Loading indicator displays

No errors

✅ 2. Search Functionality Test

Filters instantly

Case-insensitive

Clearing search restores full list

✅ 3. Persistent Search Test

Enter search

Close app

Re-open → search auto-restored

✅ 4. Offline Mode Test (Requires Dev Build)

Disable Wi-Fi + Mobile Data

Open app

Expect:

Toast: “No Internet”

Offline error UI

Retry button

Pull-to-refresh → offline error

✅ 5. Server Error Test

Modify baseURL temporarily → expect:

Toast: “Server Error”

Server error UI

✅ 6. Network Error Test

Break endpoint → expect:

Toast: “Something went wrong”

Network error UI

✅ 7. Pull-to-Refresh Test

Refreshes posts

Shows top loader

Offline → displays correct errors

✅ 8. No Results Test

Search: abcdefxyz123

Expect:

“No posts found.”

🧩 Component Summary
🟦 PostCard.tsx

Clean UI for each post

Strong type-checking with Post

🟥 ErrorState.tsx

Unified error UI for:

Offline

Server

Network errors

Includes a retry button.

🟩 Loading.tsx

Full-screen activity indicator

Reused across screens

🔌 Services Layer
axiosInstance.ts

Centralized Axios configuration
Handles base URL + timeout.

api.ts

Exports the function:

fetchPostsAPI()

Used by PostsScreen.

🧑‍💻 Tech Stack

React Native (Expo)

TypeScript

Axios

AsyncStorage

NetInfo

NativeWind (TailwindCSS)

React Native Toast Message

🎨 UI & UX Notes

Modern, consistent UI

Smooth state transitions

Production-grade error handling

Clean separation of concerns

👤 Author

Neeraj P C
Full Stack Developer

📄 License

This project is open-source and available under the MIT License.