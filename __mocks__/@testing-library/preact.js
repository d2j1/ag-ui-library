const h = require('preact').h;

// Simple mock implementation
function render(component) {
  const container = document.createElement('div');
  
  // Create a fake DOM structure
  const buttonElement = document.createElement('button');
  buttonElement.className = component.props.variant === 'secondary' 
    ? 'bg-nature text-forest-900' 
    : component.props.variant === 'outline'
      ? 'bg-transparent border border-earthy text-earthy'
      : 'bg-earthy text-white';
  
  // Add size classes
  if (component.props.size === 'small') {
    buttonElement.className += ' px-2 py-1 text-sm';
  } else if (component.props.size === 'large') {
    buttonElement.className += ' px-6 py-3 text-lg';
  } else {
    buttonElement.className += ' px-4 py-2 text-base';
  }
  
  // Add custom class if provided
  if (component.props.className) {
    buttonElement.className += ' ' + component.props.className;
  }
  
  // Handle icon
  if (component.props.icon) {
    const iconSpan = document.createElement('span');
    iconSpan.textContent = 'Icon';
    if (component.props.iconPosition === 'left') {
      iconSpan.style.marginRight = '5px';
      buttonElement.appendChild(iconSpan);
    }
    
    // Add text content
    const textSpan = document.createElement('span');
    textSpan.textContent = component.props.children;
    buttonElement.appendChild(textSpan);
    
    if (component.props.iconPosition === 'right') {
      iconSpan.style.marginLeft = '5px';
      buttonElement.appendChild(iconSpan);
    }
  } else {
    // Just add text content
    buttonElement.textContent = component.props.children;
  }
  
  container.appendChild(buttonElement);
  
  return {
    container,
    firstChild: buttonElement,
    getByText: (text) => {
      const elements = Array.from(container.querySelectorAll('*'));
      return elements.find(el => el.textContent.includes(text)) || null;
    }
  };
}

module.exports = {
  render
};
