import React, { useState } from 'react'
import { Input } from 'antd';
import Dropzone from 'react-dropzone';

import styles from './Drag.module.css';

const { TextArea } = Input;

function DragnDrop() {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Dropzone
                    multiple={false}
                    maxSize={800000000}>
                    {({ getRootProps, getInputProps }) => (
                        <div style={{ width: '300px', height: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            {...getRootProps()}
                        >
                            <input {...getInputProps()} />
                            <div className={styles.descriptDrag}>
                                {/* put active when is :active adn with :global */}
                                <img src="https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/cloud_icon-6e07be44878e69ee3f7bff3b78405b76.svg" alt="icon" width="49" className={styles.imageDrag} />
                                <div className={styles.headerDrag}>
                                    Select video to upload
                                </div>
                                <div className={styles.smallTxt}>
                                    Or drag and drop a file
                                </div>
                                <div>
                                    <ul>
                                        <li className={styles.dragLi}>MP4 or WebM</li>
                                        <li className={styles.dragLi}>720x1280 resolution or higher</li>
                                        <li className={styles.dragLi}>Up to 60 seconds</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    )}
                </Dropzone>

            </div>
        </div>
    )
}

export default DragnDrop;
