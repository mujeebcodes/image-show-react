const ImageShow = ({image}) => {
  return (
    <article>
        <img src={image.urls.small_s3} alt={image.alt_description} />
    </article>
  )
}
export default ImageShow