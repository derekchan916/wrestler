# Wrestler App
## Installation
### 1. Download the node modules
```ruby
cd wrestler/frontend/
npm install
```
### 2. Download the pod files
```ruby
cd ios
```
If you do not have cocoa pods run the next line
```ruby
sudo gem install cocoapods --pre
```
```ruby
pod init
pod install
```
Now you should have WrestlerApp.xcworkspace. Open this instead of WrestlerApp.xcodeproj from now on.

### 3. Facebook-SDK
Go to [Facebook](https://developers.facebook.com/docs/ios) and download the SDK. Store it somewhere like /Users/<user>/Documents.
Open up WrestlerApp.xcworkspace with xcode.
Go to WrestlerApp > Build Settings > Search Paths > Framework Search Paths and use the path above. ex. /Users/<user>/Documents/Facebook-SDK .

## Running the App
In xcode chose iPhone 6, and make sure you run npm start in your command line.
Press Play
If you find the animations to be slow, go into the simulator and select Debug > slow animations -> off.

If build fails, gg your life too bad.

## Working with Facebook SDK
Refer to [react-native-fbsdk](https://github.com/facebook/react-native-fbsdk)

## Saving data like cookies
Remember to import AsyncStorage in React
```JavaScript
componentDidMount: function() {
    AsyncStorage.getItem("myKey").then((value) => {
        this.setState({"myKey": value});
    }).done();
},

saveData: function(value) {
	AsyncStorage.setItem("myKey", value);
	this.setState({"myKey": value});
}

AsyncStorage.removeItem('key', (err) => {
	console.log('SUCCESSFUL REMOVAL')
});
```
Refer to [saving data in React](https://www.thepolyglotdeveloper.com/2015/09/saving-data-in-your-react-native-mobile-application/)
