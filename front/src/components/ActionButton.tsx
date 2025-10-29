type ActionButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
  isLoading?: boolean;
};

function ActionButton({
  type = 'button',
  className,
  isLoading,
  onClick,
  children,
}: ActionButtonProps) {
  return (
    <button
      className={`text-white bg-blue-500 px-3 py-2 rounded-xl font-semibold ${className}`}
      onClick={onClick}
      type={type}
      disabled={isLoading}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
}

export default ActionButton;
