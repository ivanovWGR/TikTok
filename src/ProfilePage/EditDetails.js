import React,{useState} from 'react';
import Avatar from 'react-avatar-edit';

const EditProfile = () => {
    const [preview, setPreview] = useState(null);
    const src = 'https://www.mercedes-benz.com/en/mbsocialcar/_jcr_content/image/MQ6-12-image-20190114133423/000-mercedes-benz-vehicles-e-class-e-400-4matic-coupe-c-238-2560x1440-2560x1440.jpeg'


    const onClose = () => {
        setPreview(null)
    }

    const onCrop = (preview) => {
        setPreview(preview)
    }

    const onBeforeFileLoad = (elem) => {
        if (elem.target.files[0].size > 716800) {
            alert("File is too big!");
            elem.target.value = "";
        };
    }


    return (
        <div>
            <Avatar
                width={340}
                height={265}
                onCrop={onCrop}
                onClose={onClose}
                onBeforeFileLoad={onBeforeFileLoad}
                src={src}
            />
            <img src={preview} alt="Preview" />
        </div>
    )

}

export default EditProfile;

