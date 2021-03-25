import React from 'react';
import styles from './Upload.module.css';
import { Radio } from 'antd';

export default function FirstGroup() {
    const [value, setValue] = React.useState(1);

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <div className={styles.firstGroup}>
            <h3 className={styles.infoTitle}>Who can view this video</h3>

            <div className={styles.radioGroup}>
                <Radio.Group onChange={onChange} value={value}>
                    <Radio value={1}>Public</Radio>
                    <Radio value={2}>Friends</Radio>
                    <Radio value={3}>Private</Radio>
                </Radio.Group>
            </div>
        </div>
    )
}



