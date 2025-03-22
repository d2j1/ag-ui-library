// Usage: <AgButton variant="primary" size="medium" icon={<Icon />} iconPosition="left" className="custom-class">Button Text</AgButton>
import { h, JSX, ComponentChildren } from 'preact';
import PropTypes from 'prop-types';

interface AgButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  icon?: ComponentChildren;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: ComponentChildren;
}

function AgButton({
  variant = 'primary',
  size = 'medium',
  icon = null,
  iconPosition = "left",
  className = '',
  children,
  ...props
}: AgButtonProps): JSX.Element {
  // Base styles common to all buttons.
  // Remove gap utility and rely on explicit margin on the icon.
  const baseStyles =
    'rounded focus:outline-none transition duration-150 ease-in-out inline-flex items-center';

  // Variant-specific styles using your custom Tailwind classes.
  const variantStyles: { [key: string]: string } = {
    primary: 'bg-earthy text-white hover:bg-earthy-dark',
    secondary: 'bg-nature text-forest-900 hover:bg-nature-dark',
    outline: 'bg-transparent border border-earthy text-earthy hover:bg-earthy-light',
  };

  // Size-specific styles.
  const sizeStyles: { [key: string]: string } = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  // Compute styles based on props.
  const computedVariantStyles = variantStyles[variant] || variantStyles.primary;
  const computedSizeStyles = sizeStyles[size] || sizeStyles.medium;

  // Render icon with explicit margin for spacing.
  const renderIcon = () => {
    if (!icon) return null;

    // Add margin based on icon position
    const marginClass = iconPosition==="left"? { marginRight:"5px"}: { marginLeft:"5px"};

    return <span style={marginClass} className="flex items-center">
      {icon}
         </span>;

  };

  return (
    <button
      type="button"
      className={`${baseStyles} ${computedVariantStyles} ${computedSizeStyles} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && renderIcon()}
      <span>{children}</span>
      {icon && iconPosition === 'right' && renderIcon()}
    </button>
  );
}

AgButton.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  icon: PropTypes.element,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default AgButton;
