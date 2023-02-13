import { Spinner } from "react-bootstrap";
import styles from "../../../styles/components/modal.module.scss";

const ModalWrapper = ({
  title,
  content,
  btnActionText,
  close,
  disable,
  callFun,
  loading,
}) => {
  return (
    <div className={styles.modal}>
      <button className={styles.close} onClick={close}>
        &times;
      </button>
      <Spinner />
      <div className={styles.header}> {title} </div>
      <div className={styles.content}>{content}</div>
      <div className={`row justify-content-center ${styles.actions}`}>
        <div className="col-md-2 col-6 pl-3">
          <button
            className="btn  ml-md-0 px-md-3 shadow btn-primary"
            onClick={() => callFun()}
            disabled={!disable}
          >
            {loading ? (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : (
              btnActionText
            )}
          </button>
        </div>
        <div className="col-4">
          <button
            className="btn btn-danger"
            onClick={() => {
              console.log("modal closed ");
              close();
            }}
          >
            close modal
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalWrapper;
