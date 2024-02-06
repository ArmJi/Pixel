export default function Pic(props) {
  const { urls } = props;
  // จริงๆไม่จำเป็นต้องสรา้งตัแปรใหม่มาก็ได้ใช้ props.urls..... or props.desription เลยก็ได้
  return (
    <>
      <img src={urls.small} alt={props.description} />
    </>
  );
}
