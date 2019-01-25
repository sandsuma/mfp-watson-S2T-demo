import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

import { Media, MediaObject } from '@ionic-native/media';
import { Storage } from '@ionic/storage';
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from '@ionic-native/media-capture';
import { File } from '@ionic-native/file';

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

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // activityList: Activity[];
  // completedList: Activity[];
  // private dbname = 'activities';
  
  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  //   this.activityList = [];
  //   this.completedList = [];
  // }

  title: string;
  status: string;

  recording: boolean = false;
  filePath: string;
  fileName: string;
  audio: MediaObject;
  audioList: any[] = [];

  constructor(public navCtrl: NavController,
  private media: Media,
  private file: File,
  public platform: Platform) {
  this.title = "Audio Transcription";
  }

  ionViewWillEnter() {
    this.getAudioList();
  }

  getAudioList() {
    if(localStorage.getItem("audiolist")) {
      this.audioList = JSON.parse(localStorage.getItem("audiolist"));
      console.log(this.audioList);
    }
  }

  startRecord() {
    if (this.platform.is('ios')) {
      this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.wav';
      this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.audio = this.media.create(this.filePath);
    } else if (this.platform.is('android')) {
      this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.wav';
      this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.audio = this.media.create(this.filePath);
    }
    this.audio.startRecord();
    this.recording = true;
  }

  stopRecord() {
    this.audio.stopRecord();
    let data = { filename: this.fileName };
    this.audioList.push(data);
    localStorage.setItem("audiolist", JSON.stringify(this.audioList));
    this.recording = false;
    this.getAudioList();
  }



  playAudio(file,idx) {
    if (this.platform.is('ios')) {
      this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + file;
      this.audio = this.media.create(this.filePath);
    } else if (this.platform.is('android')) {
      this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + file;
      this.audio = this.media.create(this.filePath);
    }
    this.audio.play();
    this.audio.setVolume(0.8);
  }

  uploadToAdapter() {
    // This method uses WL.client to send the audio file directly to our Java adapter
    console.log("Inside uploadToAdapter");
    //this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') ;
    console.log("file path to upload "+this.filePath);

    //this.filePath.resolveNativePath(this.file.documentsDirectory).then(
    //  (filePath) => {
          this.file.readAsDataURL(this.file.documentsDirectory, this.fileName)
          .then(function (base64Audio) {
              console.log(base64Audio);
              var req = new WLResourceRequest('/adapters/WatsonJava/uploadBase64Wav', WLResourceRequest.POST);
              
              var params = {
                          'audioFile' : base64Audio
                  };
                      //Attach the Keywords as query paramaters
                    req.setQueryParameter("keywords",  ['age', 'name']);
                    req.sendFormParameters(params).then(function(response) {
                      console.log("Transcript from Watson received: "+response.responseText);
                        alert("Transcript from Watson received: " + response.responseText);
                    }, function(e) {
                        alert("No recording could be parsed by Watson, please try again");
                    });
          }, (err) => {
            console.log(err);
          })
          .catch(function (err: TypeError) {
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
}
  ionViewDidLoad() {
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
    }

  // doRefresh(refresher) {
  //   var dbInstance = WL.JSONStore.get(this.dbname);
  //   dbInstance.sync().done(
  //     (success) => {
  //       console.log('-->  doRefresh(): JSONStore Sync Success');
  //       dbInstance.findAll(null).then(
  //         (data) => {
  //           console.log('-->  doRefresh(): JSONStore Documents Fetch Success');
  //           this.activityList = [];
  //           data.forEach( item => {
  //             var activity = new Activity(item.name,item.description,item.thumbnail);
  //             this.activityList.push(activity);
  //           });
  //           refresher.complete();
  //         });
  //     }, (error) => {
  //       console.log('-->  doRefresh(): JSONStore Sync Failed :' + JSON.stringify(error));
  //       refresher.complete();
  //     }
  //   );
  // }

  // removeItem(activity) {
  //   console.log('-->  removeItem(): Move item from Active to Complete Tab');
  //   this.completedList.push(activity);
  //   let index = this.activityList.indexOf(activity);
  //   if(index > -1){
  //     this.activityList.splice(index, 1);
  //   }
  // }

}
