# ProtoApp

This repository contains a minimal SwiftUI iOS application configured for Codemagic. The single-screen app displays a centered "Open Bing" button that launches Safari to https://www.bing.com when tapped.

## Project structure

- `ProtoApp/ProtoApp.xcodeproj` – Xcode project file for building the application.
- `ProtoApp/ProtoApp` – SwiftUI source code, assets, and app metadata.

## Running locally

Open the project in Xcode and run the `ProtoApp` target on an iOS simulator or device running iOS 15 or later.

## Codemagic

To build with Codemagic, point your workflow to the root of this repository and run the default Xcode build steps for the `ProtoApp` scheme.

## GitHub Pages (Strudel player)
To host the Strudel player via GitHub Pages:
1. Open the repository settings and enable GitHub Pages.
2. Set the source to the `/docs` folder on the `work` branch.
3. After Pages publishes, the player will be available at `https://<your-username>.github.io/<this-repo>/strudel/`.

A small landing page in `/docs/index.html` links to the player.
