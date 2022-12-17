import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { createNewPhoto } from "../lib/api";
import { fetchAllData } from "../store/url-actions";
import styles from "./AddPhoto.module.css";
import Button from "./UI/Button/Button";
import SubmitButton from "./UI/Button/SubmitButton";
import Card from "./UI/Card/Card";
import Input from "./UI/Input/Input";

const labelDetails = {
  type: "text",
  name: "label",
  label: "label",
  placeholder: "Suspendisse elit massa",
};

const urlDetails = {
  type: "text",
  name: "url",
  label: "Photo URL",
  placeholder: "e.g https://image-url.exam.com",
};

const AddPhoto = (props) => {
  const dispatch = useDispatch();
  const formRef = useRef();
  const [label, setLabel] = useState("");
  const [url, setUrl] = useState("");
  const [errorText, setErrorText] = useState("");

  const addImageHandler = async (event) => {
    event.preventDefault();
    const data = {
      label,
      url,
    };

    const response = await createNewPhoto(data);
    if (response.success) {
      dispatch(fetchAllData());

      props.onCancel();
    } else {
      setErrorText("an error occured. please try again");
    }
  };

  return (
    <Card className={styles.wrapper}>
      <form ref={formRef} onSubmit={addImageHandler}>
        <h3 className={styles.heading}>Add a new photo</h3>
        <div className={styles["inputs-wrapper"]}>
          <Input
            {...labelDetails}
            onChange={(event) => setLabel(event.target.value)}
          />
          <Input
            {...urlDetails}
            onChange={(event) => setUrl(event.target.value)}
          />
        </div>
        <p className={styles["error-text"]}>{errorText}</p>
        <div className={styles.actions}>
          <Button
            type="text"
            class="cancel"
            content="Cancel"
            onClick={props.onCancel}
          />
          <SubmitButton value="Submit" />
        </div>
      </form>
    </Card>
  );
};

export default AddPhoto;
