import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const Selfie = () => {
    const camRef = useRef(null);
    const prewiewCanvasRef = useRef(null);
    const [img, setImg] = useState(null);
    const [crop, setCrop] = useState({
        aspect: 1 / 1,
    });
    //const [completedCrop, setCompletedCrop] = useState(null);
    const onCapture = () => {
        setImg(camRef.current.getScreenshot());
    };
    const onRetake = () => {
        setImg(null);
    };
    const onCropChange = (crop) => {
        setCrop(crop);
    };
    const onCropComplete = (crop, pixelCrop) => {
        //setCompletedCrop(crop);
        console.log(crop, pixelCrop, prewiewCanvasRef.current);
        image64toCanvasRef(prewiewCanvasRef.current, img, crop);
    };
    return (
        <div className="grid-2">
            <div className="card all-center">
                {!img && (
                    <div>
                        <Webcam
                            ref={camRef}
                            style={{ width: "40vw", marginBottom: "10px" }}
                        />
                        <button className="btn btn-dark" onClick={onCapture}>
                            Capture
                        </button>
                    </div>
                )}
                {!!img && (
                    <div>
                        {/* <img src={img} alt="capture" /> */}
                        <ReactCrop
                            src={img}
                            crop={crop}
                            onChange={onCropChange}
                            onComplete={onCropComplete}
                            style={{ width: "40vw", marginBottom: "10px" }}
                        />
                        <button className="btn btn-dark" onClick={onRetake}>
                            Retake
                        </button>
                        <button
                            className="btn btn-dark-primary"
                            onClick={onRetake}
                        >
                            Crop
                        </button>
                    </div>
                )}
            </div>
            <div className="card all-center">
                {!!img && (
                    <div>
                        <canvas ref={prewiewCanvasRef} />
                    </div>
                )}
            </div>
        </div>
    );
};

const image64toCanvasRef = (canvasRef, image64, pixelCrop) => {
    const canvas = canvasRef;
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.src = image64;
    image.onload = () => {
        ctx.drawImage(
            image,
            pixelCrop.x,
            pixelCrop.y,
            pixelCrop.width,
            pixelCrop.height,
            0,
            0,
            pixelCrop.width,
            pixelCrop.height
        );
    };
};

export default Selfie;
