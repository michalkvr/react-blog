import {
  ChangeEventHandler,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';
import Button from '../Button';
import DividerIcon from '../../../../assets/divider.svg';

import styles from './styles.module.scss';

interface ImageInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
}

const ImageInput = (props: ImageInputProps) => {
  const { label, id, defaultValue, name, className, ...rest } = props;
  const [image, setImage] = useState<File>();
  const [imageURL, setImageURL] = useState<string>();
  const inputFileRef = useRef<HTMLInputElement>(null);

  const onFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.files?.length) return;
    setImage(e.target.files[0]);
  };

  const onUploadClick = () => {
    inputFileRef.current!.click();
  };

  const onDeleteClick = () => {
    // inputFileRef.current!.value = '';
    setImage(undefined);
    setImageURL(undefined);
  };

  useEffect(() => {
    if (!image) return;
    setImageURL(URL.createObjectURL(image));
  }, [image]);

  return (
    <div className={styles.input}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        hidden
        type="file"
        ref={inputFileRef}
        accept="image/*"
        onChange={onFileChange}
        id={id}
        name={name || id}
        className={styles.field}
        {...rest}
      />

      {/* 
        Image article should be fetched from /images/${article.imageId}
        and displayed as a background image of this img element.
      */}

      <img className={styles.preview} src={imageURL} alt="" />
      <div className={styles.buttons}>
        <Button type="button" onClick={onUploadClick} color="textPrimary">
          Upload new
        </Button>
        <img src={DividerIcon} alt="" />
        <Button type="button" onClick={onDeleteClick} color="textDanger">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ImageInput;
