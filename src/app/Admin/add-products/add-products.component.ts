import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminsevicesService} from './../adminsevices.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];
  previews: string[] = []; 
  formdata = new FormGroup({
    Title: new FormControl('', [Validators.required]),
    Subtitle: new FormControl('', [Validators.required]),
    Descriptions: new FormControl('', Validators.required),
    Price: new FormControl('', Validators.required),
  
  });
  constructor(private services : AdminsevicesService ) { }

  ngOnInit(): void {
    
  }

  keyPressNumbersWithDecimal(event :any ) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode != 46 && charCode > 31
      && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  uploadFiles(): void {
    debugger;
    this.message = [];
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }
  }

  selectFiles(event: any): void {
    debugger;
    this.message = [];
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.previews.push(e.target.result);
        };
        reader.readAsDataURL(this.selectedFiles[i]);
      }
    }
  }

  upload(idx: number, file: File): void {
    debugger;
    this.progressInfos[idx] = { value: 0, fileName: file.name };
    // if (file) {
    //   this.uploadService.upload(file).subscribe({
    //     next: (event: any) => {
    //       if (event.type === HttpEventType.UploadProgress) {
    //         this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
    //       } else if (event instanceof HttpResponse) {
    //         const msg = 'Uploaded the file successfully: ' + file.name;
    //         this.message.push(msg);
    //         this.fileInfos = this.uploadService.getFiles();
    //       }
    //     },
    //     error: (err: any) => {
    //       this.progressInfos[idx].value = 0;
    //       const msg = 'Could not upload the file: ' + file.name;
    //       this.message.push(msg);
    //       this.fileInfos = this.uploadService.getFiles();
    //     }
    //   });
    // }
  }
  OnSubmit(data: any)
    {
      debugger;
      const product ={
        Title : data.Title,
        Subtitle : data.Subtitle,
        Descriptions : data.Descriptions,
        Price : data.Price,
        ImageUrl: this.selectedFiles?.length ? this.selectedFiles[0].name : "",
        ImageUrl2: this.selectedFiles?.length ? this.selectedFiles[1].name: "",
        ImageUrl3: this.selectedFiles?.length ? this.selectedFiles[2].name : "", 
        ImageUrl4: this.selectedFiles?.length ? this.selectedFiles[3].name : ""
      };
        this.services.PostProducts(product).subscribe(value => { 
          if(value.Success === true)
          {
            alert('Product Detail saved.');
          }
      }     
    );        
    }
}
