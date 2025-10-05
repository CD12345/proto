import SwiftUI

struct ContentView: View {
    @Environment(\.openURL) private var openURL

    private let destinationURL = URL(string: "https://www.bing.com")

    var body: some View {
        ZStack {
            Color(UIColor.systemBackground)
                .ignoresSafeArea()

            Button(action: openDestination) {
                Text("Open Bing")
                    .font(.title2.weight(.semibold))
                    .padding(.horizontal, 32)
                    .padding(.vertical, 18)
                    .background(Color.accentColor)
                    .foregroundColor(.white)
                    .cornerRadius(14)
            }
        }
    }

    private func openDestination() {
        guard let url = destinationURL else { return }
        openURL(url)
    }
}

#Preview {
    ContentView()
}
