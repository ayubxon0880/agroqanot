import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

const ImageComparison = ({before,after,title}) => {
    return (
        <div>
            <h2 className="text-center text-2xl font-semibold mb-6 text-white">
                {title}
            </h2>
            <div>
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    // src="https://cdn.baykartech.com/media/upload/userFormUpload/ZewXiESauLtHUC9iIp4uZg1jzmcP5u9A.png"
                    src={before}
                    alt="Before Image"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    // src="https://cdn.baykartech.com/media/upload/userFormUpload/RBaJIJP84ctKPJJWSoJe83JQBOgUKswk.png"
                    src={after}
                    alt="After Image"
                  />
                }
              />
            </div>
        </div>
    )
}

export default ImageComparison;