# ProtoApp

This repository contains a minimal SwiftUI iOS application configured for Codemagic. The single-screen app displays a centered "Open Bing" button that launches Safari to https://www.bing.com when tapped.

## Project structure

- `ProtoApp/ProtoApp.xcodeproj` – Xcode project file for building the application.
- `ProtoApp/ProtoApp` – SwiftUI source code, assets, and app metadata.
- `codemagic.yaml` – Codemagic workflow definition for building release archives.

## Running locally

Open the project in Xcode and run the `ProtoApp` target on an iOS simulator or device running iOS 15 or later.

## Codemagic

Codemagic automatically detects the `codemagic.yaml` workflow at the repository root. To run the provided workflow, create a new Codemagic app, select this repository, and start the **ProtoApp iOS Build** workflow to produce an `.xcarchive` artifact. Configure additional publishing (e.g., App Store Connect) in the Codemagic UI as needed.
