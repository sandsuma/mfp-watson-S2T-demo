webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = /** @class */ (function () {
    function LoginPage(app, zone, events) {
        var _this = this;
        this.app = app;
        this.zone = zone;
        this.events = events;
        this.securityCheck = 'UserLogin';
        this.isChallenged = false;
        events.subscribe('mfp:challenge', function (msg, challengeHandler) {
            _this.isChallenged = true;
            _this.UserLoginChallengeHandler = challengeHandler;
            _this.updateResult(msg);
        });
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        var credentials = {
            username: this.username,
            password: this.password
        };
        if (!this.isChallenged) {
            console.log('-->  login(): First time login attempt');
            WLAuthorizationManager.login(this.securityCheck, credentials).then(function () {
                console.log('-->  login(): Success ');
                _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            }, function (error) {
                console.log('-->  login(): Failure ', JSON.stringify(error));
                _this.updateResult('Login Failure : ' + error.errorMsg);
            });
        }
        else {
            console.log('-->  login(): Subsequent login attempt');
            this.UserLoginChallengeHandler.submitChallengeAnswer(credentials);
            this.isChallenged = false;
        }
    };
    LoginPage.prototype.updateResult = function (msg) {
        var _this = this;
        this.zone.run(function () {
            console.log('-->  updateResult(): Update Message and Refresh Text Boxes');
            _this.result = msg;
            // Clear text boxes
            _this.username = "";
            _this.password = "";
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/IMFLsandhya/Documents/mfp-watson-S2T-demo/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      IBM Mobile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="login">\n  <form id="login-form" name="login-form">\n    <div class="spacer" style="height:40px;" id="login-spacer"></div>\n    <ion-list id="login-list">\n      <ion-item id="login-username">\n        <ion-input type="text" placeholder="Username" [(ngModel)]="username" name="username"></ion-input>\n      </ion-item>\n      <ion-item id="login-password">\n        <ion-input type="password" placeholder="Password" [(ngModel)]="password" name="password"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button id="login-button" ion-button  (click)="login()" color="stable" block>\n      Log in\n    </button>\n    <p><font color="red"><pre> {{ result }}</pre></font></p>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/IMFLsandhya/Documents/mfp-watson-S2T-demo/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_media__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// export class Activity {
//   public title: string;
//   public description: string;
//   public imagePath: string;
//   constructor(name, description , imagePath) {
//     this.title = name;
//     this.description = description;
//     this.imagePath = imagePath;
//   }
// }
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, media, file, platform) {
        this.navCtrl = navCtrl;
        this.media = media;
        this.file = file;
        this.platform = platform;
        this.recording = false;
        this.audioList = [];
        this.title = "Audio Transcription";
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.getAudioList();
    };
    HomePage.prototype.getAudioList = function () {
        if (localStorage.getItem("audiolist")) {
            this.audioList = JSON.parse(localStorage.getItem("audiolist"));
            console.log(this.audioList);
        }
    };
    HomePage.prototype.startRecord = function () {
        if (this.platform.is('ios')) {
            this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.wav';
            this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
            this.audio = this.media.create(this.filePath);
        }
        else if (this.platform.is('android')) {
            this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.wav';
            this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
            this.audio = this.media.create(this.filePath);
        }
        this.audio.startRecord();
        this.recording = true;
    };
    HomePage.prototype.stopRecord = function () {
        this.audio.stopRecord();
        var data = { filename: this.fileName };
        this.audioList.push(data);
        localStorage.setItem("audiolist", JSON.stringify(this.audioList));
        this.recording = false;
        this.getAudioList();
    };
    HomePage.prototype.playAudio = function (file, idx) {
        if (this.platform.is('ios')) {
            this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + file;
            this.audio = this.media.create(this.filePath);
        }
        else if (this.platform.is('android')) {
            this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + file;
            this.audio = this.media.create(this.filePath);
        }
        this.audio.play();
        this.audio.setVolume(0.8);
    };
    HomePage.prototype.uploadToAdapter = function () {
        // This method uses WL.client to send the audio file directly to our Java adapter
        console.log("Inside uploadToAdapter");
        //this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') ;
        console.log("file path to upload " + this.filePath);
        //this.filePath.resolveNativePath(this.file.documentsDirectory).then(
        //  (filePath) => {
        this.file.readAsDataURL(this.file.documentsDirectory, this.fileName)
            .then(function (base64Audio) {
            console.log(base64Audio);
            var req = new WLResourceRequest('/adapters/WatsonJava/uploadBase64Wav', WLResourceRequest.POST);
            var params = {
                'audioFile': base64Audio
            };
            //Attach the Keywords as query paramaters
            req.setQueryParameter("keywords", ['age', 'name']);
            req.sendFormParameters(params).then(function (response) {
                console.log("Transcript from Watson received: " + response.responseText);
                alert("Transcript from Watson received: " + response.responseText);
            }, function (e) {
                alert("No recording could be parsed by Watson, please try again");
            });
        }, function (err) {
            console.log(err);
        })
            .catch(function (err) {
            console.log(err.message);
        });
        // }, (err) => {
        //   console.log(err);
        // })
        // .catch(err => console.log('in resolveNativePath, '+  err));
        //this.file.resolveLocalFilesystemUrl(this.filePath).then((entry) => {
        //  console.log("Success! Got a DirectoryEntry",fileEntry);  
        //});
        // (<any>window).resolveLocalFileSystemURL(this.filePath, function(fileEntry) {
        // fileEntry.file(function(fileObj) {
        //   console.log("Size = " + fileObj.size);
        //   try {
        //     var reader = new FileReader();
        //     var req = new WLResourceRequest('/adapters/WatsonJava/uploadBase64Wav', WLResourceRequest.POST);
        //     reader.readAsDataURL(fileObj);
        //     reader.onloadend = function() {
        //         var data = reader.result;
        //         var params = {
        //           'audioFile' : data
        //         };
        //         //Attach the Keywords as query paramaters
        //         req.setQueryParameter("keywords",  ['age', 'name']);
        //         req.sendFormParameters(params).then(function(response) {
        //             alert("Transcript from Watson received: " + response);
        //         }, function(e) {
        //             alert("No recording could be parsed by Watson, please try again");
        //         });
        //     }
        //   } catch (e) {
        //     console.log("error:" + e)
        //   }
        // });
        //  });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('-->  ionViewDidLoad(): Page Succesfully loaded - Initialize JSONStore');
        // var dbSchema = {
        //   activities : {
        //     searchFields: {name: 'string', description: 'string', thumbnail: 'string'},
        //     sync: {
        //       syncPolicy: 0, 
        //       syncAdapterPath: 'JSONStoreCloudantSync'
        //     }
        //   }
        // };
        // WL.JSONStore.init(dbSchema, {}).then(
        //   (collection) => {
        //     console.log('-->  ionViewDidLoad(): JSONStore Initialization Success');
        //     console.log(JSON.stringify(collection));
        //   }, (error) => {
        //     console.log('-->  ionViewDidLoad(): JSONStore Initialization Failed :' + JSON.stringify(error));
        // });  
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/IMFLsandhya/Documents/mfp-watson-S2T-demo/src/pages/home/home.html"*/'<ion-header>\n  <!-- <ion-navbar hideBackButton="true">\n    <ion-title>\n      Home\n    </ion-title>\n    <ion-buttons left>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name=\'menu\'></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar> -->\n  <ion-navbar>\n        <ion-title>\n          Audio Transcription\n        </ion-title>\n      </ion-navbar>\n</ion-header>\n<ion-content padding id="home">\n        <div id="main">\n                <div id="main_title">{{title}}</div>\n                <div id="main_status">{{status}}</div>\n              </div>\n                <div id="button_content">\n                    <button id="start_button" ion-button icon-left outline (click)="startRecord()">Start Recording</button>\n                    <button id="stop_button" ion-button icon-left outline (click)="stopRecord()">Stop Recording</button>\n                    <button id="transcribe_button" ion-button icon-left outline (click)="uploadToAdapter()">Transcribe Audio</button>\n                </div>\n    <!-- <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n        pullingIcon="md-arrow-dropdown"\n        pullingText="Pull to refresh"\n        refreshingSpinner="crescent"\n        refreshingText="Refreshing...">\n      </ion-refresher-content>\n      </ion-refresher>\n   \n  <ion-list class="outer-content">\n    <ion-list-header>\n        Open Tasks\n     </ion-list-header>\n      <ion-item *ngFor="let activity of activityList">\n          <ion-thumbnail item-start>\n              <img [attr.src]="activity.imagePath">\n          </ion-thumbnail>\n          <h2>{{activity.title}}</h2>\n          <p>{{activity.description}}</p>\n          <button ion-button clear (click)="removeItem(activity)" item-end>Done</button>\n      </ion-item>\n    </ion-list>\n\n    <ion-list class="outer-content">\n        <ion-list-header>\n            Completed Tasks\n         </ion-list-header>\n          <ion-item *ngFor="let activity of completedList">\n              <ion-thumbnail item-start>\n                  <img [attr.src]="activity.imagePath">\n              </ion-thumbnail>\n              <h2>{{activity.title}}</h2>\n              <p>{{activity.description}}</p>\n          </ion-item>\n        </ion-list>\n  \n  <div *ngIf="activityList.length == 0" style="height: 100%;position: relative;top: 45%;text-align: center;">\n      <div style="font-size: 20px;text-align: center;color: #90949c;">Pull to fetch tasks</div>\n  </div> -->\n</ion-content>'/*ion-inline-end:"/Users/IMFLsandhya/Documents/mfp-watson-S2T-demo/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_media__["a" /* Media */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_header_menu_header_menu__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_media__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__components_header_menu_header_menu__["a" /* HeaderMenuComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_media__["a" /* Media */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, renderer, appCtrl, alertCtrl, events) {
        var _this = this;
        this.appCtrl = appCtrl;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        // register mfp init function after plugin loaded
        renderer.listenGlobal('document', 'mfpjsloaded', function () {
            console.log('--> MobileFirst API plugin init complete');
            _this.MFPInitComplete();
        });
    }
    // MFP Init complete function
    MyApp.prototype.MFPInitComplete = function () {
        console.log('--> MFPInitComplete function called');
        this.registerChallengeHandler(); // register a ChallengeHandler callback for UserLogin security check
    };
    MyApp.prototype.registerChallengeHandler = function () {
        var _this = this;
        this.UserLoginChallengeHandler = WL.Client.createSecurityCheckChallengeHandler("UserLogin");
        this.UserLoginChallengeHandler.handleChallenge = (function (challenge) {
            console.log('--> UserLoginChallengeHandler.handleChallenge called');
            _this.displayLoginChallenge(challenge);
        });
    };
    MyApp.prototype.displayLoginChallenge = function (response) {
        if (response.errorMsg) {
            var msg = response.errorMsg + ', Remaining attempts: ' + response.remainingAttempts;
            console.log('--> displayLoginChallenge ERROR: ' + msg);
            this.events.publish('mfp:challenge', msg, this.UserLoginChallengeHandler);
        }
        else {
            this.events.publish('mfp:challenge', 'Invalid Credentials', this.UserLoginChallengeHandler);
        }
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/IMFLsandhya/Documents/mfp-watson-S2T-demo/src/app/app.html"*/'<ion-menu [content]="content">\n        <ion-header>\n          <ion-toolbar>\n            <ion-title>\n              Menu\n            </ion-title>\n          </ion-toolbar>\n        </ion-header>\n        <ion-content>\n          <header-menu></header-menu>\n        </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage"  #content></ion-nav>\n\n'/*ion-inline-end:"/Users/IMFLsandhya/Documents/mfp-watson-S2T-demo/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the HeaderMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HeaderMenuComponent = /** @class */ (function () {
    function HeaderMenuComponent(app, menuCtrl) {
        this.app = app;
        this.menuCtrl = menuCtrl;
        this.securityCheck = "UserLogin";
        console.log('Hello HeaderMenuComponent Component');
    }
    HeaderMenuComponent.prototype.logout = function () {
        var _this = this;
        WLAuthorizationManager.logout(this.securityCheck).then(function () {
            console.log('-->  logout(): Success ');
            _this.menuCtrl.close();
            var nav = _this.app.getRootNav();
            nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */]);
        }, function (error) {
            _this.menuCtrl.close();
            console.log('-->  logout(): Failure ' + JSON.stringify(error));
        });
    };
    HeaderMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'header-menu',template:/*ion-inline-start:"/Users/IMFLsandhya/Documents/mfp-watson-S2T-demo/src/components/header-menu/header-menu.html"*/'<!-- Generated template for the HeaderMenuComponent component -->\n<div>\n    <ion-list>\n        <ion-item (click)="logout()">Logout</ion-item>\n      </ion-list>\n  </div>'/*ion-inline-end:"/Users/IMFLsandhya/Documents/mfp-watson-S2T-demo/src/components/header-menu/header-menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], HeaderMenuComponent);
    return HeaderMenuComponent;
}());

//# sourceMappingURL=header-menu.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map