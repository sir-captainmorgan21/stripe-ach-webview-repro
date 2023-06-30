# Reproduction for Stripe issue: https://github.com/stripe/stripe-js/issues/463

## Prerequisits

- On a mac
- Xcode installed
- VSCode installed

## Running Native app using Ionic

- run `npm install`
- Using VSCode, download the Ionic plugin
- Once installed, click on the plugin in the plugin menu.
- Under "Project", click "Build"
- After the build finishes, click "Sync"
- After the sync finishes, under "Run", click "iOS", then select a device (typically just select an iphone)

## Running Web app

- Click on the ionic plugin
- Under "Run" click "Web"

## Testing

- For this specific issue, using the "Test OAuth Institution" is required
- On load of the app, click "Test OAuth Institution"
- Click "Agree and continue"
- Click "Continue"
  - (BREAKING!! This is where it breaks. You will notice the difference when you test both web and ios) In the web a tab will briefly open (simulating a bank login) and then close and bring the user back to the main app, with a list of acconuts to select. In the ios app, the user is taken out of the app and over to
    a browser, where the tab briefly opens then closes, leaving the user in the browser. If you go back to the native app, they are still on the screen with the
    continue button. NOTE: With ionic, the app is developed in react and hosted as a webview.
