type ActionButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
};

function ActionButton({ type = 'button', children, className, onClick }: ActionButtonProps) {
  return (
    <button
      className={`text-white bg-blue-500 px-3 py-2 rounded-xl font-semibold ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default ActionButton;
