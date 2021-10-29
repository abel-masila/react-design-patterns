export const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        padding: size === 'large' ? '32px' : '8px',
        fontSize: size === 'large' ? '32px' : '16px',
        backgroundColor: color,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export const DangerButton = (props) => {
  return <Button color="red" {...props} />;
};
export const BigSuccessButton = (props) => {
  return <Button size="large" color="green" {...props} />;
};
<DangerButton />;
