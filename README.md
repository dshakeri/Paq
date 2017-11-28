# Paq

Local environment setup steps:
- Install requirements
	- Homebrew
		- ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)
	- Node and npm (v4)
		- Brew install node
		- Downgrade NPM to v4		
			- Npm install –g npm@4
	- Watchman
		- Brew install watchman
	- React Native CLI
		- npm install -g react-native-cli
	- Install Xcode vs 8 or later

- Other installed packages:
	- fbSDK
		- react-native install react-native-fbsdk
		-	react-native link react-native-fbsdk
- In order to run ios:
	- react-native run-ios
