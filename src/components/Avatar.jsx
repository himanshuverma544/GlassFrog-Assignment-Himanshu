const Avatar = ({ className = "avatar", src, alt, size = 50, onClick}) => {

  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
      }}
      onClick={onClick}
    >
      <img src={src} alt={alt} width="100%" height="100%"/>
    </div>
  );
}

export default Avatar;