import styles from "./AddPhoto.module.css";
import Button from "./UI/Button/Button";
import Card from "./UI/Card/Card";
import Input from "./UI/Input/Input";

const AddPhoto = (props) => {
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
    placeholder:
      "e.g https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r...",
  };
  return (
    <Card className={styles.wrapper}>
      <h3 className={styles.heading}>Add a new photo</h3>
      <div className={styles["inputs-wrapper"]}>
        <Input {...labelDetails} />
        <Input {...urlDetails} />
      </div>
      <div className={styles.actions}>
        <Button
          type="text"
          class="cancel"
          content="Cancel"
          onClick={props.onCancel}
        />
        <Button type="text" content="Submit" />
      </div>
    </Card>
  );
};

export default AddPhoto;
