import { Injectable } from '@angular/core';
import { ImageRepoService } from '../abstract/image-repo.service';

// @Injectable({ providedIn: 'root' })
@Injectable()
export class NativeImageRepoService extends ImageRepoService {
    
    private baseImageURL: string;
    
    constructor() {
        super();
    }

    /**
     * @param uid
     */
    getImagePhotoUrl(uid: string): string {
        this.baseImageURL = this.getImageBaseUrl() + 'images'
        let sender_id = '';
        if (uid.includes('bot_')) {
            sender_id = uid.slice(4)
        } else {
            sender_id = uid
        }
        const filename_photo = '?path=uploads/users/'+ sender_id + '/images/photo.jpg'
        const filename_thumbnail = '?path=uploads/users/'+ sender_id + '/images/thumbnails_200_200-photo.jpg'
        return this.baseImageURL + filename_photo
   } 

}