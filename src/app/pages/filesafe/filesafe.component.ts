import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/file/ngx';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { AlertController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-filesafe',
  templateUrl: './filesafe.component.html',
  styleUrls: ['./filesafe.component.scss'],
})
export class FilesafeComponent implements OnInit {

  files: any[];

  constructor(private http: HttpClient,
    private fileChooser: FileChooser,
    private filePath: FilePath,
    private file: File,
    private faio: FingerprintAIO,
    public toastController: ToastController,
    public router: Router,
    private storage: Storage,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.storage.get('fingerprintauth').then(r => {
      if (r) {
        this.faio.isAvailable().then(available => {
          if (available) {
            this.faio.show({
              clientId: 'Collect\'eat',
              clientSecret: 'password', //Only necessary for Android
              disableBackup: true,  //Only for Android(optional)
            }).then(r => {
              if (!r) {
                this.toastFingerprint();
                this.router.navigateByUrl('/');
              } else {
                this.http.get("assets/data/users-data.json").subscribe((data: any) => {
                  this.files = data.files;
                });
              }
            }).catch(e => {
              this.toastFingerprint();
              this.router.navigateByUrl('/');
            });
          }
        });
      } else {
        this.toastFingerprintWarning();
        this.http.get("assets/data/users-data.json").subscribe((data: any) => {
          this.files = data.files;
        });
      }
    });
  }

  async toastFingerprint() {
    const toast = await this.toastController.create({
      message: 'La consultation de votre coffre-fort num??rique n??cessite une authentification biom??trique',
      color: "danger",
      duration: 4000
    });
    toast.present();
  }

  async toastFingerprintWarning() {
    const toast = await this.toastController.create({
      message: 'Vous avez acc??s ?? votre coffre-fort num??rique. Veillez ?? vous authentifier avec votre empreinte digitale afin d\'en s??curiser l\'acc??s.',
      color: "warning",
      duration: 8000
    });
    toast.present();
  }

  async remove(file: any) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Suppression',
      subHeader: file.name,
      message: 'Voulez-vous supprimer le fichier '+file.name+' de votre coffre-fort num??rique?',
      buttons: [
        {
          text: 'OK',
          cssClass: 'mra',
          handler: () => {
            this.files.splice(this.files.indexOf(file), 1);
          }
        }, {
          text: 'ANNULER',
        }
      ]

    });

    await alert.present();
  }

  addFile() {
    return this.fileChooser.open().then(fileURI => {
      return this.filePath.resolveNativePath(fileURI).then(filePathUrl => {
        return this.file
          .resolveLocalFilesystemUrl(fileURI)
          .then((fileEntry: any) => {
            new Promise((resolve, reject) => {
              fileEntry.file(
                meta =>
                  resolve({
                    nativeURL: fileEntry.nativeURL,
                    fileNameFromPath: filePathUrl.substring(filePathUrl.lastIndexOf('/') + 1),
                    ...meta,
                  }),
                error => reject(error)
              );
            }).then(async (fileMeta: any) => {
              this.files.push({
                name: fileMeta.fileNameFromPath,
                creationDate: '16/10/2021',
                type: fileMeta.type,
                size: fileMeta.size
              })
            })
          });
      });
    });
  }

  getFileType(fileType: string): string {
    if (fileType.includes("png") || fileType.includes("jpg") || fileType.includes("jpeg")) {
      return "image"
    } if (fileType.includes("mp4")) {
      return "video"
    } else return "text";
  }
}
