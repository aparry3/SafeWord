# SafeWord Release Notes & Install Guide

The application allows users to set custom words to have specific functions. These functions can range from texting a friend, sending a location, or calling authorities, though not all are fully implemented yet. SafeWord provides a user-friendly interface that allows users to add words and decide which tasks are associated with that word. Once a customized word is said aloud while the application is activated, the application will execute the word’s tasks

# SafeWord Version 1.0 Release Notes

These notes will provide an overview of SafeWords primary features and how to install it onto your iPhone device.

### New Software Features for v1.0

List new software features

```
-Add words that you can toggle text triggers by toggling "Send Location"
-Add contacts to text by adding a contact and select the words you would like to trigger that contact on
-Activate and Deactive the application, allowing users to decide when words will be triggered
-Say trigger words during activated state to trigger the contacts that the user has set
```

### Bug Fixes Made Since Last Release

List bug fixes since last release

```
-Contacts added to words will now be contacted instead of a hard-coded contact
-Activation can now be turned on and off indefinitely
```

### Known Bugs & Defects

-Currently only supports texting contacts a predetermined location
-Record audio and delay toggles are placeholders
-Only contacts mapped on the Contact page to words will be triggered, though a mapping to contacts is provided for words
-Must deactivate app for triggers to commence


# SafeWord Version 1.0 Install Guide

SafeWord is built on Ionic 2, allowing one to deploy on Android and iPhone. However, the code is currently written to be optimized for iOS, so this guide will be geared towards iPhone installation and execution.

### Pre-requisites

XCode Version 9.1 
iPhone running iOS 10 or later

### Dependent libraries that must be installed

Node.js
Cordova
Ionic 2

### Download instructions

The project can be directly cloned or downloaded from the SafeWord github: https://github.com/aparry3/SafeWord


### Build instructions

-Make sure to have XCode and dependencies installed
-Download SafeWord project from the Github
-Navigate to the top level of the project in your terminal
run:
ionic cordova build ios --prod 

to build the project. You may have to run the following if the iOS platform is missing:

ionic cordova platform add ios



### Installation of actual application

Once the project is built, open it within XCode by navigating the SafeWord/platforms/ios/MyApp.xcodeproj

Plug in your iPhone device. In XCode, select the target device for MyApp to be your device. Then, under Product in XCode's toolbar and select Run. An error will appear saying that the app needs proper permissions on your device to run. On your iPhone, navigate to Settings, then General, and then Device Management. This is where you can allow your device to accept the app to run. After saying you trust this developer, hit run again and the application will deploy and automatically open up.

### Run instructions:

The app will now run on your phone like any other iPhone application. Serious bugs may require redeployment by deleting and repeating the steps above.

### Troubleshooting:

Older versions of XCode will not work with the latest iOS, and visa versa. Make sure to have both fully updated.




