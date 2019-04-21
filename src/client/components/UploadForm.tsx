import * as React from "react";
import CSSModules from "react-css-modules";
import styles from "./style.css";

interface UploadState {
  url: string;
  uploadStates: string;
}

@CSSModules(styles)
class UploadForm extends React.Component<{}, UploadState> {
  private fileInput: React.RefObject<HTMLInputElement>;

  public constructor(props: {}) {
    super(props);
    this.state = {
      url: "",
      uploadStates: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }

  public handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ url: event.target.value });
  }

  public async handleSubmit(
    event: React.ChangeEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    if (this.state.url.trim().length === 0) {
      alert("URLを入力してください。");
    }

    if (this.fileInput.current && this.fileInput.current.files) {
      try {
        const params: RequestInit = {
          method: "PUT",
          mode: "cors",
          headers: {
            "Content-Type": "application/octet-stream",
          },
          body: this.fileInput.current.files[0],
        };
        console.log("params", params);
        const response = await fetch(this.state.url, params);
        console.log("response", response);
      } catch (error) {
        console.log(error.body);
      }
    } else {
      alert("アップロードするファイルを選択してください。");
    }
  }

  public render(): JSX.Element {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label styleName="label">
            Pre-Signed URL:
            <input
              type="text"
              name="pre-signed-url"
              value={this.state.url}
              onChange={this.handleChange}
            />
          </label>
          <label styleName="label">
            Upload File:
            <input type="file" ref={this.fileInput} />
          </label>
          <button type="submit">Submit</button>
        </form>
        <div>{this.state.uploadStates}</div>
      </>
    );
  }
}

export default UploadForm;
