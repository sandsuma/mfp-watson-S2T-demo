# mfp-watson-S2T-demo
A sample app to demonstrate consumption of watson speech to text API through MFP adapters

#Using IBM Watson Speech to Text with IBM Mobile Foundation

IBM Mobile Foundation Platform(MFP) delivers enterprise-grade capabilities uniquely designed to support building and deploying of the next generation of cognitive, contextual and personalized mobile apps. The IBM Watson Speech to Text service uses speech recognition capabilities to convert Arabic, English, Spanish, French, Brazilian Portuguese, Japanese, Korean, German, and Mandarin speech into text. This how-to guide will explain how quickly and easily you can get started with using Watson services in your IBM MobileFirst Foundation ionic application.

##MobileFirst Server Setup
If you are an on-premise 8.0 customer then refer to the tutorial[ Setting up the MobileFirst development environment](http://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/installation-configuration/development/mobilefirst/) else refer  for Mobile Foundation service customer,

##Watson Speech to Text Setup
Before we can build the adapter, we need to first provision an instance of the Watson Speech to Text service on Bluemix.
1. In Bluemix catalog, click on Watson, and search for Speech to Text.
2. Click the Create button to provision an instance on the Standard Plan. You should not bind this service to any specific application.
3. click on the Service Credentials tab on the next page, and not down your API Key and URL.

![Catalog](Catalog.png)

##Creating ionic app for Audio Recording

##Creating Audio Adapter

Now we need an adapter that will send our audio file to Watson. There are a number of ways that you could extend this adapter, such as converting the audio file to a specific format using third party audio libraries, or saving the audio for later data analysis, or anything else.

To interact with Watson, we will be using the Watson Developer Cloud Java SDK.
The SDK is packaged as a Maven artifact, which makes it very easy for our adapter to consume.

1. Create a standard Java adapter using dollowing command
```
mfpdev CLI: mfpdev adapter create WatsonJava -t Java -g com.ibm.test -p com.ibm.test
```
2. Edit pom.xml file of adapter to added Watson Developer Cloud Java SDK dependencies as below.
```
<dependency>
    <groupId>com.ibm.watson.developer_cloud</groupId>
    <artifactId>speech-to-text</artifactId>
    <version>6.1.1</version>
</dependency>

```
3. Create a new endpoint with the path /uploadBase64Wav to match the path we call from app. We are sending the audio file as a base64 encoded string, we need to convert it to a byte[] which will later be written to a temporary .wav file as below.

```
@POST
@OAuthSecurity(enabled = false)
@Path("/uploadBase64Wav")
public Response handleUpload(@FormParam("audioFile") String base64wav, @QueryParam("keywords") String keywords) throws Exception {
    // Convert the base64 string back into a wav file
    // http://stackoverflow.com/questions/23979842/convert-base64-string-to-image
    String base64 = base64wav.split(",")[1]; // remove the "data:audio/x-wav;base64" header
    byte[] wavBytes = javax.xml.bind.DatatypeConverter.parseBase64Binary(base64);
    return callWatson(wavBytes, keywords);
}
```

##Configuring Watson Java adapter

Now we will add code to our callWatson() method, which will write a temporary wav file and then use the Watson SDK to recognize() this file. This is done in a single synchronous call that will block until Watson returns with a transcript. There are other ways to use Watson, such as opening a session and continuously sending audio to be transcribed - be sure to explore the various options from the API.


1. Create a watson Service Speech to text by providing credentials API key we received while provisioning.
```
```
2. Add endpoint to the watson service instance

3. Call Watson SDK to recognize the audio file

```
```

##Execute the App

Download the app and adapter code from git repo or clone it. This repo consists of 2 main components :

1. An Watson Java Adapter
2. An ionic mobile application


<b>Prerequisite :</b>
1. Install the <a href="https://www.ibm.com/support/knowledgecenter/en/SSHS8R_8.0.0/com.ibm.worklight.dev.doc/dev/c_wl_cli_description.html">mfpdev-cli</a> by running `npm install -g mfpdev-cli`
2. Install ionic cli using `npm install -g ionic`
3. Install cordova using `npm install -g cordova`

1. Navigate to the folder containing the Ionic application.
2. Add the media plugin

	`ionic cordova plugin add cordova-plugin-camera`
3. Add the Fie plugin

  	`ionic cordova plugin add cordova-plugin-camera`
3. Add Privacy setting for app in Info.plist to use microphone for recording for app as below

3. Add the cordova MFP plugin

	`ionic cordova plugin add cordova-plugin-mfp`

4. Add the android or ios platform

	`ionic cordova platform add android`

	or


	`ionic cordova platform add ios`

5. Register your app to the MFP server by executing

	`mfpdev app register`

6. Execute `ionic cordova prepare` for changes to percolate to the environments added.

7. Attach device or run emulator/simulator and execute the command

	`ionic cordova run android`

	or

	`ionic cordova run ios`

