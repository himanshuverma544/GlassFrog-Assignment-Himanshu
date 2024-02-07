const Avatar = ({ className = "avatar", src, alt, size = 50, dataIndex, onClick}) => {

  return (
    <div
      className={className}
      data-index={dataIndex}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
      }}
      onClick={onClick}
    >
      <img src={src} alt={alt} width="100%" height="100%"/>
    </div>
  );
}

export default Avatar;