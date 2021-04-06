import styles from './Upload.module.css';

import UploadHeader from './UploadHeader';
import UploadForm from './UploadForm';
import Footer from '../Footer/Footer'

function Upload() {
    return (
        <div className={styles.uploadpage}>
            <div>
                <UploadHeader />
            </div>

            <div className={styles.container}>
                <UploadForm />
            </div>
            <Footer />
        </div>
    )
}

export default Upload;