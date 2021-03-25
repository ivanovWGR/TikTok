import styles from './Upload.module.css';

import UploadHeader from './UploadHeader';
import UploadForm from './UploadForm';




function Upload() {
    return (
        <div className={styles.uploadpage}>
            <div>
                <UploadHeader />
            </div>

            <div className={styles.container}>
               <UploadForm/>
            </div>
        </div>
    )
}

export default Upload;