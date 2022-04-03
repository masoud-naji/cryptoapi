import React, { useEffect, useState, useCallback, useMemo } from "react";
import classes from "../UI/Card.module.css";
import cardStyle from "./infoCard.module.css";
import tablestyle from "./UsersList.module.css";
import style from "../../about.module.css";
import Card from "../UI/Card";
import "./progressbar.css";
import "react-datepicker/dist/react-datepicker.css";
import ReactCompareImage from "react-compare-image";
import { useDropzone } from "react-dropzone";
import Daco from "../../Images/stock2.png";
import ConvertImage from "react-convert-image";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 10,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

// const formatArry = [
//   ".jpg",
//   ".jpeg",
//   ".png",
//   ".gif",
//   ".bmp",
//   ".svg",
//   ".tiff",
//   ".tif",
//   ".webp",
//   ".ico",
//   ".raw",
//   ".psd",
//   ".ai",
//   ".eps",
//   ".pdf",
//   ".raw",
//   ".arw",
// ];

const CompareImage = () => {
  const [File1, setFile1] = useState("");
  const [File2, setFile2] = useState("");
  const [errorDataFile1, setErrorDataFile1] = useState("");
  const [errorDataFile2, setErrorDataFile2] = useState("");
  const [Orientation, setOrientation] = useState(false);
  const [aspectRatio, setaspectRatio] = useState("wider");
  const [File1path, setFile1path] = useState('')
  const [File2path, setFile2path] = useState('')
  /////////////////////////drag and drop file upload/////////////////////////////

  useEffect(() => {
    console.log(File1path);
    console.log(File2path);
  },[File1,File2,File1path,File2path])
  ////Left side
  const {
    getRootProps: getRootPropsFile1,
    getInputProps: getInputPropsFile1,
    isFocused: isFocusedFile1,
    isDragAccept: isDragAcceptFile1,
    isDragReject: isDragRejectFile1,
  } = useDropzone({
    onDrop: (acceptedFile) => {
      showFile1(acceptedFile[0]);
    },
    accept: "image/*",
  });

  const stylefile1 = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocusedFile1 ? focusedStyle : {}),
      ...(isDragAcceptFile1 ? acceptStyle : {}),
      ...(isDragRejectFile1 ? rejectStyle : {}),
    }),
    [isFocusedFile1, isDragAcceptFile1, isDragRejectFile1]
  );

  const showFile1 = (image) => {
    const reader = new FileReader();
    setFile1path(image.path)
    reader.onloadend = () => {
      const Imageresult = reader.result;

      if (!Imageresult.length) {
        setErrorDataFile1("**Not valid Image file!**");
        setFile1("");
        return;
      }
      try {
        setFile1(Imageresult);
      } catch (error) {
        setErrorDataFile1("**Not valid Image file!**");
        setFile1("");
        return;
      }
    };
    reader.readAsDataURL(image);
  };
  ////Right side
  const {
    getRootProps: getRootPropsFile2,
    getInputProps: getInputPropsFile2,
    isFocused: isFocusedFile2,
    isDragAccept: isDragAcceptFile2,
    isDragReject: isDragRejectFile2,
  } = useDropzone({
    onDrop: (acceptedFile) => {
      showFile2(acceptedFile[0]);
    },
    accept: "image/*",
  });

  const stylefile2 = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocusedFile2 ? focusedStyle : {}),
      ...(isDragAcceptFile2 ? acceptStyle : {}),
      ...(isDragRejectFile2 ? rejectStyle : {}),
    }),
    [isFocusedFile2, isDragAcceptFile2, isDragRejectFile2]
  );

  const showFile2 = (image) => {
    setFile2path(image.path)
    const reader = new FileReader();
    reader.onloadend = () => {
      const Imageresult = reader.result;

      if (!Imageresult.length) {
        setErrorDataFile2("**Not valid Image file!**");
        setFile2("");
        return;
      }
      try {
        setFile2(Imageresult);
      } catch (error) {
        setErrorDataFile2("**Not valid Image file!**");
        setFile2("");
        return;
      }
    };
    reader.readAsDataURL(image);
  };

  ////////////////////////// Convert Image to base64 ///////////////////////////////

  return (
    <div>
      <Card className={`${classes.input} ${classes.topchartdetail}`}>
        <div className={classes.infodisplay}>
          <h1 className={tablestyle.title}>Image Compare</h1>
          <div className={classes.HeroPlace}>
            {/* ////////////////////////////  file 1 //////////////////////////////// */}

            <div
              style={{ background: "rgba(54, 162, 235, 1)" }}
              className={(cardStyle.container, classes.card)}
              {...getRootPropsFile1({ stylefile1 })}
            >
              <input {...getInputPropsFile1()} />
              <div className={cardStyle.tableContainer}>
                Drag 'n' drop some files here, or click to select files
              </div>
              <div className="container">
                <p>Only Images Accepted</p>
              </div>
              {errorDataFile1 ? errorDataFile1 : File1path}
            </div>

            {/* ////////////////////////////  File 2 //////////////////////////////// */}

            <div
              style={{ background: "rgba(54, 162, 235, 1)" }}
              className={(cardStyle.container, classes.card)}
              {...getRootPropsFile2({ stylefile2 })}
            >
              <input {...getInputPropsFile2()} />
              <div className={cardStyle.tableContainer}>
                Drag 'n' drop some files here, or click to select files
              </div>
              <div className="container">
                <p>Only Images Accepted</p>
              </div>
              {errorDataFile2 ? errorDataFile2 : File2path}
            </div>

            {/* ------------------------------------------- */}
            {/* ? coinAllInfo.description.en.replace(/<[^>]+>/g, "") */}
          </div>
        </div>
      </Card>

      <Card className={`${classes.input} ${classes.topchartdetail}`}>
        <div>
          <div
            className={classes.HeroPlace}
            style={{
              height: "fit-content",
              maxHeight: "fit-content",
              minHeight: "fit-content",
            }}
          >
            <button
              className="anchorBtn"
              onClick={() => setOrientation(!Orientation)}
            >
              Orintation - {Orientation ? "Vertical" : "Horizontal"}
            </button>
            <button
              className="anchorBtn"
              onClick={() => setaspectRatio(aspectRatio === 'wider' ? 'taller' : 'wider')}
            >
               aspectRatio - {aspectRatio === 'wider' ? 'Vertical' : 'Horizontal'}
            </button>
          </div>
        </div>
      
      </Card>
      {/* ////////////////////////////  Image //////////////////////////////// */}
      <Card className={`${classes.input} ${classes.topchartdetail}`}>
        <ReactCompareImage
          leftImage={File1}
          rightImage={File2}
          vertical={Orientation}
          aspectRatio={aspectRatio}
        />
      </Card>
    </div>
  );
};

export default CompareImage;
