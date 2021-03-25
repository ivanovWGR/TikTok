import React from 'react'
import { Checkbox } from 'antd';
import 'antd/dist/antd.css';
// import styles from './CheckBox.module.css';

const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Comment', 'Duet/React', 'Stich'];
const defaultCheckedList = ['Comment', 'Duet/React', 'Stich'];


function CheckboxComp() {

  const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
  const onChange = list => {
    setCheckedList(list);
  };



  return (
    <>
      <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
    </>
  );
}

export default CheckboxComp;