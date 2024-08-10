import { PhotoAlbum, RenderContainer, RenderPhoto, RenderRowContainer } from "react-photo-album";
import photos from './photos'

const renderContainer: RenderContainer = ({ containerProps, children, containerRef }) => (
  <div
    style={{
      padding: "20px",
    }}
  >
    <div ref={containerRef} {...containerProps}>
      {children}
    </div>
  </div>
);

const renderRowContainer: RenderRowContainer = ({ rowContainerProps, rowIndex, rowsCount, children }) => (
  <>
    <div {...rowContainerProps}>{children}</div>
    {rowIndex < rowsCount - 1 && (
      <div
        style={{
          marginBottom: "20px",
        }}
      />
    )}
  </>
);

const renderPhoto: RenderPhoto = ({ imageProps: { alt, style, ...restImageProps } }) => (
  <div
    style={{
      position: 'relative',
      textAlign: 'center',
      color: 'white',
      width: style?.width,
      padding: 0,
    }}
  >
    <img alt={alt} style={{ ...style, width: "100%", padding: 0 }} {...restImageProps} />
    <div
      style={{
        position: 'absolute',
        bottom: '0',
        height: '35px',
        width: "100%",
        backgroundColor: 'rgba(22, 22, 22, 0.5)',
        paddingBottom: 0,
        zIndex: 1
      }}
    ></div>
    <div
      style={{
        position: 'absolute',
        bottom: '10px',
        left: '20%',
        textAlign: "center",
        zIndex: 2,
        fontSize: '20px'
      }}
    >
      {(restImageProps.title)}
    </div>
  </div>
);

export default function TitledPhotoAlbum() {
  return (
    <PhotoAlbum
      layout="rows"
      photos={photos}
      spacing={20}
      padding={20}
      targetRowHeight={200}
      renderContainer={renderContainer}
      renderRowContainer={renderRowContainer}
      renderPhoto={renderPhoto}
    />
  );
}